---
layout: post
title:  Differences of Ansible task importing modules / Nodebb APIs
date:   2017-12-12 18:47 +0900
categories: ansible import_tasks include_tasks include nodebb
---
<h4>Ansible task import 기능</h4>
Ansible에서 다른 파일에 기술된 task를 불러오기 위해서 기존에는 include 만으로 가능  
include가 deprecated 되면서 import_tasks or include_tasks를 사용해야 함 (2.4 이후)  
import_tasks와 include_tasks 모두 불러올 yml 파일만 지정하면 됨  
import_tasks는 static, include_tasks는 dynamic이라고 기술되어 있음  
불러올 yml 파일에 variable이 사용된 경우 import_tasks를 이용하면 오류 발생  
Variable이 사용된 경우 동적으로 변경되기 때문에 include_tasks를 사용해야만 한다.  

<h4>Nodebb 구조별 terms</h4>
게시판은 category  
게시물은 topic  
게시물을 구성하는 글(답글? 포함) post  
category > topic > post와 같은 구조  

<h4>Nodebb APIs</h4>
Nodebb는 URL이 resource를 표현하고 있기 때문에 api endpoint만 지정하고 나머지 url을 붙이면 가능함  
예를 들어, 메인 화면에 진입하면 category list가 보이는데 url이 http://nodebb_host/ 라면, 아래처럼 호출.

{% highlight bash %}
# category list sample
curl http://nodebb_host/api
{% endhighlight %}

Endpoint가 /api 인데, 다른 화면에서도 표시되는 url들을 endpoint와 조합하면 json 형태의 정보 획득 가능  
/api 호출시 나타나는 category list에서 특정 category의 게시물들을 보고 싶다면 해당 category의 slug값을 이용한다.  
예를 들어, Announcements category의 slug key의 값이 1/announcements 인 경우 해당 category의 게시물 리스트를 보고싶다면, 아래처럼 조합한다.  
<strong>API endpoint + /category/ + category slug</strong>

{% highlight bash %}
# post list of the category numbered 5 as cid
# category slug printed 5/posts got from above command
curl http://nodebb_host/api/category/5/posts
{% endhighlight %}

게시물 리스트를 얻어오고 나서 특정 게시물의 정보를 얻고싶다면 게시물 리스트의 item 별로 할당되어 있는 slug를 역시 이용하고 아래처럼 호출.  
<strong>API endpoint + /topics/ + topic slug</strong>

{% highlight bash %}
# topic information
# topic slug from above is 10/test-article-09
curl http://nodebb_host/api/topic/10/test-article-09
{% endhighlight %}
