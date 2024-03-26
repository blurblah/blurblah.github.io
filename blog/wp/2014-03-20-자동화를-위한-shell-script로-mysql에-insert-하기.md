---
title: "(자동화를 위한) Shell script로 MySQL에 insert 하기"
date: "2014-03-20"
categories: 
  - "server"
tags: 
  - "automation"
  - "insert"
  - "mysql"
  - "script"
  - "shell"
  - "자동화"
---

빌드와 배포를 자동화하는 작업을 진행하는 도중에 Database에 data를 쓰고 업데이트 하는 기능이 필요하게 되었다. 이 경우 여러가지 방법이 있을 수 있지만 최대한 간단하게, 추가 개발없이 진행하고 싶었다. (Shell script에서)

**1\. 과거에 사용했던 방법들**

간단히 Java로 DB와 connection을 맺고 CRUD를 하는 모듈을 개발해서 사용했던 적이 있다. Jar로 묶어 놓으면 script에서는 jar에 parameter만 몇 개 넘겨서 실행하면 가능했다. 하지만 난 그 당시의 소스를 가지고 있지 않고 간단하더라도 개발을 추가로 하기가 귀찮았다. 시간도 없었고.

두번째로 groovy script를 사용했었다. Groovy 자체가 java와 유사한 부분이 많기 때문에 작성이 어렵지 않았고 그렇게 만들어진 groovy script를 shell에서 호출하는 것도 어렵지는 않다. 하지만 역시 추가로 script를 구현하는게 번거롭고 어딘가에 script를 보관하고 사용해야 한다는게 마음에 걸렸다. 난 단지 하나의 shell script로만 해당 기능을 구현하고 싶었다.

마지막으로 사용해봤던 방법은 REST API를 구현하고 shell script에서는 curl을 이용해 REST API를 호출하는 방법인데, 꽤 괜찮은 방법이 아닌가 생각했었지만 역시 REST API를 구현해야 하는 부담이 있었다. 하지만 대규모 개발이 아니라면 node.js로 충분히 할만하다. (간단하면 개발하는데 그리 오래 걸리지도 않는다)

**2\. Command line에서 query 실행하기**

그동안 사용할 일이 없었기 때문에 MySQL client 실행옵션 중에 -e가 있다는 걸 이번에 알았다. -e 옵션은 뒤에 오는 query 문을 실행해주는 역할을 하는데 이 옵션만 사용하더라도 단 한 줄의 명령으로 원하는 기능을 수행하게 만들 수 있다.

**3\. Password prompt**

한 줄의 명령으로 원하는 기능에 근접했지만 항상 password prompt가 뜨는 문제에 봉착했다. expect를 사용하거나 하면 되겠지만 그것보다 간단한 방법을 원했다. 그리고 찾은게

mysql -uuser\_id -ppassword

\-p 옵션에 password를 붙여쓰면 따로 묻지 않는다. 그 사이에 공백이 있다면 password prompt를 띄우라는 걸로 인식하고 뒤에 있는 password를 사용하려는 DB schema로 인식한다.

**4\. Inserted id를 알고 싶어요**

또 다른 문제. DB에 insert 하고 특정 작업 이후에 insert된 레코드를 update 해야 했는데 id 이외에 유일한 값을 특정하기가 어려웠다. 강제로라도 유일한 값을 만들수는 있을 것 같았는데 그것을 위해 DB 구조를 변경해야 할 것 같아서 마음에 들지 않았다. 그래서 생각한 방법은 insert 이후에 아래의 query를 바로 실행하는 것이었다.

select last\_insert\_id();

마지막으로 추가된 id를 알려준다.

**5\. Shell script에서 text로 된 query 결과를 parsing 해야 하는가?**

위의 문제를 해결하니 다른 문제가 등장했다. MySQL client에서 직접 select query를 실행하면 결과를 mysql만의 형태로 돌려준다는 것이었다. Json이나 xml과 같은 정규화된 문자열이 아니라 특수문자로 column의 경계가 그려진 문자열들. 처음엔 이것을 parsing 해야 하나 생각했는데 말도 안되는거라 생각했다. 의미도 없고. 그래서 찾은게 -s와 -N 옵션인데, -s는 silent를 -N은 column name 출력을 하지 않는다. 어차피 마지막에 추가된 id만 알면 되기 때문에 column은 단 하나뿐이고 진정 내가 원하는 것은 그 column의 값일 뿐이다. 두 옵션을 사용해 query를 실행하면 id만 달랑 떨어진다.

**6\. 결과**

mysql -uuser\_id -ppassword db\_schema -s -N -e "insert\_query\_with\_last\_insert\_id"

위의 형태로 실행하면 password를 묻지도 않고 insert를 한 후 추가된 id만 받을 수 있다. 단 한줄만으로.

Password가 공개될 여지가 있는데 insert 하려는 값을 parameter로 받는 별도의 script 파일로 만들어서 읽기권한을 제어하는 방법을 사용하는게 어떨까 생각한다. 그게 간단하니까.
