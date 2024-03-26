---
title: "GIT sharedRepository 설정"
date: "2013-08-29"
categories: 
  - "others"
tags: 
  - "config"
  - "failed-to-write-object"
  - "git"
  - "group"
  - "sharedrepository"
  - "umask"
---

Git을 사용하면서 여러명의 사용자가 하나의 저장소에 push를 할 때 종종 오류와 함께 push가 안되는 상황이 발생한다.

(fatal: failed to write object 와 같은 오류가 발생하는 경우임)

원인은 push할 원격 저장소(.git)의 objects에 파일을 써야 하는데 권한이 없기 때문인데

이미 objects를 A라는 사람의 이름으로 생성을 했는데 B라는 사용자가 같은 파일에 대한 쓰기를 시도(A가 이전에 만든 파일을 수정해서 push)하게 되고

이 때 objects의 파일들이 group이나 others에 대한 쓰기 권한이 없는 상태인 경우이다.

Linux에서 umask를 적절히 변경해서 사용하고 있고 사용자에 대한 기본그룹이 사용자 계정이 아닌 공통으로 사용하는 그룹으로 지정되어 있다면 문제가 없다.

이와 관련한 git의 config가 있는데 바로 core.sharedRepository이다. (참조 : [http://git-scm.com/docs/git-config](http://git-scm.com/docs/git-config))

옵션에 대한 값은 group (true), all (world, everybody), umask (false) 까지 제공되는데 group이나 true로 했을 경우 저장소 내에 파일 생성시 그룹 쓰기 권한을 세팅하게 되고, all은 모든 사용자가 읽기 가능 + 그룹쓰기 권한, umask나 false로 설정시 umask 값에 따라서 권한 설정을 하게 된다. Default는 umask (false).

 

이 옵션을 설정하지 않았다 하더라도 umask와 기본 그룹 설정만 하면 되니 별 문제가 없는게 일반적인데 가끔 신규 서버 구축시 기본그룹 설정을 잊어버렸다면 써먹을만 하다.

git 자체가 사용자 관리에 대한 제대로 된 기능이 없다보니 그래도 가장 좋은 방법은 사용자 관리가 손쉬운 다른 tool을 함께 사용하는 방법이라고 본다.
