---
title: "[Processing] 3. Draw"
date: "2011-10-31"
categories: 
  - "others"
tags: 
  - "data-visualization"
  - "processing"
---

 

 

Processing study.

교재 : Getting Started with Processing

 

Chapter 1, 2는 PDE (Processing Develop Environment) 기본사용과 Processing 소개 내용.

Chapter 3. Draw

 

Screen size가 200 x 200 이라면 좌표는 (0, 0) ~ (200, 200)까지임

 

**1\. Window 그리기**

size(800, 600);

 

**2\. Point 그리기**

size(800, 600);

point(240, 60);

//x = 240, y = 60

 

**3\. Line 그리기**

size(800, 600);

line(20, 50, 420, 110);

//x1 = 20, y1 = 50, x2 = 420, y2=110 (두 좌표)

 

**4\. Triangle 그리기**

triangle(x1, y1, x2, y2, x3, y3);

//꼭지점 세 개 좌표

 

**5\. Quad 그리기 (사각형)**

quad(x1, y1, x2, y2, x3, y3, x4, y4);

//네 개 점의 좌표

 

**6\. Rectangle 그리기 (직사각형)**

rect(x, y, width, height);

//x, y가 기준점, width : 기준점으로부터의 너비 (오른쪽), height : 기준점으로부터의 높이 (아래로)

 

**7\. Ellipse 그리기 (원 or 타원)**

ellipse(x, y, width, height);

//x, y가 원점, width는 가로 지름, height는 세로 지름

 

**8\. Arc 그리기 (호)**

arc(x, y, width, height, start, stop);

//x, y가 원점, width는 가로 지름, height는 세로 지름, start는 시작 각도(radian), end는 끝나는 지점의 각도(radian)

//시계에서 3이 가리키는 위치가 0이고 시계 반대방향으로 각이 증가함 (6시 방향 : HALF\_PI, 9시 방향 : PI, ...)

//degree와 radian 변환을 위한 radians 라는 함수 제공. HALF\_PI = radians(90);

 

**9\. Drawing Order**

Layer 쌓듯이 나중에 호출한 함수로 인해 그려지는 도형이 상위에 놓임

 

**10\. Smooth**

smooth() 함수 제공 (선의 끝을 부드럽게 만듬, 반대는 noSmooth())

 

**11\. Stroke weight**

선 굵기를 위한 strokeWeight 함수.

strokeWeight(8); //선의 굵기가 8 pixel

 

**12\. Stroke 속성**

strokeJoin : 선이 만나는 지점의 속성

strokeCap : 선의 시작과 끝 모양

strokeJoin(ROUND); //만나는 지점을 둥글게

strokeJoin(BEVEL); //만나는 지점을 Bevel로

strokeCap(SQUARE); //선의 시작과 끝을 사각형으로

strokeJoin(ROUND); //선의 시작과 끝을 둥글게

 

**13\. Color**

background, fill, stroke 함수로 색상 조절 가능

Black & White는 0 ~ 255로 (0이 Black, 255가 White)

 

마찬가지로 같은 함수를 이용해 RGB 값을 순서대로 설정 가능

background(0, 26, 51); //Dark blue (R : 0, G : 26, B : 51)

 

투명도는 fill, stroke 함수로 설정 가능하며 0 ~ 255의 값으로 설정 (0이 투명, 255가 불투명)

 

**14\. Custom shapes**

임의의 도형을 그리기 위해 beginShape, endShape, vertex 함수를 사용

begineShape로 도형을 그리는 시작을 알리고 vertex(x, y)로 점을 그림, 완료되면 endShape를 호출
