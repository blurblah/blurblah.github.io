---
title: "Java BufferedReader의 read와 readline"
date: "2013-04-15"
categories: 
  - "others"
tags: 
  - "bufferedreader"
  - "java-2"
  - "jsp"
  - "local-file"
  - "read"
  - "reader"
  - "readline"
  - "파일-읽기"
---

JSP로 간단한 페이지를 만드는데 로컬에 있는 로그파일을 읽어서 화면에 보여주기로 했다.

이미 WAS의 context path 안에 있는 파일이고 txt 라서 url 호출만으로도 빠르게 파일 내용을 보여주는데는 문제가 없었는데, 정말 raw 파일이라서 보기도 힘들고 예쁘지 않아 table 안에 넣어서 보여주기로 결정했는데 단순하게 BufferedReader class에 있는 readline을 사용해보니 너무 느렸다.

속도도 문제였지만 로그파일이 보통 1MB 이상이고 반복적인 로딩이 예정된 상태라 과부하를 신경쓰지 않을 수 없는 상태여서 다른 방안을 생각할 수 밖에 없었다.

readline 함수는 BufferedReader 라는 클래스에 정의된 함수로 유사한 함수들이 많다. 그 중 read 라는 함수가 있는데 정의를 살펴봤는데, 우선 BufferedReader는 Reader 클래스를 상속한 함수로 Reader 클래스에 정의된 간단한 형태의 read(char\[\] cbuf)는 read(char\[\] cbuf, int off, int len)을 호출하도록 정의되어 있다. 그리고 read(char\[\] cbuf, int off, int len)은 abstract 함수로 각각의 서브클래스에서 정의되는 형태이다.

그래서 BufferedReader 클래스의 read와 readline을 비교해 본 결과 아래와 같은 차이를 발견할 수 있었다.

\- read는 loop 내부의 함수 호출이 작다.

\- readline은 loop 내부의 함수 호출이 많다

\- read는 system 함수나 원시 함수 위주의 호출

\- readline은 read 보다 상위의 함수나 클래스 사용

\- read는 buffer size 지정하지 않았을 때 기본 8K를 한꺼번에 읽어들임

\- readline은 size와 관계없이 line feed까지만 읽어들임

 

요약해보면, readline은 무조건 linefeed를 기준으로 읽어들이는데 동작 자체가 무겁고 read 함수는 정의된 block 단위로 읽어들이는데 정의된 동작 자체가 가볍다. 당연히 line이 많아질수록 readline 함수는 반복횟수가 많아질 수 밖에 없는 구조로 보이는데 이런 단순한 차이가 실제로는 체감할 수 있는 엄청난 차이를 가져오는 것 같다.

 

구현에 있어서 편의성과 가독성, 성능을 모두 고려해야 하겠지만, 그리고 고려하겠지만, 무작정 습관적인 사용과 맹목적인 신뢰는 언제나처럼 금기시해야 한다는 걸 느낀다.
