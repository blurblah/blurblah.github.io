---
title: "Marathon authentication"
date: "2016-11-29"
categories: 
  - "docker"
tags: 
  - "auth-credentials-옵션"
  - "authorization-header"
  - "basic-authentication"
  - "http_credentials-옵션"
  - "marathon-authentication"
  - "marathon-인증"
  - "marathon-lb-수정"
  - "mesosphere"
  - "헤더-추가"
---

오전에 marathon을 열어봤더니 이상한 application 들이 여러 개 올라가 있었다. 별다른 인증절차 없이 사용하고 있었으니 올게 온거다. (왜 이제 오셨나. 항상 이런 건 뭔가 처리할 작업이 많을 때 찾아오신다. 신기하다.) 다행히 실제 동작하는 application은 아니었는지 모두 deploying 혹은 waiting 상태로 대기하고 있어서 서둘러 모두 제거했다. Marathon 사용하던 초기에(0.8? 0.9? 버전) 보안 관련 옵션을 문서에서 찾지 못해 습관처럼 그대로 사용하고 있었는데 또 다시 이런 일을 겪을 수는 없으니 뭔가 조치를 취해야했다.

 

### 1\. http\_credentials

찾아보니 [문서](https://github.com/mesosphere/marathon/blob/master/docs/docs/ssl-basic-access-authentication.md)가 있다. Marathon 실행시 http\_credentials 옵션을 주는 방법. 링크된 문서에는 SSL 적용 방법도 기술되어 있지만 간단히 사용자 인증만 추가해보기로 했다. Marathon 실행파일을 열어보면 확인할 수 있지만 대부분의 옵션은 /etc/marathon/conf 경로(Ubuntu 기준)에 옵션 이름으로 파일명을 만들고 파일 안에 옵션값을 집어넣으면 실행시에 파일을 읽어서 옵션으로 추가하도록 되어있다. 그러므로 /etc/marathon/conf/http\_credentials 라는 파일을 만들고 파일 안에 id:password 형태로 원하는 내용을 집어넣고 marathon을 restart 하면 끝.

옵션이 제대로 지정되었는지 프로세스를 확인해보고 marathon UI에 접근하면 id, password를 묻는 팝업이 뜬다. Marathon restart만으로 제대로 된다고 생각했는데 이후에 더 살펴보니 mesos-master도 restart 해줘야 하는게 아닌가 싶다. (mesos master, marathon 사이의 통신에 문제가 생김)

 

### 2\. REST API 호출은 어떻게?

간단한 실행옵션으로 UI 접근시 사용자 인증은 가능해졌는데 이걸로 모든게 끝난건 아니다. http\_credentials를 적용하면서 UI 뿐만 아니라 marathon이 제공하는 REST API 호출도 인증 정보를 넘겨야만 하는데 이전처럼 그대로 호출하면 401 Unauthorized 오류가 넘어오게 된다.

그럼 인증 정보를 어떻게 넘겨줘야 하는가? 이 부분은 친절하게 문서로 기술되어 있지 않다. 사용자 인증 적용방법을 기술해놓은 문서에 basic authentication이라고 명시되어 있었으니 일반적인 basic authentication 방법대로 header에 Authorization을 넣어서 호출해봤는데 다행히 된다. Header에 Authorization에 대한 값으로는 "Basic base64\_encoded\_data"를 넣어줘야 하는데 base64\_encoded\_data 부분은 1번 과정에서 http\_credentials 파일에 넣어줬던 id:password 내용을 그대로 base64로 인코딩해서 사용하면 되겠다.

Marathon client를 별도로 사용하는게 있다면 client에서 http 호출시 header에 인증 정보를 추가할 수 있도록 수정하는 작업도 당연히 해야만 한다.

 

### 3\. marathon-lb도 변경하자

REST API 까지 제대로 확인했는데 역시 뭔가 동작이 이상하다. 할 게 하나 더 남아있다. marathon-lb (load balancer용 python script. Marathon에서 container로 올라가 있는데 lb에 대해서도 더 작업을 진행해보고 정리할 필요가 있겠다)를 사용중이라면 아래 문서를 참고해서 실행옵션을 추가해야 한다. marathon-lb도 내부적으로는 marathon의 REST API로 event callback을 등록해 사용중이므로 marathon-lb가 접근할 때 사용할 인증정보를 추가할 필요가 있다. marathon-lb 저장소의 [README.md](https://github.com/mesosphere/marathon-lb#direct-invocation)를 읽어보면 auth-credentials 옵션을 넣어줘야 한다는 걸 알 수 있다. 아래와 유사한 형태로 marathon-lb container를 수정하거나 지우고 다시 만들면 되겠다.

```
{
  "id": "/marathon-lb",
  "args": [
    "sse",
    "-m",
    "http://marathon_leader_host:marathon_port",
    "--group",
    "external",
    "--auth-credentials",
    "id:password"
  ],
  "env": {
    "PORTS": "9090"
  },
  "portDefinitions": [
    {
      "port": 9090,
      "protocol": "tcp"
    }
  ],
  "instances": 6,
  "cpus": 0.5,
  "mem": 256.0,
  "container": {
    "type": "DOCKER",
    "volumes": [
      {
        "containerPath": "/dev/log",
        "hostPath": "/dev/log",
        "mode": "RW"
      }
    ],
    "docker": {
      "image": "mesosphere/marathon-lb",
      "network": "HOST",
      "privileged": true
    }
  },
  "constraints": [
    [
      "hostname",
      "UNIQUE"
    ]
  ]
}
```
