---
title: "Jenkins의 Build Queue 구조"
date: "2013-03-15"
categories: 
  - "ci"
tags: 
  - "build-queue"
  - "jenkins"
  - "json"
  - "구조"
---

Jenkins의 build queue를 살펴볼 일이 생겼다.

 

**1\. Build Queue**

우선 Jenkins에서의 build queue는 수행될 job이 수행되기 전에 쌓이는 공간으로 여기서 대기하다가 job이 executor (slot)에 들어갈 수 있는 상태(executable)가 되면 executor로 이동된다.

Executor에 빈 slot이 없어서 실행되지 못하는 상황에 build queue에 job이 쌓이기도 하지만 동일한 이름의 job이 실행중인 경우 같은 job이 build trigger 된다면 이전에 실행중인 job이 종료될 때 까지 build queue에서 대기한다.

 

**2\. Build Queue를 사용하려는 이유**

자동화에 Jenkins를 사용하고 있는데 remote로 build trigger를 하려다보니 무작정 job을 trigger 할 수 없다. 현재 build queue에 어떤 job이 있는지 executor에는 어떤 job 이 있어서 build 중인지를 확인하고 나서 적합한 job을 trigger 하는게 올바른 접근일 것이다.

 

**3\. Build Queue 접근**

Jenkins에 authentication 설정이 걸려 있다고 해도 build queue api 접근은 가능하다. 이 [페이지](https://builds.apache.org/queue/api/)가 공식적으로 제공되고는 있는데 API에 대한 설명 같은게 없어서 일단은 구현하면서 대략의 구조를 살펴보게 되었는데, 제공되는 API는REST 방식으로 제공된다고 하는데  HTTP / get으로 간단히 접근할 수 있다.

 

**4\. Build Queue 구조**

id

buildableStartMilliseconds

task (color, name, url)

inQueueSince

stuck

blocked

params

why

actions

┣━━━━ parameters (name, value)

┗━━━━ causes (shortDescription, userId, userName)

buildable

 

문서가 없어서 각 요소의 정확한 내용은 아직 알 수가 없지만 Jenkins developer group에 문의를 한 상태다. 이름과 얻어낸 값으로 예상한 내용은 아래와 같다.

\[table nl='||'\]

Key, Type, Description, Note

id, Integer, Trigger된 job의 ID, 계속 변경되는 값으로 보임

buildableStartMilliseconds, Long, ?, 알 수 없음

task > color, String, 상태에 대한 이미지, 이전 상태 나타내는 이미지로 보임

task > name, String, Job의 이름, -

task > url, String, Job의 url, -

inQueueSince, Long, Build Queue에 쌓인 시간, -

stuck, Boolean, 막혔는지 여부, Build Queue에 쌓인 시간이 오래되면 true로 변경됨

blocked, Boolean, ?, stuck과의 차이를 알 수 없음

params, String, Trigger 될 때의 parameter, 줄바꿈된 문자열로 나열되어 활용 어려움

why, String, Build Queue에 쌓인 이유, 동일한 job이 실행중인지 등의 이유에 대한 설명

actions > parameters > name, String, Parameter의 name, -

actions > parameters > value, String, Parameter의 value, -

actions > causes > shortDescription, String, Job 실행에 대한 간단한 설명, -

actions > causes > userId, String, Job을 실행한 사용자의 ID, -

actions > causes > userName, String, Job을 실행한 사용자의 이름, -

buildable, Boolean, Build 가능 여부, -

\[/table\]

 

**참고**

actions의 parameters 항목의 경우 job에 parameter를 받는게 아니라면 값이 비어있는게 아니라 아예 생성되지 않는다.

이것은 parameter가 Jenkins 기본 기능이 아니라 parameterized plugin을 이용하는 거라 그런 것으로 생각된다.
