---
title: "이해를 돕기 위한 Objective-C 문법 (Ch.2)"
date: "2010-06-27"
categories: 
  - "iphone-dev"
tags: 
  - "application"
  - "development"
  - "iphone"
  - "objective-c"
  - "아이폰"
  - "아이폰-앱-개발"
  - "앱-개발"
---

  

이번주에 연구회에서 책 Ch.3에 대한 내용을 발표하게 되어서 Ch.2 부터 정리했습니다. 원래 지난주에 Ch.3까지 다 정리하긴 했는데 그게 머릿속으로만 정리한거라 ㅎㅎ. Ch.2와 3이 거의 연결되는 내용이라 따로 분리할 필요는 없을거 같긴 한데 그래도...

  

**Protocol**
```objectivec
@interface InstaTwitViewController : UIViewController
<UIPickerViewDataSource, UIPickerViewDelegate> {
...
}
```

위의 예문에서 보면 특이하게 `< >` 기호로 감싼 부분이 있는데, UIPickerViewDataSource와 UIPickerViewDelegate 라는 protocol을 사용하겠다는 의미입니다. Protocol이란 개념이 Objective C 2.0 부터 포함되어 있는거 같은데, 다른 언어들만 접해본 입장에서는 생소한 개념입니다. 근데 뭐 간단히 생각해보면 일반적인 protocol을 보통은 '어떤 시스템에서 미리 약속해 놓은 규약' 정도의 의미로 사용하고 있으니 비슷하게 이해하고 넘어가면 되지 않을까 싶네요. Objective C의 특징과 연결해서 생각해보면 Objective C가 다중상속을 금지하고 있기 때문에 보완하고자 만들어진 개념이 아닐까 생각됩니다. 전 Java에서 Interface와 유사한 녀석이라 생각하기로 했습니다.

  

**alloc & init**

```objectivec
activities = [[NSArray alloc] initWithObjects : @"abc", @"def", nil];
```

Objective C에서는 new 대신 alloc이란 method (message)로 새로운 객체 생성을 하는 듯 합니다. 보통 class 들의 멤버들을 열어보면 보통 초기화 method들이 제공되는 듯 한데 초기화도 방법에 따라 다양한 녀석들이 있습니다. 위의 경우엔 (initWithObjects) 다른 객체들로 초기화하는 내용을 표현하고 있습니다. 위에서는 NSString type의 객체들이네요. 그리고 마지막은 nil (=null)을 넣어두고 있습니다. Objective C에서 제공하는 method 들은 대부분 이름만 봐도 대충 의미가 파악된다는게 참 좋은 점이라고 생각합니다. 근데 쓰면서 보니 _마지막엔 꼭 nil을 넣어주어야 하는 것인지 갑자기 궁금해지네요. 이 내용은 확인해서 추가해야겠어요._ 참 alloc으로 새로 할당한 녀석들은 꼭 나중에 release 해야 합니다.

  

**참으로 헷갈렸던 method 이름**
```objectivec
- (NSInteger)pickerView : (UIPickerView *)pickerView numberOfRowsInComponent : (NSInteger)component {
....
}
```

이거 전체가 method의 prototype입니다. 참 이상하고 헷갈리고, 책을 당장이라도 덮고 싶게 만드는 것들 중 하나입니다. 근데 한 번 이해하니 오히려 편한 부분도 있습니다. 그냥 보면 굳이 parameter로 무엇을 전달해야 하는지 reference를 찾아볼 필요가 없어요. :) 그래서 제 나름대로 이해하기 쉽게 배열하기로 했습니다. 그럼 더 편하거든요. 위의 method의 정확한 이름은 이렇게 표현할 수 있습니다.

```objectivec
(NSInteger)pickerView : numberOfRowsInComponent
```

pickerView만 이름인게 아니라 numberOfRowsInComponent까지 이름이 되는거죠. 이렇게 이해하면 됩니다. 원래 pickerView라는 녀석인데 numberOfRowsInComponent에 필요한 parameter를 하나 더 받을거다 라고요. 그래서 나름 쉽게 풀어서 다시 쓰면 아래와 같습니다.

```objectivec
(NSInteger)pickerView : (UIPickerView *)pickerView
numberOfRowsInComponent : (NSInteger)component {
....
}
```

다시 쉽게 해석해보면 첫번째 parameter로 UIPickerView의 pointer type인 pickerView를 가져야 하고, numberOfRowsInComponent라는 parameter가 필요한데, NSInteger type의 component란 이름으로 parameter를 받을거란 얘기입니다. 책에선 외부 parameter, 내부 parameter란 이름으로 얘기하고 있는데 공식적으론 numberOfRowsInComponent란 parameter가 필요하고 실제로 component란 이름의 parameter를 넘긴다고 이해하면 됩니다. 그러므로 method 내부에선 component를 가지고 처리하면 되겠습니다. numberOfRowsInComponent를 보면서 가만히 생각해보면 이게 어떤 component 안에 있는 row의 갯수를 어떻게 하겠다는 얘기니 필요한 component를 parameter로 받겠다는 걸 알 수 있습니다. 특이하게 보통 이런 경우 number of rows를 return하게 되더군요. 실제로 이 method는 특정 component를 parameter로 받아서 그 component의 row 갯수를 NSInteger type으로 return하도록 작성되어 있습니다. 설명이 좀 복잡해진 듯 하지만, 3개 이상의 parameter 들도 이런 식으로 작성되기 때문에 이런 형태에 대해 익숙해져야 할 듯 합니다.

  

**3개의 parameter를 사용하는 예**
```objectivec
- (NSString *)pickerView : (UIPickerView *)pickerView
  titleForRow : (NSInteger) row
  forComponent : (NSInteger)component {
....
}
```

위에서 설명한 것과 비슷한 방법으로 해석해보면 제일 끝에서부터, component를 받을거고 row도 필요하고 NSString \* type의 값을 return 할거라는 걸 알 수 있고, 더 나아가면 특정 component를 받아서 component 별로 row를 입력받을 생각이고 결국은 해당 row의 title을 return 하겠다는 걸 추측해볼 수 있습니다.
