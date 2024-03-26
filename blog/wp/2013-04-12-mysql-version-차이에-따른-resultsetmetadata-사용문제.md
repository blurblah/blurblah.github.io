---
title: "MySQL version 차이에 따른 ResultSetMetaData 사용문제"
date: "2013-04-12"
categories: 
  - "server"
tags: 
  - "5-0-67"
  - "5-5-28"
  - "as"
  - "getcolumnlabel"
  - "getcolumnname"
  - "jdbc"
  - "mysql"
  - "resultsetmetadata"
  - "sql"
---

Java sql package 안에 ResultSetMetaData 라는 클래스가 존재한다.

ResultSet 으로부터 metadata 정보를 저장해놓고 사용할 수 있는 용도인데 정의된 함수 사용 중에 이상한 현상이 발견되어서 다른 함수를 사용하는 것으로 변경하게 되었다.

사용중인 DB는 MySQL로 테스트용으로는 5.5.28, 실제 DB는 5.0.67 이었는데 MySQL version 차이에 따라 함수 호출 결과가 달랐는데

정확히는 getColumnName 함수에서 이상한 현상을 발견할 수 있었다.

View table의 metadata를 읽어서 column name을 보면 AS로 이름을 변경한 column name이 원래 이름으로 나타나는 것이 아닌가.

그것도 테스트했던 상위 버전의 MySQL에서는 문제가 없었고 5.0.67 에서만 말썽이었다.

결국 호출하는 함수를 getColumnName에서 getColumnLabel로 변경하는 것으로 해결했다.

getColumnLabel은 AS로 이름을 변경하지 않은 column의 경우 getColumnName과 결과가 동일하다고 문서에 되어있으니 사용해도 무방할 듯 싶었고

사실 이런 경우 뿐만이 아니라 일반적인 경우에도 getColumnLabel을 사용하는게 정확한 방법일 것 같다.

 

그런데 왠지 column 이름을 얻을 때 getColumnLabel 보다 getColumnName을 호출하고 싶어진다.

이런게 함수 명명의 중요성?
