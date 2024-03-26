---
title: "Apache-tomcat에서 특정 context reload"
date: "2013-04-17"
categories: 
  - "server"
tags: 
  - "context"
  - "gui"
  - "http"
  - "manager"
  - "reload"
  - "remote"
  - "tomcat"
  - "url"
  - "관리자"
  - "리로드"
  - "컨텍스트"
---

Tomcat에 간단한 페이지들을 올려보기만 했지 다양한 관점에서 운용해보진 않아서 이제서야 이런걸 알아본다.

특정 context에 변경사항이 발생했는데, 나의 경우엔 DB 접근정보를 담고 있는 properties 파일 수정, 작지만 여러가지가 서비스되고 있었기 때문에 restart는 좋지 않은 대안이라는 생각이 들었다.

물론 작다는 이유로 그냥 restart 해버리고 메일 몇 개 버리는게 더 빠를지도 모른다.

 

알아보니 특정 context를 위와 비슷한 이유로 reload 하기 위해서는 몇가지 방법이 존재하는데 우선 내가 사용한 방법의 절차는 아래와 같다.

 

1\. conf/tomcat-users.xml 파일 수정

Tomcat 관리자 계정 정보를 등록해줘야 한다.

Tomcat 관리자도 처음 등록해 봤다. 이런 것도 있었구나 하면서.

파일을 열어보면 \<tomcat-users\> 태그 안에 예문이 주석처리 되어있는데 나의 경우엔 manager-gui role을 하나와 사용자 계정을 하나 추가했다.

```xml
<role rolename="manager-gui"/>
<user username="admin" password="your_password" roles="manager-gui"/>
```

추가된 사용자 정보는 물론 바로 load 되지 않는다.

 

2\. Tomcat root > Tomcat Manager > reload

설치된 Tomcat의 홈으로 가보면 좌측상단 메뉴에 Tomcat Manager 메뉴가 있다.

눌러서 Tomcat Web Application Manager 페이지로 가보면 각 application 들이 표시되어 있고 start / stop / reload / undeploy 기능이 제공되고 있으니 클릭.

 

3\. URL 호출

URL 호출만으로 remote control이 가능한데, 아래와 같은 형태의 url을 wget이나 curl로 간단하게 호출하거나 또 다른 방법을 사용해도 되겠다.

```
http://{your_host}/manager/html/reload?path=/your_context
```

관리자 계정과 패스워드는 wget이나 curl이 제공하는 옵션을 사용하면 된다.
