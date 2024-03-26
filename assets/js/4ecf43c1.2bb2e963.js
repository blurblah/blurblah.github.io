"use strict";(self.webpackChunkblurblah_github_io=self.webpackChunkblurblah_github_io||[]).push([[10286],{86936:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=n(74848),r=n(28453);const o={title:"\uc774\ud574\ub97c \ub3d5\uae30 \uc704\ud55c Objective-C \ubb38\ubc95 (Ch.6)",date:"2010-07-25",categories:["iphone-dev"],tags:["cgrect","cgsize","head-first-iphone-development","iphone","iphone-app","nsnotificationcenter","nssortdescriptor","objective-c"]},c=void 0,a={permalink:"/2010/07/25/wp/\uc774\ud574\ub97c-\ub3d5\uae30-\uc704\ud55c-objective-c-\ubb38\ubc95-ch-6",source:"@site/blog/wp/2010-07-25-\uc774\ud574\ub97c-\ub3d5\uae30-\uc704\ud55c-objective-c-\ubb38\ubc95-ch-6.md",title:"\uc774\ud574\ub97c \ub3d5\uae30 \uc704\ud55c Objective-C \ubb38\ubc95 (Ch.6)",description:"\uc81c \uc0dd\uac01\uc5d4 \uac00\uc7a5 \uae38\uc5c8\ub358 chapter \uc600\ub358 \uac83 \uac19\uc2b5\ub2c8\ub2e4. \ubab8\uc774 \uc548\uc88b\uc740 \uac83\ub3c4 \uc788\uc5c8\ub294\ub370 \ud1a0\ud560 \uc815\ub3c4\ub85c \uc9dc\uc99d\ub3c4 \uc880 \ub098\uace0 \uadf8\ub7ac\uc8e0. \uc774\ubc88\uc5d0\ub3c4 \uc5b4\uae40\uc5c6\uc774 DrinkMixer\ub97c \uc608\uc81c\ub85c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \ud750\ub984\uc744 \ubcf4\uba74 \uc18c\ud504\ud2b8 \ud0a4\ubcf4\ub4dc\uc758 \ub4f1\uc7a5\uc73c\ub85c \uc778\ud574 \uc9e4\ub9ac\ub294 UI, \uadf8\ub9ac\uace0 \uadf8 \ub54c\ubb38\uc5d0 \ucee8\ud2b8\ub864\uc774 \ubd88\uac00\ub2a5\ud55c \uac83\ub4e4\uc744 \uc5b4\ub5bb\uac8c \ucc98\ub9ac\ud560 \uac83\uc774\ub0d0\uac00 \ud55c\uac00\uc9c0 \uc785\ub2c8\ub2e4. \ucc45\uc5d0\uc11c\ub294 \uc608\uc804\uc5d0\ub3c4 \ub4f1\uc7a5\ud588\ub358 \ud0a4\ubcf4\ub4dc\uc640 \uad00\ub828\ub41c \uc774\ubca4\ud2b8\ub97c \ubc1b\uc544\uc11c \uadf8 \ub54c \ub9c8\ub2e4\uc758 \uc815\ud655\ud55c \ud654\uba74 \uc0ac\uc774\uc988(\ud0a4\ubcf4\ub4dc\uac00 \ud3ec\ud568\ub418\uc9c0 \uc54a\uc740 \uc601\uc5ed)\ub97c \uacc4\uc0b0\ud558\uace0 \uc0c8\ub85c \ub9cc\ub4e4\uac8c \ub418\ub294 \uc2a4\ud06c\ub864 \ubdf0\uc5d0 \uac12\uc744 \ub118\uaca8 \ud654\uba74\uc774 \uc2a4\ud06c\ub864 \ub418\ub3c4\ub85d \ucc98\ub9ac\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc5b4\ub5bb\uac8c \uc0dd\uac01\ud574\ubcf4\uba74 \ud0a4\ubcf4\ub4dc\uac00 \ub098\ud0c0\ub0ac\ub2e4 \uc0ac\ub77c\uc9c0\ub294 \uac83, \uadf8\uc5d0 \ub530\ub77c \ud654\uba74\uc774 \uac00\ub824\uc9c0\uace0 \uc2a4\ud06c\ub864\uc774 \ub418\uc9c0 \uc54a\uc73c\uba74 \ucee8\ud2b8\ub864\uc774 \ub418\uc9c0 \uc54a\ub294\uac8c \ub2f9\uc5f0\ud55c\ub370 \uc774\ub7f0\uac78 \uc790\ub3d9\uc73c\ub85c \ucc98\ub9ac\ud560 \uc218 \uc788\uac8c \uc81c\uacf5\ud558\uba74 \uc5b4\ub560\uc744\uae4c \uc2f6\uc2b5\ub2c8\ub2e4. \uc0ac\uc2e4 \ub2f9\uc5f0\ud55c \uac83\ub4e4\uc744 \ucc98\ub9ac\ud558\ub294 \uac83\ub3c4 \uc6b0\ub9ac\uc5d0\uac90 \uc9d0\uc774\ub2c8\uae4c\uc694. :) \ub610 \ud558\ub098 \ub2e4\ub8e8\ub294 \ub0b4\uc6a9\uc740 \uc774\ubbf8 \ub9cc\ub4e4\uc5b4\uc838 \uc788\ub294 \ud14c\uc774\ube14 \ubdf0\uc5d0 \ubcf4\uc5ec\uc9c0\ub294 \ub370\uc774\ud130\ub4e4\uc744 \ud3b8\uc9d1\ud558\uace0 \uc0ad\uc81c\ud558\ub294 \uae30\ub2a5\uc744 \ucd94\uac00\ud558\ub294 \ubc29\ubc95\uc785\ub2c8\ub2e4. SDK\uc5d0\uc11c \uc81c\uacf5\ub418\ub294\uac78 \uadf8\ub300\ub85c \uc0ac\uc6a9\ud558\uae30 \ub54c\ubb38\uc5d0 \uc774 \ubd80\ubd84\uc740 \uc0c1\ub2f9\ud788 \ud3b8\ud558\uac8c \uad00\ub9ac\ud560 \uc218 \uc788\ub2e4\uace0 \uc0dd\uac01\ub429\ub2c8\ub2e4. \uc544\ub798\ub294 \uba54\ubaa8\ud558\uace0 \uc2f6\uc5c8\ub358, \uc774\ubc88 chapter\uc5d0\uc11c \uc0c8\ub85c \ub4f1\uc7a5\ud55c \ub140\uc11d\ub4e4\uc785\ub2c8\ub2e4.",date:"2010-07-25T00:00:00.000Z",formattedDate:"July 25, 2010",tags:[{label:"cgrect",permalink:"/tags/cgrect"},{label:"cgsize",permalink:"/tags/cgsize"},{label:"head-first-iphone-development",permalink:"/tags/head-first-iphone-development"},{label:"iphone",permalink:"/tags/iphone"},{label:"iphone-app",permalink:"/tags/iphone-app"},{label:"nsnotificationcenter",permalink:"/tags/nsnotificationcenter"},{label:"nssortdescriptor",permalink:"/tags/nssortdescriptor"},{label:"objective-c",permalink:"/tags/objective-c"}],readingTime:8.215,hasTruncateMarker:!1,authors:[],frontMatter:{title:"\uc774\ud574\ub97c \ub3d5\uae30 \uc704\ud55c Objective-C \ubb38\ubc95 (Ch.6)",date:"2010-07-25",categories:["iphone-dev"],tags:["cgrect","cgsize","head-first-iphone-development","iphone","iphone-app","nsnotificationcenter","nssortdescriptor","objective-c"]},unlisted:!1,prevItem:{title:"\uc774\ud574\ub97c \ub3d5\uae30 \uc704\ud55c Objective-C \ubb38\ubc95 (Ch.9)",permalink:"/2010/08/14/wp/\uc774\ud574\ub97c-\ub3d5\uae30-\uc704\ud55c-objective-c-\ubb38\ubc95-ch-9"},nextItem:{title:"\uc774\ud574\ub97c \ub3d5\uae30 \uc704\ud55c Objective-C \ubb38\ubc95 (Ch.5)",permalink:"/2010/07/18/wp/\uc774\ud574\ub97c-\ub3d5\uae30-\uc704\ud55c-objective-c-\ubb38\ubc95-ch-5"}},s={authorsImageUrls:[]},l=[];function d(e){const t={code:"code",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"\uc81c \uc0dd\uac01\uc5d4 \uac00\uc7a5 \uae38\uc5c8\ub358 chapter \uc600\ub358 \uac83 \uac19\uc2b5\ub2c8\ub2e4. \ubab8\uc774 \uc548\uc88b\uc740 \uac83\ub3c4 \uc788\uc5c8\ub294\ub370 \ud1a0\ud560 \uc815\ub3c4\ub85c \uc9dc\uc99d\ub3c4 \uc880 \ub098\uace0 \uadf8\ub7ac\uc8e0. \uc774\ubc88\uc5d0\ub3c4 \uc5b4\uae40\uc5c6\uc774 DrinkMixer\ub97c \uc608\uc81c\ub85c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \ud750\ub984\uc744 \ubcf4\uba74 \uc18c\ud504\ud2b8 \ud0a4\ubcf4\ub4dc\uc758 \ub4f1\uc7a5\uc73c\ub85c \uc778\ud574 \uc9e4\ub9ac\ub294 UI, \uadf8\ub9ac\uace0 \uadf8 \ub54c\ubb38\uc5d0 \ucee8\ud2b8\ub864\uc774 \ubd88\uac00\ub2a5\ud55c \uac83\ub4e4\uc744 \uc5b4\ub5bb\uac8c \ucc98\ub9ac\ud560 \uac83\uc774\ub0d0\uac00 \ud55c\uac00\uc9c0 \uc785\ub2c8\ub2e4. \ucc45\uc5d0\uc11c\ub294 \uc608\uc804\uc5d0\ub3c4 \ub4f1\uc7a5\ud588\ub358 \ud0a4\ubcf4\ub4dc\uc640 \uad00\ub828\ub41c \uc774\ubca4\ud2b8\ub97c \ubc1b\uc544\uc11c \uadf8 \ub54c \ub9c8\ub2e4\uc758 \uc815\ud655\ud55c \ud654\uba74 \uc0ac\uc774\uc988(\ud0a4\ubcf4\ub4dc\uac00 \ud3ec\ud568\ub418\uc9c0 \uc54a\uc740 \uc601\uc5ed)\ub97c \uacc4\uc0b0\ud558\uace0 \uc0c8\ub85c \ub9cc\ub4e4\uac8c \ub418\ub294 \uc2a4\ud06c\ub864 \ubdf0\uc5d0 \uac12\uc744 \ub118\uaca8 \ud654\uba74\uc774 \uc2a4\ud06c\ub864 \ub418\ub3c4\ub85d \ucc98\ub9ac\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc5b4\ub5bb\uac8c \uc0dd\uac01\ud574\ubcf4\uba74 \ud0a4\ubcf4\ub4dc\uac00 \ub098\ud0c0\ub0ac\ub2e4 \uc0ac\ub77c\uc9c0\ub294 \uac83, \uadf8\uc5d0 \ub530\ub77c \ud654\uba74\uc774 \uac00\ub824\uc9c0\uace0 \uc2a4\ud06c\ub864\uc774 \ub418\uc9c0 \uc54a\uc73c\uba74 \ucee8\ud2b8\ub864\uc774 \ub418\uc9c0 \uc54a\ub294\uac8c \ub2f9\uc5f0\ud55c\ub370 \uc774\ub7f0\uac78 \uc790\ub3d9\uc73c\ub85c \ucc98\ub9ac\ud560 \uc218 \uc788\uac8c \uc81c\uacf5\ud558\uba74 \uc5b4\ub560\uc744\uae4c \uc2f6\uc2b5\ub2c8\ub2e4. \uc0ac\uc2e4 \ub2f9\uc5f0\ud55c \uac83\ub4e4\uc744 \ucc98\ub9ac\ud558\ub294 \uac83\ub3c4 \uc6b0\ub9ac\uc5d0\uac90 \uc9d0\uc774\ub2c8\uae4c\uc694. :) \ub610 \ud558\ub098 \ub2e4\ub8e8\ub294 \ub0b4\uc6a9\uc740 \uc774\ubbf8 \ub9cc\ub4e4\uc5b4\uc838 \uc788\ub294 \ud14c\uc774\ube14 \ubdf0\uc5d0 \ubcf4\uc5ec\uc9c0\ub294 \ub370\uc774\ud130\ub4e4\uc744 \ud3b8\uc9d1\ud558\uace0 \uc0ad\uc81c\ud558\ub294 \uae30\ub2a5\uc744 \ucd94\uac00\ud558\ub294 \ubc29\ubc95\uc785\ub2c8\ub2e4. SDK\uc5d0\uc11c \uc81c\uacf5\ub418\ub294\uac78 \uadf8\ub300\ub85c \uc0ac\uc6a9\ud558\uae30 \ub54c\ubb38\uc5d0 \uc774 \ubd80\ubd84\uc740 \uc0c1\ub2f9\ud788 \ud3b8\ud558\uac8c \uad00\ub9ac\ud560 \uc218 \uc788\ub2e4\uace0 \uc0dd\uac01\ub429\ub2c8\ub2e4. \uc544\ub798\ub294 \uba54\ubaa8\ud558\uace0 \uc2f6\uc5c8\ub358, \uc774\ubc88 chapter\uc5d0\uc11c \uc0c8\ub85c \ub4f1\uc7a5\ud55c \ub140\uc11d\ub4e4\uc785\ub2c8\ub2e4."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"NSNotificationCenter"})}),"\n",(0,i.jsx)(t.p,{children:"\uc608\uc804\uc5d0\ub3c4 \ub098\uc654\ub358 \ub0b4\uc6a9\uc785\ub2c8\ub2e4\ub9cc, \uc774\ubca4\ud2b8 \ub4f1\ub85d\uc744 \uc704\ud574 \uc0ac\uc6a9\ud558\ub294 \ud074\ub798\uc2a4\uc785\ub2c8\ub2e4. \ucc45\uc5d0\uc11c\ub294 \uc544\ub798\ucc98\ub7fc \uc0ac\uc6a9\ud558\uace0 \uc788\ub124\uc694."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-objectivec",children:"[[NSNotificationCenter defaultCenter] addObserver : self selector : @selector(keyboardDidShow:)\nname : UIKeyboardDidShowNotification object : nil];\n"})}),"\n",(0,i.jsx)(t.p,{children:"\uc704\uc758 \uc608\ubb38\uc744 \uc7a0\uae50 \ud574\uc11d\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4. NSNotificationCenter\uc758 defaultCenter\ub97c \uc0ac\uc6a9\ud560\uac74\ub370 \uc774\ubca4\ud2b8\uac00 \ubc1c\uc0dd\ud588\uc744 \ub54c \uc804\ub2ec\ubc1b\uc744 \uac1d\uccb4(Observer)\ub294 \uc790\uae30 \uc790\uc2e0\uc73c\ub85c \uc124\uc815\ud558\uace0, \uc774\ubca4\ud2b8\uac00 \uc654\uc744 \ub54c \ud638\ucd9c\ud560 \ub140\uc11d\uc740 keyboardDidShow\ub77c\ub294 method \uc785\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \ubaa8\ub4e0 \uc774\ubca4\ud2b8\uac00 \ubc1c\uc0dd\ud588\uc744 \ub54c \uc54c\ub824\uc8fc\ub294\uac8c \uc544\ub2c8\uace0, UIKeyboardDidShowNotification \uc774\ub77c\ub294 \ub140\uc11d\ub9cc \uad00\ub9ac\ud560 \uac81\ub2c8\ub2e4. \ub9c8\uc9c0\ub9c9 \uc5b4\ub5a4 \uac1d\uccb4\uac00 \uc774\ubca4\ud2b8\ub97c \ubc1c\uc0dd\uc2dc\ucf30\ub294\uc9c0\ub294 \uc2e0\uacbd\uc4f0\uace0 \uc2f6\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. (object : nil \ubd80\ubd84) \uc774\ubca4\ud2b8\ub97c \ucc98\ub9ac\ud558\ub294 \ubd80\ubd84\uc5d0 \ub300\ud574\uc11c \ub2e4\uc2dc \uc815\ub9ac\ud55c \uc774\uc720\ub294 \uc544\ub798 selector \ub54c\ubb38\uc785\ub2c8\ub2e4. \ucc45\uc5d0\uc11c\ub294 \uc544\ub798\ucc98\ub7fc \uc815\uc758\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-objectivec",children:"- (void)keyboardDidShow : (NSNotification *)notif \xa0{\n  ...\n  ...\n}\n"})}),"\n",(0,i.jsx)(t.p,{children:"Selector\ub77c\uace0 \ubd88\ub9ac\uc6b0\ub294 \uac83\uc740 C/C++\uc5d0\uc11c \ucf5c\ubc31\ud568\uc218\uc640 \uc720\uc0ac\ud558\ub2e4\uace0 \ud310\ub2e8\ub418\ub294\ub370 method \uc790\uccb4\ub294 \uac1c\ubc1c\uc790\uac00 \uc785\ub9db\ub300\ub85c \ub9cc\ub4e4\uba74 \ub418\ub294 \ub140\uc11d\uc785\ub2c8\ub2e4. SDK\uc5d0\uc11c \uc81c\uacf5\ud558\ub294\uac8c \uc544\ub2c8\ub77c\ub294 \uc598\uae30\uc785\ub2c8\ub2e4. Parameter\ub85c NSNotification\uc758 \ud3ec\uc778\ud130 \ud0c0\uc785\uc758 notif\ub780 \uc774\ub984\uc73c\ub85c \ubc1b\uc73c\ub824\uace0 \ucc45\uc758 \uc800\uc790\ub294 \uc0dd\uac01\ud588\ub098\ubd05\ub2c8\ub2e4. \uc774 parameter\ub294 \uc54c\uc544\uc11c \uc804\ub2ec\ubc1b\uac8c \ub418\uaca0\uc8e0? NSNotification\uc740 userInfo \ub77c\ub294 field\ub97c \uac00\uc9c0\uace0 \uc788\ub294\ub370 \uc5ec\uae30\uc5d0 \uc774\ubca4\ud2b8\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \uc815\ubcf4\ub4e4\uc774 \ub2f4\uaca8\uc788\uc5b4\uc11c \ucc45\uc5d0\uc11c\ub294 \uc774 \uc815\ubcf4\ub4e4\uc744 \uc774\uc6a9\ud558\uac8c \ub429\ub2c8\ub2e4."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"\uac11\uc790\uae30 \ub4f1\uc7a5\ud55c \uc5ec\ub7ec\uac00\uc9c0 \uad6c\uc870\uccb4\ub4e4"})}),"\n",(0,i.jsx)(t.p,{children:"\uc18c\uc81c\ubaa9\ucc98\ub7fc \uc815\ub9d0 \uac11\uc790\uae30 \uc5ec\ub7ec\uac00\uc9c0 \uad6c\uc870\uccb4\ub4e4\uc774 \ub4f1\uc7a5\ud569\ub2c8\ub2e4. \uc804 \ubb54\uc9c0\ub3c4 \ubaa8\ub974\uaca0\ub294\ub370 \uac11\uc790\uae30 \ub4f1\uc7a5\ud558\ub2c8\uae4c \uc9dc\uc99d\uc774 \uc7a5\ub9c8\ucc98\ub7fc \ubc00\ub824\uc624\ub354\uad70\uc694. \uadf8\ub798\uc11c \uc9dc\uc99d\uc744 \ud480\uace0\uc790 xcode\uc5d0\uc11c document\ub97c \ubd88\ub7ec \ub0b4\uc6a9\uc744 \ud655\uc778\ud574 \ubd24\ub354\ub7ac\uc2b5\ub2c8\ub2e4. :)"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"CGSize"})}),"\n",(0,i.jsx)(t.p,{children:"\uc815\uc758 \ubd80\ubd84\uc744 \ubcf4\uba74 \uc815\ub9d0 \uac04\ub2e8\ud55c \uad6c\uc870\uccb4\uc785\ub2c8\ub2e4. CGFloat type\uc758 width, height \uaf34\ub791 \ub450 \uac1c\ub9cc \uba64\ubc84\ub85c \ubcf4\uc720\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. CGFloat\uc740 \uc548\ubd10\ub3c4 float\uacfc \uad00\ub828\uc774 \uc788\uaca0\ub2e4\ub294 \uc0dd\uac01\uc774 \ub4e4\uc5b4\uc11c \ud655\uc778\ud574\ubcf4\ub2c8 \uc5ed\uc2dc \uc544\ub798\ucc98\ub7fc \uc815\uc758\ub418\uc5b4 \uc788\ub124\uc694."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-objectivec",children:"#if defined(__LP64__) && __LP64__\ntypedef double CGFloat;\n#define CGFLOAT_MIN DBL_MIN\n#define CGFLOAT_MAX DBL_MAX\n#define CGFLOAT_IS_DOUBLE 1\n#else /* !defined(__LP64__) || !__LP64__ */\ntypedef float CGFloat;\n"})}),"\n",(0,i.jsx)(t.p,{children:"LP64\uac00 \ubb54\uc9c0\ub294 \ubaa8\ub974\uaca0\uc9c0\ub9cc \uc544\ub9c8 CPU data \ucc98\ub9ac\ub7c9\uc5d0 \uad00\ub828\ub41c\uac8c \uc544\ub2d0\uae4c \uc2f6\uc2b5\ub2c8\ub2e4.(64bit) \uacbd\uc6b0\uc5d0 \ub530\ub77c\uc11c CGFloat\uc740 double\ud615\uc774 \ub418\uac70\ub098 \uc544\ub2c8\uba74 \ubc18\ucabd\uc9dc\ub9ac float\uc774 \ub418\uaca0\ub124\uc694."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"CGRectValue"})}),"\n",(0,i.jsx)(t.p,{children:"\uc774\uac74 \uad6c\uc870\uccb4\uac00 \uc544\ub2c8\uace0 method \uc785\ub2c8\ub2e4\ub9cc CGRect \uad6c\uc870\uccb4\ub97c \ub9ac\ud134\ud574\uc8fc\ub294 \ub140\uc11d\uc785\ub2c8\ub2e4."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"CGRect"})}),"\n",(0,i.jsx)(t.p,{children:"\uc774 \ub140\uc11d\uc740 rectangle\uc758 \uc704\uce58\uc640 dimension \uac12\uc744 \ud3ec\ud568\ud558\ub294 \ub140\uc11d\uc774\ub77c\uace0 \ubb38\uc11c\uc5d0 \ub418\uc5b4\uc788\ub294\ub370, CGPoint type\uc758 origin\uacfc CGSize type\uc758 size\ub97c \uba64\ubc84\ub85c \ub450\uace0 \uc788\ub124\uc694. origin\uc740 \uc704\uce58\uc77c\ud14c\uace0 size\ub294 width\uc640 height\ub97c \uac00\uc9c0\uace0 \uc788\ub294 \uad6c\uc870\uccb4\ub2c8 dimension\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"NSSortDescriptor"})}),"\n",(0,i.jsx)(t.p,{children:"\ubc30\uc5f4\uc5d0 \uc788\ub294 data\ub97c \uc815\ub82c\ud560 \ub54c \uc0ac\uc6a9\ud558\ub294 \ud074\ub798\uc2a4\uc785\ub2c8\ub2e4. \uc774 \ud074\ub798\uc2a4\uc758 \uac1d\uccb4\uac00 \uc9c1\uc811 \uc815\ub82c\ub41c data\ub97c \ubcf4\uc720\ud558\ub294 \uac83\uc740 \uc544\ub2c8\uace0 \uc774\ub984\ucc98\ub7fc \uc815\ub82c\uc744 \uc5b4\ub5bb\uac8c \ud558\uaca0\ub2e4\ub294 \uc124\uc815\uac12\ub4e4\ub9cc \uac00\uc9c0\uace0 \uc788\ub294 descriptor \uc785\ub2c8\ub2e4. \uc608\uc81c\uc5d0\uc11c\ub294 \uc544\ub798\uc640 \uac19\uc774 \uc0ac\uc6a9\ud558\uace0 \uc788\ub294\ub370\uc694."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-objectivec",children:"NSSortDescriptor *nameSorter = [[NSSortDescriptor alloc] initWithKey : NAME_KEY ascending : YES\nselector : @selector(caseInsensitiveCompare:)];\n[drinkArray sortUsingDescriptors : [NSArray arrayWithObject : nameSorter]];\n[nameSorter release];\n"})}),"\n",(0,i.jsx)(t.p,{children:"NSSortDescriptor \uac1d\uccb4\ub97c \uc0c8\ub85c \ud560\ub2f9\ubc1b\uc744 \ub54c NAME_KEY \ub97c \uc774\uc6a9\ud574 \ucd08\uae30\ud654 \ud558\uace0 \uc62c\ub9bc\ucc28\uc21c\uc73c\ub85c \uc815\ub82c\ud558\uaca0\ub2e4\uace0 \uc791\uc131\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. Selector\ub294 \ube44\uad50\ubc29\ubc95\uc744 \uc5b4\ub5bb\uac8c \ud560\uac74\uc9c0 \ucd94\uac00 \uc815\ubcf4\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4. \uc608\ubb38\uc5d0\uc11c\ub294 \ub300\uc18c\ubb38\uc790\ub97c \uad6c\ubcc4\ud558\uc9c0 \uc54a\uace0 \ube44\uad50\ud558\ub77c\uace0 \ub418\uc5b4\uc788\ub294\uac70\uad6c\uc694. \uc774\ub807\uac8c \ub9cc\ub4e4\uc5b4\uc9c4 descriptor\ub97c \uac00\uc9c0\uace0 NSArray\ub97c \ub9cc\ub4e4\uace0 \uc774\ub97c \uc774\uc6a9\ud574 \uc2e4\uc81c drinkArray\uc758 data\ub4e4\uc744 \uc815\ub82c\ud569\ub2c8\ub2e4. \ubb3c\ub860 \ub2e4 \uc0ac\uc6a9\ud588\uc73c\ub2c8 release \ud574\uc918\uc57c\uaca0\uc8e0."}),"\n",(0,i.jsx)(t.p,{children:"\uc774\ub807\uac8c chapter 6\uae4c\uc9c0 \uc9c4\ud589\ud558\uace0 \ubcf4\ub2c8 \uba87\uac00\uc9c0 \ucee8\ud2b8\ub864\uc744 \ub2e4\ub8e8\ub294 \ubc29\uc2dd\uc5d0 \ub300\ud574\uc11c\ub294 \uc5b4\ub290\uc815\ub3c4 \uc774\ud574\uac00 \ub429\ub2c8\ub2e4. \uadf8\ub7f0\ub370 \uc0ac\uc2e4 \uc774 \ubaa8\ub4e0\uac78 \ub2e4 \uae30\uc5b5\ud558\uace0 \uc788\uae30\ub780 \uac70\uc758 \ubd88\uac00\ub2a5\ud569\ub2c8\ub2e4. \uc65c\ub0d0\ud558\uba74 \uc544\uc9c1 iphone\uc5d0 \uc775\uc219\ud558\uc9c0 \uc54a\uc740 \ucd08\ubcf4\uac70\ub4e0\uc694. \uc5b4\ucc28\ud53c \uc5b4\ub5a4 application\uc744 \uc791\uc131\ud558\ub824\uace0 \ud560 \ub54c \ubb38\uc11c\ub4e4\uacfc sample \ub4e4\uc744 \ucc38\uc870\ud574 \uac00\uba74\uc11c \uc791\uc131\ud574\uc57c \ud560\ud150\ub370, \uc774\ub7f0 \uc0dd\uac01\uc744 \ud558\ub2e4\ubcf4\uba74 \uc2ac\uc2ac \uc9c0\uce58\ub124\uc694. \uadf8\ub798\ub3c4 \uc2dc\uc791\uc744 \ud588\uc73c\uba74 \ub05d\uc744 \ub9fa\uc5b4\uc57c \uc0c8\ub85c\uc6b4 \uc758\uc695\uc774 \uc0dd\uae30\uac8c \ub9c8\ub828\uc774\ub2c8 \uc624\ubc84\uc2a4\ub7fd\uac8c\ub77c\ub3c4 \ud6c4\ub531 \ub05d\ub0b4\uc57c\uaca0\uc2b5\ub2c8\ub2e4."})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>a});var i=n(96540);const r={},o=i.createContext(r);function c(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);