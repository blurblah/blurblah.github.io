---
title: "Run multiple Jenkins instances on a single machine"
date: "2013-02-18"
categories: 
  - "ci"
tags: 
  - "ajp13port"
  - "instance"
  - "jenkins"
  - "multiple"
  - "port"
  - "run"
---

Jenkins를 여러개 띄워서 검토할 내용이 생겼다.

일반적으로 한 machine에 하나의 Jenkins만 올려서 사용하니 가용한 한 대의 테스트 서버와 다른 사람들의 PC까지 활용하면 어찌어찌 할 수 있겠다 싶었다.

하지만 접속해서 설정해줘야 하고 나 덕분에 다른 사람들은 불편함이 생기니 어떻게 내 PC에서만 Jenkins를 여러개 띄울 수 없나 고민하게 되었다.

처음엔 Jenkins는 필요한 각종 설정이나 plugin, job 정보들을 JENKINS\_HOME으로 등록된 경로에서 관리하니 이 경로와 http port만 다르게하면 되지 않을까 생각해봤다.

그러나 결과는 Port 충돌.

Http port는 다르게 했으니 문제가 없었는데 내부적으로 사용하는 port들이 문제를 일으키는 것 같았다. 로그상으로는.

사용되는 Port를 보니 http port, ajp13 port, sshd port, tcp port (JNLP slave agent listener).

이 중에서 http와 ajp13 port가 설정이 가능하다. ([Jenkins Wiki](https://wiki.jenkins-ci.org/display/JENKINS/Starting+and+Accessing+Jenkins) 참조)

그래서 임의로 master, slave1 이라 명명해서 각각 아래처럼 해보니 충돌없이 잘 된다.

Master

\[bash\]

java -jar -DJENKINS\_HOME=D:/jenkins/master -jar jenkins.war --httpPort=7070

\[/bash\]

 

Slave1

\[bash\]

java -jar -DJENKINS\_HOME=D:/jenkins/slave1 -jar jenkins.war --httpPort=7071 --ajp13Port=8109

\[/bash\]

 

Master는 ajp13 port로 8009를 사용한다. (Jenkins default)

근데 도대체 ajp13은 무얼까?

찾아보니 Apache Jakarta Project에 있는 Apache JServ Protocol version 1.3 이라고 한다. ([AJPv13](http://tomcat.apache.org/connectors-doc-archive/jk2/common/AJPv13.html) 참조)

 

참고로 Windows 7에서 처리했고, Jenkins version은 1.474였다.
