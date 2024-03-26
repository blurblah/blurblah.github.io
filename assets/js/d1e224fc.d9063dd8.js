"use strict";(self.webpackChunkblurblah_github_io=self.webpackChunkblurblah_github_io||[]).push([[880],{47983:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>p,contentTitle:()=>r,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>a});var t=s(74848),i=s(28453);const l={title:"Jenkins plugin \uac1c\ubc1c\ud658\uacbd \uc124\uc815",date:"2015-10-07",categories:["ci"],tags:["build","eclipse","helloworldbuilder","jenkins","plugin","settings-xml","skeleton","tutorial"]},r=void 0,o={permalink:"/2015/10/07/wp/jenkins-plugin-\uac1c\ubc1c\ud658\uacbd-\uc124\uc815",source:"@site/blog/wp/2015-10-07-jenkins-plugin-\uac1c\ubc1c\ud658\uacbd-\uc124\uc815.md",title:"Jenkins plugin \uac1c\ubc1c\ud658\uacbd \uc124\uc815",description:"Jenkins plugin \uc911 \ud558\ub098\ub97c \uc218\uc815\ud560 \uc77c\uc774 \uc788\uc5b4\uc11c clone \ud574\uc11c \ube4c\ub4dc\ub97c \ud574\ubd24\ub294\ub370 \ud14c\uc2a4\ud2b8\uc5d0\uc11c \uc2e4\ud328\ud558\ub294 \ubb38\uc81c(\ud14c\uc2a4\ud2b8 \ucf54\ub4dc \uc0c1\uc73c\ub85c\ub294 \uc804\ud600 \ubb38\uc81c\uac00 \uc5c6\uc5b4\ubcf4\uc600\ub294\ub370)\uac00 \uc0dd\uaca8\uc11c plugin \uac1c\ubc1c \uacfc\uc815 \uadf8\ub300\ub85c\ub97c \uc9c4\ud589\ud574\ubd24\ub2e4.",date:"2015-10-07T00:00:00.000Z",formattedDate:"October 7, 2015",tags:[{label:"build",permalink:"/tags/build"},{label:"eclipse",permalink:"/tags/eclipse"},{label:"helloworldbuilder",permalink:"/tags/helloworldbuilder"},{label:"jenkins",permalink:"/tags/jenkins"},{label:"plugin",permalink:"/tags/plugin"},{label:"settings-xml",permalink:"/tags/settings-xml"},{label:"skeleton",permalink:"/tags/skeleton"},{label:"tutorial",permalink:"/tags/tutorial"}],readingTime:6.035,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Jenkins plugin \uac1c\ubc1c\ud658\uacbd \uc124\uc815",date:"2015-10-07",categories:["ci"],tags:["build","eclipse","helloworldbuilder","jenkins","plugin","settings-xml","skeleton","tutorial"]},unlisted:!1,prevItem:{title:"Infected Jenkins",permalink:"/2015/10/07/wp/infected-jenkins"},nextItem:{title:"Juju bootstrap & deploy",permalink:"/2015/08/31/wp/juju-bootstrap-deploy"}},p={authorsImageUrls:[]},a=[{value:"<strong>1. settings.xml \uc900\ube44</strong>",id:"1-settingsxml-\uc900\ube44",level:4},{value:"<strong>2.\xa0Plugin \uc0dd\uc131 (skeleton)</strong>",id:"2plugin-\uc0dd\uc131-skeleton",level:4},{value:"<strong>3. mvn install (optional)</strong>",id:"3-mvn-install-optional",level:4},{value:"<strong>4. mvn hpi</strong>",id:"4-mvn-hpi",level:4},{value:"<strong>5. Project import</strong>",id:"5-project-import",level:4},{value:"<strong>6. \ud2b9\uc774\ud55c \ud604\uc0c1</strong>",id:"6-\ud2b9\uc774\ud55c-\ud604\uc0c1",level:4}];function c(n){const e={a:"a",h4:"h4",img:"img",p:"p",strong:"strong",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:"Jenkins plugin \uc911 \ud558\ub098\ub97c \uc218\uc815\ud560 \uc77c\uc774 \uc788\uc5b4\uc11c clone \ud574\uc11c \ube4c\ub4dc\ub97c \ud574\ubd24\ub294\ub370 \ud14c\uc2a4\ud2b8\uc5d0\uc11c \uc2e4\ud328\ud558\ub294 \ubb38\uc81c(\ud14c\uc2a4\ud2b8 \ucf54\ub4dc \uc0c1\uc73c\ub85c\ub294 \uc804\ud600 \ubb38\uc81c\uac00 \uc5c6\uc5b4\ubcf4\uc600\ub294\ub370)\uac00 \uc0dd\uaca8\uc11c plugin \uac1c\ubc1c \uacfc\uc815 \uadf8\ub300\ub85c\ub97c \uc9c4\ud589\ud574\ubd24\ub2e4."}),"\n",(0,t.jsx)(e.p,{children:"OS : OS X Yosemite (10.10.3)"}),"\n",(0,t.jsx)(e.p,{children:"IDE : Eclipse Luna"}),"\n",(0,t.jsx)(e.h4,{id:"1-settingsxml-\uc900\ube44",children:(0,t.jsx)(e.strong,{children:"1. settings.xml \uc900\ube44"})}),"\n",(0,t.jsx)(e.p,{children:"Jenkins plugin\uc740 maven\uc73c\ub85c dependency \uad00\ub9ac \ubc0f \ube4c\ub4dc\ub97c \ud558\ub3c4\ub85d \ub418\uc5b4\uc788\ub294\ub370 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub098 \ubaa8\ub4c8 \ub4f1\uc744 maven \uc911\uc559 \uc800\uc7a5\uc18c \ub300\uc2e0 \ubcc4\ub3c4 \uc800\uc7a5\uc18c\uc5d0\uc11c \uad00\ub9ac\ud558\uace0 \uc788\ub2e4. \uadf8\ub807\uae30 \ub54c\ubb38\uc5d0 jenkins \uc800\uc7a5\uc18c\ub4e4\uc5d0 \ub300\ud55c \uacbd\ub85c\ub97c maven\uc774 \uc778\uc2dd\ud560 \uc218 \uc788\uc5b4\uc57c \ud558\ubbc0\ub85c settings.xml \ud30c\uc77c\uc5d0 \uc544\ub798 \ub0b4\uc6a9\uc744 \ucd94\uac00\ud558\ub77c\uace0 \uac00\uc774\ub4dc\ud558\uace0 \uc788\ub2e4."}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://blurblah.net/wp-content/uploads/2015/10/jenkins-plugin-settings.png",children:(0,t.jsx)(e.img,{alt:"jenkins-plugin-settings",src:s(8844).A+"",width:"944",height:"555"})})}),"\n",(0,t.jsx)(e.p,{children:"\ub098\uc758 \uacbd\uc6b0\uc5d0\ub294 \ubcc4\ub3c4\ub85c settings.xml \ud30c\uc77c\uc744 \ubcc0\uacbd\ud574\uc11c \uc0ac\uc6a9\ud558\uace0 \uc788\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0 maven \uae30\ubcf8 \uc124\uc815\uc744 \ub530\ub77c\uac00\uac8c \ub418\uc5b4\uc788\ub294\ub370 \uc704\uc758 \ub0b4\uc6a9\uc744 ~/.m2/settings.xml \ud30c\uc77c\ub85c \uc0dd\uc131\ud574\xa0\ub193\uc73c\ub2c8\ub2e4\ub978 maven project\ub4e4\uc774 \uc758\uc874\uad00\uacc4\ub97c \uac16\ub294 \ubaa8\ub4c8\uc744 \ucc3e\uc9c0 \ubabb\ud558\ub294 \ubb38\uc81c\uac00 \uc788\uc5c8\ub2e4. \uadf8\ub798\uc11c \ubcc4\ub3c4\ub85c eclipse\uc5d0\uc11c workspace\ub97c \uc0dd\uc131\ud574\uc11c \uadf8 \uc704\uce58\uc5d0 settings.xml \ud30c\uc77c\uc744 \ub450\uace0 \uadf8 workspace\uc5d0 \uc788\ub294 project\ub4e4\ub9cc \uc704\uc758 settings.xml \ub0b4\uc6a9\uc744 \ub530\ub974\ub3c4\ub85d \uc870\uce58\ud574\ub450\uc5c8\ub2e4. \ubd88\ud3b8\ud55c \uc810\uc778\ub370 maven\uc758 \uae30\ubcf8 settings.xml \ub0b4\uc6a9\uc744 \uc548\ub2e4\uba74 \uc704\uc758 \ub0b4\uc6a9\ub9cc \ucd94\uac00\ud574\uc11c \ucc98\ub9ac\ud560 \uc218 \uc788\uc744 \uac83 \uac19\uc740\ub370 \ub4a4\ub85c \ubbf8\ub904\ub450\uae30\ub85c \ud588\ub2e4."}),"\n",(0,t.jsx)(e.h4,{id:"2plugin-\uc0dd\uc131-skeleton",children:(0,t.jsx)(e.strong,{children:"2.\xa0Plugin \uc0dd\uc131 (skeleton)"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.a,{href:"https://wiki.jenkins-ci.org/display/JENKINS/Plugin+tutorial",children:"Plugin tutorial"}),"\uc744 \ub530\ub77c\uc11c \ud574\ubcf4\ub2c8\xa0\uc544\ub798\uc758 command\ub85c \uc0c8\ub85c\uc6b4 plugin\uc744 \uc0dd\uc131\ud574\uc918\uc57c \ud55c\ub2e4."]}),"\n",(0,t.jsxs)(e.p,{children:["mvn -U org.jenkins-ci.tools:maven-hpi-plugin",":create"]}),"\n",(0,t.jsx)(e.p,{children:"\uadf8\ub7f0\ub370 \uc704\uc758 \ub0b4\uc6a9\ub300\ub85c \ud558\uba74 maven\uc5d0 \uc124\uc815\ub41c settings\ub97c \ub530\ub77c\uac00\uac8c \ub418\uae30 \ub54c\ubb38\uc5d0 jenkins\uc5d0 \ub300\ud55c \uc758\uc874\uad00\uacc4\ub97c \ucc3e\uc9c0 \ubabb\ud574 \uc544\ub798\uc640 \uac19\uc740 \uc624\ub958\uac00 \ubc1c\uc0dd\ud55c\ub2e4."}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://blurblah.net/wp-content/uploads/2015/10/jenkins-plugin-create-error.png",children:(0,t.jsx)(e.img,{alt:"jenkins-plugin-create-error",src:s(59634).A+"",width:"697",height:"506"})})}),"\n",(0,t.jsx)(e.p,{children:"\uadf8\ub798\uc11c \ubcc4\ub3c4\ub85c \uc0dd\uc131\ud55c settings.xml\uc744 \uc801\uc6a9\ud560 \uc218 \uc788\uac8c command\ub97c \ubcc0\uacbd\ud588\ub2e4."}),"\n",(0,t.jsxs)(e.p,{children:["mvn -s settings.xml -U org.jenkins-ci.tools:maven-hpi-plugin",":create"]}),"\n",(0,t.jsx)(e.p,{children:"\uc544\ub798 \uc774\ubbf8\uc9c0\ucc98\ub7fc groupId\uc640 artifactId\ub97c \uc785\ub825\ud558\uba74 skeleton project\uac00 \uc0dd\uc131\ub41c\ub2e4."}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://blurblah.net/wp-content/uploads/2015/10/jenkins-plugin-create.png",children:(0,t.jsx)(e.img,{alt:"jenkins-plugin-create",src:s(87335).A+"",width:"697",height:"506"})})}),"\n",(0,t.jsx)(e.h4,{id:"3-mvn-install-optional",children:(0,t.jsx)(e.strong,{children:"3. mvn install (optional)"})}),"\n",(0,t.jsx)(e.p,{children:"\ud29c\ud1a0\ub9ac\uc5bc\uc5d0\ub294 hpi\ub85c packaging \ud558\uae30 \uc704\ud574 \uc544\ub798\uc758 command\ub97c \uc0ac\uc6a9\ud558\ub77c\uace0 \ub418\uc5b4\uc788\ub2e4."}),"\n",(0,t.jsx)(e.p,{children:"mvn install"}),"\n",(0,t.jsx)(e.p,{children:"\ub2e8\uc21c packaging\uc778\ub370 goal\uc744 install\ub85c \ud558\ub77c\ub294\uac8c \uc774\uc0c1\ud558\ub2e4. \uc5b4\ucc28\ud53c IDE\uc5d0\uc11c \ub4dc\ub7fc\uacfc \uc7a5\uad6c\ub97c \uce60\ud14c\ub2c8 \uc774 \uacfc\uc815\uc740 \uc5c6\uc5b4\ub3c4 \ub420 \ub4ef \ud558\ub2e4. \uadf8\ub798\ub3c4 command \ubcc0\uacbd\ud574\uc11c \ud55c \ubc88 \ud574\ubd24\ub2e4."}),"\n",(0,t.jsx)(e.p,{children:"mvn -s ../settings.xml install"}),"\n",(0,t.jsx)(e.p,{children:"\uc804\ud615\uc801\uc778 install \ucc98\ub7fc maven \ub85c\uceec \uc800\uc7a5\uc18c \uacbd\ub85c\uc5d0 packaging \ub41c \ud30c\uc77c\ub4e4\uc774 \uc0dd\uc131\ub41c\ub2e4. packaging \uacfc\uc815\uc744 \uac70\uccd0\uc11c \uc9c4\ud589\ub418\ub294\uac70\ub2c8 /project_path/target \uc5d0\ub3c4 hpi\uac00 \uc0dd\uc131\ub418\uace0 goal\uc744 package\ub85c\ub9cc \uc9c0\uc815\ud574\ub3c4 target\uc5d0\ub294 hpi\uac00 \uc0dd\uc131\ub41c\ub2e4."}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://blurblah.net/wp-content/uploads/2015/10/jenkins-plugin-install.png",children:(0,t.jsx)(e.img,{alt:"jenkins-plugin-install",src:s(69690).A+"",width:"697",height:"506"})})}),"\n",(0,t.jsx)(e.h4,{id:"4-mvn-hpi",children:(0,t.jsxs)(e.strong,{children:["4. mvn hpi",":run"]})}),"\n",(0,t.jsxs)(e.p,{children:["Dependency \uc911\uc5d0 jenkins war\ub3c4 \uc788\uc5b4\uc11c hpi",":run","\uc744 goal\ub85c \uc9c0\uc815\ud558\uba74 \ud50c\ub7ec\uadf8\uc778\uc774 \uc124\uce58\ub41c \uc0c1\ud0dc\ub85c jetty\ub85c jenkins\ub97c \uc2e4\ud589\uc2dc\ucf1c\uc900\ub2e4. \uc774 \ub54c \uae30\ubcf8 context path\ub294 /jenkins\uc774\uace0 port\ub294 8080"]}),"\n",(0,t.jsxs)(e.p,{children:["mvn -s ../settings.xml hpi",":run"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://blurblah.net/wp-content/uploads/2015/10/jenkins-plugin-run.png",children:(0,t.jsx)(e.img,{alt:"jenkins-plugin-run",src:s(5012).A+"",width:"697",height:"660"})})}),"\n",(0,t.jsx)(e.h4,{id:"5-project-import",children:(0,t.jsx)(e.strong,{children:"5. Project import"})}),"\n",(0,t.jsx)(e.p,{children:"Skeleton project\ub294 \uae30\ubcf8\uc73c\ub85c\ub294 maven\uc744 \uc0ac\uc6a9\ud558\uace0 \uc788\uc73c\ubbc0\ub85c 'Existing Maven Project'\ub85c import \ud574\ub3c4 \ub41c\ub2e4. \ub098\uc758 \uacbd\uc6b0\uc5d4 \ud2b9\uc774\ud55c \ud604\uc0c1\uc774 \uc788\uc5b4\uc11c eclipse project\ub85c \ubcc0\ud658\ud574 \ubcf4\uae30\ub3c4 \ud588\ub294\ub370 \ubcc0\ud658\ud560 \uacbd\uc6b0 \uc544\ub798\uc758 command \ud615\ud0dc\ub97c \uc0ac\uc6a9\ud558\ub3c4\ub85d \ud29c\ud1a0\ub9ac\uc5bc\uc5d0 \uae30\uc220\ub418\uc5b4 \uc788\ub2e4."}),"\n",(0,t.jsxs)(e.p,{children:["mvn -DdownloadSources=true -DdownloadJavadocs=true -DoutputDirectory=target/eclipse-classes -Declipse.workspace=/path/to/workspcae eclipse",":eclipse"," eclipse",":add-maven-repo"]}),"\n",(0,t.jsx)(e.p,{children:"\uc774\uc81c \uc218\uc815\ud558\uac70\ub098 \uc774\uac83\uc800\uac83 \ub9cc\ub4e4\uc5b4\uc11c \ube4c\ub4dc\ud558\uace0 \uc2e4\ud589\ud574\ubcfc \uc218 \uc788\ub2e4."}),"\n",(0,t.jsx)(e.h4,{id:"6-\ud2b9\uc774\ud55c-\ud604\uc0c1",children:(0,t.jsx)(e.strong,{children:"6. \ud2b9\uc774\ud55c \ud604\uc0c1"})}),"\n",(0,t.jsx)(e.p,{children:"\uacbd\ud5d8\ud588\ub358 \ud2b9\uc774\ud55c \ud604\uc0c1\uc774 \uc544\ub798\uc758 \ub450\uac00\uc9c0\uc600\ub2e4."}),"\n",(0,t.jsx)(e.p,{children:"(1) Skeleton project\ub97c run \ud588\uc744 \ub54c configuration\uc5d0 \ub098\ud0c0\ub098\uc9c0 \uc54a\ub294 \ubb38\uc81c"}),"\n",(0,t.jsx)(e.p,{children:"Skeleton project\ub97c \uadf8\ub300\ub85c \uc2e4\ud589\ud558\uba74 \uc6d0\ub798\ub294 \uc544\ub798 \uadf8\ub9bc\ucc98\ub7fc jenkins configuration\uc5d0 'Hello World Builder' \ub77c\ub294 section\uc774 \ucd94\uac00\ub418\uace0 job \uc124\uc815\uc5d0\uc11c \ud504\ub791\uc2a4\uc5b4\ub85c \uc778\uc0ac\ub97c print \ud560 \uc218 \uc788\ub294 \uae30\ub2a5\uc744 build\uc5d0 \ub123\uc744 \uc218 \uc788\uac8c \ub418\uc5b4\uc788\ub294\ub370 \uc5b4\ub290 \uacf3\uc5d0\ub3c4 project\uc640 \uad00\ub828\ub41c \ubd80\ubd84\uc774 \ub098\ud0c0\ub098\uc9c0 \uc54a\ub294 \ud604\uc0c1\uc774 \uc788\uc5c8\ub2e4."}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://blurblah.net/wp-content/uploads/2015/10/jenkins-plugin-section.png",children:(0,t.jsx)(e.img,{alt:"jenkins-plugin-section",src:s(44393).A+"",width:"1024",height:"58"})})}),"\n",(0,t.jsx)(e.p,{children:"(2) Clone\ud55c project build\uc2dc test\uc5d0\uc11c \uc2e4\ud328\ud558\ub294 \ubb38\uc81c"}),"\n",(0,t.jsx)(e.p,{children:"\uc218\uc815\ud558\ub824\uace0 \ud588\ub358 plugin\uc744 clone\ud574\uc11c packaging\uc744 \ud588\ub294\ub370 \ud14c\uc2a4\ud2b8\uc5d0\uc11c \uc2e4\ud328\ud558\ub294 \ubb38\uc81c\uac00 \uc788\uc5c8\ub2e4. \uc544\ub798 \uadf8\ub9bc\ucc98\ub7fc \ub2e8\uc21c\ud55c \ud615\ud0dc\uc758 \ud14c\uc2a4\ud2b8 \ucf54\ub4dc\uc600\ub294\ub370 \uac1d\uccb4\uac00 \uc5bb\uc5b4\uc9c0\uc9c0 \uc54a\ub294\uac8c \ud14c\uc2a4\ud2b8 \uc2e4\ud328\uc758 \uc6d0\uc778\uc774\uc5c8\ub2e4."}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://blurblah.net/wp-content/uploads/2015/10/jenkins-plugin-test.png",children:(0,t.jsx)(e.img,{alt:"jenkins-plugin-test",src:s(73559).A+"",width:"649",height:"582"})})}),"\n",(0,t.jsx)(e.p,{children:"\ub450 \uac00\uc9c0 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\ub824\uace0 \uc2dc\ub3c4\ud558\ub358 \uc911 eclipse project\ub85c \ubcc0\ud658\ud558\uba74\uc11c \ubb38\uc81c\ub4e4\uc774 \uc800\uc808\ub85c \ud574\uacb0\ub418\uc5c8\ub2e4. source\ub97c download \ud558\ub77c\uace0 \uc124\uc815\ub418\uc5b4 \uc788\uc5b4\uc11c source\uac00 \uaf2d \ud544\uc694\ud55c \ubb34\uc5b8\uac00\uac00 \uc788\uc5b4\uc11c \ud574\uacb0\ub41c \uac83\uc778\uac00 (\uadf8\ub798\ub3c4 \uc774\uc0c1\ud558\ub2e4) \uc544\ub2c8\uba74 \ubcc0\ud658 \uacfc\uc815\uc5d0\uc11c \uc758\uc874\uc131\uc744 \uac00\uc9c4 \uc77c\ubd80 \ubaa8\ub4c8\uc744 download \ud558\ub294 \uac74\uc9c0 \ucd94\uce21\uc744 \ud574\ubd24\uc9c0\ub9cc \uc815\ud655\ud558\uc9c0\ub294 \uc54a\ub2e4. \uc544\ub798\ub294 \uac19\uc740 \ud604\uc0c1\uc744 \uacbd\ud5d8\ud588\ub358 \ubd84\uc774 stackoverflow\uc5d0 \uc62c\ub824\ub193\uc740 \uae00."}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"http://stackoverflow.com/questions/23002818/jenkins-plugin-shows-on-plugin-page-but-does-not-show-on-configuration-page",children:"http://stackoverflow.com/questions/23002818/jenkins-plugin-shows-on-plugin-page-but-does-not-show-on-configuration-page"})})]})}function g(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(c,{...n})}):c(n)}},59634:(n,e,s)=>{s.d(e,{A:()=>t});const t=s.p+"assets/images/jenkins-plugin-create-error-11e697865507a055d1d138d82a5b93ba.png"},87335:(n,e,s)=>{s.d(e,{A:()=>t});const t=s.p+"assets/images/jenkins-plugin-create-03a521a8e14fcfeb5325607b1ec6d2b8.png"},69690:(n,e,s)=>{s.d(e,{A:()=>t});const t=s.p+"assets/images/jenkins-plugin-install-25dfb6b99252f52879a2fa3063bfd168.png"},5012:(n,e,s)=>{s.d(e,{A:()=>t});const t=s.p+"assets/images/jenkins-plugin-run-b94cbc09ecb31f6f4269574b3c4fc296.png"},44393:(n,e,s)=>{s.d(e,{A:()=>t});const t=s.p+"assets/images/jenkins-plugin-section-1024x58-550e991926bac35e8610e5376f3a7ce6.png"},8844:(n,e,s)=>{s.d(e,{A:()=>t});const t=s.p+"assets/images/jenkins-plugin-settings-6d64f15cedf01eb3a80e416048c63fdb.png"},73559:(n,e,s)=>{s.d(e,{A:()=>t});const t=s.p+"assets/images/jenkins-plugin-test-1b42139c5c880f79e540a343a6e6e6ac.png"},28453:(n,e,s)=>{s.d(e,{R:()=>r,x:()=>o});var t=s(96540);const i={},l=t.createContext(i);function r(n){const e=t.useContext(l);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),t.createElement(l.Provider,{value:e},n.children)}}}]);