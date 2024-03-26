---
title: "Unix timestamp"
date: "2013-03-20"
categories: 
  - "others"
tags: 
  - "inqueuesince"
  - "jenkins"
  - "timestamp"
  - "unix"
---

Jenkins에서 시간값을 unix timestamp로 내주길래 (숫자 13자리) 기억이 가물거려 다시 찾아봤다.

Unix timestamp는 1970년 1월 1일을 시작으로 흐른 시간이며 단위는 seoncd이다.

32bit 환경에서는 10자리, 64bit에서는 20자리라고 하는데 Jenkins에서 13자리를 내 준 이유는 단위를 milli second로 잡았기 때문인 것 같다.

(Jenkins는 Java로 만들어졌고 java에서 timestamp를 처리하는 method 들의 기본단위가 milli second임)

변환은 Java native API에도 있고 참조 링크페이지에서도 가능하다. ([참조 링크](http://www.unixtimestamp.com/index.php))

나의 경우엔 알아보기 쉽게 변환할 필요는 없고 가장 작은 값이 가장 오래된 거라고 판단하면 되겠다.
