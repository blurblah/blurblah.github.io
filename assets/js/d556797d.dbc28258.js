"use strict";(self.webpackChunkblurblah_github_io=self.webpackChunkblurblah_github_io||[]).push([[13902],{77618:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(74848),i=n(28453);const r={title:"Objective-C #03 OOP",date:"2010-02-08",categories:["iphone-dev"],tags:["inheritance","interface","iphone-app","message","method-dispatcher","objective-c","oop","\uac1d\uccb4\uc9c0\ud5a5","\uba54\uc2dc\uc9c0","\uc0c1\uc18d","\uc544\uc774\ud3f0-\uc571-\uac1c\ubc1c"]},c=void 0,s={permalink:"/2010/02/08/wp/objective-c-03-oop",source:"@site/blog/wp/2010-02-08-objective-c-03-oop.md",title:"Objective-C #03 OOP",description:"Indirection\uc5d0 \uc774\uc5b4 OOP\uc5d0 \ub300\ud55c \ubd80\ubd84\uc744 \uacf5\ubd80\ud588\ub2e4. Objective C \uc790\uccb4\uac00 \uac1d\uccb4\uc9c0\ud5a5 \ub54c\ubb38\uc5d0 C\uc5d0\uc11c small talk\ub97c \ucc28\uc6a9\ud588\ub2e4\uace0 \uc54c\ub824\uc838 \uc788\uae30 \ub54c\ubb38\uc5d0 \uc5bc\ub9c8\ub098 \ud6a8\uc728\uc801\uc778\uac00\uac00 \uad81\uae08\ud558\uae34 \ud588\ub2e4. \uc77c\ub2e8 C++ \uacfc \ube44\uad50\ud588\uc744 \ub54c \ube44\uc2b7\ud558\ub2e4\ub294 \ub290\ub08c\ub3c4 \ub4e4\uc5c8\uc9c0\ub9cc \uac00\ub3c5\uc131 \uba74\uc5d0\uc11c\ub294 \ub354 \ub0ab\ub2e4\ub294 \uc0dd\uac01\uc774\ub2e4. \ub610 java\uc640 \ube44\uc2b7\ud558\uac8c interface\uc640 implementation \ubd80\ubd84\uc744 \uad6c\ubd84\ud558\uae30 \uc88b\ub2e4\ub294 \uac83\ub3c4 \uc7a5\uc810\uc774\uc9c0 \uc54a\uc744\uae4c \uc2f6\ub2e4. \ub0b4\uc6a9 \uc815\ub9ac\ud558\uba74\uc11c \uc0ac\uc6a9\ud588\ub358 \uc608\uc81c\ub294 \ubcf4\ud1b5 C++\uc774\ub098 java\uc5d0\uc11c OOP \uc124\uba85\uc5d0 \ub9ce\uc774 \uc0ac\uc6a9\ud558\ub294 \ub3c4\ud615 \uc608\uc81c\uc774\ub2e4. (Circle, Rectangle, Triangle \uc744 \ucc98\uc74c\uc5d4 \uad6c\uc870\uccb4\ub85c \uc791\uc131\ud588\ub2e4\uac00 \ud074\ub798\uc2a4\ub85c \ubc14\uafb8\uace0, \ub098\uc911\uc5d4 \uc0c1\uc18d \uac1c\ub150\uc744 \ub3c4\uc785\ud558\uba74\uc11c \ucd94\uc0c1\ud654 \ud074\ub798\uc2a4\uc778 Shape \ub77c\ub294 \uac78 \ub9cc\ub4e4\uba74\uc11c refactoring \ud558\ub294 \uadf8\ub7f0...)",date:"2010-02-08T00:00:00.000Z",formattedDate:"February 8, 2010",tags:[{label:"inheritance",permalink:"/tags/inheritance"},{label:"interface",permalink:"/tags/interface"},{label:"iphone-app",permalink:"/tags/iphone-app"},{label:"message",permalink:"/tags/message"},{label:"method-dispatcher",permalink:"/tags/method-dispatcher"},{label:"objective-c",permalink:"/tags/objective-c"},{label:"oop",permalink:"/tags/oop"},{label:"\uac1d\uccb4\uc9c0\ud5a5",permalink:"/tags/\uac1d\uccb4\uc9c0\ud5a5"},{label:"\uba54\uc2dc\uc9c0",permalink:"/tags/\uba54\uc2dc\uc9c0"},{label:"\uc0c1\uc18d",permalink:"/tags/\uc0c1\uc18d"},{label:"\uc544\uc774\ud3f0-\uc571-\uac1c\ubc1c",permalink:"/tags/\uc544\uc774\ud3f0-\uc571-\uac1c\ubc1c"}],readingTime:8.89,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Objective-C #03 OOP",date:"2010-02-08",categories:["iphone-dev"],tags:["inheritance","interface","iphone-app","message","method-dispatcher","objective-c","oop","\uac1d\uccb4\uc9c0\ud5a5","\uba54\uc2dc\uc9c0","\uc0c1\uc18d","\uc544\uc774\ud3f0-\uc571-\uac1c\ubc1c"]},unlisted:!1,prevItem:{title:"Objective-C #02 Indirection",permalink:"/2010/02/08/wp/objective-c-02-indirection"},nextItem:{title:"Objective-C #01",permalink:"/2010/02/02/wp/objective-c-01"}},l={authorsImageUrls:[]},p=[];function o(e){const t={a:"a",img:"img",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Indirection\uc5d0 \uc774\uc5b4 OOP\uc5d0 \ub300\ud55c \ubd80\ubd84\uc744 \uacf5\ubd80\ud588\ub2e4. Objective C \uc790\uccb4\uac00 \uac1d\uccb4\uc9c0\ud5a5 \ub54c\ubb38\uc5d0 C\uc5d0\uc11c small talk\ub97c \ucc28\uc6a9\ud588\ub2e4\uace0 \uc54c\ub824\uc838 \uc788\uae30 \ub54c\ubb38\uc5d0 \uc5bc\ub9c8\ub098 \ud6a8\uc728\uc801\uc778\uac00\uac00 \uad81\uae08\ud558\uae34 \ud588\ub2e4. \uc77c\ub2e8 C++ \uacfc \ube44\uad50\ud588\uc744 \ub54c \ube44\uc2b7\ud558\ub2e4\ub294 \ub290\ub08c\ub3c4 \ub4e4\uc5c8\uc9c0\ub9cc \uac00\ub3c5\uc131 \uba74\uc5d0\uc11c\ub294 \ub354 \ub0ab\ub2e4\ub294 \uc0dd\uac01\uc774\ub2e4. \ub610 java\uc640 \ube44\uc2b7\ud558\uac8c interface\uc640 implementation \ubd80\ubd84\uc744 \uad6c\ubd84\ud558\uae30 \uc88b\ub2e4\ub294 \uac83\ub3c4 \uc7a5\uc810\uc774\uc9c0 \uc54a\uc744\uae4c \uc2f6\ub2e4. \ub0b4\uc6a9 \uc815\ub9ac\ud558\uba74\uc11c \uc0ac\uc6a9\ud588\ub358 \uc608\uc81c\ub294 \ubcf4\ud1b5 C++\uc774\ub098 java\uc5d0\uc11c OOP \uc124\uba85\uc5d0 \ub9ce\uc774 \uc0ac\uc6a9\ud558\ub294 \ub3c4\ud615 \uc608\uc81c\uc774\ub2e4. (Circle, Rectangle, Triangle \uc744 \ucc98\uc74c\uc5d4 \uad6c\uc870\uccb4\ub85c \uc791\uc131\ud588\ub2e4\uac00 \ud074\ub798\uc2a4\ub85c \ubc14\uafb8\uace0, \ub098\uc911\uc5d4 \uc0c1\uc18d \uac1c\ub150\uc744 \ub3c4\uc785\ud558\uba74\uc11c \ucd94\uc0c1\ud654 \ud074\ub798\uc2a4\uc778 Shape \ub77c\ub294 \uac78 \ub9cc\ub4e4\uba74\uc11c refactoring \ud558\ub294 \uadf8\ub7f0...)"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"1. \uc6a9\uc5b4"})}),"\n",(0,a.jsx)(t.p,{children:"\ub2e4\ub978 \uc5b8\uc5b4\uc5d0\uc11c\ub294 \ubcfc \uc218 \uc5c6\uc5c8\ub358 \uc870\uae08\uc740 \uc0dd\uc18c\ud55c \uc6a9\uc5b4\ub97c \uc544\ub798\uc5d0 \ub530\ub85c \uc815\ub9ac\ud588\ub2e4. \uc0ac\uc2e4 \uba54\uc138\uc9c0\uc758 \uacbd\uc6b0\uc5d4 Objectvie C \ucf54\ub4dc\uc5d0\uc11c \uac00\uc7a5 \ud2b9\uc774\ud558\ub2e4\uace0 \uc0dd\uac01\ud588\ub358 \ubb38\ubc95\uc5d0 \uad00\ub828\ub41c \ub0b4\uc6a9\uc73c\ub85c \uc774 \ubd80\ubd84\ub9cc \ucc45\uc5d0\uc11c \ubd24\ub294\ub370\ub3c4 Objective C \uc608\uc81c \ucf54\ub4dc\ub4e4\uc744 \uc774\ud574\ud558\uae30\uac00 \uc26c\uc6e0\ub2e4."}),"\n",(0,a.jsx)(t.p,{children:"Message : Objective C\uc5d0\uc11c \uac1d\uccb4\uac00 \uc218\ud589\ud558\ub294 \uc561\uc158."}),"\n",(0,a.jsx)(t.p,{children:"Method dispatcher : Objective C\uc758 \ucf54\ub4dc\uc5d0\uc11c \uba54\uc138\uc9c0\uac00 \ubcf4\ub0b4\uc9c0\uba74 method dispatcher \uac00 \uba54\uc18c\ub4dc\ub97c \ucc3e\ub294\ub2e4. \uac00\uc7a5 \uba3c\uc800 \ud574\ub2f9 \ud074\ub798\uc2a4\uc5d0\uc11c \ucc3e\uace0, \uc5c6\uc73c\uba74 \uc0c1\uc704 \ud074\ub798\uc2a4\ub85c \uc62c\ub77c\uac00\uba74\uc11c \ucc3e\ub294 \ubc29\uc2dd\uc744 \ucde8\ud558\uba70 \ucc3e\uc544\ub3c4 \uc5c6\uc73c\uba74 \uc624\ub958\ub97c \ub0b4\ubcf4\ub0b8\ub2e4."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"2. Message"})}),"\n",(0,a.jsx)(t.p,{children:"\uc544\ub798\uc758 \uadf8\ub9bc\uc744 \uc0b4\ud3b4\ubcf4\uba74,"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://blurblah.net/wp-content/uploads/2010/02/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7-2010-02-09-%EC%98%A4%EC%A0%84-6.40.58.png",children:(0,a.jsx)(t.img,{src:n(66585).A+"",title:"\uc2a4\ud06c\ub9b0\uc0f7 2010-02-09 \uc624\uc804 6.40.58",width:"295",height:"142"})})}),"\n",(0,a.jsx)(t.p,{children:"\uc774\uc0c1\ud55c \ubd80\ubd84\uc774 \ud558\ub098 \ub208\uc5d0 \ub748\ub2e4."}),"\n",(0,a.jsx)(t.p,{children:"[shape draw];"}),"\n",(0,a.jsx)(t.p,{children:"\uc774\uac8c \ubb54\uc9c0 \ub3c4\ub300\uccb4 \uc54c \uc218 \uc5c6\uc5c8\ub2e4. \ubc30\uc5f4\ub3c4 \uc544\ub2c8\uace0...Objective C \uc0d8\ud50c\ub4e4\uc744 \ubcf4\uba74 \ub300\uad04\ud638\ub85c \ubb36\uc778 \uc800\ub7f0 \ubb38\uc7a5\ub4e4\uc774 \uc790\uc8fc \ubcf4\uc778\ub2e4. \uba54\uc138\uc9c0\ub97c \ubcf4\ub0b8\ub2e4\ub294 \uc758\ubbf8\ub85c \ud574\uc11d\ud558\uba74 \ub41c\ub2e4\uace0 \ud558\ub294\ub370, \ucc45 \ub0b4\uc6a9 \uadf8\ub300\ub85c \ubcf4\uba74 shape \ub77c\ub294 \uac1d\uccb4\uc5d0 draw\ub77c\ub294 \uba54\uc138\uc9c0\ub97c \ubcf4\ub0b8\ub2e4\ub294 \uc758\ubbf8\ub77c\uace0 \ud55c\ub2e4. \uadfc\ub370 \uc660\uc9c0 \ubb54\uac00 \ub4a4\uc8fd\ubc15\uc8fd \uc774\uc0c1\ud574\uc11c \ub0b4 \ub098\ub984\ub300\ub85c \ud3b8\ud558\uac8c \ud574\uc11d\ud558\uae30\ub85c \ud588\ub2e4. shape\uc5d0\uac8c draw \ub77c\ub294 \uba85\ub839\uc744 \ub0b4\ub9ac\ub294 \uac70\ub77c\uace0 \uc0dd\uac01\ud558\uba74 \ud6e8\uc52c \ud3b8\ud55c \ub4ef \ud558\ub2e4. \ubb50 \uadf8\uac8c \uadf8\uac70\uc77c \uc218\ub3c4 \uc788\ub2e4...\u314e\u314e"}),"\n",(0,a.jsx)(t.p,{children:'\ub2e4\uc2dc \uc815\ub9ac\ud558\uba74 shape\ub77c\ub294 \uac1d\uccb4\uac00 \uc874\uc7ac\ud558\ub294\ub370 \uadf8 \uac1d\uccb4\ub294 \uba64\ubc84\ud568\uc218\ub85c draw\ub97c \uac00\uc9c0\uace0 \uc788\uc5b4\uc57c \ud558\uace0 \uadf8 draw\ub97c \ud638\ucd9c\ud558\ub294 \ub0b4\uc6a9\uc774\ub77c\uace0 \ubcfc \uc218 \uc788\ub2e4. \uadf8\ub7f0\ub370 \uadf8\uac74 \uadf8\ub807\ub2e4\uace0 \ud558\ub354\ub77c\ub3c4 \ub610 \uc774\uc0c1\ud55c\uac8c \ubcf4\uc778\ub2e4. "id". \uac1d\uccb4\ub97c \uac00\ub9ac\ud0a4\ub294 \ud3ec\uc778\ud130\ub85c \uc774\ud574\ud558\uba74 \uc27d\ub2e4. \ub09c\uc7a1\ud558\uac8c \uc0dd\uae34 \ud3ec\uc778\ud130 \ub300\uc2e0 \uae54\ub054\ud558\uac8c id \ub77c\ub294 \ud0c0\uc785\uc744 \uc0ac\uc6a9\ud558\ub294 \ub4ef \ud558\ub2e4. \uadf8\ub7ec\ub2c8\uae4c [shape draw]\uc758 shape\uac00 id \ud0c0\uc785\uc758 \ubcc0\uc218\uc774\uc9c0\ub9cc \uc5b4\ucc28\ud53c \uac1d\uccb4\ub97c \uac00\ub9ac\ud0a4\uae30 \ub54c\ubb38\uc5d0 shape\uac00 \uac00\ub9ac\ud0a4\uace0 \uc788\ub294 \uac1d\uccb4\uc5d0\uac8c draw \ub97c \uc9c0\uc2dc\ud558\ub294 \ub0b4\uc6a9.'}),"\n",(0,a.jsx)(t.p,{children:"\ud5f7\uac08\ub9b4 \uc218 \uc788\uc73c\ub2c8 \ub610 \ub2e4\ub978 \uc608\ubb38\uc744 \ubcf4\uc790."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://blurblah.net/wp-content/uploads/2010/02/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7-2010-02-09-%EC%98%A4%EC%A0%84-6.53.43.png",children:(0,a.jsx)(t.img,{src:n(24841).A+"",title:"\uc2a4\ud06c\ub9b0\uc0f7 2010-02-09 \uc624\uc804 6.53.43",width:"312",height:"244"})})}),"\n",(0,a.jsx)(t.p,{children:"\uccab\ubc88\uc9f8 \uc608\uc81c\uc640 \uac19\uc740 \ud504\ub85c\uc81d\ud2b8\uc5d0 \uc0ac\uc6a9\ud55c main \ud568\uc218\uc758 \ub0b4\uc6a9\uc774\ub2e4. \uccab\ubc88\uc9f8 \uc608\uc81c\uc640 \ube44\uc2b7\ud55c \ubd80\ubd84\uc774 \uba87 \uad70\ub370 \ubcf4\uc778\ub2e4. \uc77c\ub2e8 \uc7ac\ubbf8\uc788\ub294 \ubd80\ubd84\uc740\xa0shapes[0] = [Circle new]; \ubb38\uc7a5\uc778\ub370 \ucc98\uc74c\uc5d0 \ub2e4\ub8e8\uc5c8\ub358 \ub0b4\uc6a9\uc744 \ubcf4\uba74 \uac19\ub2e4. \ub2e8\uc9c0 Circle \uc774\ub77c\ub294 \ud074\ub798\uc2a4\uc5d0 new\ub77c\ub294 \uba54\uc138\uc9c0\ub97c \ubcf4\ub0b4\uace0 \uc788\uc744 \ubfd0\uc774\ub2e4. \ud55c\ub9c8\ub514\ub85c Circle \uac1d\uccb4\ub97c \uc0c8\ub85c \ub9cc\ub4e4\ub77c\ub294 \uc758\ubbf8."}),"\n",(0,a.jsx)(t.p,{children:"\ub450\ubc88\uc9f8\ub85c, \ube44\uc2b7\ud558\uc9c0\ub9cc \uc880 \uc774\uc0c1\ud55c \ubd80\ubd84\uc774 \ubcf4\uc778\ub2e4."}),"\n",(0,a.jsx)(t.p,{children:"[shape[0] setBounds: rect0];"}),"\n",(0,a.jsx)(t.p,{children:"shape[0]\ub294 \uac1d\uccb4\ub97c \uac00\ub9ac\ud0a4\ub294 id \ubc30\uc5f4 \uc911 \ud558\ub098\uc774\ub2c8 \uc5b4\ucc28\ud53c \uac1d\uccb4\ub97c \uac00\ub9ac\ud0a4\ub294 \uac70\ub77c \uc0dd\uac01\ud558\uba74 \ub418\uc9c0\ub9cc \ub4b7 \ubd80\ubd84\uc758 \ucf5c\ub860 \uc88c\uc6b0\ub294 \uc880 \uc5b4\uc0c9\ud558\uac8c \ub290\uaef4\uc9c4\ub2e4. \uc54c\uace0\ubcf4\ub2c8 \uac04\ub2e8\ud588\ub294\ub370, setBounds\ub294 \uba54\uc138\uc9c0. \uadf8\ub7ec\ub2c8\uae4c \uba64\ubc84\ud568\uc218\uc778\uac70\uace0 \ucf5c\ub860 \uc774\ud6c4\uc758 rect0\ub294 setBounds\uc5d0 \uc804\ub2ec\ud558\uace0 \uc2f6\uc740 parameter. \ub05d. \uc774\uc0c1\ud55c\uac70 \uc5c6\uc74c."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"3. Interface / Implementation"})}),"\n",(0,a.jsx)(t.p,{children:"\uccab \ubd80\ubd84\uc5d0 \uc5b8\uae09\ud588\ub358 \uac83\ucc98\ub7fc Objective C\uc5d0\uc11c\ub294 interface \uc640 implementation\uc774 \uad6c\ubd84\ud558\uae30 \uc88b\uac8c \ubb38\ubc95\uc801\uc73c\ub85c \uad6c\uc131\ub418\uc5b4 \uc788\ub2e4. \uc544\ub798\ub294 \uc0c1\uc18d\uac1c\ub150\uae4c\uc9c0 \uc801\uc6a9\ud574\uc11c refactoring \uae4c\uc9c0 \ub9c8\uce5c \uc0c1\ud0dc\uc758 \ub3c4\ud615\uc758 \ucd5c\uc0c1\uc704 \ud074\ub798\uc2a4 Shape\uc774\ub2e4."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://blurblah.net/wp-content/uploads/2010/02/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7-2010-02-09-%EC%98%A4%EC%A0%84-7.02.11.png",children:(0,a.jsx)(t.img,{src:n(53235).A+"",title:"\uc2a4\ud06c\ub9b0\uc0f7 2010-02-09 \uc624\uc804 7.02.11",width:"368",height:"401"})})}),"\n",(0,a.jsx)(t.p,{children:"\ud074\ub798\uc2a4\ub97c interface\uc640 implementation\uc73c\ub85c \uad6c\ubd84\ud574 \ub193\uc740 \ub0b4\uc6a9\uc774\uace0, @interface\ub85c \uc2dc\uc791\ud574 @end\ub85c \ub05d\ub9fa\uc74c\uc744 \ud558\ub294 \ud615\ud0dc\ub97c \uac16\ucd94\uc5b4\uc57c \ud55c\ub2e4. Shape \uc606\uc758 \ucf5c\ub860\uc740 \uc0c1\uc18d\uc744 \ubc1b\ub294 \uc758\ubbf8\ub85c \ud574\uc11d\ud558\uba74 \ud3b8\ud560 \ub4ef \ud558\uace0 extends \uc815\ub3c4\ub85c \ud574\uc11d\ud558\uba74 \ub418\uc9c0 \uc54a\uc744\uae4c? (\ub098\ub9cc\uc758 \uc0dd\uac01) \uadf8\ub7ec\ub2c8\uae4c Shape\ub294 NSObject (C++\uc5d0\uc11c Object \ud074\ub798\uc2a4 \uac19\uc740 \ucd5c\uc0c1\uc704 \ud074\ub798\uc2a4)\ub97c \uc0c1\uc18d\ubc1b\uace0 \uadf8 \uc544\ub798\uc758 \uc911\uad04\ud638\ub85c \uc2fc \ub0b4\uc6a9\uc740 \uba64\ubc84\ubcc0\uc218\ub77c\uace0 \uc0dd\uac01\ud558\uba74 \ub41c\ub2e4. \ud2b9\uc774\ud55c \ubd80\ubd84\uc740 '-' \ub85c \uc2dc\uc791\ud558\ub294 3\uc904. \uc9c1\uad00\uc801\uc73c\ub85c \uba64\ubc84\ud568\uc218\ub97c \uc758\ubbf8\ud55c\ub2e4\ub294\uac8c \ub290\uaef4\uc9c4\ub2e4. (void) \ub294 \ub9ac\ud134\ud0c0\uc785\uc744 \uc758\ubbf8\ud558\uba70, \uc704\uc5d0 \uc788\ub294 main \ud568\uc218 \uc608\ubb38\uc744 \ucc38\uace0\ud574\uc11c \ubcf4\uba74 setFillColor \ub77c\ub294 method\ub294 ShapeColor \ud0c0\uc785\uc758 fillColor\ub97c \uc778\uc790\ub85c \ubc1b\ub294 method \ub77c\ub294 \uac78 \uba85\uc2dc\ud574\uc8fc\uace0 \uc788\ub2e4."}),"\n",(0,a.jsx)(t.p,{children:"\uad6c\ud604\ubd80\uc778 implementation\ub3c4 @\ub85c \uc2dc\uc791\ud574 @end\ub85c \ub05d\ub9fa\uc74c\ud55c\ub2e4. Interface \ubd80\ubd84\uacfc \ub3d9\uc77c\ud55c \ud615\ud0dc\ub85c method\ub97c \ub098\uc5f4\ud574 \uc911\uad04\ud638\ub85c \ubb36\uc5b4 \uad6c\ud604\ub0b4\uc6a9\uc744 \ub123\uc5b4\ub450\uc5c8\ub2e4. \ub9c8\uc9c0\ub9c9\uc5d0 \uc788\ub294 draw\ub294 Shape\ub97c \uc0c1\uc18d\ubc1b\uc744 Circle, Rectangle \ub4f1\uc758 sub class\uc5d0\uc11c overriding \ud574\uc11c \uc4f8 \uac70\ub77c \ube48 \ub0b4\uc6a9\uc73c\ub85c \ub450\uc5c8\ub2e4."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"4. Inheritance"})}),"\n",(0,a.jsx)(t.p,{children:"\uc0c1\uc18d\uc774\ub2e4. OOP\uc5d0\uc11c \uac00\uc7a5 \uc911\uc694\ud55c \uac1c\ub150 \uc911 \ud558\ub098. \uc5ed\uc2dc\ub098 \uc608\uc81c \uc704\uc8fc\ub85c \ubcf4\ub294\uac8c \ud3b8\ud558\ub2e4. \uc544\ub798\uc758 \uadf8\ub9bc."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://blurblah.net/wp-content/uploads/2010/02/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7-2010-02-09-%EC%98%A4%EC%A0%84-7.02.33.png",children:(0,a.jsx)(t.img,{src:n(73867).A+"",title:"\uc2a4\ud06c\ub9b0\uc0f7 2010-02-09 \uc624\uc804 7.02.33",width:"447",height:"436"})})}),"\n",(0,a.jsx)(t.p,{children:"Shape\ub97c \uc0c1\uc18d\ubc1b\ub294 Circle\uacfc Rectangle \ud074\ub798\uc2a4\uc758 interface\uc640 implementation \ubd80\ubd84\uc774\ub2e4. \ub300\ucda9\ubcf4\uba74 \ub300\ubd80\ubd84 \uc774\ud574\uac00 \ub418\ub294\ub370 \ud558\ub098 \uc774\uc0c1\ud55c\uac8c interface \uc548\uc5d0 \ub0b4\uc6a9\uc774 \uc5c6\ub2e4\ub294 \uc0ac\uc2e4. \ub450 \ud074\ub798\uc2a4 \ubaa8\ub450 Shape\uc758 \uba64\ubc84\ubcc0\uc218\uc640 \uba64\ubc84\ud568\uc218 \uc774\uc678\uc5d0 \ucd94\uac00\ud560\uac8c \uc5c6\ub294 \uacbd\uc6b0\uc5d4 \uc800\ub807\uac8c \ube48 \uacf5\uac04\uc73c\ub85c \ub450\uc5b4\ub3c4 \ubb34\ubc29\ud558\ub2e4. implementation \ubd80\ubd84\uc744 \ubcf4\uba74 Shape\uc758 draw\ub97c overriding \ud574\uc11c \uc4f0\ub824\uace0 \uc7ac\uc815\uc758\ud574 \ub450\uc5c8\ub2e4. \ub450 \ud074\ub798\uc2a4\uc758 draw\uc758 \ucc28\uc774\uc810\uc740 NSLog\uc5d0 \ub4e4\uc5b4\uac00\ub294 circle\uacfc rect \ubb38\uc790\uc5f4\uc758 \ucc28\uc774. \u314e\u314e"}),"\n",(0,a.jsx)(t.p,{children:"\ucd08\ubc18\uc5d0 \uc6a9\uc5b4\uc815\ub9ac\ud574 \ub450\uc5c8\ub358 method dispatcher\ub97c \uc0dd\uac01\ud574\ubcf4\uba74, method dispatcher\ub294 \ub0b4\uac00 \uc0ac\uc6a9\ud55c \uc608\uc81c\uc5d0\uc11c draw\ub97c \ud638\ucd9c\ud560 \ub54c \uac01 \ud074\ub798\uc2a4(Circle, Rectangle)\uc5d0 \uc788\ub294 draw\ub97c \uba3c\uc800 \ud638\ucd9c\ud558\ub824 \ud560\uac70\uace0 \ub9cc\uc57d \uc7ac\uc815\uc758\ub418\uc5b4 \uc788\uc9c0 \uc54a\ub2e4\uba74 \uc0c1\uc704\uc758 Shape\ub85c \uc62c\ub77c\uac00 draw\ub97c \ucc3e\uc544\uc11c \uc788\ub2e4\uba74 Shape\uc758 draw\ub97c \ud638\ucd9c\ud558\uac8c \ub9cc\ub4e0\ub2e4."})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},66585:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/\uc2a4\ud06c\ub9b0\uc0f7-2010-02-09-\uc624\uc804-6.40.58-49dc4f7d54e8ee89688ca5f7d119a2ff.png"},24841:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/\uc2a4\ud06c\ub9b0\uc0f7-2010-02-09-\uc624\uc804-6.53.43-436862717ae19a429ce5f6c2d002aa43.png"},53235:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/\uc2a4\ud06c\ub9b0\uc0f7-2010-02-09-\uc624\uc804-7.02.11-970fe5f466da297c3f5799417c2928a7.png"},73867:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/\uc2a4\ud06c\ub9b0\uc0f7-2010-02-09-\uc624\uc804-7.02.33-7594ec831da4b5e9bc370caa270b1879.png"},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>s});var a=n(96540);const i={},r=a.createContext(i);function c(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);