---
slug: nodebb-nginx
title: Nodebb with NginX proxy
date: 2017-12-19T19:10:00+09:00
tags: [nodebb, nginx, proxy]
enableComments: true
---

# Nodebb에 NginX로 reverse proxy 적용하는 방법
Nodebb 기본 구성 후 상위에 reverse proxy를 두려고 할 때 설정하는 방법  
기본적인 nginx 설정 방법은 [공식 문서][nodebb-nginx-doc-link]를 참고하면 됨  
Root context 이외의 경로를 root로 잡고자 할 때에는 몇가지 추가 과정이 필요함  
NginX는 기본 설정에서 context path 추가하는 형태로 하면 되고 (아래 참조)

```
location /community {
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header Host $http_host;
    proxy_set_header X-NginX-Proxy true;

    proxy_pass http://127.0.0.1:4567/community;
    proxy_redirect off;

    # Socket.IO Support
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
}
```

proxy_pass 되는 경로를 root가 아니라 다른 경로로 잡아주는게 편한데 nodebb의 config.json 변경 필요  
Nodebb의 설정 메뉴에서 변경 안되고 nodebb 설치 경로의 config.json 파일을 수정하고 restart 해야함  
config.json 파일에 url 부분을 nginx에서 보내는 경로로 맞춰주면 완료  
이 상태에서 nodebb에 접속해보면 socket.io 문제가 발생했음  
이유는 외부에서 직접 nodebb url로 접속하지 않고 nginx를 통해서만 접속 가능하도록 하기 위해
url에 host ip 대신 127.0.0.1을 지정했는데 접속은 nginx의 ip나 nginx에 설정된 도메인으로 진행했기 때문  
이와 같은 경우 nodebb의 config.json에 아래와 유사하게 socket.io에 대한 설정 추가하면 됨  

```json
"socket.io": {
  "origins": "*:*"
}
```

[nodebb-nginx-doc-link]: https://nodebb.readthedocs.io/en/latest/configuring/proxies/nginx.html
