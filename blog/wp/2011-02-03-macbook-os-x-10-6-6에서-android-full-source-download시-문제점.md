---
title: "Macbook (OS X 10.6.6)에서 Android Full source download시 문제점"
date: "2011-02-03"
categories: 
  - "android-app-dev"
tags: 
  - "android"
  - "build"
  - "download"
  - "froyo"
  - "git"
  - "libsdl"
  - "mac"
  - "os-x"
  - "source"
---

개인적인 사정으로 맥북에서 Android full source를 다운받아서 빌드할 일이 생겼다. Google에서 Mac OS X의 경우에 어떻게 다운로드해서 빌드해야 하는지 설명하고 있지만 그대로 진행했을 경우에 문제점들이 몇가지 있어서 그 부분에 대해 정리해볼까 한다.

 

우선 문제점들이 발생하는 이유는 시간이 흘러서 변경사항이 생겼거나 개인의 환경설정 차이에서 기인하는 것으로 보이는데 일단 내 기준으로 환경을 요약하면 아래와 같다.

OS X 10.6.6, JDK 6 (OS에 기본적으로 탑재된 상태), Macports 설치됨.

Download 참조 페이지 : [http://source.android.com/source/download.html](http://source.android.com/source/download.html)

 

**#1. 첫번째 문제**

위의 페이지대로 진행하다보면 terminal에서 아래와 같은 command를 입력해야 하는 부분이 있다.

```bash
$ POSIXLY_CORRECT=1 sudo port install gmake libsdl git-core gnupg
```

 

설치된 macports로 gmake, libsdl, git-core, gnupg를 내려받아 설치하는 command인데 나의 경우엔 libsdl 설치 도중 오류와 함께 중단되는 경우가 발생했다. Command 포함 오류 메세지는 아래와 같음.

 
```bash
$ POSIXLY_CORRECT=1 sudo port install gmake libsdl git-core gnupg
--->  Computing dependencies for gmake
--->  Cleaning gmake
--->  Computing dependencies for libsdl
--->  Dependencies to be installed: xorg-libXext xorg-libX11 xorg-libxcb python27 db46 gdbm openssl zlib readline sqlite3 xorg-libpthread-stubs xorg-xcb-proto libxml2 xorg-util-macros xorg-xcmiscproto xorg-xextproto xorg-xf86bigfontproto xorg-xtrans xorg-libXrandr xorg-randrproto xrender xorg-renderproto
--->  Configuring db46
Error: db46 requires the Java for Mac OS X development headers.
Error: Download the Java Developer Package from: <https://connect.apple.com/cgi-bin/WebObjects/MemberSite.woa/wa/getSoftware?bundleID=20719>;
Error: Target org.macports.configure returned: missing Java headers
Error: Failed to install db46
Log for db46 is at: /opt/local/var/macports/logs/_opt_local_var_macports_sources_rsync.macports.org_release_ports_databases_db46/main.log
Error: The following dependencies were not installed: xorg-libXext xorg-libX11 xorg-libxcb python27 db46 gdbm openssl zlib readline sqlite3 xorg-libpthread-stubs xorg-xcb-proto libxml2 xorg-util-macros xorg-xcmiscproto xorg-xextproto xorg-xf86bigfontproto xorg-xtrans xorg-libXrandr xorg-randrproto xrender xorg-renderproto
Error: Status 1 encountered during processing.
To report a bug, see <http://guide.macports.org\/#project.tickets>;
```
 

문제가 되는건 libsdl 설치할 때 dependency를 가진 다른 모듈들을 설치하는데 db46 이란 녀석이 말썽인거다. 왜 이런 일이 생기는 걸까? 위의 오류 메세지 중에 보면 Download the Java Developer Package from: 어쩌구 하는 부분(빨간색)이 있는데 위의 url로 다운받을 때 문제가 생기는 것으로 보인다. 여기저기 찾아보니 아마 apple 내부에서 어떠한 이유로 url을 변경한 것으로 생각되는데 실제로 위의 url을 입력해보면 redirect 되어 다른 페이지로 이동되는걸 확인할 수 있다. macports는 그 작업을 해주지 않는 것으로 생각되기 때문에 당연히 실패로 끝나는거고.

 

해결책은 무척 간단하다. 위의 문제가 되는 url을 직접 입력해 redirect 되는 페이지에 접근해보면 download 할 수 있게 되어있으니 직접 download 하고 설치하면 끝. 그리고 다시 위의 command를 입력해 진행하면 문제없이 모든게 설치된다.

 

**#2. 두번째 문제**

또 하나 알게된 사실은 Google에서 제공하는 git repository에서 source를 다운받는데 특정 branch가 사라졌다는 거. Source 다운로드를 위한 모든 잡다구레한게 제대로 설치된 상태에서 repo를 만들기 위해 아래와 같은 command를 입력하라고 google에서 친절하게 알려주고 있다.

```bash
$ repo init -u git://android.git.kernel.org/platform/manifest.git -b cupcake
```
 

위의 command는 cupcake branch만 다운로드 하기 위해서 repo를 만드는건데, google의 설명을 보면 mainbranch를 원하면 -b 옵션없이 입력하라고 되어있다. 난 gingerbread 까지는 필요없었고 froyo가 적당하다고 판단했기 때문에 -b froyo라고 입력했는데 이런. 오류가 막 생긴다. 역시 찾아보니 froyo라는 branch를 없앤걸로 보이는데 대신 froyo-plus-aosp 라는 이름의 branch 사용은 가능하다. 역시 -b froyo-plus-aosp 로 입력하면 정상적으로 다운로드 가능. 근데 왜 froyo branch를 없앤걸까??

 

 

**참조**

1\. Failed to install db46 (for git-core) : [http://comments.gmane.org/gmane.os.apple.macports.user/22266](http://comments.gmane.org/gmane.os.apple.macports.user/22266)

2\. Failed to get froyo : [http://groups.google.com/group/android-porting/browse\_thread/thread/1dc55cf079291abc/ab1a9ee55681f95f?show\_docid=ab1a9ee55681f95f#](http://groups.google.com/group/android-porting/browse_thread/thread/1dc55cf079291abc/ab1a9ee55681f95f?show_docid=ab1a9ee55681f95f#)
