"use strict";(self.webpackChunkblurblah_github_io=self.webpackChunkblurblah_github_io||[]).push([[27243],{27420:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var l=n(74848),t=n(28453);const a={title:"MySQL replication\uc744 \ud574\ubcf4\uc790 - \ub450\ubc88\uc9f8",date:"2017-02-06",categories:["devops"],tags:["log-slave-updates","mysql-replication","slave-\ucd94\uac00"]},i=void 0,r={permalink:"/2017/02/06/wp/mysql-replication\uc744-\ud574\ubcf4\uc790-\ub450\ubc88\uc9f8",source:"@site/blog/wp/2017-02-06-mysql-replication\uc744-\ud574\ubcf4\uc790-\ub450\ubc88\uc9f8.md",title:"MySQL replication\uc744 \ud574\ubcf4\uc790 - \ub450\ubc88\uc9f8",description:"\uc9c0\ub09c \uae00\uc5d0 \uc774\uc5b4\uc11c \uc774\ubc88\uc5d4 \uc57d\uac04 \ub2e4\ub978 \ub0b4\uc6a9\uc744 \uc815\ub9ac.",date:"2017-02-06T00:00:00.000Z",formattedDate:"February 6, 2017",tags:[{label:"log-slave-updates",permalink:"/tags/log-slave-updates"},{label:"mysql-replication",permalink:"/tags/mysql-replication"},{label:"slave-\ucd94\uac00",permalink:"/tags/slave-\ucd94\uac00"}],readingTime:4.475,hasTruncateMarker:!1,authors:[],frontMatter:{title:"MySQL replication\uc744 \ud574\ubcf4\uc790 - \ub450\ubc88\uc9f8",date:"2017-02-06",categories:["devops"],tags:["log-slave-updates","mysql-replication","slave-\ucd94\uac00"]},unlisted:!1,prevItem:{title:"MySQL replication\uc744 \ud574\ubcf4\uc790 \u2013 \ub85c\ub4dc\ubc38\ub7f0\uc2f1",permalink:"/2017/02/08/wp/mysql-replication\uc744-\ud574\ubcf4\uc790-\ub85c\ub4dc\ubc38\ub7f0\uc2f1"},nextItem:{title:"MySQL replication\uc744 \ud574\ubcf4\uc790",permalink:"/2017/02/01/wp/mysql-replication\uc744-\ud574\ubcf4\uc790"}},o={authorsImageUrls:[]},c=[{value:"1. Slave \ucd94\uac00",id:"1-slave-\ucd94\uac00",level:4},{value:"2. Slave =&gt; master \ubcc0\uacbd\uc744 \uc704\ud55c \uc900\ube44",id:"2-slave--master-\ubcc0\uacbd\uc744-\uc704\ud55c-\uc900\ube44",level:4},{value:"3. \ub354 \uc0dd\uac01\ud574 \ubcfc \ubb38\uc81c\ub4e4",id:"3-\ub354-\uc0dd\uac01\ud574-\ubcfc-\ubb38\uc81c\ub4e4",level:4}];function p(e){const s={a:"a",code:"code",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.a,{href:"http://13.125.231.217/1490",children:"\uc9c0\ub09c \uae00"}),"\uc5d0 \uc774\uc5b4\uc11c \uc774\ubc88\uc5d4 \uc57d\uac04 \ub2e4\ub978 \ub0b4\uc6a9\uc744 \uc815\ub9ac."]}),"\n",(0,l.jsx)(s.p,{children:"\xa0"}),"\n",(0,l.jsx)(s.h4,{id:"1-slave-\ucd94\uac00",children:"1. Slave \ucd94\uac00"}),"\n",(0,l.jsx)(s.p,{children:"\uc774\uc804 \uadf8\ub9bc\uc744 \ub2e4\uc2dc \uaebc\ub0b4\ubcf4\uba74 slave\ub294 2\uac1c\uc778\ub370 \uc9c0\ub09c\ubc88\uc5d0\ub294 slave\ub97c \ud558\ub098\ub9cc \ub9cc\ub4e4\uc5b4\ub450\uace0 replication \ud558\ub3c4\ub85d \ud574\ub450\uc5c8\uc5c8\ub2e4."}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.a,{href:"http://13.125.231.217/wp-content/uploads/2017/01/db_replication.png",children:(0,l.jsx)(s.img,{src:n(41479).A+"",width:"483",height:"462"})})}),"\n",(0,l.jsx)(s.p,{children:"Slave\ub97c \ucd94\uac00\ud558\ub824\uba74 \uc5b4\ub5bb\uac8c \ud574\uc57c\ud560\uae4c? \ucc98\uc74c slave#1\uc744 \uad6c\uc131\ud560 \ub54c\uc5d0\ub294 snapshot \uc801\uc6a9\uc744 \uc704\ud574\uc11c master\ub97c \uc77c\uc2dc\uc801\uc73c\ub85c \uc911\ub2e8\ud558\uac70\ub098 lock\uc744 \uac78\uace0 dump\ub97c \ub5a0\uc57c\ud588\ub294\ub370 \uc774\ubbf8 \uc874\uc7ac\ud558\ub294 slave\uac00 \uc788\uc73c\ub2c8 master\ub294 \uac74\ub4dc\ub9b4 \ud544\uc694\ub294 \uc5c6\ub2e4. \uc544\ub798\uc758 \uc21c\uc11c\ub300\ub85c \uc9c4\ud589."}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"(1) Slave #1\uc758 mysql\uc5d0 \uc811\uc18d \ud6c4 \uc544\ub798\uc758 \ucffc\ub9ac \uc2e4\ud589\ud558\uace0 mysql \uc911\uc9c0"})}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{children:"STOP SLAVE;\n"})}),"\n",(0,l.jsx)(s.p,{children:"Replication \ud558\uace0 \uc788\ub358 slave #1\uc5d0 \uc874\uc7ac\ud558\ub294 data\uc758 snapshot\uc744 \ub9cc\ub4e4\uae30 \uc704\ud574 \ud544\uc694\ud558\ub2e4."}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"(2) DB datafile \ubcf5\uc0ac"})}),"\n",(0,l.jsx)(s.p,{children:"DB file\uc774 \ubaa8\uc5ec\uc788\ub294 \ub514\ub809\ud1a0\ub9ac\uc5d0 \ubcf4\uba74 master.info \ud30c\uc77c\uc774 \uc788\ub294\ub370 master \uc811\uc18d \uc815\ubcf4\ub098 \ub9c8\uc9c0\ub9c9 replication \ud588\ub358 position \uc815\ubcf4\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\ub2e4. \ubaa8\ub4e0 \ud30c\uc77c\ub4e4\uc744 slave #2\uc758 db file \uacbd\ub85c\ub85c \ubcf5\uc0ac\ud55c\ub2e4."}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:"(3) Slave #1\uc758 mysql\uc744"}),"\xa0",(0,l.jsx)(s.strong,{children:"\uc2dc\uc791\ud558\uace0 \uc544\ub798\uc758 \ucffc\ub9ac \uc2e4\ud589"})]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{children:"START SLAVE;\n"})}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"(4) Slave #2\uc5d0\uc11c my.cnf \ud30c\uc77c\uc758 server-id \ubcc0\uacbd"})}),"\n",(0,l.jsx)(s.p,{children:"Master\uc758 server-id\ub97c 1, slave #1\uc740 2\ub85c \ud588\uae30 \ub54c\ubb38\uc5d0 slave #2\ub294 3\uc73c\ub85c \uc9c0\uc815\ud588\ub2e4."}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"(5) Slave #2\uc5d0\uc11c (3)\uacfc \ub3d9\uc77c\ud558\uac8c slave \uc2dc\uc791 \ucffc\ub9ac\ub97c \uc2e4\ud589"})}),"\n",(0,l.jsx)(s.p,{children:"\xa0"}),"\n",(0,l.jsxs)(s.p,{children:["\uc815\ub9ac\ud558\uba74 snapshot\uc744 slave #1\uc5d0\uc11c \uac00\uc838\uc624\ub294\ub370 master.info\uc5d0 position \uc815\ubcf4\uae4c\uc9c0 \ub4e4\uc5b4\uc788\uc73c\ub2c8 \ub2e8\uc21c\ud788 start slave\ub9cc \ud574\uc8fc\uba74 \ub9c8\uc9c0\ub9c9 position \uc774\ud6c4\ubd80\ud130 replication\uc744 \uc9c4\ud589\ud558\uac8c \ub41c\ub2e4. Slave #2\uac00 \uc815\uc0c1\uc801\uc73c\ub85c replication \ud558\ub294\uc9c0 \uc5ec\ubd80\ub294\xa0",(0,l.jsx)(s.a,{href:"http://13.125.231.217/1490",children:"\uc9c0\ub09c \uae00"}),"\uc5d0 \uae30\uc220\ud588\ub358 \ubc29\ubc95\uc73c\ub85c \ud655\uc778\ud560 \uc218 \uc788\ub2e4."]}),"\n",(0,l.jsx)(s.p,{children:"\xa0"}),"\n",(0,l.jsx)(s.h4,{id:"2-slave--master-\ubcc0\uacbd\uc744-\uc704\ud55c-\uc900\ube44",children:"2. Slave => master \ubcc0\uacbd\uc744 \uc704\ud55c \uc900\ube44"}),"\n",(0,l.jsxs)(s.p,{children:["Master\uc5d0 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud55c \uacbd\uc6b0 replication \ud558\uace0 \uc788\ub358 slave\ub97c master\ub85c \ubcc0\uacbd\ud574\uc57c \ud560 \ud544\uc694\uac00 \uc788\uc744 \uc218 \uc788\ub2e4. \uc774 \ub54c\ub97c \uc704\ud574 slave #1\uc5d0 log-slave-updates \uc635\uc158\uc744 \uc801\uc6a9\ud574\ub450\uc5c8\ub2e4. ",(0,l.jsx)(s.a,{href:"https://dev.mysql.com/doc/refman/5.5/en/replication-options-slave.html#option_mysqld_log-slave-updates",children:"\uacf5\uc2dd\ubb38\uc11c"}),"\ub97c \ubcf4\uba74 slave\uac00 \ubc14\uc774\ub108\ub9ac \ub85c\uadf8\ub97c \uc0dd\uc131\ud558\ub77c\uace0 \uc54c\ub824\uc8fc\ub294 \uc635\uc158\uc774\uace0 log-bin\uacfc \ud568\uaed8 \uc0ac\uc6a9\ud574\uc57c \ud55c\ub2e4\uace0 \ub418\uc5b4\uc788\ub294\ub370 slave\uac00 SQL thread\uac00 \uc2e4\ud589\ub420 \ub54c\uc758 \ubcc0\uacbd\uc0ac\ud56d\ub4e4\uc744 \uae30\ub85d\ud558\ub294 \uc5ed\ud560\uc744 \ud558\ub3c4\ub85d \ud55c\ub2e4. \uc774\uc81c log-slave-updates, log-bin \uc635\uc158\uc774 \uc801\uc6a9\ub41c slave #1\uc740 master\uc774\uc790 \ub3d9\uc2dc\uc5d0 slave\ub85c \ub3d9\uc791\ud55c\ub2e4."]}),"\n",(0,l.jsx)(s.p,{children:"\xa0"}),"\n",(0,l.jsx)(s.h4,{id:"3-\ub354-\uc0dd\uac01\ud574-\ubcfc-\ubb38\uc81c\ub4e4",children:"3. \ub354 \uc0dd\uac01\ud574 \ubcfc \ubb38\uc81c\ub4e4"}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"(1) Master \ubcc0\uacbd\uc2dc\uc5d4 \uc5b4\ub5bb\uac8c?"})}),"\n",(0,l.jsx)(s.p,{children:"\uc544\uc9c1 slave \uc0c1\ub2e8\uc5d0 \ub85c\ub4dc\ubc38\ub7f0\uc11c\ub97c \ub450\ub294 \ub0b4\uc6a9\uc744 \uc801\uc9c0\ub294 \uc54a\uc558\uc9c0\ub9cc slave \ub450 \uac1c\ub97c \ub85c\ub4dc\ubc38\ub7f0\uc2f1 \ud558\uace0 \uc788\ub294 \uc0c1\ud0dc\uc5d0\uc11c master\uc5d0 \ubb38\uc81c\uac00 \uc0dd\uaca8 slave #1\uc744 master\ub85c \ubcc0\uacbd\ud560 \uacbd\uc6b0 \uc5b4\ub5bb\uac8c \ucc98\ub9ac\ub97c \ud560\uc9c0 \uace0\ubbfc\ud574 \ubd10\uc57c \ud560 \uac83 \uac19\ub2e4. \uc0c1\ub2e8\uc5d0 Read\uc640 CUD \uc694\uccad\uc744 \ubd84\uae30\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574\uc11c\ub3c4 \uc0b4\ud3b4\ubd10\uc57c \ud560 \uac83 \uac19\ub2e4."}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"(2) Replication lag"})}),"\n",(0,l.jsx)(s.p,{children:"Replication \uacfc\uc815\uc774 \uc9c0\uc5f0\ub418\ub294 \uacbd\uc6b0\ub4e4\uc774 \ubc1c\uc0dd\ud558\ub294 \uac83 \uac19\uc740\ub370 master\uc640 slave \uc0ac\uc774\uc758 \uac04\uaca9\uc774 \ub113\uc5b4\uc9c8\uc218\ub85d \uc88b\uc9c0 \uc54a\uc744 \uac83 \uac19\ub2e4. \ud504\ub85c\ub355\uc158 \ub808\ubca8\uc5d0\uc11c \uacbd\ud5d8\ud560 \uc218 \uc788\ub294 \ub0b4\uc6a9\uc774 \uc544\ub2cc\uac00 \uc2f6\uae30\ub3c4 \ud558\uc9c0\ub9cc \uc5b4\ub5a4 \uc0c1\ud669\uc5d0\uc11c \ubc1c\uc0dd\ud560 \uc218 \uc788\ub294\uc9c0 \uc5b4\ub5bb\uac8c \uc904\uc77c \uc218 \uc788\ub294\uc9c0 \uc815\ub3c4\ub97c \uc54c\uc544\ub450\uba74 \uc88b\uc744 \uac83 \uac19\ub2e4."}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"(3) \uc790\ub3d9\ud654 \uad00\uc810\uc5d0\uc11c"})}),"\n",(0,l.jsx)(s.p,{children:"\uc704 \uadf8\ub9bc\ub300\ub85c \uc138 \uac1c\uc758 mysql instance \uad6c\ucd95\uc740 ansible\ub85c \uac04\ub2e8\ud558\uac8c \uac00\ub2a5\ud588\ub294\ub370 replication\uc744 \uc704\ud55c dump\ub098 \uc124\uc815 \ubcc0\uacbd, \ub610 master \ubcc0\uacbd\uc2dc\uc5d0 \uc870\uce58\ub418\uc5b4\uc57c \ud558\ub294 \ub0b4\uc6a9\ub4e4\uc744 \uc790\ub3d9\ud654 \ud560 \uc218 \uc788\ub294\uc9c0 \uc0b4\ud3b4\ubd10\uc57c\uaca0\ub2e4."})]})}function d(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}},41479:(e,s,n)=>{n.d(s,{A:()=>l});const l=n.p+"assets/images/db_replication-e59a2ef0ea6ad43bd7bffbe265ae8217.png"},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>r});var l=n(96540);const t={},a=l.createContext(t);function i(e){const s=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),l.createElement(a.Provider,{value:s},e.children)}}}]);