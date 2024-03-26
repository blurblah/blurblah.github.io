---
title: "iOS에서 admob 적용시 linker error"
date: "2013-03-10"
categories: 
  - "iphone-dev"
tags: 
  - "admob"
  - "architecture"
  - "armv7"
  - "ios"
  - "mach-o-linker-error"
---

이런 말도 안되는...

google의 모바일 광고 플랫폼인 admob을 iOS app에 적용하려고 sdk 다운받고 update도 안된 매뉴얼을 어찌어찌 찾아서 했더만 처음엔 ARC 관련 오류가 나타났다. (sdk에 포함된 소스 파일들이 예전 iOS sdk에 맞춰서 작성된 것들로 보임)

Flag 조정해서 해결했더니 말도 안되는 linker error.

요런 식으로 표시된다.

Apple Mach-O Linker (Id) Error

알아보니 최근 iPhone 5부터 chipset이 변경되다 보니 architecture도 바뀌었는데 admob에 포함되어 있는 라이브러리가 변경된 architecture에 대해 아직 반영하기 전이라고 한다.

타사 제품을 지원하는 거라 이해 안되는 면도 없지는 않지만 이럴거면 아예 내놓질 말던가. iPhone5가 나온지가 언젠데.

아무튼 admob sdk 업데이트 되기 전까지는 아래의 stack overflow 링크대로 쓸 수 밖에.

Analytics를 사용하지 않는다면 가능한 해법이다.

[http://stackoverflow.com/questions/12352630/linker-errors-when-integrating-admob-sdk-into-ios-app](http://stackoverflow.com/questions/12352630/linker-errors-when-integrating-admob-sdk-into-ios-app)

 

 

**이렇게 해도 일부 Linker error가 해결되지 않아서 iAd 사용하는 것으로 변경했음. 젠장.**
