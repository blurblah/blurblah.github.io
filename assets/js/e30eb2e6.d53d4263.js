"use strict";(self.webpackChunkblurblah_github_io=self.webpackChunkblurblah_github_io||[]).push([[35151],{71059:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=t(74848),i=t(28453);const r={title:"Run multiple Jenkins instances on a single machine",date:"2013-02-18",categories:["ci"],tags:["ajp13port","instance","jenkins","multiple","port","run"]},a=void 0,l={permalink:"/2013/02/18/wp/run-multiple-jenkins-instances-on-a-single-machine",source:"@site/blog/wp/2013-02-18-run-multiple-jenkins-instances-on-a-single-machine.md",title:"Run multiple Jenkins instances on a single machine",description:"Jenkins\ub97c \uc5ec\ub7ec\uac1c \ub744\uc6cc\uc11c \uac80\ud1a0\ud560 \ub0b4\uc6a9\uc774 \uc0dd\uacbc\ub2e4.",date:"2013-02-18T00:00:00.000Z",formattedDate:"February 18, 2013",tags:[{label:"ajp13port",permalink:"/tags/ajp-13-port"},{label:"instance",permalink:"/tags/instance"},{label:"jenkins",permalink:"/tags/jenkins"},{label:"multiple",permalink:"/tags/multiple"},{label:"port",permalink:"/tags/port"},{label:"run",permalink:"/tags/run"}],readingTime:1.975,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Run multiple Jenkins instances on a single machine",date:"2013-02-18",categories:["ci"],tags:["ajp13port","instance","jenkins","multiple","port","run"]},unlisted:!1,prevItem:{title:"DSL?",permalink:"/2013/02/20/wp/dsl"},nextItem:{title:"Node.js\uac00 \uc801\ud569\ud55c\uac00?",permalink:"/2013/02/15/wp/node-js\uac00-\uc801\ud569\ud55c\uac00"}},p={authorsImageUrls:[]},c=[];function o(n){const e={a:"a",p:"p",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"Jenkins\ub97c \uc5ec\ub7ec\uac1c \ub744\uc6cc\uc11c \uac80\ud1a0\ud560 \ub0b4\uc6a9\uc774 \uc0dd\uacbc\ub2e4."}),"\n",(0,s.jsx)(e.p,{children:"\uc77c\ubc18\uc801\uc73c\ub85c \ud55c machine\uc5d0 \ud558\ub098\uc758 Jenkins\ub9cc \uc62c\ub824\uc11c \uc0ac\uc6a9\ud558\ub2c8 \uac00\uc6a9\ud55c \ud55c \ub300\uc758 \ud14c\uc2a4\ud2b8 \uc11c\ubc84\uc640 \ub2e4\ub978 \uc0ac\ub78c\ub4e4\uc758 PC\uae4c\uc9c0 \ud65c\uc6a9\ud558\uba74 \uc5b4\ucc0c\uc5b4\ucc0c \ud560 \uc218 \uc788\uaca0\ub2e4 \uc2f6\uc5c8\ub2e4."}),"\n",(0,s.jsx)(e.p,{children:"\ud558\uc9c0\ub9cc \uc811\uc18d\ud574\uc11c \uc124\uc815\ud574\uc918\uc57c \ud558\uace0 \ub098 \ub355\ubd84\uc5d0 \ub2e4\ub978 \uc0ac\ub78c\ub4e4\uc740 \ubd88\ud3b8\ud568\uc774 \uc0dd\uae30\ub2c8 \uc5b4\ub5bb\uac8c \ub0b4 PC\uc5d0\uc11c\ub9cc Jenkins\ub97c \uc5ec\ub7ec\uac1c \ub744\uc6b8 \uc218 \uc5c6\ub098 \uace0\ubbfc\ud558\uac8c \ub418\uc5c8\ub2e4."}),"\n",(0,s.jsx)(e.p,{children:"\ucc98\uc74c\uc5d4 Jenkins\ub294 \ud544\uc694\ud55c \uac01\uc885 \uc124\uc815\uc774\ub098 plugin, job \uc815\ubcf4\ub4e4\uc744 JENKINS_HOME\uc73c\ub85c \ub4f1\ub85d\ub41c \uacbd\ub85c\uc5d0\uc11c \uad00\ub9ac\ud558\ub2c8 \uc774 \uacbd\ub85c\uc640 http port\ub9cc \ub2e4\ub974\uac8c\ud558\uba74 \ub418\uc9c0 \uc54a\uc744\uae4c \uc0dd\uac01\ud574\ubd24\ub2e4."}),"\n",(0,s.jsx)(e.p,{children:"\uadf8\ub7ec\ub098 \uacb0\uacfc\ub294 Port \ucda9\ub3cc."}),"\n",(0,s.jsx)(e.p,{children:"Http port\ub294 \ub2e4\ub974\uac8c \ud588\uc73c\ub2c8 \ubb38\uc81c\uac00 \uc5c6\uc5c8\ub294\ub370 \ub0b4\ubd80\uc801\uc73c\ub85c \uc0ac\uc6a9\ud558\ub294 port\ub4e4\uc774 \ubb38\uc81c\ub97c \uc77c\uc73c\ud0a4\ub294 \uac83 \uac19\uc558\ub2e4. \ub85c\uadf8\uc0c1\uc73c\ub85c\ub294."}),"\n",(0,s.jsx)(e.p,{children:"\uc0ac\uc6a9\ub418\ub294 Port\ub97c \ubcf4\ub2c8 http port, ajp13 port, sshd port, tcp port (JNLP slave agent listener)."}),"\n",(0,s.jsxs)(e.p,{children:["\uc774 \uc911\uc5d0\uc11c http\uc640 ajp13 port\uac00 \uc124\uc815\uc774 \uac00\ub2a5\ud558\ub2e4. (",(0,s.jsx)(e.a,{href:"https://wiki.jenkins-ci.org/display/JENKINS/Starting+and+Accessing+Jenkins",children:"Jenkins Wiki"})," \ucc38\uc870)"]}),"\n",(0,s.jsx)(e.p,{children:"\uadf8\ub798\uc11c \uc784\uc758\ub85c master, slave1 \uc774\ub77c \uba85\uba85\ud574\uc11c \uac01\uac01 \uc544\ub798\ucc98\ub7fc \ud574\ubcf4\ub2c8 \ucda9\ub3cc\uc5c6\uc774 \uc798 \ub41c\ub2e4."}),"\n",(0,s.jsx)(e.p,{children:"Master"}),"\n",(0,s.jsx)(e.p,{children:"[bash]"}),"\n",(0,s.jsx)(e.p,{children:"java -jar -DJENKINS_HOME=D:/jenkins/master -jar jenkins.war --httpPort=7070"}),"\n",(0,s.jsx)(e.p,{children:"[/bash]"}),"\n",(0,s.jsx)(e.p,{children:"\xa0"}),"\n",(0,s.jsx)(e.p,{children:"Slave1"}),"\n",(0,s.jsx)(e.p,{children:"[bash]"}),"\n",(0,s.jsx)(e.p,{children:"java -jar -DJENKINS_HOME=D:/jenkins/slave1 -jar jenkins.war --httpPort=7071 --ajp13Port=8109"}),"\n",(0,s.jsx)(e.p,{children:"[/bash]"}),"\n",(0,s.jsx)(e.p,{children:"\xa0"}),"\n",(0,s.jsx)(e.p,{children:"Master\ub294 ajp13 port\ub85c 8009\ub97c \uc0ac\uc6a9\ud55c\ub2e4. (Jenkins default)"}),"\n",(0,s.jsx)(e.p,{children:"\uadfc\ub370 \ub3c4\ub300\uccb4 ajp13\uc740 \ubb34\uc5bc\uae4c?"}),"\n",(0,s.jsxs)(e.p,{children:["\ucc3e\uc544\ubcf4\ub2c8 Apache Jakarta Project\uc5d0 \uc788\ub294 Apache JServ Protocol version 1.3 \uc774\ub77c\uace0 \ud55c\ub2e4.\xa0(",(0,s.jsx)(e.a,{href:"http://tomcat.apache.org/connectors-doc-archive/jk2/common/AJPv13.html",children:"AJPv13"})," \ucc38\uc870)"]}),"\n",(0,s.jsx)(e.p,{children:"\xa0"}),"\n",(0,s.jsx)(e.p,{children:"\ucc38\uace0\ub85c Windows 7\uc5d0\uc11c \ucc98\ub9ac\ud588\uace0, Jenkins version\uc740 1.474\uc600\ub2e4."})]})}function h(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>a,x:()=>l});var s=t(96540);const i={},r=s.createContext(i);function a(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);