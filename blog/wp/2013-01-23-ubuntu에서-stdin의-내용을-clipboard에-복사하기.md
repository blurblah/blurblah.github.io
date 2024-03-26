---
title: "Ubuntu에서 stdin의 내용을 clipboard에 복사하기"
date: "2013-01-23"
categories: 
  - "server"
tags: 
  - "clipboard"
  - "command-line"
  - "stdin"
  - "terminal"
  - "ubuntu"
  - "xsel"
  - "복사"
---

Ubuntu를 사용중인데 terminal에서 작업을 하다 보니 command로 clipboard에 내용을 붙여넣을 일이 많다.

특히나 RSA key pair 등을 생성해서 공개키의 내용을 어딘가에 붙여넣어야 할 때.

방법 중에 하나가 xsel 이란 툴을 사용하는 것이다.

xsel을 terminal에서 입력해보면 현재 Ubuntu에 설치되어 있는지를 알 수 있는데 없다면 친절하게 설치하라고 메세지가 나온다.

메세지대로 설치하자.

\[shell\]

$ sudo apt-get install xsel

\[/shell\]

 

설치가 끝나고 나면 아래와 같은 command 사용이 가능하다.

\[shell\]

$ cat ~/.ssh/id\_rsa.pub | xsel --clipboard --input

\[/shell\]
