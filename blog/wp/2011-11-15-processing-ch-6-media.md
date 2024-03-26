---
title: "[Processing] Ch.6 Media"
date: "2011-11-15"
categories: 
  - "others"
tags: 
  - "data-visualization"
  - "font"
  - "image"
  - "media"
  - "shape"
---

Image 추가하는 방법. 단계별로 아래와 같은 절차를 따르면 된다.

1. Image를 data directory에 추가
2. PImage 변수 생성
3. loadImage()로 image를 load해 PImage 변수에 저장

만들어진 PImage 변수에 저장된 image를 그리기 위해서는 image 함수 이용.

image(image\_var, x\_coord, y\_coord)의 형태로 호출.

사이즈까지 지정하려면

image(image\_var, x\_coord, y\_coord, width, height) 형태로 호출.

지원하는 형태

JPEG, PNG, GIF

Font 추가 방법.

1. font를 data directory에 추가
2. PFont 변수 생성
3. loadFont()로 font load
4. textFont()로 현재 font를 설정

text() 함수로 글자를 표시하면 되는데 2번째, 3번째 parameter는 각각 x, y 좌표를 의미한다.

문자의 좌표는 문자의 좌측 하단을 기준으로 함.

Shape 추가 방법 (SVG, vector file)

1. SVG 파일을 data directory에 추가
2. PShape 변수 생성
3. loadShape()로 SVG 파일 load

그리는 함수 shape는 위의 loadImage와 동일한 형태.
