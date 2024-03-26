---
title: "Jenkins Plugin review"
date: "2013-02-21"
categories: 
  - "ci"
tags: 
  - "jenkins"
  - "plugin"
  - "review"
---

나에게 필요할 것 같은 Jenkins Plugin을 찾아봤다.

주로 Job 생성, 관리, 설정을 간단하게 할 수 있는 것들인데 일부는 쓸모없거나 문제가 있는 것들도 보인다.

선별해서 사용할 예정인데, 이리저리 조사하고 써보니 Jenkins Plugin도 개발하고 개선할 것들이 꽤 될 것 같다.

\[table nl="||"\]

Category, Plugin, Description, Feature, Note

Job 생성, [Job Import Plugin](https://wiki.jenkins-ci.org/display/JENKINS/Job+Import+Plugin), 다른 Jenkins server에 있는 job을 선택적으로 import 할 수 있는 plugin, Remote job selection||Remote job import, 오류가 있으나 수정되지 않음||[https://issues.jenkins-ci.org/browse/JENKINS-11185](https://issues.jenkins-ci.org/browse/JENKINS-11185)

Job 생성, [Job Generator Plugin](https://wiki.jenkins-ci.org/display/JENKINS/Job+Generator+Plugin), Parameter를 넘겨 주면서 job 생성이 가능한 plugin, Generator parameter 전달 가능||Post build job에 parameter 전달 가능, Run Condition Plugin/Token Macro Plugin이 설치되어 있어야 함||특정 script를 몰라도 설정만으로 job 생성이 가능하지만 사용한다면 Job DSL Plugin이 더 간단할 것으로 보임

Job 생성, [Job DSL Plugin](https://wiki.jenkins-ci.org/display/JENKINS/Job+DSL+Plugin), DSL script(Groovy)를 이용해서 job을 생성하는 job을 만들 수 있는 plugin, 생성할 job 정의하는 기능||Job 자동 생성, [Tutorial](https://github.com/jenkinsci/job-dsl-plugin/wiki/Tutorial%3A-Using-the-Jenkins-Job-DSL) 참조

Job 관리, [Multijob Plugin](https://wiki.jenkins-ci.org/display/JENKINS/Multijob+Plugin), 여러개의 job을 묶어서 순차적으로 실행할 수 있는 plugin, Phase 구분||Phase 별 job 선택 가능||실패 조건 결정 가능||한 phase에 존재하는 복수의 job은 parallel로 실행됨, Parameterized plugin이 사전에 설치되어 있어야 함||Jenkins의 job이 너무 많은 경우 유용함

Job 관리, [Nested View Plugin](https://wiki.jenkins-ci.org/display/JENKINS/Nested+View+Plugin), Job을 폴더 형태로 관리할 수 있게 해주는 plugin, Subview 추가, View tab을 늘리면 가로로 추가되기만 하고 job이 늘어날 경우 보기가 어려워지는데 폴더 형태로 job을 정렬함으로써 job 갯수가 많은 경우 유용

Job 관리, [Sectioned View Plugin](https://wiki.jenkins-ci.org/display/JENKINS/Sectioned+View+Plugin), 화면을 section으로 구분해서 더 다양한 정보를 보여주기 위한 plugin, Test result/list view/job graph/text/view listing section 지원, Jenkins의 view 하나를 dashboard로 사용할 수 있을 것으로 보임||정적 분석이나 test 결과에 대한 정보 위주로 분석 툴이나 결과 data를 직접 활용하는 것이 효율적일 것으로 생각됨

Configuration, [Config File Provider Plugin](https://wiki.jenkins-ci.org/display/JENKINS/Config+File+Provider+Plugin), 사전에 정의한 파일을 이용해 build에 이용할 수 있도록 해주는 plugin, Maven settings.xml / plain xml / Groovy / plain text는 향상된 수정기능 제공, -

Configuration, [Managed Script Plugin](https://wiki.jenkins-ci.org/display/JENKINS/Managed+Script+Plugin), Config File Provider Plugin에서 script 파일을 추가할 수 있는 plugin, Batch / shell script 지원||Argument를 미리 정의해서 build job 설정시 argument를 설정해서 사용 가능, 미리 정의된 build script를 하나로 관리하기 용이

Configuration, [Scriptler Plugin](https://wiki.jenkins-ci.org/display/JENKINS/Scriptler+Plugin), Groovy script를 미리 작성해두고 job 실행시에 사용할 수 있도록 지원하는 plugin, Script 추가/수정/삭제||Github에 공유된 script 이용 가능||Script 보관하는 GIT repository 지원, Build 수행내용을 미리 Groovy로 작성한 후 일괄 적용하기 유용함

Master-slave, [Copy To Slave Plugin](https://wiki.jenkins-ci.org/display/JENKINS/Copy+To+Slave+Plugin), Build 전 master의 파일을 복사해 가거나 build 이후 slave에 있는 파일을 master로 옮겨올 수 있는 plugin, Copy할 파일 지정 가능||상대경로 지정 가능||Copy 제외목록 지정 가능, Custom workspace를 지정해서 복사할 파일의 경로로 이용하게 되면 job이 master에서 실행될지 slave에서 실행될지 모르기 때문에 파일 경로가 모호해지는 문제가 있음 (slave 실행시에도 custom workspace를 이용함)

Master-slave, [Multi slave config plugin](https://wiki.jenkins-ci.org/display/JENKINS/Multi+slave+config+plugin), 여러개의 slave를 추가/삭제/설정할 수 있는 plugin, 복수의 slave 생성/설정 가능, FS Root가 slave 마다 다른 경우에는 생성 후 개별적으로 설정해야 하는 불편함 있음

Master-slave, [NodeLabel Parameter Plugin](https://wiki.jenkins-ci.org/display/JENKINS/NodeLabel+Parameter+Plugin), Job 실행시 특정 node나 job을 지정해서 빌드할 수 있도록 지원하는 plugin, Node/Label 지정||Post build job도 node와 label로 지정 가능, Parameterized Trigger Plugin 필요||Build job을 여러개로 분리할 경우 수행된 slave에서만 계속되어야 하므로 필요할 수 있음

Master-slave, [Slave Setup Plugin](https://wiki.jenkins-ci.org/display/JENKINS/Slave+Setup+Plugin), Slave 연결시 master에 있는 script로 초기 설정 작업을 수행하도록 할 수 있는 plugin, Master의 script 경로 저장||Slave로 script 복사||Script 실행||실행될 slave의 label 지정, Slave 연결시에만 수행되는 작업임||Prepare script/setup script는 모두 상대경로를 지정해야 함||매번 초기화 작업이 필요하면 사용할 필요가 있지만 별도의 job으로 구성할 필요도 있음

Monitor, [Monitoring](https://wiki.jenkins-ci.org/display/JENKINS/Monitoring), Jenkins가 사용하는 메모리 등의 상태에 대한 monitoring을 할 수 있는 plugin, CPU / memory 사용량||Http session / request 등에 대한 mean time||JavaMelody를 이용한 통계치를 보여주는 기능||http://jenkins\_url/monitoring 이라는 permanent link 제공, -

Monitor, [Monitoring External Jobs](https://wiki.jenkins-ci.org/display/JENKINS/Monitoring+external+jobs), Jenkins 외부에서 실행된 job을 monitoring 할 수 있는 plugin, 외부 job monitoring, Linux에서 설치해야 하는 별도 package의 위치를 찾을 수 없음

Monitor, [slave-status](https://wiki.jenkins-ci.org/display/JENKINS/slave-status), Slave가 동작중인지와 메모리 사용량 등을 알려주는 plugin, Monitoring, 3141 Port를 기본으로 사용함||한 machine에서 여러개의 slave를 사용해서인지 monitoring page 로딩되지 않음||Nagios라는 monitoring tool을 설치해야만 할 수도 있으나 그래야만 한다면 사용하지 않음

Misc., [Email Ext Plugin](https://wiki.jenkins-ci.org/display/JENKINS/Email-ext+plugin), Email 전송시 좀 더 세분화시켜서 email을 선별적으로 발송할 수 있는 plugin, Email notification trigger 선택 가능||Contents 지정 가능||수신자 지정 가능, 이용 하더라도 별도의 email sender 구현 필요성 있음

Misc., [MySQL Database Plugin](https://wiki.jenkins-ci.org/display/JENKINS/MySQL+Database+Plugin), MySQL driver plugin, -, Database plugin이 설치되어 있어야 함||Jenkins / plugin 개발용 plugin으로 보임

\[/table\]
