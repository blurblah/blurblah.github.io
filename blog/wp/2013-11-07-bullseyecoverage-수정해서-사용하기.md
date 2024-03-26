---
title: "BullseyeCoverage 수정해서 사용하기"
date: "2013-11-07"
categories: 
  - "sw-testing"
tags: 
  - "bullseye"
  - "coverage"
  - "covfile"
  - "environment-variable"
  - "libcov"
  - "libcov-posix-c"
---

**1\. BullseyeCoverage?**

BullseyeCoverage (이하 Bullseye)는 bullseye.com에서 판매하고 있는 C/C++ code의 coverage를 측정할 수 있는 툴로 C/C++이 동작하는 여러 환경에 따라 분석이 용이하게 되어있다.

Code coverage는 [Wikipedia](http://en.wikipedia.org/wiki/Code_coverage)에 설명된 대로 어느 정도로 테스트 되었는지를 나타내는 지표 중 하나로 실제 현업에서는 function coverage, condition/decision coverage, statement coverage를 주로 사용하게 되는 것 같다. 사실 SW testing이 개발 단계에서의 프로세스로 잘 자리잡고 있다면 coverage 라는게 여러 측면에서 활용도가 높을 수 있겠지만 경험상 많은 곳에서 활용되고 있는 것 같지는 않다. 또 그렇기 때문에 이런 툴을 담당하는 사람들 역시도 많지 않아 보인다. Google에서 검색을 하더라도 Bullseye에 대한 설정이나 troubleshooting에 대한 자료를 찾기가 쉽지 않은데 무언가를 개발하거나 어떤 툴을 사용할 때 보다 많이 애를 먹게 되었다. 사실 제일 도움이 많이 된 자료는 Bullseye.com의 [help page](http://bullseye.com/help/)와 개발자로 알려져 있는 Steve Cornett과 주고 받은 email 이었다.

**2\. 환경변수를 설정해야 한다**

Bullseye는 어찌보면 간단한 원리를 사용하고 있는데 C/C++ 소스를 컴파일할 때 컴파일러 이전에 Bullseye가 가지고 있는 covc란 파일을 실행함으로써 소스코드에 계측코드를 심은 후에 컴파일을 수행한다. 이렇게 컴파일된 소스들은 실제 runtime시에 계측코드를 호출하게 되고 계측코드는 cov라는 coverage 초기 정보를 담고 있는 파일 내부에 기록을 한다.

Coverage 측정 후에도 cov 파일의 크기에는 변함이 없는데 이는 이미 컴파일 단계에서 초기 정보를 기록한 cov 파일 내부의 data를 단순히 변경하기 때문이다.

Bullseye를 사용해서 컴파일(빌드)을 하고 나서 측정 전에 해야하는 중요한 일 중에 하나가 runtime 환경에서 계측코드가 읽어들일 수 있는 환경변수를 설정하는 것이다.

환경에 따라 차이는 있겠지만 보통 필수로 지정하게 되는 환경변수로 COVFILE이 있는데 이 변수에 계측코드가 호출되면서 기록할 cov 파일 경로(파일명 포함)를 지정하면 된다. (만약 COVFILE 환경변수가 없으면 기본적으로 /test.cov를 읽도록 되어있다.)

**3\. libcov를 수정하자**

가장 최근에 경험한 환경에서는 측정을 방해하는 몇가지 문제가 있었는데

(1) 환경변수 설정은 가능하지만 계측코드가 인식하지 못함

(2) 특정 경로 이외에는 쓰기 금지

(1)의 문제는 제공하는 환경변수 지정 방법 몇가지를 사용해 봤으나 계측코드가 절대 인식하지 못하는 상태였다. 왜 계측코드가 환경변수를 읽어들일 수 없었는지는 명확한 원인을 알 수는 없었는데 환경변수를 제대로 읽어들이고 있는지 로그를 추가해서 읽어들이지 못한다는 현상 자체는 파악할 수 있었다.

(2)의 문제는 여유없는 자원과 기타 보안을 이유로 만들어진 상황으로 내가 해결할 수는 없는 문제였고 다행히 쓰기가 가능한 경로를 파악하는 것 만으로 만족할 수 밖에 없었다.

테스트할 환경에서 환경변수 지정을 하지 못한다면, 하더라도 무의미하다면 어떤 방법을 사용할 수 있을까?

대략적인 원리만 알고 있는 상태였지만 Bullseye 설치 후 각 환경에 맞게 컴파일해서 라이브러리로 만들어야 하는 libcov 소스를 수정해 보기로 했다.

linux 환경이었기 때문에 정확히는 libcov-posix.c 파일이다. (Bullseye 설치 경로의 run 디렉토리 아래에 있음)

libcov-posix.c 파일을 열어보면 아래와 같은 함수를 볼 수 있다.

```c
static char* Libcov_genenv(const char* name)
{
  char* value = getenv(name);
  const int errnoSave = errno;
  if (value == NULL) {
    value = getenvFile(name, "/tmp/BullseyeCoverageEnv.txt");
  }
  if (value == NULL) {
    value = getenvFile(name, "/etc/BullseyeCoverageEnv.txt");
  }
  errno = errnoSave;
  ...
  ...
```

다른 함수들을 포함해서 보면 Bullseye는 환경변수에 등록된 COVFILE을 읽어들인 후에 유효하지 않으면 /tmp/BullseyeCoverageEnv.txt 파일을 읽어서 COVFILE 등의 환경변수를 읽는다. 이것 역시 유효하지 않으면 /etc 경로에 있는 같은 이름의 파일을 읽게 된다. 역시나 환경적인 이유로 /tmp나 /etc 경로를 사용할 수는 없었다. (/tmp는 reboot 시에 추가한 파일이 삭제되고, /etc는 쓰기 금지 영역)

그래서 결국은 쓰기가 가능한 경로를 지정해서 먼저 읽어들이도록 libcov-posix.c 파일을 수정해버렸고 측정시 정확히 COVFILE을 인식하는 걸 확인할 수 있었다.

(참고 : 실제 수정해서 사용한 Libcov\_getenv 함수는 별도 환경변수를 설정하지 않는 이상 초당 1회씩 호출되는 함수이다. Bullseye는 별도 설정이 없다면 초당 1회씩 COVFILE에 기록하려고 시도함)
