---
title: "Ubuntu에서 apt server 변경"
date: "2013-08-29"
categories: 
  - "server"
tags: 
  - "apt-get"
  - "ftp-daum-net"
  - "install"
  - "kr-archive-ubuntu-com"
  - "sources-list"
  - "ubuntu"
  - "update"
---

Ubuntu 설치를 하면 apt-get으로 package를 받아오는 서버가 기본적으로 kr.archive.ubuntu.com으로 설정된다.

kr.archive.ubuntu.com에 어떤 이슈가 있는지는 모르겠지만 가끔씩 연결이 안되는 경우가 발생하곤 한다.

게다가 속도도 느리다. (내 환경에서는 다운로드 속도가 초당 100 ~ 200KB 정도)

느리고 불안정한데 바꿔주자.

/etc/apt/sources.list 파일을 열어 kr.archive.ubuntu.com들을 모두 ftp.daum.net으로 변경한다.

변경한 이후에는 sudo apt-get update를 꼭 실행해야 이후 package install에 문제가 없다.

ftp.daum.net으로 변경한 이후 속도는 초당 약 3MB 정도로(나의 경우) 과거보다는 좋아짐.

 

**난 왜 바꿨는가?**

kr.archive.ubuntu.com을 아무 생각없이 사용하는데 install이 안되는 경우가 발생했고 ftp.daum.net으로 변경하니 잘 되서. 빠르고.
