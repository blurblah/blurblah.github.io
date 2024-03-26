---
title: "이해를 돕기 위한 Objective-C 문법 (Ch.5)"
date: "2010-07-18"
categories: 
  - "iphone-dev"
tags: 
  - "head-first-iphone-development"
  - "hig"
  - "iphone"
  - "iphone-app"
  - "objective-c"
  - "selector"
  - "아이폰-앱-개발"
---

  

Chapter 5는 chapter 4에서 크래쉬된 application을 디버깅해서 오류를 수정하는 내용과 사용성 측면의 보완, 그리고 모달뷰를 작성하고 칵테일 추가기능을 넣게 되는데 뷰를 상속해서 사용하는 방법 등을 다루고 있습니다. 다루는 내용도 많고 기네요. :)

  

**viewWillAppear**

View가 나타나는 시점에 대한 method 들을 여럿 볼 수 있습니다. viewDidLoad / viewDidUnload 도 있었고 viewWillAppear, viewWillDisappear 등도 있는데 이름만 보면 대충 view가 나타나는 시점에 따라 여러개의 메소드가 제공됨을 추측할 수 있습니다. viewWillAppear는 실제로 view가 추가되기 전에 호출되는 것으로 문서에는 명시되어 있네요. parameter로 BOOL type의 animated를 받고 있는데, YES를 넣으면 view가 나타날 때 animation 효과를 줄 수 있습니다.

  

**문자열 상수의 이용**

이전 chapter에 이미 설명되어 있는 내용입니다. 리팩토링을 하자면서 뜬금없이 코드 안에서 사용되는 문자열 들을 별도로 뽑아서 헤더파일 안에 상수로 정의해 두고 문자열 상수로 대체하는 부분이 있었는데요. 이번 chapter에서도 고스란히 그 상수들을 이용하고 있습니다. 여러번 사용할 문자열들을 간단하게 재사용 할 수 있다는 측면에서도 리팩토링의 효과를 충분히 얻을 수 있는 예입니다. 하지만 더 중요한 부분은 단순히 문자열을 개발자가 입력해 사용할 경우 오자가 있어도 컴파일 결과는 정상일 가능성이 높기 때문에 나중에 문제가 생겨도 디버깅하기가 상당히 까다로워질 수 있는데 반해 문자열 상수를 이용할 경우 문자열 상수를 잘못 사용할 경우 컴파일러가 미리 잡아주기 때문에 디버깅과 개발에 들어가는 시간과 노력을 조금이나마 줄일 수 있습니다.

  

**Disclosure Indicator**

사용성에 대한 문제가 언급되면서 HIG (Human Interface Guidelines) 라는 용어가 등장합니다. 애플에서 UI의 일관성과 application의 사용성을 높이기 위해 작성해 둔 규칙 같은건데, 꼭 지키라고 강조하고 있네요. 이런 애플의 강한 규제들을 싫어하는 분들도 있지만 저는 어느정도 찬성입니다. 개발자가 궁극적으로 원하는건 자신의 산출물을 통해 사용자들이 멋진 경험을 하게 만드는 것이라고 생각하는데 개발자가 자유도를 조금 빼앗기더라도 사용자에게 일관된, 그리고 멋진 경험을 선사할 가능성을 조금 더 높일 수 있는 방법이라고 생각하기 때문입니다. 그래서 이번 장에서 칵테일 리스트를 누르면 어떤 내용이 더 나타날 것이라는 예상을 할 수 있도록 disclosure indicator 라는 것을 사용합니다. 보통의 리스트가 있는 iphone application을 보면 오른쪽 끝에 화살표가 삽입된 경우가 있는데 이것이 disclosure indicator 입니다. 이것 이외에도 몇가지 type을 더 제공하는 듯 한데, 언젠가는 다른 type 들도 사용할 기회가 있을 겁니다. 이것을 넣고 싶으면 단순히 리스트의 cell의 accessoryType에 사용하고 싶은 타입의 indicator 상수를 넣어주면 됩니다. 이렇게요. 매우 간단합니다. :)

cell.accessoryType = UITableViewCellAccessoryDisclosureIndicator;

  

**Selector**

Chapter 5에서 Save와 Cancel 버튼을 만들게 됩니다. 이 때 버튼을 초기화 하면서 action이라는 이름의 파라미터를 넣게 되어있는데 @selector(save:) 이런 식으로 입력을 하고 있습니다. @ 마크는 NSString type 이란걸 알려주기 위해서만 사용한다고 생각했는데, 참 혼란스럽습니다. 찾아보니 @selector 자체는 SEL type을 가리키기 위한 키워드 정도로 그냥 생각하면 될 듯 합니다. C, C++에서 함수 포인터를 이용해 특정한 상황에서 해당 함수를 호출하는 방식과 유사하다고 볼 수 있습니다. 주의해야 할 사항은 method의 콜론까지 포함해서 입력해주어야 한다는 사실입니다. Selector에 대해서는 그냥 감만 잡고 나중에 또 등장하면 자세히 살펴봐야겠습니다.
