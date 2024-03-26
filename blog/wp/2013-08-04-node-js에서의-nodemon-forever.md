---
title: "node.js에서의 nodemon, forever"
date: "2013-08-04"
categories: 
  - "node-js"
tags: 
  - "deploy"
  - "forever"
  - "node-js-2"
  - "nodemon"
---

node.js로 개발할 때 귀찮은 것 중 하나가 수정사항을 reload 하는 것이다.

node process로 실행되기 때문에 항상 실행중인 process를 죽이고 다시 실행해줘야 하는데

개발중일 때에는 참 귀찮은 작업이다.

이런 경우에 많이 사용하는게 nodemon이나 supervisor 라는 패키지인데

nodemon의 경우 수정사항이 발생했을 때 자동으로 reload 해준다.

 

**1\. Eclipse에서의 nodemon 문제점**

Eclipse에서 nodeclipse 라는 플러그인으로 개발중인데 nodeclipse 설정에는

node 경로와 express 경로에 대한 설정만 존재한다.

node 대신 nodemon을 입력해주면 nodemon으로 실행하지 않을까 싶었는데 오류가 발생한다.

nodemon의 내부를 보니 /usr/bin/env node로 path를 뒤져 node를 실행하도록 되어있는데

eclipse에서 env를 인식하지 못하는 것 같다. (아직 해결책을 찾지 못함)

 

**2\. forever & deploy**

개발이 종료되고 서비스할 때 데몬으로 돌리기 위해 forever라는 패키지를 많이 사용하는 것 같다.

node.js로 개발한 것들을 백그라운드로 돌리기 위해 nohup을 사용하곤 했는데 그런 불편함을 덜어줄 수 있을 것 같다.

deploy를 위해서는 수정사항을 reload 할 수 있어야 하고 항상 백그라운드에서 안정적으로 동작하고 있어야 하는데

nodemon은 reload는 가능하지만 백그라운드로 동작시키려면 역시 nohup을 사용하는 등의 다른 방안을 함께 고려해야 한다.

게다가 시스템 로그를 남기는 문제도 생각해야 하는데 nohup만 사용해서는 뭔가 아쉽다.

forever는 백그라운드에서 돌릴 수 있고 restart 기능이 있다.

하지만 restart는 연결중인 session까지 끊어버릴거라 보완이 필요하다.

시스템 구조 측면에서의 deploy 방안을 고민해야 할 것 같다.
