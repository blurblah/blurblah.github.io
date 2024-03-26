"use strict";(self.webpackChunkblurblah_github_io=self.webpackChunkblurblah_github_io||[]).push([[69118],{13498:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>h,contentTitle:()=>c,default:()=>o,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var s=r(74848),i=r(28453);const t={title:"[Processing] 3. Draw",date:"2011-10-31",categories:["others"],tags:["data-visualization","processing"]},c=void 0,l={permalink:"/2011/10/31/wp/processing-3-draw",source:"@site/blog/wp/2011-10-31-processing-3-draw.md",title:"[Processing] 3. Draw",description:"Processing study.",date:"2011-10-31T00:00:00.000Z",formattedDate:"October 31, 2011",tags:[{label:"data-visualization",permalink:"/tags/data-visualization"},{label:"processing",permalink:"/tags/processing"}],readingTime:3.18,hasTruncateMarker:!1,authors:[],frontMatter:{title:"[Processing] 3. Draw",date:"2011-10-31",categories:["others"],tags:["data-visualization","processing"]},unlisted:!1,prevItem:{title:"CI\ub294 \uc9c0\uc18d\uc801\uc73c\ub85c \uad00\uc2ec\uc744 \uac00\uc838\uc57c...",permalink:"/2011/10/31/wp/ci\ub294-\uc9c0\uc18d\uc801\uc73c\ub85c-\uad00\uc2ec\uc744-\uac00\uc838\uc57c"},nextItem:{title:"\ud2b8\uc704\ud130\uc5d0 \uc4f4 \uae00 on 2011-10-29",permalink:"/2011/10/29/wp/2011-10-29-\ud2b8\uc704\ud130\uc5d0-\uc4f4-\uae00-on-"}},h={authorsImageUrls:[]},d=[];function p(n){const e={p:"p",strong:"strong",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"\xa0"}),"\n",(0,s.jsx)(e.p,{children:"\xa0"}),"\n",(0,s.jsx)(e.p,{children:"Processing study."}),"\n",(0,s.jsx)(e.p,{children:"\uad50\uc7ac : Getting Started with Processing"}),"\n",(0,s.jsx)(e.p,{children:"\xa0"}),"\n",(0,s.jsx)(e.p,{children:"Chapter 1, 2\ub294 PDE (Processing Develop Environment) \uae30\ubcf8\uc0ac\uc6a9\uacfc Processing \uc18c\uac1c \ub0b4\uc6a9."}),"\n",(0,s.jsx)(e.p,{children:"Chapter 3. Draw"}),"\n",(0,s.jsx)(e.p,{children:"\xa0"}),"\n",(0,s.jsx)(e.p,{children:"Screen size\uac00 200 x 200 \uc774\ub77c\uba74 \uc88c\ud45c\ub294 (0, 0) ~ (200, 200)\uae4c\uc9c0\uc784"}),"\n",(0,s.jsx)(e.p,{children:"\xa0"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"1. Window \uadf8\ub9ac\uae30"})}),"\n",(0,s.jsx)(e.p,{children:"size(800, 600);"}),"\n",(0,s.jsx)(e.p,{children:"\xa0"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"2. Point \uadf8\ub9ac\uae30"})}),"\n",(0,s.jsx)(e.p,{children:"size(800, 600);"}),"\n",(0,s.jsx)(e.p,{children:"point(240, 60);"}),"\n",(0,s.jsx)(e.p,{children:"//x = 240, y = 60"}),"\n",(0,s.jsx)(e.p,{children:"\xa0"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"3. Line \uadf8\ub9ac\uae30"})}),"\n",(0,s.jsx)(e.p,{children:"size(800, 600);"}),"\n",(0,s.jsx)(e.p,{children:"line(20, 50, 420, 110);"}),"\n",(0,s.jsx)(e.p,{children:"//x1 = 20, y1 = 50, x2 = 420, y2=110 (\ub450 \uc88c\ud45c)"}),"\n",(0,s.jsx)(e.p,{children:"\xa0"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"4. Triangle \uadf8\ub9ac\uae30"})}),"\n",(0,s.jsx)(e.p,{children:"triangle(x1, y1, x2, y2, x3, y3);"}),"\n",(0,s.jsx)(e.p,{children:"//\uaf2d\uc9c0\uc810 \uc138 \uac1c \uc88c\ud45c"}),"\n",(0,s.jsx)(e.p,{children:"\xa0"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"5. Quad \uadf8\ub9ac\uae30 (\uc0ac\uac01\ud615)"})}),"\n",(0,s.jsx)(e.p,{children:"quad(x1, y1, x2, y2, x3, y3, x4, y4);"}),"\n",(0,s.jsx)(e.p,{children:"//\ub124 \uac1c \uc810\uc758 \uc88c\ud45c"}),"\n",(0,s.jsx)(e.p,{children:"\xa0"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"6. Rectangle \uadf8\ub9ac\uae30 (\uc9c1\uc0ac\uac01\ud615)"})}),"\n",(0,s.jsx)(e.p,{children:"rect(x, y, width, height);"}),"\n",(0,s.jsx)(e.p,{children:"//x, y\uac00 \uae30\uc900\uc810, width : \uae30\uc900\uc810\uc73c\ub85c\ubd80\ud130\uc758 \ub108\ube44 (\uc624\ub978\ucabd), height : \uae30\uc900\uc810\uc73c\ub85c\ubd80\ud130\uc758 \ub192\uc774 (\uc544\ub798\ub85c)"}),"\n",(0,s.jsx)(e.p,{children:"\xa0"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"7. Ellipse \uadf8\ub9ac\uae30 (\uc6d0 or \ud0c0\uc6d0)"})}),"\n",(0,s.jsx)(e.p,{children:"ellipse(x, y, width, height);"}),"\n",(0,s.jsx)(e.p,{children:"//x, y\uac00 \uc6d0\uc810, width\ub294 \uac00\ub85c \uc9c0\ub984, height\ub294 \uc138\ub85c \uc9c0\ub984"}),"\n",(0,s.jsx)(e.p,{children:"\xa0"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"8. Arc \uadf8\ub9ac\uae30 (\ud638)"})}),"\n",(0,s.jsx)(e.p,{children:"arc(x, y, width, height, start, stop);"}),"\n",(0,s.jsx)(e.p,{children:"//x, y\uac00 \uc6d0\uc810, width\ub294 \uac00\ub85c \uc9c0\ub984, height\ub294 \uc138\ub85c \uc9c0\ub984, start\ub294 \uc2dc\uc791 \uac01\ub3c4(radian), end\ub294 \ub05d\ub098\ub294 \uc9c0\uc810\uc758 \uac01\ub3c4(radian)"}),"\n",(0,s.jsx)(e.p,{children:"//\uc2dc\uacc4\uc5d0\uc11c 3\uc774 \uac00\ub9ac\ud0a4\ub294 \uc704\uce58\uac00 0\uc774\uace0 \uc2dc\uacc4 \ubc18\ub300\ubc29\ud5a5\uc73c\ub85c \uac01\uc774 \uc99d\uac00\ud568 (6\uc2dc \ubc29\ud5a5 : HALF_PI, 9\uc2dc \ubc29\ud5a5 : PI, ...)"}),"\n",(0,s.jsx)(e.p,{children:"//degree\uc640 radian \ubcc0\ud658\uc744 \uc704\ud55c radians \ub77c\ub294 \ud568\uc218 \uc81c\uacf5. HALF_PI = radians(90);"}),"\n",(0,s.jsx)(e.p,{children:"\xa0"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"9. Drawing Order"})}),"\n",(0,s.jsx)(e.p,{children:"Layer \uc313\ub4ef\uc774 \ub098\uc911\uc5d0 \ud638\ucd9c\ud55c \ud568\uc218\ub85c \uc778\ud574 \uadf8\ub824\uc9c0\ub294 \ub3c4\ud615\uc774 \uc0c1\uc704\uc5d0 \ub193\uc784"}),"\n",(0,s.jsx)(e.p,{children:"\xa0"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"10. Smooth"})}),"\n",(0,s.jsx)(e.p,{children:"smooth() \ud568\uc218 \uc81c\uacf5 (\uc120\uc758 \ub05d\uc744 \ubd80\ub4dc\ub7fd\uac8c \ub9cc\ub4ec, \ubc18\ub300\ub294 noSmooth())"}),"\n",(0,s.jsx)(e.p,{children:"\xa0"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"11. Stroke weight"})}),"\n",(0,s.jsx)(e.p,{children:"\uc120 \uad75\uae30\ub97c \uc704\ud55c strokeWeight \ud568\uc218."}),"\n",(0,s.jsx)(e.p,{children:"strokeWeight(8); //\uc120\uc758 \uad75\uae30\uac00 8 pixel"}),"\n",(0,s.jsx)(e.p,{children:"\xa0"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"12. Stroke \uc18d\uc131"})}),"\n",(0,s.jsx)(e.p,{children:"strokeJoin : \uc120\uc774 \ub9cc\ub098\ub294 \uc9c0\uc810\uc758 \uc18d\uc131"}),"\n",(0,s.jsx)(e.p,{children:"strokeCap : \uc120\uc758 \uc2dc\uc791\uacfc \ub05d \ubaa8\uc591"}),"\n",(0,s.jsx)(e.p,{children:"strokeJoin(ROUND); //\ub9cc\ub098\ub294 \uc9c0\uc810\uc744 \ub465\uae00\uac8c"}),"\n",(0,s.jsx)(e.p,{children:"strokeJoin(BEVEL); //\ub9cc\ub098\ub294 \uc9c0\uc810\uc744 Bevel\ub85c"}),"\n",(0,s.jsx)(e.p,{children:"strokeCap(SQUARE); //\uc120\uc758 \uc2dc\uc791\uacfc \ub05d\uc744 \uc0ac\uac01\ud615\uc73c\ub85c"}),"\n",(0,s.jsx)(e.p,{children:"strokeJoin(ROUND); //\uc120\uc758 \uc2dc\uc791\uacfc \ub05d\uc744 \ub465\uae00\uac8c"}),"\n",(0,s.jsx)(e.p,{children:"\xa0"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"13. Color"})}),"\n",(0,s.jsx)(e.p,{children:"background, fill, stroke \ud568\uc218\ub85c \uc0c9\uc0c1 \uc870\uc808 \uac00\ub2a5"}),"\n",(0,s.jsx)(e.p,{children:"Black & White\ub294 0 ~ 255\ub85c (0\uc774 Black, 255\uac00 White)"}),"\n",(0,s.jsx)(e.p,{children:"\xa0"}),"\n",(0,s.jsx)(e.p,{children:"\ub9c8\ucc2c\uac00\uc9c0\ub85c \uac19\uc740 \ud568\uc218\ub97c \uc774\uc6a9\ud574 RGB \uac12\uc744 \uc21c\uc11c\ub300\ub85c \uc124\uc815 \uac00\ub2a5"}),"\n",(0,s.jsx)(e.p,{children:"background(0, 26, 51); //Dark blue (R : 0, G : 26, B : 51)"}),"\n",(0,s.jsx)(e.p,{children:"\xa0"}),"\n",(0,s.jsx)(e.p,{children:"\ud22c\uba85\ub3c4\ub294 fill, stroke \ud568\uc218\ub85c \uc124\uc815 \uac00\ub2a5\ud558\uba70 0 ~ 255\uc758 \uac12\uc73c\ub85c \uc124\uc815 (0\uc774 \ud22c\uba85, 255\uac00 \ubd88\ud22c\uba85)"}),"\n",(0,s.jsx)(e.p,{children:"\xa0"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"14. Custom shapes"})}),"\n",(0,s.jsx)(e.p,{children:"\uc784\uc758\uc758 \ub3c4\ud615\uc744 \uadf8\ub9ac\uae30 \uc704\ud574 beginShape, endShape, vertex \ud568\uc218\ub97c \uc0ac\uc6a9"}),"\n",(0,s.jsx)(e.p,{children:"begineShape\ub85c \ub3c4\ud615\uc744 \uadf8\ub9ac\ub294 \uc2dc\uc791\uc744 \uc54c\ub9ac\uace0 vertex(x, y)\ub85c \uc810\uc744 \uadf8\ub9bc, \uc644\ub8cc\ub418\uba74 endShape\ub97c \ud638\ucd9c"})]})}function o(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(p,{...n})}):p(n)}},28453:(n,e,r)=>{r.d(e,{R:()=>c,x:()=>l});var s=r(96540);const i={},t=s.createContext(i);function c(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);