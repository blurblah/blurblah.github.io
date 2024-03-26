"use strict";(self.webpackChunkblurblah_github_io=self.webpackChunkblurblah_github_io||[]).push([[70563],{13445:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var t=s(74848),i=s(28453);const r={slug:"aws-es-with-iot",title:"AWS ES with IoT",date:new Date("2017-11-15T14:10:42.000Z"),authors:"blurblah",tags:["aws","elasticsearch","iot"],enableComments:!0},a="AWS ES(Elasticsearch Service)",l={permalink:"/aws-es-with-iot",source:"@site/blog/2017/11/15-aws-es-with-iot.md",title:"AWS ES with IoT",description:"AWS\uc5d0\uc11c Elasticsearch\ub97c SaaS \ud615\ud0dc\ub85c \uc81c\uacf5\ud558\uace0 \uc788\uc74c",date:"2017-11-15T14:10:42.000Z",formattedDate:"November 15, 2017",tags:[{label:"aws",permalink:"/tags/aws"},{label:"elasticsearch",permalink:"/tags/elasticsearch"},{label:"iot",permalink:"/tags/iot"}],readingTime:2.145,hasTruncateMarker:!1,authors:[{name:"Sunchan Lee",title:"DevOps engineer",url:"https://blurblah.github.io",imageURL:"https://github.com/blurblah.png",key:"blurblah"}],frontMatter:{slug:"aws-es-with-iot",title:"AWS ES with IoT",date:"2017-11-15T14:10:42.000Z",authors:"blurblah",tags:["aws","elasticsearch","iot"],enableComments:!0},unlisted:!1,prevItem:{title:"Ansible compile test",permalink:"/ansible-compile-test"},nextItem:{title:"\uc7a5\uc560\ub85c \uc0b4\ud3b4\ubcf8 AWS EFS performance issue?",permalink:"/2017/08/08/wp/\uc7a5\uc560\ub85c-\uc0b4\ud3b4\ubcf8-aws-efs-performance-issue"}},c={authorsImageUrls:[void 0]},o=[];function h(e){const n={a:"a",br:"br",code:"code",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["AWS\uc5d0\uc11c Elasticsearch\ub97c SaaS \ud615\ud0dc\ub85c \uc81c\uacf5\ud558\uace0 \uc788\uc74c",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Price"}),": Instance type \uc911\uc5d0 \uc791\uc740 \uac83(t2.small)\ub3c4 \uace0\ub97c \uc218 \uc788\uace0 \ube44\uc6a9\uc740 Oregon \uae30\uc900 $0.036/h (t2.small)",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Characteristics:"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Cluster \uad6c\uc131 \uac00\ub2a5"}),"\n",(0,t.jsx)(n.li,{children:"Domain\ub9cc \ub9cc\ub4e4\uba74 \uc5f0\uacb0 \uac00\ub2a5\ud55c endpoint\uac00 \uc790\ub3d9\uc73c\ub85c \ub9cc\ub4e4\uc5b4\uc9d0 (with Kibana)"}),"\n",(0,t.jsx)(n.li,{children:"Kibana\ub294 \uae30\ubcf8\uc801\uc73c\ub85c \uc0ac\uc6a9\uc790 \uc778\uc99d\ubd80\ubd84\uc774 \uc5c6\ub294\ub370 AWS\uc5d0\uc11c\ub294 \uc774\uac83\uc744 Access Policy\ub85c \ud574\uacb0"}),"\n",(0,t.jsx)(n.li,{children:"Access Policy : IAM, IP\uae30\ubc18, public open \ub4f1 \uba87\uac00\uc9c0 \uc635\uc158 \uc81c\uacf5. \uc124\uc815 \ubcc0\uacbd\uc2dc \uc2dc\uac04\uc774 \uaf64 \uac78\ub9bc"}),"\n",(0,t.jsxs)(n.li,{children:["Index \ucd94\uac00\ud560 \ub54c id\ub294 ",(0,t.jsx)(n.code,{children:"${newuuid()}"})," \ud615\ud0dc\ub3c4 \uc0ac\uc6a9 \uac00\ub2a5"]}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"elasticsearch",children:"Elasticsearch"}),"\n",(0,t.jsxs)(n.p,{children:["Index\ub294 RDB\uc5d0\uc11c\uc758 database\uc640 \uc720\uc0ac\ud55c \uae30\ub2a5\uc73c\ub85c \uc0dd\uac01\ud558\uba74 \ub420 \uac83\uc73c\ub85c \ubcf4\uc784",(0,t.jsx)(n.br,{}),"\n","Type\uc740 index\uc5d0\uc11c \ud3ec\ud568\ub420 documents\uc758 \uc885\ub958",(0,t.jsx)(n.br,{}),"\n","Document \ud558\ub098\ud558\ub098\uac00 RDB\uc5d0\uc11c\uc758 row\uc640 \uc720\uc0ac\ud558\ub2e4\uace0 \uc0dd\uac01\ud560 \uc218 \uc788\uc74c",(0,t.jsx)(n.br,{}),"\n","AWS ES\uc5d0\uc11c index, type\uc740 \uc801\ub2f9\ud55c \uc774\ub984\uc73c\ub85c \uc9c0\uc815\ud558\uba74 \ub418\uace0 id\uc758 \uacbd\uc6b0 data\uc5d0\uc11c \ud2b9\uc815\ud558\uae30 \uc5b4\ub824\uc6b0\uba74 generation \ub418\ub294 \uac12\uc744 \uc774\uc6a9 (\uc608 : ",(0,t.jsx)(n.code,{children:"newuuid()"}),")\nIndex \uc0dd\uc131\uc740 \uc6d0\ub798 ES\uc758 API \ud638\ucd9c\ub85c \uac00\ub2a5",(0,t.jsx)(n.br,{}),"\n","ES\uc5d0 \uc77c\ubc18 \ubb38\uc790\uc5f4\uc744 \ubc00\uc5b4\ub123\uc5c8\uc744 \ub54c \uc778\uc2dd \ubabb\ud568 => JSON\uc744 \ubb38\uc790\uc5f4 \ubcc0\ud658 \ud6c4 \ub123\uc5c8\uc744 \ub54c \uc778\uc2dd",(0,t.jsx)(n.br,{}),"\n","AWS ES\uc5d0 \ub370\uc774\ud130 \ub123\uc744 \ub54c id\uac00 generation \ub418\ub294 \uac12\uc774 \uc544\ub2c8\ub77c \uace0\uc815 \ubb38\uc790\uc5f4\uc774\uba74 \uac19\uc740 document\ub85c \uc778\uc2dd\ud558\uace0 \uac12\uc744 update \ud558\ub294 \uac83\uc73c\ub85c \ubcf4\uc784"]}),"\n",(0,t.jsx)(n.h1,{id:"aws-iot",children:"AWS IoT"}),"\n",(0,t.jsxs)(n.p,{children:["IoT device\ub97c \uc704\ud55c hub \uc5ed\ud560",(0,t.jsx)(n.br,{}),"\n","Azure IoT Hub\uc640 \uc720\uc0ac(pub/sub)",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Rule:"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\ub2e4\ub978 service\uc640 \uc5f0\ub3d9\ud558\uae30 \uc704\ud55c \uae30\ub2a5"}),"\n",(0,t.jsx)(n.li,{children:"AWS IoT\ub85c publish\ub418\ub294 message\ub4e4\uc744 query \ud615\ud0dc\ub85c \uace0\ub97c \uc218 \uc788\uc74c(attribute, topic, condition)"}),"\n",(0,t.jsx)(n.li,{children:"\uc120\ud0dd\ub41c \uc870\uac74\uc5d0 \ubd80\ud569\ud558\ub294 message\ub4e4\uc744 S3, Kinesis, ES \ub4f1\uc73c\ub85c \uc804\ub2ec \uac00\ub2a5"}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"\ub354-\uc0b4\ud3b4\ubcfc-\ubb38\uc11c",children:"\ub354 \uc0b4\ud3b4\ubcfc \ubb38\uc11c"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.slideshare.net/dahlmoon/20160612",children:"\uc5d8\ub77c\uc2a4\ud2f1\uc11c\uce58 \uc774\ud574\ud558\uae30"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>l});var t=s(96540);const i={},r=t.createContext(i);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);