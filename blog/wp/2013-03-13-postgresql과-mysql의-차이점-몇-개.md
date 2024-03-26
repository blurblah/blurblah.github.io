---
title: "PostgreSQL과 MySQL의 차이점 몇 개"
date: "2013-03-13"
categories: 
  - "server"
tags: 
  - "access-denied"
  - "access-grant"
  - "auto-increment"
  - "mysql"
  - "pg_hba-conf"
  - "postgresql"
  - "sequence"
  - "자동-증가"
---

국내에서는 많이 사용하지 않는 Open source RDBMS인 PostgreSQL을 잠깐 사용해 볼 일이 생겼다.

설치는 어렵지 않았는데, 테이블 생성할 때 까지 몇가지 생소한게 있었다.

**1\. 접근 권한**

PostgreSQL이 설치된 장비에서 관리도구로 접속하는건 문제가 없는데 다른 장비, PC에서 접속하는건 불가능했다.

이유는 pg\_hba.conf 라는 설정파일에 존재하는 접근 권한이 기본은 다른 장비에 대해서는 막고 있기 때문이었는데 접속하려는 장비의 IP 대역이나 고정된 IP 값으로 풀어줘야 한다.

pg\_hba.conf 파일 위치도 처음엔 몰라서 헤맸는데 설치 경로의 data directory 안에 존재한다.

OS X에서 설치했을 땐 data directory의 owner와 group이 PostgreSQL에서 관리되는 계정과 그룹이라 sudo 권한으로 vi 편집기로 수정해서 사용할 수 밖에 없었는데, 기본 제공되는 관리도구인 pgAdmin이 보여준 몇 가지 문제점 때문이기도 했다.

**2\. Auto increment**

MySQL에서는 column 생성할 때 auto increment 속성 지정이 가능했던 것으로 기억한다. 속성을 지정하면 따로 값을 insert 하지 않아도 초기값부터 증분만큼 자동 증가하게 되어있는데 PostgreSQL은 아무리 뒤져도 그런 속성이나 혹시나 해서 찾아본 data type에도 존재하지 않았다.

PostgreSQL에서는 auto increment 하기 위한 sequence 라는 것을 먼저 정의하고 column 생성시 그 sequence를 nextval 이라는 내장 함수로 호출하도록 해야 한다.

 

**결론**

잠깐 살펴봤을 때 PostgreSQL은 전체적으로 관리나 DB 설계 측면에서 좀 더 세밀한 설정과 구축을 하도록 권유하는 느낌이다.

PostgreSQL과 MySQL의 장단점, 뭐가 좋으냐 나쁘냐를 두고 인터넷 여기저기에서 말이 많은데, 결국은 일정과 규모에 따라서 나에게 익숙하거나 trouble shooting에 필요할지 모를 reference가 많으냐 적으냐에 따라서 골라쓰면 되지 않을까? 라는 생각을 잠깐 해본다. DB만 전문적으로 하시는 분들은 뭣도 모르는 소리라고 할지 모르겠지만 나 같은 초보자야 뭐.

 

Updated : 2013-04-16

serial과 bigserial type은 true type은 아니고 각각 4byte와 8byte data 저장이 가능하다. [PostgreSQL Document](http://www.postgresql.org/docs/8.4/static/datatype-numeric.html)에 따르면 다른 RDBMS의 auto\_increment와 유사한 속성을 가지는데 아래의 두 query가 동일한 의미를 갖는다고 되어있다.

```
CREATE TABLE tablename (
    colname SERIAL
);


```

```
CREATE SEQUENCE tablename_colname_seq;
CREATE TABLE tablename (
    colname integer NOT NULL DEFAULT nextval('tablename_colname_seq')
);
ALTER SEQUENCE tablename_colname_seq OWNED BY tablename.colname;
```

 

댓글을 달아주신 분의 말씀처럼 auto\_increment 대신 사용이 가능하다.
