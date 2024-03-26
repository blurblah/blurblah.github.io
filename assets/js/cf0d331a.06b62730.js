"use strict";(self.webpackChunkblurblah_github_io=self.webpackChunkblurblah_github_io||[]).push([[32668],{81949:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var t=r(74848),s=r(28453);const a={title:"[Processing] Ch.8 Functions, Ch.9 Objects, Ch.10 Arrays, Ch.11 Extend",date:"2011-11-15",categories:["others"],tags:["3d","arrays","data-visualization","functions","image-export","library","objects","processing"]},i=void 0,o={permalink:"/2011/11/15/wp/processing-ch-8-functions-ch-9-objects-ch-10-arrays-ch-11-extend",source:"@site/blog/wp/2011-11-15-processing-ch-8-functions-ch-9-objects-ch-10-arrays-ch-11-extend.md",title:"[Processing] Ch.8 Functions, Ch.9 Objects, Ch.10 Arrays, Ch.11 Extend",description:"Ch.8 \ubd80\ud130 Ch.10 \uae4c\uc9c0\ub294 \uac01\uac01 \ud568\uc218, \uac1d\uccb4, \ubc30\uc5f4 \uc0dd\uc131\uacfc \uc0ac\uc6a9\uc5d0 \ub300\ud55c \ub0b4\uc6a9\uc774 \uae30\uc220\ub418\uc5b4 \uc788\ub294\ub370 \uae30\ubcf8 java \ubb38\ubc95\uacfc \ub3d9\uc77c\ud558\ub2e4.",date:"2011-11-15T00:00:00.000Z",formattedDate:"November 15, 2011",tags:[{label:"3d",permalink:"/tags/3-d"},{label:"arrays",permalink:"/tags/arrays"},{label:"data-visualization",permalink:"/tags/data-visualization"},{label:"functions",permalink:"/tags/functions"},{label:"image-export",permalink:"/tags/image-export"},{label:"library",permalink:"/tags/library"},{label:"objects",permalink:"/tags/objects"},{label:"processing",permalink:"/tags/processing"}],readingTime:1.66,hasTruncateMarker:!1,authors:[],frontMatter:{title:"[Processing] Ch.8 Functions, Ch.9 Objects, Ch.10 Arrays, Ch.11 Extend",date:"2011-11-15",categories:["others"],tags:["3d","arrays","data-visualization","functions","image-export","library","objects","processing"]},unlisted:!1,prevItem:{title:"[Processing] Ch.7 Motion",permalink:"/2011/11/15/wp/processing-ch-7-motion"},nextItem:{title:"\ud2b8\uc704\ud130\uc5d0 \uc4f4 \uae00 on 2011-11-12",permalink:"/2011/11/12/wp/2011-11-12-\ud2b8\uc704\ud130\uc5d0-\uc4f4-\uae00-on-"}},c={authorsImageUrls:[]},l=[];function p(e){const n={a:"a",p:"p",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Ch.8 \ubd80\ud130 Ch.10 \uae4c\uc9c0\ub294 \uac01\uac01 \ud568\uc218, \uac1d\uccb4, \ubc30\uc5f4 \uc0dd\uc131\uacfc \uc0ac\uc6a9\uc5d0 \ub300\ud55c \ub0b4\uc6a9\uc774 \uae30\uc220\ub418\uc5b4 \uc788\ub294\ub370 \uae30\ubcf8 java \ubb38\ubc95\uacfc \ub3d9\uc77c\ud558\ub2e4."}),"\n",(0,t.jsx)(n.p,{children:"Ch.11\uc5d0\uc11c \ub2e4\ub8e8\uace0 \uc788\ub294 \ud655\uc7a5\uc5d0 \ub300\ud55c \ub0b4\uc6a9\uc740 \ub2e4\ub978 library\ub4e4\uc744 \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\ub4e4\uc5d0 \ub300\ud574 \uc124\uba85."}),"\n",(0,t.jsx)(n.p,{children:"\xa0"}),"\n",(0,t.jsx)(n.p,{children:"Download \uac00\ub2a5\ud55c library \uacbd\ub85c"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"http://processing.org/reference/libraries",children:"http://processing.org/reference/libraries"})}),"\n",(0,t.jsx)(n.p,{children:"download \ud6c4 processing menu\uc5d0\uc11c import\ud574 \uc0ac\uc6a9"}),"\n",(0,t.jsx)(n.p,{children:"\xa0"}),"\n",(0,t.jsx)(n.p,{children:"3D"}),"\n",(0,t.jsx)(n.p,{children:"3D\ub97c \uc0ac\uc6a9\ud558\uae30 \uc704\ud574\uc11c\ub294 \uc0ac\uc6a9\ud560 renderer\ub97c \uc120\ud0dd\ud574\uc918\uc57c \ud558\uba70 z \uc88c\ud45c\uc5d0 \ub300\ud55c \uac12\ub3c4 \ubaa8\ub4e0 \ud568\uc218\uc5d0 \ucd94\uac00\ub41c\ub2e4."}),"\n",(0,t.jsx)(n.p,{children:"\ud654\uba74 \ud06c\uae30\ub97c \uacb0\uc815\ud560 \ub54c \ud638\ucd9c\ud558\ub294 size \ud568\uc218\uc5d0\uc11c renderer\ub97c \uc120\ud0dd\ud55c\ub2e4."}),"\n",(0,t.jsx)(n.p,{children:"(ex : size(440, 220, OPENGL)\uc740 440x220 \uc0ac\uc774\uc988\uc758 \ud654\uba74\uc5d0\uc11c OpenGL\uc744 \uc0ac\uc6a9)"}),"\n",(0,t.jsx)(n.p,{children:"\uae30\ubcf8\uc801\uc73c\ub85c processing\uc5d0\uc11c 2D\ub294 JAVA2D renderer\ub97c \uc0ac\uc6a9\ud558\uace0 \uc788\ub294\ub370, quality\ub97c \ub0ae\ucd94\uace0 \uc880 \ub354 \ube60\ub974\uac8c rendering \ud558\uace0\uc790 \ud558\uba74 P2D\ub97c \uc774\uc6a9\ud560 \uc218 \uc788\uace0 3D\ub97c \uc704\ud574\uc11c\ub294 P3D \ud639\uc740 OpenGL \uc0ac\uc6a9 \uac00\ub2a5"}),"\n",(0,t.jsx)(n.p,{children:"\xa0"}),"\n",(0,t.jsx)(n.p,{children:"Image Export"}),"\n",(0,t.jsx)(n.p,{children:"\ud604\uc7ac \ubcf4\uc5ec\uc9c0\uace0 \uc788\ub294 \ud654\uba74\uc744 image \ud30c\uc77c\ub85c \uc800\uc7a5\ud558\uae30 \uc704\ud55c \uae30\ub2a5"}),"\n",(0,t.jsx)(n.p,{children:"saveFrame \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\uba74 \ub418\ub294\ub370 (\uc778\uc790\ub294 \uc800\uc7a5\ud560 \ud30c\uc77c \uc774\ub984), draw \ud568\uc218 \ub0b4\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uacbd\uc6b0 \uc778\uc790\uc5d0 # (hash mark)\ub97c \ubd99\uc774\uba74 \uc790\ub3d9\uc73c\ub85c \ud604\uc7ac\uc758 frame number\ub85c \ub300\uccb4\ub41c\ub2e4. \uae30\ubcf8\uc73c\ub85c png, jpg, tif \ud615\ud0dc\ub85c \uc800\uc7a5 \uac00\ub2a5."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>o});var t=r(96540);const s={},a=t.createContext(s);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);