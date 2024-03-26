---
title: "[Work Log] Test Framework 설계 리뷰"
date: "2012-01-26"
categories: 
  - "log-work"
tags: 
  - "architecture"
  - "plan"
  - "review"
  - "test-framework"
---

설계중인 Test Framework review.

작성된 Class Diagram을 보면서 개선할 부분이 많다고 생각.

 

문제점 1. UML 형식에 맞지 않는 부분들

UML도 언어다. 규격이라는 것이 있고 다른 나라 사람이 보더라도 이해가 가능해야 한다. Interface가 Interface로 표현되어 있지 않았고, 구현이 상속으로 표현되어 있었으며 Association이나 Dependency 관계로 표현할 필요가 없는 것들도 표현되어 있었다. 이해를 돕기 위해 굳이 표현한거라는 대답을 들었지만 다이어그램 자체만으로 이해가 가능한 것을 굳이 규칙을 어겨가며 작성할 이유는 없다고 생각했다.

 

문제점2. Dependency

대부분의 클래스들이 의존관계로 표현되어 있다. 이 의미는 하나의 클래스가 수정되거나 추가될 경우 주변의 클래스들 또한 영향을 받는다는 뜻이다. 확장이 힘들어지고 코드는 갈수록 지저분해지며, 중복된 코드가 늘어나고 결국은 유지보수가 힘들어진다고 배웠다. 개선되어야만 한다. 비슷한 성질의 클래스들을 충분히 모을 수 있다. 또 아직 확실하지 않은 부분들이 많기 때문에 이 부분은 클래스가 아니라 Interfacefh 두는게 맞다고 생각된다.

 

크게 압축하면 두가지이지만 이걸 해결하려면 많은 부분을 수정해야 한다. 실제 구현해봐야 알 수 있다는 의견때문에 일단은 Prototype을 만들기로 했다.

 

결정된 사안들

1\. Prototype을 만든다.

2\. 난 문서를 바탕으로 Testcase를 만든다. (JUnit 이용)

3\. CI를 구성한다. (GIT + Bamboo)

4\. 전체 Project는 Agile로 진행한다. (JIRA + GreenHopper 이용하며, Sprint는 2주 단위, 매일 오전에 Scrum)

 

재밌겠다. :)
