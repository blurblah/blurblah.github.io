---
title: "svnsync 명령을 이용해 SVN mirroring 하기"
date: "2012-06-29"
categories: 
  - "others"
tags: 
  - "linux"
  - "mirroring"
  - "subversion"
  - "svn"
  - "svnsync"
  - "미러링"
---

이런저런 연유로 SVN Server에 직접 접근은 불가능하고 mount를 이용해 file로 접근 가능한 방법을 찾아야만 하는 상황이 생겼다.

그래서 사용하게 된 방법이 SVN mirroring.

미러링에도 여러가지 방법이 있으나 그 중에서 svnsync를 사용하기로 했고 아래처럼 해서 성공.

원격에 있는 SVN 저장소를 $REPO라고 가정하고

로컬에 미러링할 경로를 $MIRROR라고 하자.

**1\. 우선 빈 저장소를 하나 생성한다.**

svnadmin create $MIRROR

**2\. 오류없이 생성되었다면 $MIRROR/hooks 경로에 pre-revprop-change 라는 파일을 하나 생성한다.**

hook에 가보면 임시 파일도 있으니 이용해도 되고 exit 0; 으로 종료되는 파일을 생성해줘도 된다.

pre-revprop-change 라는 파일은 revision 정보가 바뀔 때 실행되는 파일로 보이는데 svnsync 자체를 제한한다거나 하는 용도로 이용 가능.

예를 들어 아래와 같은 내용을 추가해두면 svnsync를 userA 이외에는 사용 못하게 할 수 있다.

(userA가 아닌 경우 실행시 메세지를 출력하고 1을 리턴하면서 실패로 종료됨)

#!/bin/sh USER="$3" if \[ "$USER" = "userA" \]; then exit 0; fi echo "Only the userA user can change revprops" >&2 exit 1

**3\. 그 이후에 실행 권한을 부여한다.**

chmod +x $MIRROR/hooks/pre-revprop-change

**4\. 그 다음은 svnsync 초기화 작업. (원격 SVN 저장소와의 초기화)**

svnsync init --username userA file://$MIRROR $REPO

**5\. 마지막으로 동기화하라고 아래처럼 명령을 내리면 원격 저장소에 있는 내용과 동기화를 하게 된다.**

svnsync sync file://$MIRROR

 

문제 중 하나는 sync 명령을 내릴 때만 동기화를 하지 자동으로 동기화를 진행하지는 않는다는건데

post-commit을 이용해 commit 발생시 동기화를 시키도록 스크립트를 만들던지 크론탭 등의 스케줄러를 이용하는 방법을 이용해야 할 것으로 보임.
