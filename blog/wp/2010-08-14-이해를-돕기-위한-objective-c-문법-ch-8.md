---
title: "이해를 돕기 위한 Objective-C 문법 (Ch.8)"
date: "2010-08-14"
categories: 
  - "iphone-dev"
tags: 
  - "core-data"
  - "data-model"
  - "development"
  - "iphone"
  - "iphone-app"
---

Chapter 8에서도 계속 같은 내용의 application을 개선하고 업데이트 하는 내용입니다. 주로 다루고 있는 내용은 data model에 변경사항이 생겼을 때 Core Data를 이용해서 쉽고 빠르게 처리할 수 있는 방법이구요. 수배자 명단에서 수배자를 검거했다고 선택하게 되면 검거자 리스트에도 해당 data가 표시되는 것까지 처리하고 있네요. 이번 chapter까지 끝내면 심심하지만 원래 의도했던 기본 기능은 갖출 수 있습니다.

  

**Data Model의 변경**

기존의 data model을 사용하다가 속성을 추가, 삭제, 변경하고 싶은 경우가 분명히 발생할 것 같습니다. 보통의 경우라면 DB 자체를 다루게 될테니 DB 스키마가 변경됨을 의미하고, 귀찮고 복잡한 작업을 하나하나 해줘야 합니다. 하지만 Data Core를 이용하면 작업이 훨씬 줄어들 수 있습니다. 잘 생각해보면 처음에 Data Core를 사용하기 시작할 때 부터 DB와 관련된 복잡한 작업은 하지 않았었는데, 확실히 이 부분은 편리하다는 생각이 드네요. 아무튼 Data Model을 변경할 일이 생기면 아래의 작업들을 순서대로 해주면 됩니다.

1\. 변경할 기존의 data model 선택

2\. Design > Data Model > Add Model Version 메뉴 선택

3\. 2.과정을 거쳐서 생성된 새로운 버전의 data model 선택

4\. Design > Data Model > Set Current Version 메뉴 선택

5\. Data Model 변경

  

**Managed Object Context에 data 저장 그리고 취소**

data를 저장하기 위해서는 save (commit 한다는 것을 의미), 되돌리고 싶다면 rollback message를 보내라고 되어있습니다. 참 직관적이라는 생각이 드네요. save, rollback, ...:)

  

**viewWillAppear / viewDidLoad**

지금까지 참 많이 보게 되었던 method 들입니다. 이외에도 몇가지가 더 있지요. View를 표시하는 method들 여러개를 한꺼번에 정리할 필요가 있어 보입니다. 일단 viewWillAppear와 viewDidLoad를 보면 method 이름이 다른 것처럼 의미와 용도에도 명확한 차이가 있습니다. viewWillAppear는 해당 view가 화면에 표시될 때 마다 매번 호출되는 method 입니다. 예를 들어 navigation control을 사용한 application에서 item 한가지를 선택해서 상세 view가 표시되는 경우 viewWillAppear가 호출되고, 원래 view로 되돌아가서 다시 상세 view가 표시되면 다시 호출이 됩니다. 그러므로 매번 호출될 필요가 있는 구문들만 viewWillAppear에 넣어주어야 할 것 같습니다. 반면에 viewDidLoad는 전체 view (xib file)가 메모리에 올라올 때 한 번만 호출되는 method 입니다. 정확히는 load된 직후에 호출되겠네요. 이름에 did가 있으니까요.
