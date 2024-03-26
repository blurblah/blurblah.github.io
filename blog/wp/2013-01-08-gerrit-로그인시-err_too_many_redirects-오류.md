---
title: "gerrit 로그인시 ERR_TOO_MANY_REDIRECTS 오류"
date: "2013-01-08"
categories: 
  - "others"
tags: 
  - "authentication"
  - "canonicalweburl"
  - "code-review"
  - "error"
  - "gerrit"
  - "install"
  - "login"
  - "redirect"
---

Code Review tool인 gerrit 설치를 했다.

문서상으로는 설정을 해야 하는 것들이 상당히 많았다.

꼭 필요한 부분만 내용을 채우고 로그인에 필요한 ldap 설정까지 끝냈는데 gerrit start 후 로그인을 하니 리다이렉션이 너무 많다는 오류와 마주치게 되었다.

 

Redirect 된 마지막 주소를 보니

http://\[my\_host\_name\]:\[port\]/login/q/null#/q/null

이런 형태.

 

null이 왜 붙어있는건지 알 수 없어서 찾아보니 버그란다.

[http://goo.gl/QKmCT

](http://goo.gl/QKmCT)

 

etc/gerrit.config의 \[gerrit\] 항목에 canonicalWebUrl 항목을 추가해주면 해결.

 

\[html\]

\[gerrit\]

canonicalWebUrl = http://my.example.com:port

\[/html\]

 

참고로 내 환경은 apache 같은 별도의 웹서버에 얹어서 사용하지 않으며, ldap 설정만 했다.

port, host name 등은 내 환경에 맞게 설정한 상태.

어쨌거나 gerrit은 첫인상이 별로다.
