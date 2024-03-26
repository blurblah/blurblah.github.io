"use strict";(self.webpackChunkblurblah_github_io=self.webpackChunkblurblah_github_io||[]).push([[27794],{2170:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=t(74848),r=t(28453);const i={title:"Jenkins job status \ud655\uc778",date:"2013-01-29",categories:["ci"],tags:["jenkins","job","json","monitoring","status","wget","xml"]},o=void 0,l={permalink:"/2013/01/29/wp/jenkins-job-status-\ud655\uc778",source:"@site/blog/wp/2013-01-29-jenkins-job-status-\ud655\uc778.md",title:"Jenkins job status \ud655\uc778",description:"Jenkins monitoring\uc744 \ub9e4\uc77c \ud574\uc57c\ud558\ub294\ub370 \uc5f4\uc5b4\uc57c \ud558\ub294 \ud398\uc774\uc9c0\uac00 \ub9ce\ub2e4\uba74 \uc5b4\ub5bb\uac8c \ud574\uc57c \ud558\ub294\uac00?",date:"2013-01-29T00:00:00.000Z",formattedDate:"January 29, 2013",tags:[{label:"jenkins",permalink:"/tags/jenkins"},{label:"job",permalink:"/tags/job"},{label:"json",permalink:"/tags/json"},{label:"monitoring",permalink:"/tags/monitoring"},{label:"status",permalink:"/tags/status"},{label:"wget",permalink:"/tags/wget"},{label:"xml",permalink:"/tags/xml"}],readingTime:1.695,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Jenkins job status \ud655\uc778",date:"2013-01-29",categories:["ci"],tags:["jenkins","job","json","monitoring","status","wget","xml"]},unlisted:!1,prevItem:{title:"Node.js \uc775\ud788\ub294 \uc911",permalink:"/2013/01/31/wp/node-js-\uc775\ud788\ub294-\uc911"},nextItem:{title:"Gerrit\uc758 \ubb38\uc81c\uc810\ub4e4",permalink:"/2013/01/28/wp/gerrit\uc758-\ubb38\uc81c\uc810\ub4e4"}},a={authorsImageUrls:[]},c=[];function u(e){const n={code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Jenkins monitoring\uc744 \ub9e4\uc77c \ud574\uc57c\ud558\ub294\ub370 \uc5f4\uc5b4\uc57c \ud558\ub294 \ud398\uc774\uc9c0\uac00 \ub9ce\ub2e4\uba74 \uc5b4\ub5bb\uac8c \ud574\uc57c \ud558\ub294\uac00?"}),"\n",(0,s.jsx)(n.p,{children:"\uc0c1\ub2f9\ud788 \uadc0\ucc2e\ub2e4. \ub2e8\uc21c \ubc18\ubcf5\uc774\uae30\ub3c4 \ud558\uace0."}),"\n",(0,s.jsx)(n.p,{children:"\ud2b9\ubcc4\ud788 \ubb38\uc81c\uac00 \uc788\ub294 \uacbd\uc6b0\ub294 \ubcc4\ub85c \uc5c6\uc9c0\ub9cc \uadf8\ub798\uc57c \uc548\uc2ec\uc774 \ub418\uc5b4\uc11c \ub9e4\uc77c \uc544\uce68\ub9c8\ub2e4 \ud558\uace0 \uc788\ub294 \uc0c1\ud669\uc774\ub2e4."}),"\n",(0,s.jsx)(n.p,{children:"\xa0"}),"\n",(0,s.jsx)(n.p,{children:"\ud55c \ub208\uc5d0 \ud30c\uc545\ud560 \uc218 \uc788\ub294 monitoring page\ub97c \uac04\ub2e8\ud558\uac8c\ub77c\ub3c4 \ub9cc\ub4e4\uc5b4\ubcfc\uae4c \ud558\ub294 \uc0dd\uac01\uc5d0 \uc6b0\uc120 \uac01 \uc11c\ubc84\ub4e4\uc5d0 \ud37c\uc838\uc788\ub294 job\uc758 status \ud655\uc778\uc774 \uac00\ub2a5\ud55c\uc9c0 \uc54c\uc544\ubd24\ub2e4. (RSS\ub3c4 \ub418\ub294\ub370 \uc5c6\uc744\ub9ac\uac00...)"}),"\n",(0,s.jsx)(n.p,{children:"\uc544\ub798\uc758 \uc8fc\uc18c\ub97c curl\uc774\ub098 wget\uc73c\ub85c \uc2e4\ud589\ud558\uba74 xml \ud615\ud0dc\uc758 data\uac00 \ub0a0\ub77c\uc624\uac8c \ub418\uace0 \ub9c8\uc9c0\ub9c9\uc744 xml \ub300\uc2e0 json\uc73c\ub85c \ubcc0\uacbd\ud558\uba74 json \ud615\ud0dc\ub85c\ub3c4 data\ub97c \ubc1b\uc744 \uc218 \uc788\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"http://{your_ip}/job/{your_job}/api/xml\n"})}),"\n",(0,s.jsx)(n.p,{children:"\xa0"}),"\n",(0,s.jsx)(n.p,{children:"\ub098\uc758 \uacbd\uc6b0\uc5d4 job\uc5d0 \ub300\ud55c \uc5ec\ub7ec \uc815\ubcf4 \uc911\uc5d0\uc11c \ub9c8\uc9c0\ub9c9 job\uc5d0 \ub300\ud55c \uac83\ub9cc \ud544\uc694\ud558\uae30 \ub54c\ubb38\uc5d0 \uc544\ub798\uc640 \uac19\uc740 url\uc744 \ub358\uc84c\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"http://{your_ip}/job/{your_job}/lastBuild/api/xml\n"})}),"\n",(0,s.jsx)(n.p,{children:"\xa0"}),"\n",(0,s.jsx)(n.p,{children:"\uc704\uc5d0 \ub300\ud55c \uacb0\uacfc\ub85c \uc544\ub798\uc640 \uc720\uc0ac\ud55c \ud615\ud0dc\uc758 xml data\ub97c \ud655\uc778\ud560 \uc218 \uc788\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:"<freeStyleProject>\n<displayName>{your_job_display_name}</displayName>\n<name>{your_job_name}</name>\n<url>{your_job_url}</url>\n<buildable>true</buildable>\n<color>grey</color>\n<inQueue>false</inQueue>\n<keepDependencies>false</keepDependencies>\n<nextBuildNumber>1</nextBuildNumber>\n<concurrentBuild>false</concurrentBuild>\n<scm></scm>\n</freeStyleProject>\n"})}),"\n",(0,s.jsx)(n.p,{children:"\xa0"}),"\n",(0,s.jsx)(n.p,{children:"\uc774\uc81c xml\uc774\ub098 json\uc73c\ub85c \ub41c \uc7ac\ub8cc\ub294 \uc788\uc73c\ub2c8 \uc5b4\ub5bb\uac8c \uc694\ub9ac\ud558\ub290\ub0d0\uac00 \ub0a8\uc558\ub294\ub370,\xa0\uc7ac\ubbf8\uc788\uc744 \ub4ef \ud558\ub2e4."}),"\n",(0,s.jsx)(n.p,{children:"\uc2dc\uac04\uacfc \uc5ec\uc720\ub97c \ub0bc \uc218 \uc788\ub290\ub0d0\uac00 \ubb38\uc81c."})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var s=t(96540);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);