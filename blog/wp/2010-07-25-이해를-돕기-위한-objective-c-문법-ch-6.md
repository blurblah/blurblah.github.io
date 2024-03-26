---
title: "이해를 돕기 위한 Objective-C 문법 (Ch.6)"
date: "2010-07-25"
categories: 
  - "iphone-dev"
tags: 
  - "cgrect"
  - "cgsize"
  - "head-first-iphone-development"
  - "iphone"
  - "iphone-app"
  - "nsnotificationcenter"
  - "nssortdescriptor"
  - "objective-c"
---

  

제 생각엔 가장 길었던 chapter 였던 것 같습니다. 몸이 안좋은 것도 있었는데 토할 정도로 짜증도 좀 나고 그랬죠. 이번에도 어김없이 DrinkMixer를 예제로 사용합니다. 흐름을 보면 소프트 키보드의 등장으로 인해 짤리는 UI, 그리고 그 때문에 컨트롤이 불가능한 것들을 어떻게 처리할 것이냐가 한가지 입니다. 책에서는 예전에도 등장했던 키보드와 관련된 이벤트를 받아서 그 때 마다의 정확한 화면 사이즈(키보드가 포함되지 않은 영역)를 계산하고 새로 만들게 되는 스크롤 뷰에 값을 넘겨 화면이 스크롤 되도록 처리하고 있습니다. 어떻게 생각해보면 키보드가 나타났다 사라지는 것, 그에 따라 화면이 가려지고 스크롤이 되지 않으면 컨트롤이 되지 않는게 당연한데 이런걸 자동으로 처리할 수 있게 제공하면 어땠을까 싶습니다. 사실 당연한 것들을 처리하는 것도 우리에겐 짐이니까요. :) 또 하나 다루는 내용은 이미 만들어져 있는 테이블 뷰에 보여지는 데이터들을 편집하고 삭제하는 기능을 추가하는 방법입니다. SDK에서 제공되는걸 그대로 사용하기 때문에 이 부분은 상당히 편하게 관리할 수 있다고 생각됩니다. 아래는 메모하고 싶었던, 이번 chapter에서 새로 등장한 녀석들입니다.

  

  

**NSNotificationCenter**

예전에도 나왔던 내용입니다만, 이벤트 등록을 위해 사용하는 클래스입니다. 책에서는 아래처럼 사용하고 있네요.

  
```objectivec
[[NSNotificationCenter defaultCenter] addObserver : self selector : @selector(keyboardDidShow:)
name : UIKeyboardDidShowNotification object : nil];
```
  

위의 예문을 잠깐 해석해 보겠습니다. NSNotificationCenter의 defaultCenter를 사용할건데 이벤트가 발생했을 때 전달받을 객체(Observer)는 자기 자신으로 설정하고, 이벤트가 왔을 때 호출할 녀석은 keyboardDidShow라는 method 입니다. 그리고 모든 이벤트가 발생했을 때 알려주는게 아니고, UIKeyboardDidShowNotification 이라는 녀석만 관리할 겁니다. 마지막 어떤 객체가 이벤트를 발생시켰는지는 신경쓰고 싶지 않습니다. (object : nil 부분) 이벤트를 처리하는 부분에 대해서 다시 정리한 이유는 아래 selector 때문입니다. 책에서는 아래처럼 정의하고 있습니다.

```objectivec
- (void)keyboardDidShow : (NSNotification *)notif  {
  ...
  ...
}
```
  

Selector라고 불리우는 것은 C/C++에서 콜백함수와 유사하다고 판단되는데 method 자체는 개발자가 입맛대로 만들면 되는 녀석입니다. SDK에서 제공하는게 아니라는 얘기입니다. Parameter로 NSNotification의 포인터 타입의 notif란 이름으로 받으려고 책의 저자는 생각했나봅니다. 이 parameter는 알아서 전달받게 되겠죠? NSNotification은 userInfo 라는 field를 가지고 있는데 여기에 이벤트에 대한 자세한 정보들이 담겨있어서 책에서는 이 정보들을 이용하게 됩니다.

  

  

**갑자기 등장한 여러가지 구조체들**

소제목처럼 정말 갑자기 여러가지 구조체들이 등장합니다. 전 뭔지도 모르겠는데 갑자기 등장하니까 짜증이 장마처럼 밀려오더군요. 그래서 짜증을 풀고자 xcode에서 document를 불러 내용을 확인해 봤더랬습니다. :)

  

**CGSize**

정의 부분을 보면 정말 간단한 구조체입니다. CGFloat type의 width, height 꼴랑 두 개만 멤버로 보유하고 있습니다. CGFloat은 안봐도 float과 관련이 있겠다는 생각이 들어서 확인해보니 역시 아래처럼 정의되어 있네요.

  
```objectivec
#if defined(__LP64__) && __LP64__
typedef double CGFloat;
#define CGFLOAT_MIN DBL_MIN
#define CGFLOAT_MAX DBL_MAX
#define CGFLOAT_IS_DOUBLE 1
#else /* !defined(__LP64__) || !__LP64__ */
typedef float CGFloat;
```

LP64가 뭔지는 모르겠지만 아마 CPU data 처리량에 관련된게 아닐까 싶습니다.(64bit) 경우에 따라서 CGFloat은 double형이 되거나 아니면 반쪽짜리 float이 되겠네요.

  

**CGRectValue**

이건 구조체가 아니고 method 입니다만 CGRect 구조체를 리턴해주는 녀석입니다.

  

**CGRect**

이 녀석은 rectangle의 위치와 dimension 값을 포함하는 녀석이라고 문서에 되어있는데, CGPoint type의 origin과 CGSize type의 size를 멤버로 두고 있네요. origin은 위치일테고 size는 width와 height를 가지고 있는 구조체니 dimension을 의미합니다.

  

  

**NSSortDescriptor**

배열에 있는 data를 정렬할 때 사용하는 클래스입니다. 이 클래스의 객체가 직접 정렬된 data를 보유하는 것은 아니고 이름처럼 정렬을 어떻게 하겠다는 설정값들만 가지고 있는 descriptor 입니다. 예제에서는 아래와 같이 사용하고 있는데요.

  
```objectivec
NSSortDescriptor *nameSorter = [[NSSortDescriptor alloc] initWithKey : NAME_KEY ascending : YES
selector : @selector(caseInsensitiveCompare:)];
[drinkArray sortUsingDescriptors : [NSArray arrayWithObject : nameSorter]];
[nameSorter release];
```
  

NSSortDescriptor 객체를 새로 할당받을 때 NAME\_KEY 를 이용해 초기화 하고 올림차순으로 정렬하겠다고 작성되어 있습니다. Selector는 비교방법을 어떻게 할건지 추가 정보를 제공합니다. 예문에서는 대소문자를 구별하지 않고 비교하라고 되어있는거구요. 이렇게 만들어진 descriptor를 가지고 NSArray를 만들고 이를 이용해 실제 drinkArray의 data들을 정렬합니다. 물론 다 사용했으니 release 해줘야겠죠.

  

  

이렇게 chapter 6까지 진행하고 보니 몇가지 컨트롤을 다루는 방식에 대해서는 어느정도 이해가 됩니다. 그런데 사실 이 모든걸 다 기억하고 있기란 거의 불가능합니다. 왜냐하면 아직 iphone에 익숙하지 않은 초보거든요. 어차피 어떤 application을 작성하려고 할 때 문서들과 sample 들을 참조해 가면서 작성해야 할텐데, 이런 생각을 하다보면 슬슬 지치네요. 그래도 시작을 했으면 끝을 맺어야 새로운 의욕이 생기게 마련이니 오버스럽게라도 후딱 끝내야겠습니다.
