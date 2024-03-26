---
title: "Gerrit에서 custom label 생성하기"
date: "2014-07-15"
categories: 
  - "scm-2"
tags: 
  - "cutom-label"
  - "gerrit"
  - "jenkins"
  - "project-config"
  - "scm"
---

Google의 code review tool인 Gerrit 사용시 기존의 label인 Code-Review, Verified 이외에 사용자 정의 label이 필요한 경우가 있다.

내 경험으로는 CI를 위해 custom label이 필요했었는데 특정 label의 point로 build 여부를 결정짓는데 사용했다.

Custom label이 필요한지 여부를 판단하는 것은 어디까지나 SCM 정책에 따라 달라질 수 있고 그 설정과 관리는 대부분의 사용자들과는 관계가 없는 부분이다.

 

### **1\. Project clone**

Custom label을 적용하고자 하는 특정 project (저장소)를 clone 한다.

Gerrit의 branches 메뉴를 보면 refs/meta/config 라는 reference가 존재하는데 일반적으로 master branch가 항상 있는 경우 refs/meta/config를 checkout 하지 않으면 보이지 않는다.

비어있는 project를 대상으로 하면 (branch가 없음) clone 하면 바로 유일한 reference인 refs/meta/config의 내용이 나타난다.

 

### **2\. project.config 수정**

refs/meta/config에는 project.config와 groups 파일이 있는데 (모든 경우를 살펴본 것은 아니라서 다른 파일이 추가되어 있을 수도 있음)

groups 파일에는 access control에 추가되어 있는 관계된 group 정보가 포함되어 있고 custom label 설정과는 관계가 없다.

project.config 파일을 열어보면 access control에 대한 내용과 project 일반적인 설정들이 포함되어 있는데 (description 등) 추가할 label에 대한 내용을 정의한다.

보통 이런 형태로 작성하면 되는데

\[label "test label"\]

function = NoOp

value = 0 Do Not Build

value = +1 Build Now

추가 상세 설정은 [Gerrit 문서](https://gerrit-review.googlesource.com/Documentation/config-labels.html)를 참조해서 진행한다.

function을 NoOp으로 설정한 경우 submit 여부를 결정하는데 test label이 영향을 미치지 않는다. (기존 정책에 따라 submit 여부가 결정됨)

value는 설정한대로 부여할 point의 범위가 결정되는 역할을 한다.

 

### **3\. Commit / Push**

소스코드와 동일하게 저장소 변경사항이 발생했으므로 commit을 하고 push를 한다. (Push 할 때 refs/meta/config를 지정하는 것은 기본)

Gerrit의 branches 에서 refs/meta/config의 내용을 확인해 변경사항이 제대로 반영되었는지 확인이 되면 Access Control 메뉴에서 설정할 때 내가 추가한 test label 설정이 가능한 것을 확인할 수 있다.

 

### **4\. 결론**

일반 개발자들이나 사용자들은 어쩌면 알 필요가 없는 기능이다.

하지만 이런 것도 Gerrit이 제공한다.

알아두면 CI 구성이나 SCM 정책을 좀 더 유연하거나 강화시키는데 도움이 될것이라고 본다.

국내에서는 이런 custom label 사용보다 사실 Gerrit이 제공하는 기본 기능, 정책들만이라도 잘 지킬 수 있기를 희망한다.
