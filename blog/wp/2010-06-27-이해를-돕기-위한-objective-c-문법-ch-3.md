---
title: "이해를 돕기 위한 Objective-C 문법 (Ch.3)"
date: "2010-06-27"
categories: 
  - "iphone-dev"
tags: 
  - "head-first-iphone-development"
  - "iphone"
  - "iphone-app"
  - "objective-c"
  - "property"
  - "아이폰"
  - "아이폰-앱-개발"
---

  

Ch.1, 2를 보면서 의문을 가지고 있었던 모든 것을 Ch.3에서 해결할 수 있습니다. Head First 시리즈라서 그런지 책 구성이 무조건 시작하고 따라하면서 복잡한 설명은 다음에 한다는 식으로 표현되어 있었는데, 진짜 약속대로 Ch.3에서 설명하고 있더군요.

  

  

**Property**

이게 뭔지 정말 궁금했었습니다. 궁금증을 이기지 못해 가지고 있던 Objective C 책을 뒤져서 Ch.2 공부하던 시점에 대강 알아두긴 했는데 Ch.3에서 친절하게 설명했더군요. 예문은 아래와 같습니다.

```objectivec
@interface InstaTwitViewController : UIViewController
<UIPickerViewDataSource, UIPickerViewDelegate> {
  IBOutlet UITextField *notesField;
  ....
}

@property (nonatomic, retain) UITextField *notesField;
....
@end
```
  

보통 OOP를 공부하다보면, 멤버변수에 직접 접근하지 말고 getter와 setter를 만들어 간접적으로(indirection의 의미) 접근하는 방법을 사용하라고 권유하는 걸 많이 보게 됩니다. 근데 사실 getter와 setter 라는게 별개 없습니다. 남이 작성한 코드를 열어봐도 getter와 setter는 거의 같은 모습을 하고 있지요. 단지 사용되는 멤버변수들의 이름만 다를 뿐입니다. 그래서인지 Objective C에서는 이걸 자동으로 만들어주는 기능을 제공하고 있습니다. 그 기능이 바로 그동안 괴롭혀왔던 property 입니다. 위의 예문에서는 notesField라는 이름을 가진 UITextField 객체를 사용하고 있는데 읽거나 변경하는 작업을 하게 될 것 같습니다. 그래서 property로 만들어서 별도로 getter와 setter를 작성할 필요없이 자유롭게 사용할 수 있게 만들어 두었습니다. 유의할 사항은 property를 사용한다면 class 구현부분에 반드시 @synthesize로 명시해주어야 한다는 점입니다.

  

  

**Property 속성 키워드**

Property에 대해서 대강 이해가 되었지만 예문에 있는 nonatomic과 retain은 무엇이냐는 의문이 또 남게 됩니다. Objective C에서는 property로 getter와 setter를 만들어줄 때 속성을 지정할 수 있게 해 두었다고 합니다. nonatomic과 retain은 그 속성 중 일부인거죠. 책에서 설명하고 있는 속성들은 아래와 같습니다.

readonly : property가 변경되지 않을 때 사용 . 컴파일러가 setter 생성하지 않음.

retain : 객체를 다룰 때 사용. 객체를 계속 사용하겠다는 의미이며, 내부적으로 reference count를 증가시킴

readwrite : property를 변경할 필요가 있을 때 사용(default)

copy : property를 복사해 사용하겠다는 의미이며 전달된 원래의 값이 변경되지 않도록 할 때 사용됨

assign : int, float 등의 기본형을 다룰 때 사용. 단순히 할당하고자 할 때만 이용함(default)

nonatomic : 기본적으로는 property 값을 변경할 때 mutex를 사용하도록 되어있는데(atomic), multi-thread가 필요없을 경우 mutex 사용이 낭비이므로 불필요한 처리를 막을 때 사용

  

**기타**

NSString 객체들은 값 변경이 되지 않습니다. 만약 이미 할당한 문자열을 바꿀 일이 있다면 NSMutableString을 사용하면 문자열 변경이 가능합니다.
