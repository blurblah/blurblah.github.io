"use strict";(self.webpackChunkblurblah_github_io=self.webpackChunkblurblah_github_io||[]).push([[35147],{65466:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=s(74848),a=s(28453);const i={title:"SSH\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 key \uc120\ud0dd\ud558\uae30",date:"2013-02-05",categories:["server"],tags:["config","identity","keygen","private-key-\uc124\uc815","ssh"]},r=void 0,o={permalink:"/2013/02/05/wp/ssh\uc5d0\uc11c-\uc0ac\uc6a9\ud558\ub294-key-\uc120\ud0dd\ud558\uae30",source:"@site/blog/wp/2013-02-05-ssh\uc5d0\uc11c-\uc0ac\uc6a9\ud558\ub294-key-\uc120\ud0dd\ud558\uae30.md",title:"SSH\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 key \uc120\ud0dd\ud558\uae30",description:"\uc774\ub9ac\uc800\ub9ac \ud558\ub2e4\ubcf4\ub2c8 ssh\uc5d0\uc11c \uc0ac\uc6a9\ud560 key\ub97c \uc5ec\ub7ec\uc30d \uc0dd\uc131\ud558\uac8c \ub418\uc5c8\ub2e4. \uc774 \ub54c \ud544\uc694\uc5d0 \ub530\ub77c key\ub97c \uc120\ud0dd\ud574\uc11c \uc0ac\uc6a9\ud574\uc57c \ud55c\ub2e4. (\ub9e4\ubc88 \uc0c8\ub85c \uc0dd\uc131\ud558\uace0 \ubcf5\uc6d0\ud558\uace0 \ud560 \uc218\ub294 \uc5c6\uc73c\ub2c8\uae4c) \ub2e8\uc21c\ud788 ssh command\ub97c \uc0ac\uc6a9\ud574\ub3c4 \ub418\ub294 \uc0c1\ud669\uc774\ub77c\uba74 i \uc635\uc158\uc744 \uc0ac\uc6a9\ud55c\ub2e4. (identity file) \uc608\ub97c \ub4e4\uc5b4 /home/id\\dsa \ub77c\ub294 \uacbd\ub85c\uc640 \uc774\ub984\uc73c\ub85c private key\uac00 \uc874\uc7ac\ud558\uace0 \uc788\uace0, test \uacc4\uc815\uc73c\ub85c example.com \uc11c\ubc84\uc5d0 \uc811\uc18d\ud558\ub824 \ud55c\ub2e4\uba74, \\[bash\\] ssh -i /home/id\\dsa -l test example.com \\[/bash\\]",date:"2013-02-05T00:00:00.000Z",formattedDate:"February 5, 2013",tags:[{label:"config",permalink:"/tags/config"},{label:"identity",permalink:"/tags/identity"},{label:"keygen",permalink:"/tags/keygen"},{label:"private-key-\uc124\uc815",permalink:"/tags/private-key-\uc124\uc815"},{label:"ssh",permalink:"/tags/ssh"}],readingTime:1.205,hasTruncateMarker:!1,authors:[],frontMatter:{title:"SSH\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 key \uc120\ud0dd\ud558\uae30",date:"2013-02-05",categories:["server"],tags:["config","identity","keygen","private-key-\uc124\uc815","ssh"]},unlisted:!1,prevItem:{title:"Chrome\uc5d0\uc11c flash \ucda9\ub3cc \ubb38\uc81c",permalink:"/2013/02/14/wp/chrome\uc5d0\uc11c-flash-\ucda9\ub3cc-\ubb38\uc81c"},nextItem:{title:"Node.js \uc775\ud788\ub294 \uc911",permalink:"/2013/01/31/wp/node-js-\uc775\ud788\ub294-\uc911"}},l={authorsImageUrls:[]},c=[];function h(e){const t={p:"p",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"\uc774\ub9ac\uc800\ub9ac \ud558\ub2e4\ubcf4\ub2c8 ssh\uc5d0\uc11c \uc0ac\uc6a9\ud560 key\ub97c \uc5ec\ub7ec\uc30d \uc0dd\uc131\ud558\uac8c \ub418\uc5c8\ub2e4. \uc774 \ub54c \ud544\uc694\uc5d0 \ub530\ub77c key\ub97c \uc120\ud0dd\ud574\uc11c \uc0ac\uc6a9\ud574\uc57c \ud55c\ub2e4. (\ub9e4\ubc88 \uc0c8\ub85c \uc0dd\uc131\ud558\uace0 \ubcf5\uc6d0\ud558\uace0 \ud560 \uc218\ub294 \uc5c6\uc73c\ub2c8\uae4c) \ub2e8\uc21c\ud788 ssh command\ub97c \uc0ac\uc6a9\ud574\ub3c4 \ub418\ub294 \uc0c1\ud669\uc774\ub77c\uba74 i \uc635\uc158\uc744 \uc0ac\uc6a9\ud55c\ub2e4. (identity file) \uc608\ub97c \ub4e4\uc5b4 /home/id_dsa \ub77c\ub294 \uacbd\ub85c\uc640 \uc774\ub984\uc73c\ub85c private key\uac00 \uc874\uc7ac\ud558\uace0 \uc788\uace0, test \uacc4\uc815\uc73c\ub85c example.com \uc11c\ubc84\uc5d0 \uc811\uc18d\ud558\ub824 \ud55c\ub2e4\uba74, [bash] ssh -i /home/id_dsa -l test example.com [/bash]"}),"\n",(0,n.jsx)(t.p,{children:"\uc774\ub807\uac8c key\ub97c \uc120\ud0dd\uc801\uc73c\ub85c \uc0ac\uc6a9\ud558\uc9c0\ub9cc \uace0\uc815\uc801\uc73c\ub85c \uc0ac\uc6a9\ud574\uc57c \ud560 \ub54c, \uc608\ub97c \ub4e4\uc5b4\uc11c GIT \uc800\uc7a5\uc18c\uc5d0 \uc811\uadfc\ud560 \ub54c ssh\ub85c \ud574\uc57c \ud558\uace0 \uc77c\ubc18\uc801\uc774\uc9c0 \uc54a\uc740 key(~/.ssh/id_rsa\uac00 \uc544\ub2cc)\ub97c \uc0ac\uc6a9\ud574\uc57c \ud55c\ub2e4\uba74 ~/.ssh/config \ud30c\uc77c\uc744 \uc218\uc815\ud574\uc11c \uc774\uc6a9\ud560 \uc218\ub3c4 \uc788\ub2e4. config \ud30c\uc77c\uc5d0 \uc544\ub798\uc640 \uac19\uc740 \ub0b4\uc6a9\uc744 \ucd94\uac00\ud55c\ub2e4. [bash] Host example.com IdentityFile /home/id_dsa [/bash]"}),"\n",(0,n.jsx)(t.p,{children:"\ub05d."})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>o});var n=s(96540);const a={},i=n.createContext(a);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);