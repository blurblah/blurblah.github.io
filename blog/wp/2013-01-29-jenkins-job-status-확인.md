---
title: "Jenkins job status 확인"
date: "2013-01-29"
categories: 
  - "ci"
tags: 
  - "jenkins"
  - "job"
  - "json"
  - "monitoring"
  - "status"
  - "wget"
  - "xml"
---

Jenkins monitoring을 매일 해야하는데 열어야 하는 페이지가 많다면 어떻게 해야 하는가?

상당히 귀찮다. 단순 반복이기도 하고.

특별히 문제가 있는 경우는 별로 없지만 그래야 안심이 되어서 매일 아침마다 하고 있는 상황이다.

 

한 눈에 파악할 수 있는 monitoring page를 간단하게라도 만들어볼까 하는 생각에 우선 각 서버들에 퍼져있는 job의 status 확인이 가능한지 알아봤다. (RSS도 되는데 없을리가...)

아래의 주소를 curl이나 wget으로 실행하면 xml 형태의 data가 날라오게 되고 마지막을 xml 대신 json으로 변경하면 json 형태로도 data를 받을 수 있다.

```
http://{your_ip}/job/{your_job}/api/xml
```

 

나의 경우엔 job에 대한 여러 정보 중에서 마지막 job에 대한 것만 필요하기 때문에 아래와 같은 url을 던졌다.

```
http://{your_ip}/job/{your_job}/lastBuild/api/xml
```

 

위에 대한 결과로 아래와 유사한 형태의 xml data를 확인할 수 있다.

```xml
<freeStyleProject>
<displayName>{your_job_display_name}</displayName>
<name>{your_job_name}</name>
<url>{your_job_url}</url>
<buildable>true</buildable>
<color>grey</color>
<inQueue>false</inQueue>
<keepDependencies>false</keepDependencies>
<nextBuildNumber>1</nextBuildNumber>
<concurrentBuild>false</concurrentBuild>
<scm></scm>
</freeStyleProject>
```
 

이제 xml이나 json으로 된 재료는 있으니 어떻게 요리하느냐가 남았는데, 재미있을 듯 하다.

시간과 여유를 낼 수 있느냐가 문제.
