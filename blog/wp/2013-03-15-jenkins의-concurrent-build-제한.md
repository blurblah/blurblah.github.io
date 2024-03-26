---
title: "Jenkins의 concurrent build 제한"
date: "2013-03-15"
categories: 
  - "ci"
tags: 
  - "build"
  - "concurrent"
  - "jenkins"
  - "job"
  - "parameter"
---

Jenkins는 동일한 job의 동시 실행 갯수를 제한한다.

 

**1\. Concurrent Build**

아무런 조건이 없을 때 Job A가 실행중이라고 가정했을 때, 누군가에 의해서 혹은 remote로 Job A가 trigger 되면 Job A가 Build Queue로 올라간다.

그러므로 concurrent build의 갯수는 2개라고 할 수 있다. (정확히는 executor에 1, queue에 1)

그 이상이 trigger 되는 job은 cancel도 아니고 pending도 아닌 그냥 무시된다.

혹시 로그에는 있을지 모르겠으나 표면으로는 나타나지 않는다.

당연히 build number도 부여되지 않고, history에도 없다.

 

**2\. 문제**

항상 문제가 생긴다. (푸는 게 우리의 일)

동일한 job을 여러개 실행해야 할 상황이 생겼다.

 

**3\. 상황 설명**

Code review 및 기타 이유로 Gerrit을 사용할 예정이다.

Gerrit에서 trigger될 job이 있는데 관리의 편의성까지 고려했을 때 branch 마다 하나의 job을 배치하는게 최선이다.

Gerrit에서 trigger 횟수는 1시간에 수십회 이상이 될텐데 (branch로 나누더라도 마찬가지를 감안해야 함) Jenkins에서 그만큼을 소화할 수가 없다.

결국은 쌓이게 된다는 얘기다.

그리고 문제는 Jenkins에서는 기본적으로 concurrent build 횟수가 2로 제한된다는 사실이다.

나머지는?

결국 버려질 것 같았다.

큰 문제가 발생하는 것이다.

 

**4\. Hello (real) World**

실제로 검토를 했다.

Job 수행시간을 충분히 늘려두고 job을 수없이 trigger 했다. (손으로도, remote로도)

일반적인 job의 경우 결과는 역시 동일했다.

혹시나 싶어 Gerrit에서 trigger 되도록 했다. 여러번.

믿을 수 없게 Build Queue에 쌓여가는 job을 목격할 수 있었다.

 

**5\. How?**

StackOverflow에서 찾아보니 trick이 있었다.

실행될 job의 parameter를 다르게 던지는 것.

필요없어도 아무런 값이나 만들어 던지면 된다고 한다. ([StackOverflow 원문](http://stackoverflow.com/questions/8268753/more-than-one-build-in-queue-for-specific-job-in-jenkins) 참조)

생각해보니 Gerrit에서 trigger 되는 job은 실제 parameter가 함꼐 오는데 그 값이 모두 다르다.

그래서 보통과는 다른 결과가 온 것이 아닌가 생각된다.

 

**6\. 회고**

가만히 생각해보니 Jenkins의 concurrent build를 제한하는게 어이없지는 않다.

완전히 동일한 내용의 job을 무한정 돌릴 필요가 있을까?

하지만 parameter가 다르다면 job의 이름은 같더라도 다른 내용을 실행하게 될테니 다른 job처럼 인식하는게 올바른 방식일 것 같다.

 

걱정을 하나 덜었다.
