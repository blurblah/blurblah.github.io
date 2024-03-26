---
title: "GIT url 교체 설정 (url insteadOf)"
date: "2013-04-26"
categories: 
  - "others"
tags: 
  - "config"
  - "gerrit"
  - "git"
  - "global"
  - "insteadof"
  - "local"
  - "repo"
  - "system"
  - "url"
  - "url-교체"
  - "설정"
---

GIT 설정을 따로 할 일이 별로 없었는데 repo까지 사용하는 환경에서 자동화 하다보니 필요해졌고, [공식 페이지](http://git-scm.com/docs/git-config)가 진리라 따로 부연할 꺼리도 없지만 이번에 사용해 본 설정만이라도 정리해보기로 했다. 최소한 이런 설정을 어떤 경우에 사용할 수 있는지라도 설명이 될 수 있을 것 같다.

**1\. 상황**

언급했듯이 repo를 사용하는 환경이다. repo에 대해서 간단히 설명하자면, 여러개의 GIT 저장소를 가지고 빌드를 하거나 개발을 할 때 편의를 제공하기 위해 Google에서 만든 툴로 AOSP (Android Open Source Project)에서 사용되고 있다. Python으로 개발된 script의 모음이고 manifest 내부를 보면 어느 저장소를 어느 경로에 갖다 두는지에 대한 내용들이 주를 이루고 있다.

repo 이외에 Gerrit도 사용하고 있다. Gerrit은 역시 AOSP에서 사용되는 Code Review 툴로 code review 이외에 다른 기능을 위해 사용하는 것도 가능하다. (예를 들면 코드 검증, review 만을 위해서가 아니고)

저장소를 Gerrit에 연결하기 위해서는 Gerrit project로 등록을 해야 하는데, 등록이 되면 저장소 별로 따로 사용자 인증에 필요한 절차를 수행할 필요 없이 Gerrit에서 관리가 가능해진다.

이 부분도 Gerrit의 장점이라고 할 수 있다. GIT을 쓰면서 제일 불편한 것중 하나가 사용자 인증과 관리니까. 또 그래서 여러가지 툴들도 꽤 등장했다. Gitblit, Gitlab, 등등. 서비스에서도 그런 기능을 제공하기도 한다. 많이 쓰고 있는 github이 그 예가 될 것이고.

Gerrit 설정이 갑자기 바뀌면서 repo init을 할 때 command 형태를 변경해야만 했는데 (계정과 gerrit의 port를 추가해야 했다. 일반적으로 별도 설정없이 Gerrit을 그대로 쓰면 계정과 port 정보를 꼭 넣어줘야 하는데 이곳 환경에서는 최초에 없어도 되었었지만, 추가해야 하는 형태로 다시 변경되었음), 문제는 init을 하더라도 manifest 파일에는 계정과 port 정보가 빠져있는 형태의 대표 url만 기록되는 곳에서 발생했다. repo sync 이전에 manifest 파일을 열어서 fetch url 부분을 수정해야만 했다.

**2\. 조치**

원래 나와 같은 위치에 있는 사람들에겐, 대다수가 권한과 정보에 대해서 상당히 인색한 편이다. 아쉬울게 없다. 나만의 해결책을 만들어서 보고하고 마음에 들지 않으면 이슈로 제기하면 되니까. 그래서 처음엔 script를 만들었다. manifest 파일을 수정하는 script. 처음엔 만족스러웠지만 사실 manifest를 수정한다는건 (자동이든 수동이든) 부담도 있고 비효율적이다. 결국은 GIT config를 변경해서 script를 사용하지 않고도 문제를 해결할 수 있었다.

**3\. GIT config의 종류**

Gerrit / repo 모두 GIT을 사용하기 때문에 GIT 설정만으로도 위의 문제를 해결하는게 가능한데, 우선 GIT의 설정은 크게 세 가지로 나뉜다.

local, global, system 설정이 그것인데 각각 저장소 대상 개별 설정, 사용자 대상 설정, 전체 사용자(시스템) 대상 설정을 의미한다.

git config 명령에 option으로 설정 범위를 선택하는게 가능한데 설정된 내용은 각각 $GIT\_DIR/config, ~/.gitconfig, $(prefix)/etc/gitconfig 파일에 기록된다.

그러므로 config 명령을 사용하기 싫으면 각각의 파일을 직접 수정해도 무방하다.

**4\. GIT url insteadof 설정**

아래와 같은 형태의 설정을 하면 GIT으로 요청하는 모든 url 중에 해당되는 url을 대체하는게 가능하다

**url.\<base\>.insteadOf (당연히 대소문자 구분)**

예를 들어, http://test.com에 대한 요청을 ssh://test@test.com:29418 로 변경하고자 한다면 이렇게 설정하기만 하면 간단히 정리된다.

**git config --global url.ssh://test@test.com:29418.insteadOf http://test.com**

 

이렇게 해결.

그런데 설정 형식이 조금 못생겼다는 생각을 지울수가 없다. 마침표를 왜 넣지? 다른 방법도 있었을텐데.
