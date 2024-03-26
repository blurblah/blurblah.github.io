---
title: "[Processing] Ch.7 Motion"
date: "2011-11-15"
categories: 
  - "others"
tags: 
  - "circular"
  - "data-visualization"
  - "frame"
  - "motion"
  - "processing"
  - "random"
  - "rotate"
  - "scale"
  - "timer"
  - "translate"
---

Frame

frameRate 함수는 초당 frame 수를 설정하기 위해 사용

(ex : frameRate(30) 은 초당 30 frame)

기본적으로 frameRate은 60이지만 draw 함수 수행시간에 따라 달라지고 frameRate에 설정되는 값은 최대값을 의미한다.

 

Random

random 함수는 임의의 수를 생성하는데 이용되고 float 타입으로 return.

두 개의 인자로 생성되는 수의 범위 지정 가능

 

Timer

millis 함수는 프로그램 시작과 동시에 흘러가는 ms 단위의 count 값을 돌려주는데 이를 이용해서 timer 처럼 사용 가능

 

Circular

sine, cosine 연산을 위한 sin, cos 함수가 제공되며 인자는 radian, 리턴은 float 형태.

 

Translate, Rotate, Scale

좌표계 자체를 이동시키는 translate (인자는 x, y 이동하는 값)

회전 시키는 rotate (인자는 radian)

scaling을 위한 scale 함수 제공
