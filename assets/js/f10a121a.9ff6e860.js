"use strict";(self.webpackChunkblurblah_github_io=self.webpackChunkblurblah_github_io||[]).push([[32302],{8090:(t,a,n)=>{n.r(a),n.d(a,{assets:()=>h,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var e=n(74848),r=n(28453);const o={title:"Marathon authentication",date:"2016-11-29",categories:["docker"],tags:["auth-credentials-\uc635\uc158","authorization-header","basic-authentication","http_credentials-\uc635\uc158","marathon-authentication","marathon-\uc778\uc99d","marathon-lb-\uc218\uc815","mesosphere","\ud5e4\ub354-\ucd94\uac00"]},i=void 0,s={permalink:"/2016/11/29/wp/marathon-authentication",source:"@site/blog/wp/2016-11-29-marathon-authentication.md",title:"Marathon authentication",description:"\uc624\uc804\uc5d0 marathon\uc744 \uc5f4\uc5b4\ubd24\ub354\ub2c8 \uc774\uc0c1\ud55c application \ub4e4\uc774 \uc5ec\ub7ec \uac1c \uc62c\ub77c\uac00 \uc788\uc5c8\ub2e4. \ubcc4\ub2e4\ub978 \uc778\uc99d\uc808\ucc28 \uc5c6\uc774 \uc0ac\uc6a9\ud558\uace0 \uc788\uc5c8\uc73c\ub2c8 \uc62c\uac8c \uc628\uac70\ub2e4. (\uc65c \uc774\uc81c \uc624\uc168\ub098. \ud56d\uc0c1 \uc774\ub7f0 \uac74 \ubb54\uac00 \ucc98\ub9ac\ud560 \uc791\uc5c5\uc774 \ub9ce\uc744 \ub54c \ucc3e\uc544\uc624\uc2e0\ub2e4. \uc2e0\uae30\ud558\ub2e4.) \ub2e4\ud589\ud788 \uc2e4\uc81c \ub3d9\uc791\ud558\ub294 application\uc740 \uc544\ub2c8\uc5c8\ub294\uc9c0 \ubaa8\ub450 deploying \ud639\uc740 waiting \uc0c1\ud0dc\ub85c \ub300\uae30\ud558\uace0 \uc788\uc5b4\uc11c \uc11c\ub458\ub7ec \ubaa8\ub450 \uc81c\uac70\ud588\ub2e4. Marathon \uc0ac\uc6a9\ud558\ub358 \ucd08\uae30\uc5d0(0.8? 0.9? \ubc84\uc804) \ubcf4\uc548 \uad00\ub828 \uc635\uc158\uc744 \ubb38\uc11c\uc5d0\uc11c \ucc3e\uc9c0 \ubabb\ud574 \uc2b5\uad00\ucc98\ub7fc \uadf8\ub300\ub85c \uc0ac\uc6a9\ud558\uace0 \uc788\uc5c8\ub294\ub370 \ub610 \ub2e4\uc2dc \uc774\ub7f0 \uc77c\uc744 \uacaa\uc744 \uc218\ub294 \uc5c6\uc73c\ub2c8 \ubb54\uac00 \uc870\uce58\ub97c \ucde8\ud574\uc57c\ud588\ub2e4.",date:"2016-11-29T00:00:00.000Z",formattedDate:"November 29, 2016",tags:[{label:"auth-credentials-\uc635\uc158",permalink:"/tags/auth-credentials-\uc635\uc158"},{label:"authorization-header",permalink:"/tags/authorization-header"},{label:"basic-authentication",permalink:"/tags/basic-authentication"},{label:"http_credentials-\uc635\uc158",permalink:"/tags/http-credentials-\uc635\uc158"},{label:"marathon-authentication",permalink:"/tags/marathon-authentication"},{label:"marathon-\uc778\uc99d",permalink:"/tags/marathon-\uc778\uc99d"},{label:"marathon-lb-\uc218\uc815",permalink:"/tags/marathon-lb-\uc218\uc815"},{label:"mesosphere",permalink:"/tags/mesosphere"},{label:"\ud5e4\ub354-\ucd94\uac00",permalink:"/tags/\ud5e4\ub354-\ucd94\uac00"}],readingTime:5.215,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Marathon authentication",date:"2016-11-29",categories:["docker"],tags:["auth-credentials-\uc635\uc158","authorization-header","basic-authentication","http_credentials-\uc635\uc158","marathon-authentication","marathon-\uc778\uc99d","marathon-lb-\uc218\uc815","mesosphere","\ud5e4\ub354-\ucd94\uac00"]},unlisted:!1,prevItem:{title:"MySQL replication\uc744 \ud574\ubcf4\uc790",permalink:"/2017/02/01/wp/mysql-replication\uc744-\ud574\ubcf4\uc790"},nextItem:{title:"cAdvisor + Prometheus + Grafana for Docker monitoring",permalink:"/2016/11/28/wp/cadvisor-prometheus-grafana-for-docker-monitoring"}},h={authorsImageUrls:[]},l=[{value:"1. http_credentials",id:"1-http_credentials",level:3},{value:"2. REST API \ud638\ucd9c\uc740 \uc5b4\ub5bb\uac8c?",id:"2-rest-api-\ud638\ucd9c\uc740-\uc5b4\ub5bb\uac8c",level:3},{value:"3. marathon-lb\ub3c4 \ubcc0\uacbd\ud558\uc790",id:"3-marathon-lb\ub3c4-\ubcc0\uacbd\ud558\uc790",level:3}];function c(t){const a={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...t.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(a.p,{children:"\uc624\uc804\uc5d0 marathon\uc744 \uc5f4\uc5b4\ubd24\ub354\ub2c8 \uc774\uc0c1\ud55c application \ub4e4\uc774 \uc5ec\ub7ec \uac1c \uc62c\ub77c\uac00 \uc788\uc5c8\ub2e4. \ubcc4\ub2e4\ub978 \uc778\uc99d\uc808\ucc28 \uc5c6\uc774 \uc0ac\uc6a9\ud558\uace0 \uc788\uc5c8\uc73c\ub2c8 \uc62c\uac8c \uc628\uac70\ub2e4. (\uc65c \uc774\uc81c \uc624\uc168\ub098. \ud56d\uc0c1 \uc774\ub7f0 \uac74 \ubb54\uac00 \ucc98\ub9ac\ud560 \uc791\uc5c5\uc774 \ub9ce\uc744 \ub54c \ucc3e\uc544\uc624\uc2e0\ub2e4. \uc2e0\uae30\ud558\ub2e4.) \ub2e4\ud589\ud788 \uc2e4\uc81c \ub3d9\uc791\ud558\ub294 application\uc740 \uc544\ub2c8\uc5c8\ub294\uc9c0 \ubaa8\ub450 deploying \ud639\uc740 waiting \uc0c1\ud0dc\ub85c \ub300\uae30\ud558\uace0 \uc788\uc5b4\uc11c \uc11c\ub458\ub7ec \ubaa8\ub450 \uc81c\uac70\ud588\ub2e4. Marathon \uc0ac\uc6a9\ud558\ub358 \ucd08\uae30\uc5d0(0.8? 0.9? \ubc84\uc804) \ubcf4\uc548 \uad00\ub828 \uc635\uc158\uc744 \ubb38\uc11c\uc5d0\uc11c \ucc3e\uc9c0 \ubabb\ud574 \uc2b5\uad00\ucc98\ub7fc \uadf8\ub300\ub85c \uc0ac\uc6a9\ud558\uace0 \uc788\uc5c8\ub294\ub370 \ub610 \ub2e4\uc2dc \uc774\ub7f0 \uc77c\uc744 \uacaa\uc744 \uc218\ub294 \uc5c6\uc73c\ub2c8 \ubb54\uac00 \uc870\uce58\ub97c \ucde8\ud574\uc57c\ud588\ub2e4."}),"\n",(0,e.jsx)(a.p,{children:"\xa0"}),"\n",(0,e.jsx)(a.h3,{id:"1-http_credentials",children:"1. http_credentials"}),"\n",(0,e.jsxs)(a.p,{children:["\ucc3e\uc544\ubcf4\ub2c8 ",(0,e.jsx)(a.a,{href:"https://github.com/mesosphere/marathon/blob/master/docs/docs/ssl-basic-access-authentication.md",children:"\ubb38\uc11c"}),"\uac00 \uc788\ub2e4. Marathon \uc2e4\ud589\uc2dc http_credentials \uc635\uc158\uc744 \uc8fc\ub294 \ubc29\ubc95. \ub9c1\ud06c\ub41c \ubb38\uc11c\uc5d0\ub294 SSL \uc801\uc6a9 \ubc29\ubc95\ub3c4 \uae30\uc220\ub418\uc5b4 \uc788\uc9c0\ub9cc \uac04\ub2e8\ud788 \uc0ac\uc6a9\uc790 \uc778\uc99d\ub9cc \ucd94\uac00\ud574\ubcf4\uae30\ub85c \ud588\ub2e4. Marathon \uc2e4\ud589\ud30c\uc77c\uc744 \uc5f4\uc5b4\ubcf4\uba74 \ud655\uc778\ud560 \uc218 \uc788\uc9c0\ub9cc \ub300\ubd80\ubd84\uc758 \uc635\uc158\uc740 /etc/marathon/conf \uacbd\ub85c(Ubuntu \uae30\uc900)\uc5d0 \uc635\uc158 \uc774\ub984\uc73c\ub85c \ud30c\uc77c\uba85\uc744 \ub9cc\ub4e4\uace0 \ud30c\uc77c \uc548\uc5d0 \uc635\uc158\uac12\uc744 \uc9d1\uc5b4\ub123\uc73c\uba74 \uc2e4\ud589\uc2dc\uc5d0 \ud30c\uc77c\uc744 \uc77d\uc5b4\uc11c \uc635\uc158\uc73c\ub85c \ucd94\uac00\ud558\ub3c4\ub85d \ub418\uc5b4\uc788\ub2e4. \uadf8\ub7ec\ubbc0\ub85c /etc/marathon/conf/http_credentials \ub77c\ub294 \ud30c\uc77c\uc744 \ub9cc\ub4e4\uace0 \ud30c\uc77c \uc548\uc5d0 id",":password"," \ud615\ud0dc\ub85c \uc6d0\ud558\ub294 \ub0b4\uc6a9\uc744 \uc9d1\uc5b4\ub123\uace0 marathon\uc744 restart \ud558\uba74 \ub05d."]}),"\n",(0,e.jsx)(a.p,{children:"\uc635\uc158\uc774 \uc81c\ub300\ub85c \uc9c0\uc815\ub418\uc5c8\ub294\uc9c0 \ud504\ub85c\uc138\uc2a4\ub97c \ud655\uc778\ud574\ubcf4\uace0 marathon UI\uc5d0 \uc811\uadfc\ud558\uba74 id, password\ub97c \ubb3b\ub294 \ud31d\uc5c5\uc774 \ub72c\ub2e4. Marathon restart\ub9cc\uc73c\ub85c \uc81c\ub300\ub85c \ub41c\ub2e4\uace0 \uc0dd\uac01\ud588\ub294\ub370 \uc774\ud6c4\uc5d0 \ub354 \uc0b4\ud3b4\ubcf4\ub2c8 mesos-master\ub3c4 restart \ud574\uc918\uc57c \ud558\ub294\uac8c \uc544\ub2cc\uac00 \uc2f6\ub2e4. (mesos master, marathon \uc0ac\uc774\uc758 \ud1b5\uc2e0\uc5d0 \ubb38\uc81c\uac00 \uc0dd\uae40)"}),"\n",(0,e.jsx)(a.p,{children:"\xa0"}),"\n",(0,e.jsx)(a.h3,{id:"2-rest-api-\ud638\ucd9c\uc740-\uc5b4\ub5bb\uac8c",children:"2. REST API \ud638\ucd9c\uc740 \uc5b4\ub5bb\uac8c?"}),"\n",(0,e.jsx)(a.p,{children:"\uac04\ub2e8\ud55c \uc2e4\ud589\uc635\uc158\uc73c\ub85c UI \uc811\uadfc\uc2dc \uc0ac\uc6a9\uc790 \uc778\uc99d\uc740 \uac00\ub2a5\ud574\uc84c\ub294\ub370 \uc774\uac78\ub85c \ubaa8\ub4e0\uac8c \ub05d\ub09c\uac74 \uc544\ub2c8\ub2e4. http_credentials\ub97c \uc801\uc6a9\ud558\uba74\uc11c UI \ubfd0\ub9cc \uc544\ub2c8\ub77c marathon\uc774 \uc81c\uacf5\ud558\ub294 REST API \ud638\ucd9c\ub3c4 \uc778\uc99d \uc815\ubcf4\ub97c \ub118\uaca8\uc57c\ub9cc \ud558\ub294\ub370 \uc774\uc804\ucc98\ub7fc \uadf8\ub300\ub85c \ud638\ucd9c\ud558\uba74 401 Unauthorized \uc624\ub958\uac00 \ub118\uc5b4\uc624\uac8c \ub41c\ub2e4."}),"\n",(0,e.jsxs)(a.p,{children:['\uadf8\ub7fc \uc778\uc99d \uc815\ubcf4\ub97c \uc5b4\ub5bb\uac8c \ub118\uaca8\uc918\uc57c \ud558\ub294\uac00? \uc774 \ubd80\ubd84\uc740 \uce5c\uc808\ud558\uac8c \ubb38\uc11c\ub85c \uae30\uc220\ub418\uc5b4 \uc788\uc9c0 \uc54a\ub2e4. \uc0ac\uc6a9\uc790 \uc778\uc99d \uc801\uc6a9\ubc29\ubc95\uc744 \uae30\uc220\ud574\ub193\uc740 \ubb38\uc11c\uc5d0 basic authentication\uc774\ub77c\uace0 \uba85\uc2dc\ub418\uc5b4 \uc788\uc5c8\uc73c\ub2c8 \uc77c\ubc18\uc801\uc778 basic authentication \ubc29\ubc95\ub300\ub85c header\uc5d0 Authorization\uc744 \ub123\uc5b4\uc11c \ud638\ucd9c\ud574\ubd24\ub294\ub370 \ub2e4\ud589\ud788 \ub41c\ub2e4. Header\uc5d0 Authorization\uc5d0 \ub300\ud55c \uac12\uc73c\ub85c\ub294 "Basic base64_encoded_data"\ub97c \ub123\uc5b4\uc918\uc57c \ud558\ub294\ub370 base64_encoded_data \ubd80\ubd84\uc740 1\ubc88 \uacfc\uc815\uc5d0\uc11c http_credentials \ud30c\uc77c\uc5d0 \ub123\uc5b4\uc92c\ub358 id',":password"," \ub0b4\uc6a9\uc744 \uadf8\ub300\ub85c base64\ub85c \uc778\ucf54\ub529\ud574\uc11c \uc0ac\uc6a9\ud558\uba74 \ub418\uaca0\ub2e4."]}),"\n",(0,e.jsx)(a.p,{children:"Marathon client\ub97c \ubcc4\ub3c4\ub85c \uc0ac\uc6a9\ud558\ub294\uac8c \uc788\ub2e4\uba74 client\uc5d0\uc11c http \ud638\ucd9c\uc2dc header\uc5d0 \uc778\uc99d \uc815\ubcf4\ub97c \ucd94\uac00\ud560 \uc218 \uc788\ub3c4\ub85d \uc218\uc815\ud558\ub294 \uc791\uc5c5\ub3c4 \ub2f9\uc5f0\ud788 \ud574\uc57c\ub9cc \ud55c\ub2e4."}),"\n",(0,e.jsx)(a.p,{children:"\xa0"}),"\n",(0,e.jsx)(a.h3,{id:"3-marathon-lb\ub3c4-\ubcc0\uacbd\ud558\uc790",children:"3. marathon-lb\ub3c4 \ubcc0\uacbd\ud558\uc790"}),"\n",(0,e.jsxs)(a.p,{children:["REST API \uae4c\uc9c0 \uc81c\ub300\ub85c \ud655\uc778\ud588\ub294\ub370 \uc5ed\uc2dc \ubb54\uac00 \ub3d9\uc791\uc774 \uc774\uc0c1\ud558\ub2e4. \ud560 \uac8c \ud558\ub098 \ub354 \ub0a8\uc544\uc788\ub2e4. marathon-lb (load balancer\uc6a9 python script. Marathon\uc5d0\uc11c container\ub85c \uc62c\ub77c\uac00 \uc788\ub294\ub370 lb\uc5d0 \ub300\ud574\uc11c\ub3c4 \ub354 \uc791\uc5c5\uc744 \uc9c4\ud589\ud574\ubcf4\uace0 \uc815\ub9ac\ud560 \ud544\uc694\uac00 \uc788\uaca0\ub2e4)\ub97c \uc0ac\uc6a9\uc911\uc774\ub77c\uba74 \uc544\ub798 \ubb38\uc11c\ub97c \ucc38\uace0\ud574\uc11c \uc2e4\ud589\uc635\uc158\uc744 \ucd94\uac00\ud574\uc57c \ud55c\ub2e4. marathon-lb\ub3c4 \ub0b4\ubd80\uc801\uc73c\ub85c\ub294 marathon\uc758 REST API\ub85c event callback\uc744 \ub4f1\ub85d\ud574 \uc0ac\uc6a9\uc911\uc774\ubbc0\ub85c marathon-lb\uac00 \uc811\uadfc\ud560 \ub54c \uc0ac\uc6a9\ud560 \uc778\uc99d\uc815\ubcf4\ub97c \ucd94\uac00\ud560 \ud544\uc694\uac00 \uc788\ub2e4. marathon-lb \uc800\uc7a5\uc18c\uc758 ",(0,e.jsx)(a.a,{href:"https://github.com/mesosphere/marathon-lb#direct-invocation",children:"README.md"}),"\ub97c \uc77d\uc5b4\ubcf4\uba74 auth-credentials \uc635\uc158\uc744 \ub123\uc5b4\uc918\uc57c \ud55c\ub2e4\ub294 \uac78 \uc54c \uc218 \uc788\ub2e4. \uc544\ub798\uc640 \uc720\uc0ac\ud55c \ud615\ud0dc\ub85c marathon-lb container\ub97c \uc218\uc815\ud558\uac70\ub098 \uc9c0\uc6b0\uace0 \ub2e4\uc2dc \ub9cc\ub4e4\uba74 \ub418\uaca0\ub2e4."]}),"\n",(0,e.jsx)(a.pre,{children:(0,e.jsx)(a.code,{children:'{\n  "id": "/marathon-lb",\n  "args": [\n    "sse",\n    "-m",\n    "http://marathon_leader_host:marathon_port",\n    "--group",\n    "external",\n    "--auth-credentials",\n    "id:password"\n  ],\n  "env": {\n    "PORTS": "9090"\n  },\n  "portDefinitions": [\n    {\n      "port": 9090,\n      "protocol": "tcp"\n    }\n  ],\n  "instances": 6,\n  "cpus": 0.5,\n  "mem": 256.0,\n  "container": {\n    "type": "DOCKER",\n    "volumes": [\n      {\n        "containerPath": "/dev/log",\n        "hostPath": "/dev/log",\n        "mode": "RW"\n      }\n    ],\n    "docker": {\n      "image": "mesosphere/marathon-lb",\n      "network": "HOST",\n      "privileged": true\n    }\n  },\n  "constraints": [\n    [\n      "hostname",\n      "UNIQUE"\n    ]\n  ]\n}\n'})})]})}function d(t={}){const{wrapper:a}={...(0,r.R)(),...t.components};return a?(0,e.jsx)(a,{...t,children:(0,e.jsx)(c,{...t})}):c(t)}},28453:(t,a,n)=>{n.d(a,{R:()=>i,x:()=>s});var e=n(96540);const r={},o=e.createContext(r);function i(t){const a=e.useContext(o);return e.useMemo((function(){return"function"==typeof t?t(a):{...a,...t}}),[a,t])}function s(t){let a;return a=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:i(t.components),e.createElement(o.Provider,{value:a},t.children)}}}]);