"use strict";(self.webpackChunkblurblah_github_io=self.webpackChunkblurblah_github_io||[]).push([[3480],{5883:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>i});var r=t(74848),s=t(28453);const a={title:"PostgreSQL\uacfc MySQL\uc758 \ucc28\uc774\uc810 \uba87 \uac1c",date:"2013-03-13",categories:["server"],tags:["access-denied","access-grant","auto-increment","mysql","pg_hba-conf","postgresql","sequence","\uc790\ub3d9-\uc99d\uac00"]},c=void 0,o={permalink:"/2013/03/13/wp/postgresql\uacfc-mysql\uc758-\ucc28\uc774\uc810-\uba87-\uac1c",source:"@site/blog/wp/2013-03-13-postgresql\uacfc-mysql\uc758-\ucc28\uc774\uc810-\uba87-\uac1c.md",title:"PostgreSQL\uacfc MySQL\uc758 \ucc28\uc774\uc810 \uba87 \uac1c",description:"\uad6d\ub0b4\uc5d0\uc11c\ub294 \ub9ce\uc774 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 Open source RDBMS\uc778 PostgreSQL\uc744 \uc7a0\uae50 \uc0ac\uc6a9\ud574 \ubcfc \uc77c\uc774 \uc0dd\uacbc\ub2e4.",date:"2013-03-13T00:00:00.000Z",formattedDate:"March 13, 2013",tags:[{label:"access-denied",permalink:"/tags/access-denied"},{label:"access-grant",permalink:"/tags/access-grant"},{label:"auto-increment",permalink:"/tags/auto-increment"},{label:"mysql",permalink:"/tags/mysql"},{label:"pg_hba-conf",permalink:"/tags/pg-hba-conf"},{label:"postgresql",permalink:"/tags/postgresql"},{label:"sequence",permalink:"/tags/sequence"},{label:"\uc790\ub3d9-\uc99d\uac00",permalink:"/tags/\uc790\ub3d9-\uc99d\uac00"}],readingTime:3.675,hasTruncateMarker:!1,authors:[],frontMatter:{title:"PostgreSQL\uacfc MySQL\uc758 \ucc28\uc774\uc810 \uba87 \uac1c",date:"2013-03-13",categories:["server"],tags:["access-denied","access-grant","auto-increment","mysql","pg_hba-conf","postgresql","sequence","\uc790\ub3d9-\uc99d\uac00"]},unlisted:!1,prevItem:{title:"Jenkins\uc758 concurrent build \uc81c\ud55c",permalink:"/2013/03/15/wp/jenkins\uc758-concurrent-build-\uc81c\ud55c"},nextItem:{title:"iOS\uc5d0\uc11c admob \uc801\uc6a9\uc2dc linker error",permalink:"/2013/03/10/wp/ios\uc5d0\uc11c-admob-\uc801\uc6a9\uc2dc-linker-error"}},l={authorsImageUrls:[]},i=[];function p(e){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\uad6d\ub0b4\uc5d0\uc11c\ub294 \ub9ce\uc774 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 Open source RDBMS\uc778 PostgreSQL\uc744 \uc7a0\uae50 \uc0ac\uc6a9\ud574 \ubcfc \uc77c\uc774 \uc0dd\uacbc\ub2e4."}),"\n",(0,r.jsx)(n.p,{children:"\uc124\uce58\ub294 \uc5b4\ub835\uc9c0 \uc54a\uc558\ub294\ub370, \ud14c\uc774\ube14 \uc0dd\uc131\ud560 \ub54c \uae4c\uc9c0 \uba87\uac00\uc9c0 \uc0dd\uc18c\ud55c\uac8c \uc788\uc5c8\ub2e4."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"1. \uc811\uadfc \uad8c\ud55c"})}),"\n",(0,r.jsx)(n.p,{children:"PostgreSQL\uc774 \uc124\uce58\ub41c \uc7a5\ube44\uc5d0\uc11c \uad00\ub9ac\ub3c4\uad6c\ub85c \uc811\uc18d\ud558\ub294\uac74 \ubb38\uc81c\uac00 \uc5c6\ub294\ub370 \ub2e4\ub978 \uc7a5\ube44, PC\uc5d0\uc11c \uc811\uc18d\ud558\ub294\uac74 \ubd88\uac00\ub2a5\ud588\ub2e4."}),"\n",(0,r.jsx)(n.p,{children:"\uc774\uc720\ub294 pg_hba.conf \ub77c\ub294 \uc124\uc815\ud30c\uc77c\uc5d0 \uc874\uc7ac\ud558\ub294 \uc811\uadfc \uad8c\ud55c\uc774 \uae30\ubcf8\uc740 \ub2e4\ub978 \uc7a5\ube44\uc5d0 \ub300\ud574\uc11c\ub294 \ub9c9\uace0 \uc788\uae30 \ub54c\ubb38\uc774\uc5c8\ub294\ub370 \uc811\uc18d\ud558\ub824\ub294 \uc7a5\ube44\uc758 IP \ub300\uc5ed\uc774\ub098 \uace0\uc815\ub41c IP \uac12\uc73c\ub85c \ud480\uc5b4\uc918\uc57c \ud55c\ub2e4."}),"\n",(0,r.jsx)(n.p,{children:"pg_hba.conf \ud30c\uc77c \uc704\uce58\ub3c4 \ucc98\uc74c\uc5d4 \ubab0\ub77c\uc11c \ud5e4\ub9f8\ub294\ub370 \uc124\uce58 \uacbd\ub85c\uc758 data directory \uc548\uc5d0 \uc874\uc7ac\ud55c\ub2e4."}),"\n",(0,r.jsx)(n.p,{children:"OS X\uc5d0\uc11c \uc124\uce58\ud588\uc744 \ub550 data directory\uc758 owner\uc640 group\uc774 PostgreSQL\uc5d0\uc11c \uad00\ub9ac\ub418\ub294 \uacc4\uc815\uacfc \uadf8\ub8f9\uc774\ub77c sudo \uad8c\ud55c\uc73c\ub85c vi \ud3b8\uc9d1\uae30\ub85c \uc218\uc815\ud574\uc11c \uc0ac\uc6a9\ud560 \uc218 \ubc16\uc5d0 \uc5c6\uc5c8\ub294\ub370, \uae30\ubcf8 \uc81c\uacf5\ub418\ub294 \uad00\ub9ac\ub3c4\uad6c\uc778 pgAdmin\uc774 \ubcf4\uc5ec\uc900 \uba87 \uac00\uc9c0 \ubb38\uc81c\uc810 \ub54c\ubb38\uc774\uae30\ub3c4 \ud588\ub2e4."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"2. Auto increment"})}),"\n",(0,r.jsx)(n.p,{children:"MySQL\uc5d0\uc11c\ub294 column \uc0dd\uc131\ud560 \ub54c auto increment \uc18d\uc131 \uc9c0\uc815\uc774 \uac00\ub2a5\ud588\ub358 \uac83\uc73c\ub85c \uae30\uc5b5\ud55c\ub2e4. \uc18d\uc131\uc744 \uc9c0\uc815\ud558\uba74 \ub530\ub85c \uac12\uc744 insert \ud558\uc9c0 \uc54a\uc544\ub3c4 \ucd08\uae30\uac12\ubd80\ud130 \uc99d\ubd84\ub9cc\ud07c \uc790\ub3d9 \uc99d\uac00\ud558\uac8c \ub418\uc5b4\uc788\ub294\ub370 PostgreSQL\uc740 \uc544\ubb34\ub9ac \ub4a4\uc838\ub3c4 \uadf8\ub7f0 \uc18d\uc131\uc774\ub098 \ud639\uc2dc\ub098 \ud574\uc11c \ucc3e\uc544\ubcf8 data type\uc5d0\ub3c4 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc558\ub2e4."}),"\n",(0,r.jsx)(n.p,{children:"PostgreSQL\uc5d0\uc11c\ub294 auto increment \ud558\uae30 \uc704\ud55c sequence \ub77c\ub294 \uac83\uc744 \uba3c\uc800 \uc815\uc758\ud558\uace0 column \uc0dd\uc131\uc2dc \uadf8 sequence\ub97c nextval \uc774\ub77c\ub294 \ub0b4\uc7a5 \ud568\uc218\ub85c \ud638\ucd9c\ud558\ub3c4\ub85d \ud574\uc57c \ud55c\ub2e4."}),"\n",(0,r.jsx)(n.p,{children:"\xa0"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\uacb0\ub860"})}),"\n",(0,r.jsx)(n.p,{children:"\uc7a0\uae50 \uc0b4\ud3b4\ubd24\uc744 \ub54c PostgreSQL\uc740 \uc804\uccb4\uc801\uc73c\ub85c \uad00\ub9ac\ub098 DB \uc124\uacc4 \uce21\uba74\uc5d0\uc11c \uc880 \ub354 \uc138\ubc00\ud55c \uc124\uc815\uacfc \uad6c\ucd95\uc744 \ud558\ub3c4\ub85d \uad8c\uc720\ud558\ub294 \ub290\ub08c\uc774\ub2e4."}),"\n",(0,r.jsx)(n.p,{children:"PostgreSQL\uacfc MySQL\uc758 \uc7a5\ub2e8\uc810, \ubb50\uac00 \uc88b\uc73c\ub0d0 \ub098\uc058\ub0d0\ub97c \ub450\uace0 \uc778\ud130\ub137 \uc5ec\uae30\uc800\uae30\uc5d0\uc11c \ub9d0\uc774 \ub9ce\uc740\ub370, \uacb0\uad6d\uc740 \uc77c\uc815\uacfc \uaddc\ubaa8\uc5d0 \ub530\ub77c\uc11c \ub098\uc5d0\uac8c \uc775\uc219\ud558\uac70\ub098 trouble shooting\uc5d0 \ud544\uc694\ud560\uc9c0 \ubaa8\ub97c reference\uac00 \ub9ce\uc73c\ub0d0 \uc801\uc73c\ub0d0\uc5d0 \ub530\ub77c\uc11c \uace8\ub77c\uc4f0\uba74 \ub418\uc9c0 \uc54a\uc744\uae4c? \ub77c\ub294 \uc0dd\uac01\uc744 \uc7a0\uae50 \ud574\ubcf8\ub2e4. DB\ub9cc \uc804\ubb38\uc801\uc73c\ub85c \ud558\uc2dc\ub294 \ubd84\ub4e4\uc740 \ubb63\ub3c4 \ubaa8\ub974\ub294 \uc18c\ub9ac\ub77c\uace0 \ud560\uc9c0 \ubaa8\ub974\uaca0\uc9c0\ub9cc \ub098 \uac19\uc740 \ucd08\ubcf4\uc790\uc57c \ubb50."}),"\n",(0,r.jsx)(n.p,{children:"\xa0"}),"\n",(0,r.jsx)(n.p,{children:"Updated : 2013-04-16"}),"\n",(0,r.jsxs)(n.p,{children:["serial\uacfc bigserial type\uc740 true type\uc740 \uc544\ub2c8\uace0 \uac01\uac01 4byte\uc640 8byte data \uc800\uc7a5\uc774 \uac00\ub2a5\ud558\ub2e4. ",(0,r.jsx)(n.a,{href:"http://www.postgresql.org/docs/8.4/static/datatype-numeric.html",children:"PostgreSQL Document"}),"\uc5d0 \ub530\ub974\uba74 \ub2e4\ub978 RDBMS\uc758 auto_increment\uc640 \uc720\uc0ac\ud55c \uc18d\uc131\uc744 \uac00\uc9c0\ub294\ub370 \uc544\ub798\uc758 \ub450 query\uac00 \ub3d9\uc77c\ud55c \uc758\ubbf8\ub97c \uac16\ub294\ub2e4\uace0 \ub418\uc5b4\uc788\ub2e4."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"CREATE TABLE tablename (\n    colname SERIAL\n);\n\n\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"CREATE SEQUENCE tablename_colname_seq;\nCREATE TABLE tablename (\n    colname integer NOT NULL DEFAULT nextval('tablename_colname_seq')\n);\nALTER SEQUENCE tablename_colname_seq OWNED BY tablename.colname;\n"})}),"\n",(0,r.jsx)(n.p,{children:"\xa0"}),"\n",(0,r.jsx)(n.p,{children:"\ub313\uae00\uc744 \ub2ec\uc544\uc8fc\uc2e0 \ubd84\uc758 \ub9d0\uc500\ucc98\ub7fc auto_increment \ub300\uc2e0 \uc0ac\uc6a9\uc774 \uac00\ub2a5\ud558\ub2e4."})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var r=t(96540);const s={},a=r.createContext(s);function c(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);