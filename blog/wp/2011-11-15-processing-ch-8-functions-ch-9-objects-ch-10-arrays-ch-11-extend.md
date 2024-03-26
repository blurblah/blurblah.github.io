---
title: "[Processing] Ch.8 Functions, Ch.9 Objects, Ch.10 Arrays, Ch.11 Extend"
date: "2011-11-15"
categories: 
  - "others"
tags: 
  - "3d"
  - "arrays"
  - "data-visualization"
  - "functions"
  - "image-export"
  - "library"
  - "objects"
  - "processing"
---

Ch.8 부터 Ch.10 까지는 각각 함수, 객체, 배열 생성과 사용에 대한 내용이 기술되어 있는데 기본 java 문법과 동일하다.

Ch.11에서 다루고 있는 확장에 대한 내용은 다른 library들을 사용하는 방법들에 대해 설명.

 

Download 가능한 library 경로

http://processing.org/reference/libraries

download 후 processing menu에서 import해 사용

 

3D

3D를 사용하기 위해서는 사용할 renderer를 선택해줘야 하며 z 좌표에 대한 값도 모든 함수에 추가된다.

화면 크기를 결정할 때 호출하는 size 함수에서 renderer를 선택한다.

(ex : size(440, 220, OPENGL)은 440x220 사이즈의 화면에서 OpenGL을 사용)

기본적으로 processing에서 2D는 JAVA2D renderer를 사용하고 있는데, quality를 낮추고 좀 더 빠르게 rendering 하고자 하면 P2D를 이용할 수 있고 3D를 위해서는 P3D 혹은 OpenGL 사용 가능

 

Image Export

현재 보여지고 있는 화면을 image 파일로 저장하기 위한 기능

saveFrame 함수를 사용하면 되는데 (인자는 저장할 파일 이름), draw 함수 내에서 사용할 경우 인자에 # (hash mark)를 붙이면 자동으로 현재의 frame number로 대체된다. 기본으로 png, jpg, tif 형태로 저장 가능.
