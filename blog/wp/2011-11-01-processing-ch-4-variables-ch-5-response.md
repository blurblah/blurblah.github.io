---
title: "[Processing] Ch.4 Variables / Ch.5 Response"
date: "2011-11-01"
categories: 
  - "others"
tags: 
  - "data-visualization"
  - "keyboard"
  - "mouse"
  - "processing"
  - "response"
---

Ch.4는 변수 선언과 기본 연산, for loop에 대한 내용 (Java와 동일)

**1\. Ch.4에서 소개된 예약어**

width : 화면의 가로 크기

height : 화면의 세로 크기

 

 

Ch.5 Response

Ch.5는 주로 interaction을 위해 알아야 하는 함수와 예약어, 방법들을 소개

mouse를 움직일 때 좌표를 알 수 있는 방법 (mouseX, mouseY)과

다른 좌표값들과의 비교 방법, keyboard 입력은 어떻게 구분할 수 있는지를 설명하고 있다.

소개된 일부 함수들은 굳이 사용이 필요없을 수도 있으나

연산의 편의성을 위해 제공하는 것으로 보임

 

**1\. draw 함수**

화면을 구성하는 매 frame 마다 호출되는 함수

 

**2\. setup 함수**

프로그램의 시작 시점에만 한 번 호출되는 함수 (보통 초기화에 이용)

 

**3\. mouseX, mouseY (예약어)**

mouse의 현재 좌표를 의미함 (이동할 경우 변경됨)

 

**4\. background 함수**

화면을 초기화하는 기능이 있으므로 draw에 이용할 경우 잔상없는 이미지 표현 가능

 

**5\. pmouseX, pmouseY**

이전 frame에서의 mouse 좌표를 저장하고 있는 변수 (예약어)

 

**6\. dist 함수**

이전 좌표와 현재 좌표의 거리 차이를 자동 연산하는 함수

 

**7\. map 함수**

좌표를 수식에 의해 매번 변경해야 할 때 자동으로 매핑해주는 함수

 

Example)

float mx = map(mouseX, 0, width, 60, 180);

//의미 : mouseX가 최소 0에서 width까지 변화할 때 mx는 60에서 180까지 연산해서 할당

 

**8\. mousePressed**

예약어로 mouse 버튼이 클릭되었는지 여부를 저장하는 변수 (boolean)

 

**9\. mouseButton**

예약어. 마우스의 어떤 버튼이 클릭되었는지 저장하는 변수 (LEFT or CENTER or RIGHT)

 

커서의 현재 위치가 왼쪽인지 오른쪽인지 도형 내부에 있는지 외부에 있는지 알기 위해서는

각각 도형의 x, y, width, height 등의 수치와 mouseX, mouseY의 크고 작음을 비교해서 연산해야 함

 

**10\. keyPressed**

예약어. 키보드 버튼이 눌렸는지 여부를 저장하는 변수 (boolean)

 

**11\. key**

예약어. 눌려진 key 값을 저장하는 변수 (CODED인 경우는 특수 키로 keyCode(LEFT, RIGHT, ALT, SHIFT, ...)로 비교해야함
