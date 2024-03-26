---
title: "nodeclipse v0.7 변경사항에 따른 대처방안"
date: "2013-11-13"
categories: 
  - "node-js"
tags: 
  - "0-7"
  - "eclipse"
  - "helios"
  - "indigo"
  - "install"
  - "jdk7"
  - "luna"
  - "nodeclipse"
  - "terminated"
---

Eclipse plugin 중에 node.js를 위한 nodeclipse를 사용하고 있다.

초기에는 다른 경로를 사용하다가 언젠가부터 update site가 아래 경로로 바뀌었는데

New update site : [nodeclipse.org](http://www.nodeclipse.org/) 참조

http://dl.bintray.com/nodeclipse/nodeclipse/0.7.0/

좀 더 좋아지긴 했다. (Windows 용만 봤을 때에는)

가장 큰 개선점이라고 한다면 windows에서의 "express project 생성 가능" 이라고 개인적으로 생각한다.

(Coffee script 지원 등은 어차피 내가 아직은 사용하지 않는 기능)

제대로 설치가 안되서 애를 먹었는데 아래와 같은 일을 겪고 진행해서 해결했다.

 

**1\. node.js core / 기타 plugin 설치 불가**

Helios를 사용중이었는데 update site가 변경되기 전에는 잘 썼던건데 update site 변경해서 새로 설치해보니

포함된 일부 플러그인이 설치가 안되는 걸 발견했다.

나머지는 대충 넘어갈 수 있는데 core가 설치가 안되서 어쩔 수 없이 해결하고 넘어가야 했다.

공식페이지에 설치 조건 등에 언급이 되어있었으면 좋았는데 알아보니 Eclipse Indigo 이상 가능하다.

[http://stackoverflow.com/questions/17418747/nodeclipse-org-eclipse-wst-jsdt-core-not-found-when-installing-into-eclipse](http://stackoverflow.com/questions/17418747/nodeclipse-org-eclipse-wst-jsdt-core-not-found-when-installing-into-eclipse)

최신인 Luna 설치한 후 plugin을 제대로 설치했다. (내 신발도 luna eclipse 인데...뭔가 잘 풀리려나)

 

**2\. Terminated, terminated, terminated, ...**

설치 후 기존 project들 실행했는데 실행하자마자 로그도 없이 곧바로 terminated 되는 현상이 있었다.

알아보니 JDK 문제인 듯 싶었다. (왜 jdk version을 타는지 알 수 없다. 이해가 안된다)

[http://stackoverflow.com/questions/19689501/togglebreakpointstargetfactory-specified-id-is-already-registered](http://stackoverflow.com/questions/19689501/togglebreakpointstargetfactory-specified-id-is-already-registered)

 

**3\. JDK7 설치 후 eclipse 실행 불가**

이런 일은 version up 하면 가끔 생기는 문제라 어느 정도 익숙하다.

JDK7 설치 후 Eclipse 실행시 아래와 유사한 형태의 팝업이 등장한다.

Could not create the java virtual machine

eclipse.ini에 vm 경로를 명시하고 memory를 너무 과하게 잡지 않으면 실행이 되는 걸 발견할 수 있다.

나의 경우엔

\-vm C:\\Program Files\\Java\\jdk1.7.0\_45\\bin\\javaw.exe

을 ini에 추가하고 Xmx를 1024m으로 했다가 안되서 512로 변경했더니 정상 실행.

 

**4\. 행복한 결말**

제대로 실행된다. 문제없다. 하지만 이런 종류의 dependency는 사실 좀 귀찮은 문제다.
