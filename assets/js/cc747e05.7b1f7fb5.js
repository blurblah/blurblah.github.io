"use strict";(self.webpackChunkblurblah_github_io=self.webpackChunkblurblah_github_io||[]).push([[54197],{94954:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>p,default:()=>o,frontMatter:()=>t,metadata:()=>a,toc:()=>l});var c=n(74848),h=n(28453);const t={title:"Juju\ub85c Ceph\uc744 deploy \ud574\ubcf4\uc790",date:"2016-08-11",categories:["devops"],tags:["ceph","ceph-deploy","ceph-\uac15\uc88c","ceph-\ubc30\ud3ec","ceph-\uc124\uce58","ceph-\uc790\ub3d9\ud654","ceph-\ud655\uc7a5","expand-osd","juju","osd-\ud655\uc7a5"]},p=void 0,a={permalink:"/2016/08/11/wp/juju\ub85c-ceph\uc744-deploy-\ud574\ubcf4\uc790",source:"@site/blog/wp/2016-08-11-juju\ub85c-ceph\uc744-deploy-\ud574\ubcf4\uc790.md",title:"Juju\ub85c Ceph\uc744 deploy \ud574\ubcf4\uc790",description:'Ceph\uc758 manual deploy\ub97c \uc9c4\ud589\ud574\ubd24\uc73c\ub098 \uc55e\uc11c "Ceph\uc744 \uc124\uce58\ud574\ubcf4\uc790"\uc5d0\uc11c \uae30\uc220\ud55c \uac83\ucc98\ub7fc ceph-deploy\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\ub9cc\ud07c \uacf5\uc2dd \ubb38\uc11c\uc5d0 \ubb38\uc81c\uac00 \uc788\uc5b4\uc11c \ud3ec\uae30\ud558\uace0 juju\ub85c \ud574\ubcf4\uae30\ub85c \ud588\ub2e4.',date:"2016-08-11T00:00:00.000Z",formattedDate:"August 11, 2016",tags:[{label:"ceph",permalink:"/tags/ceph"},{label:"ceph-deploy",permalink:"/tags/ceph-deploy"},{label:"ceph-\uac15\uc88c",permalink:"/tags/ceph-\uac15\uc88c"},{label:"ceph-\ubc30\ud3ec",permalink:"/tags/ceph-\ubc30\ud3ec"},{label:"ceph-\uc124\uce58",permalink:"/tags/ceph-\uc124\uce58"},{label:"ceph-\uc790\ub3d9\ud654",permalink:"/tags/ceph-\uc790\ub3d9\ud654"},{label:"ceph-\ud655\uc7a5",permalink:"/tags/ceph-\ud655\uc7a5"},{label:"expand-osd",permalink:"/tags/expand-osd"},{label:"juju",permalink:"/tags/juju"},{label:"osd-\ud655\uc7a5",permalink:"/tags/osd-\ud655\uc7a5"}],readingTime:6.35,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Juju\ub85c Ceph\uc744 deploy \ud574\ubcf4\uc790",date:"2016-08-11",categories:["devops"],tags:["ceph","ceph-deploy","ceph-\uac15\uc88c","ceph-\ubc30\ud3ec","ceph-\uc124\uce58","ceph-\uc790\ub3d9\ud654","ceph-\ud655\uc7a5","expand-osd","juju","osd-\ud655\uc7a5"]},unlisted:!1,prevItem:{title:"Google spreadsheet \ubcc0\uacbd \uc5ec\ubd80\ub97c \ud154\ub808\uadf8\ub7a8\uc73c\ub85c \ubc1b\uc544\ubcf4\uc790",permalink:"/2016/08/21/wp/google-spreadsheet-\ubcc0\uacbd-\uc5ec\ubd80\ub97c-\ud154\ub808\uadf8\ub7a8\uc73c\ub85c-\ubc1b\uc544\ubcf4\uc790"},nextItem:{title:"Ceph \uac00\ubccd\uac8c \uc0b4\ud3b4\ubcf4\uae30",permalink:"/2016/08/02/wp/ceph-\uac00\ubccd\uac8c-\uc0b4\ud3b4\ubcf4\uae30"}},d={authorsImageUrls:[]},l=[{value:"1. \uc900\ube44",id:"1-\uc900\ube44",level:4},{value:"2. Ceph \ubc30\ud3ec",id:"2-ceph-\ubc30\ud3ec",level:4},{value:"3. OSD \ud655\uc7a5",id:"3-osd-\ud655\uc7a5",level:4},{value:"4. \uacb0\ub860",id:"4-\uacb0\ub860",level:4},{value:"5. \ucc38\uace0",id:"5-\ucc38\uace0",level:4}];function r(e){const s={a:"a",code:"code",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",...(0,h.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(s.p,{children:['Ceph\uc758 manual deploy\ub97c \uc9c4\ud589\ud574\ubd24\uc73c\ub098 \uc55e\uc11c "',(0,c.jsx)(s.a,{href:"http://192.168.10.23:8088/1311",children:"Ceph\uc744 \uc124\uce58\ud574\ubcf4\uc790"}),'"\uc5d0\uc11c \uae30\uc220\ud55c \uac83\ucc98\ub7fc ceph-deploy\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\ub9cc\ud07c \uacf5\uc2dd \ubb38\uc11c\uc5d0 \ubb38\uc81c\uac00 \uc788\uc5b4\uc11c \ud3ec\uae30\ud558\uace0 juju\ub85c \ud574\ubcf4\uae30\ub85c \ud588\ub2e4.']}),"\n",(0,c.jsx)(s.p,{children:"\xa0"}),"\n",(0,c.jsx)(s.h4,{id:"1-\uc900\ube44",children:"1. \uc900\ube44"}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.strong,{children:"(1) Bootstrap"})}),"\n",(0,c.jsx)(s.p,{children:"Juju\ub85c deploy \ud558\uae30 \uc704\ud574\uc11c\ub294 \uc0ac\uc804\uc5d0 bootstrap\uc774 \uc9c4\ud589\ub418\uc5b4 \uc788\uc5b4\uc57c \ud55c\ub2e4. Juju version 1.25 \uae30\uc900 \uc778\ud504\ub77c\ub85c AWS, Azure, VMWare, GCE, Joyent, Manual \ub4f1\uc744 \uc9c0\uc6d0\ud558\ub294\ub370 Azure\uc5d0\uc11c \ud574\ubcf4\uae30\ub85c \ud588\ub2e4. Bootstrap\uc744 \uc644\ub8cc\ud558\uace0 status\ub97c \ud655\uc778\ud558\uba74 \uc544\ub798 \uadf8\ub9bc\ucc98\ub7fc status server\uac00 \ud558\ub098 \ubcf4\uc778\ub2e4."}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.a,{href:"https://blurblah.net/wp-content/uploads/2016/08/ceph-juju-status.png",children:(0,c.jsx)(s.img,{alt:"ceph-juju-status",src:n(14210).A+"",width:"697",height:"478"})}),(0,c.jsx)(s.strong,{children:"(2) yaml \uc900\ube44"})]}),"\n",(0,c.jsx)(s.p,{children:"Ceph charm \ubb38\uc11c\ub97c \ubcf4\uba74 \ubc30\ud3ec\ud558\uae30 \uc804\uc5d0 \uc124\uc815\ud30c\uc77c \uc548\uc5d0 fsid\uc640 monitor-secret \uac12\uc744 \ud544\uc218\ub85c \ub123\uc73c\ub77c\uace0 \uba85\uc2dc\ub418\uc5b4 \uc788\ub2e4."}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.a,{href:"https://blurblah.net/wp-content/uploads/2016/08/ceph-yaml.png",children:(0,c.jsx)(s.img,{alt:"ceph-yaml",src:n(78512).A+"",width:"610",height:"137"})})}),"\n",(0,c.jsxs)(s.p,{children:["<\ucd9c\ucc98 :\xa0",(0,c.jsx)(s.a,{href:"https://jujucharms.com/ceph/xenial/3",children:"https://jujucharms.com/ceph/xenial/3"}),">"]}),"\n",(0,c.jsx)(s.p,{children:"fsid\ub294 uuid\ub098 uuidgen\uc744 \uc2e4\ud589\ud558\uba74(\uc5c6\uc73c\uba74 \uc124\uce58) \uc0dd\uc131 \uac00\ub2a5\ud558\uace0 monitor-secret \uac12\uc740 \uc544\ub798\uc758 \uba85\ub839\uc73c\ub85c \uc0dd\uc131\ud560 \uc218 \uc788\ub294\ub370 cluster \uacf5\ud1b5\uc73c\ub85c \uc0ac\uc6a9\ud560 \uac83\uc774\ub77c \ubc30\ud3ec\ub420 ceph node \uc548\uc5d0\uc11c \uc0dd\uc131\ub418\ub294\uac8c \ub9de\uc744 \uac83 \uac19\uc9c0\ub9cc \ubc30\ud3ec \uc804\uc774\ubbc0\ub85c \uc784\uc758\uc758 \uc7a5\ube44\uc5d0\uc11c \uc0dd\uc131\ud574\ubd24\ub2e4. (\uacb0\ub860\uc740 \ubb38\uc81c\ub294 \uc5c6\ub294\ub370 ceph-common\uac00 \uc124\uce58\ub418\uc5b4 \uc788\uc5b4\uc57c monitor-secret \uac12 \uc0dd\uc131\uc774 \uac00\ub2a5\ud574\uc11c \uc880 \uc774\ud574\uac00 \uc548\ub418\ub294 \ubd80\ubd84)"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"# generate monitor-secret\nceph-authtool /dev/stdout --name=mon. --gen-key\n"})}),"\n",(0,c.jsx)(s.p,{children:"Charm \ubb38\uc11c\uc5d0\ub294 osd-devices \ub77c\ub294 \ud56d\ubaa9\uc5d0 \ub300\ud574\uc11c\ub3c4 \uae30\uc220\ub418\uc5b4 \uc788\ub294\ub370 \uad73\uc774 \uc124\uc815\ud30c\uc77c\uc5d0 \ub123\uc744 \ud544\uc694\ub294 \uc5c6\uace0 \ub098\uc911\uc5d0 juju set \uba85\ub839\uc73c\ub85c \uc124\uc815\ud558\ub294\uac8c \uac00\ub2a5\ud558\ub2e4. osd-devices\ub294 \uc2e4\uc81c osd\uac00 \uc0ac\uc6a9\ud560 \uacbd\ub85c\ub85c mount \ub41c disk \uc774\uac70\ub098 \uc77c\ubc18 directory\ub97c \uc9c0\uc815\ud558\uba74 \ub418\ub294\ub370 \uc874\uc7ac\ud558\uc9c0 \uc54a\ub294 \uacbd\ub85c\ub77c\uba74 \uc0dd\uc131 \ud6c4 \uad8c\ud55c \uc124\uc815\uae4c\uc9c0 \uc54c\uc544\uc11c \uc9c4\ud589\ub41c\ub2e4. \ub098\uc911\uc5d0 \uc124\uc815\ud560\uac70\ub77c\uba74 \ubc30\ud3ec \ud6c4\uc5d0 \uc544\ub798\uc758 \uba85\ub839\uc744 \uc0ac\uc6a9\ud55c\ub2e4."}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"juju set ceph osd-devices=path_for_osd\n"})}),"\n",(0,c.jsx)(s.p,{children:"\xa0"}),"\n",(0,c.jsx)(s.p,{children:"\xa0"}),"\n",(0,c.jsx)(s.h4,{id:"2-ceph-\ubc30\ud3ec",children:"2. Ceph \ubc30\ud3ec"}),"\n",(0,c.jsx)(s.p,{children:"Ceph \ubc30\ud3ec\ub294 \uac04\ub2e8\ud558\uac8c \uc544\ub798 \uba85\ub839\uc73c\ub85c \uc644\ub8cc\ub41c\ub2e4. 1-(2)\uc5d0\uc11c ceph.yaml \uc774\ub780 \uc774\ub984\uc73c\ub85c \ud30c\uc77c\uc744 \uc0dd\uc131\ud574\uc11c \uadf8 \ud30c\uc77c\uc744 \uc124\uc815\ud30c\uc77c\ub85c \uc9c0\uc815\ud588\uace0 3\uac1c instance\uc5d0 \ubc30\ud3ec\ud558\ub77c\uace0 \ud574\ub1a8\ub2e4.\xa0\ubc30\ud3ec\ub97c \uc2dc\uc791\ud558\uba74 instance\ub97c \ucd94\uac00\ud574\uc11c ceph \uc124\uc815\uae4c\uc9c0 \uc54c\uc544\uc11c \uc9c4\ud589\ub418\uace0 \uc644\ub8cc\ub418\uba74 \uc11c\ube44\uc2a4\uac00 active \uc0c1\ud0dc\ub85c \ubcc0\uacbd\ub41c\ub2e4."}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"juju deploy -n 3 --config ceph.yaml ceph\n"})}),"\n",(0,c.jsxs)(s.p,{children:["\ubc30\ud3ec\ub294 \ub418\uc5c8\uc5b4\ub3c4 \uc544\uc9c1\uc740 ceph\uc774 \uc678\ubd80\uc640 \uc5f0\uacb0\ub41c\uac8c \uc5c6\uc73c\ubbc0\ub85c 3\uac1c \uc911 \ud558\ub098\uc758 instance\uc5d0 \uc811\uc18d\ud574\uc11c sudo ceph -w (ceph-deploy\ub97c \uc0ac\uc6a9\ud560 \ub54c\uc640\ub294 \ub2e4\ub974\uac8c root \uad8c\ud55c\uc774 \ud544\uc694) \ub97c \uc2e4\ud589\ud574\ubcf4\uba74 \uc544\ub798 \uadf8\ub9bc\ucc98\ub7fc \uc0c1\ud0dc\ub97c \ud655\uc778\ud560 \uc218 \uc788\uace0\xa0sudo ceph osd tree \uba85\ub839\uc73c\ub85c osd\uac00 \ubaa8\ub450 \uc815\uc0c1\uc778 \uac83\ub3c4 \ud655\uc778 \uac00\ub2a5\ud558\ub2e4.",(0,c.jsx)(s.a,{href:"https://blurblah.net/wp-content/uploads/2016/08/ceph-healthy.png",children:(0,c.jsx)(s.img,{alt:"ceph-healthy",src:n(85450).A+"",width:"697",height:"501"})})]}),"\n",(0,c.jsx)(s.p,{children:"\uc124\uc815\ud588\ub358 osd-devices\uac00 \uc5b4\ub5bb\uac8c \ub418\uc5b4\uc788\ub294\uc9c0 \ud655\uc778\ud574\ubcf4\ub2c8 \uc704\uc5d0\uc11c \uc5b8\uae09\ud588\ub358 \uac83\ucc98\ub7fc \uacbd\ub85c \uc0dd\uc131\ubd80\ud130 \uad8c\ud55c \uc124\uc815\uae4c\uc9c0 \ubaa8\ub450 \uc644\uc804\ud558\uac8c \ucc98\ub9ac\ub418\uc5b4 \uc788\uc5c8\ub2e4."}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.a,{href:"https://blurblah.net/wp-content/uploads/2016/08/ceph-ls.png",children:(0,c.jsx)(s.img,{alt:"ceph-ls",src:n(14282).A+"",width:"697",height:"501"})})}),"\n",(0,c.jsx)(s.h4,{id:"3-osd-\ud655\uc7a5",children:"3. OSD \ud655\uc7a5"}),"\n",(0,c.jsx)(s.p,{children:"\uc2e4\uc81c ceph\uc744 \ud65c\uc6a9\ud560 \ub54c \ud655\uc7a5\ud560 \uac00\ub2a5\uc131\uc774 \ub192\uae30 \ub54c\ubb38\uc5d0 \ud655\uc7a5\uc774 \uc798 \ub418\ub294\uc9c0 \uc0b4\ud3b4\ubcf4\uae30\ub85c \ud588\ub2e4. \uc5ed\uc2dc \uac04\ud3b8\ud558\uac8c \uc544\ub798\uc758 \ub450\uac00\uc9c0 \uba85\ub839\ub9cc \uc2e4\ud589\ud558\uba74 \ud655\uc7a5\uc740 \ub05d\ub09c\ub2e4. \ub2e8, \uc0ac\uc804\uc5d0 ceph-osd charm\uc774 \uc0ac\uc6a9\ud560 \uc124\uc815 \ud30c\uc77c\uc744 \ub9cc\ub4e4\uc5b4\uc918\uc57c \ud558\ub294\ub370 \uc774\ubbf8 \uc874\uc7ac\ud558\ub294 ceph cluster\uc5d0 \ubd99\uc77c \uac83\uc774\uae30 \ub54c\ubb38\uc5d0 fsid \ub4f1\uc774 \ud544\uc694\ud558\uc9c0\ub294 \uc54a\uace0 osd\uac00 \uc0ac\uc6a9\ud560 osd-devices \ub9cc \uc9c0\uc815\ud574\uc8fc\uba74 \ub41c\ub2e4. 2\uc5d0\uc11c cluster \uad6c\uc131\uc744 \ud560 \ub54c\uc5d0\ub294 osd-devices\ub85c /ceph-disk \ub77c\ub294 \uacbd\ub85c\ub97c \uc124\uc815\ud588\ub294\ub370 \ud655\uc7a5\uc2dc \uc5b4\ub5bb\uac8c \ub418\ub294\uc9c0 \uc0b4\ud3b4\ubcf4\uae30 \uc704\ud574 \uc774\ubc88\uc5d0\ub294 /added-disk\ub77c\uace0 \uc124\uc815\ud588\ub2e4."}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.a,{href:"https://blurblah.net/wp-content/uploads/2016/08/ceph-osd-yaml.png",children:(0,c.jsx)(s.img,{alt:"ceph-osd-yaml",src:n(2955).A+"",width:"603",height:"81"})})}),"\n",(0,c.jsxs)(s.p,{children:["<\ucd9c\ucc98 :\xa0",(0,c.jsx)(s.a,{href:"https://jujucharms.com/ceph-osd/xenial/3",children:"https://jujucharms.com/ceph-osd/xenial/3"}),">"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"# deploy ceph-osd to two instances\njuju deploy -n 2 --config osd.yaml ceph-osd\n\n# add relation\njuju add-relation ceph-osd ceph\n"})}),"\n",(0,c.jsx)(s.p,{children:"ceph-osd deploy\uac00 \uc644\ub8cc\ub41c \ud6c4\uc5d0 \ucd5c\ucd08 cluster\uac00 \uad6c\uc131\ub41c node \uc911 \ud558\ub098\uc5d0 \uc811\uc18d\ud574\uc11c \uc0c1\ud0dc\ub97c \ubcf4\uba74 \uc544\ub798\uc758 \uadf8\ub9bc\ucc98\ub7fc \ubaa8\ub450 5\uac1c\uc758 osd\uac00 \uc62c\ub77c\uc640\uc788\uc74c\uc744 \ud655\uc778\ud560 \uc218 \uc788\uace0 \uc0ac\uc6a9 \uac00\ub2a5\ud55c storage \uc6a9\ub7c9\ub3c4 \uc99d\uac00\ub418\uc5c8\uc74c\uc744 \uc54c \uc218 \uc788\ub2e4. (\uc57d 76GB => 124GB)"}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.a,{href:"https://blurblah.net/wp-content/uploads/2016/08/ceph-healthy-after-expand.png",children:(0,c.jsx)(s.img,{alt:"ceph-healthy-after-expand",src:n(66310).A+"",width:"698",height:"495"})})}),"\n",(0,c.jsxs)(s.p,{children:["\ub9c8\uc9c0\ub9c9\uc73c\ub85c \ud655\uc7a5\ub41c osd\uc5d0\ub9cc \ub2e4\ub974\uac8c \uc801\uc6a9\ud588\ub358 osd-devices \uacbd\ub85c\ub294 \uc5b4\ub5bb\uac8c \ub418\uc5b4\uc788\ub294\uc9c0 \ud655\uc778\ud574\ubcf4\ub2c8 \uc774\uc804\uc5d0 \uad6c\uc131\ub41c cluster\uc5d0\ub294 \ubcc0\ud654\uac00 \uc5c6\uace0 \ucd94\uac00\ub41c osd\ub9cc \uc9c0\uc815\ud55c \uacbd\ub85c(/added-disk)\ub97c \uc0ac\uc6a9\ud568\uc744 \uc54c \uc218 \uc788\uc5c8\ub2e4.\n",(0,c.jsx)(s.a,{href:"https://blurblah.net/wp-content/uploads/2016/08/ceph-ls-after-expand.png",children:(0,c.jsx)(s.img,{alt:"ceph-ls-after-expand",src:n(30246).A+"",width:"698",height:"495"})})]}),"\n",(0,c.jsx)(s.h4,{id:"4-\uacb0\ub860",children:"4. \uacb0\ub860"}),"\n",(0,c.jsx)(s.p,{children:"ceph-deploy\ub97c \uc0ac\uc6a9\ud558\uba74\uc11c \uacbd\ud5d8\ud588\ub358 \ubb38\uc81c\ub4e4\uc740 charm\uc744 \ub9cc\ub4e0 \uc0ac\ub78c\uc774 \uac1c\uc120\ud588\ub294\uc9c0 \uc804\ud600 \ub098\ud0c0\ub098\uc9c0 \uc54a\uc558\uace0 \ub108\ubb34 \uac04\ud3b8\ud558\uac8c \ubc30\ud3ec\ud560 \uc218 \uc788\uc5c8\ub2e4. \uc544\ub9c8 \uc774\ubbf8 \uc874\uc7ac\ud558\ub294 instance\uc5d0 \ubc30\ud3ec\ud560 \ub54c\ub97c \uc704\ud574 \uc900\ube44\ud574\ub454 \uac83\uc774 \uc544\ub2cc\uac00 \uc2f6\uc740\ub370, \ucd08\uae30\uc5d0 cluster \uad6c\uc131\ud558\uba74\uc11c \uc124\uc815\ud588\ub358 fsid, monitor-secret\uc740 \ubcc4\ub3c4 \uc9c0\uc815\ud558\uc9c0 \uc54a\ub294 \uc774\uc0c1 charm \ub0b4\ubd80\uc5d0\uc11c \uc0dd\uc131\ud574\uc11c \uc124\uc815\ud558\ub3c4\ub85d \ub418\uc5b4 \uc788\uc73c\uba74 \ub354 \uc88b\uc558\uc744 \uac83 \uac19\ub2e4. \uc774\uc81c deploy\ub294 \uac00\ubccd\uac8c \ud574\uacb0\ud560 \uc218 \uc788\uc73c\ub2c8 \uc2e4\uc81c \ud65c\uc6a9 \uce21\uba74\uc5d0\uc11c \uc5b4\ub5a4\uc9c0 \uc0b4\ud3b4\ubcfc \uc0dd\uac01\uc774\ub2e4."}),"\n",(0,c.jsx)(s.p,{children:"\xa0"}),"\n",(0,c.jsx)(s.h4,{id:"5-\ucc38\uace0",children:"5. \ucc38\uace0"}),"\n",(0,c.jsxs)(s.p,{children:["(1)\xa0",(0,c.jsx)(s.a,{href:"https://jujucharms.com/ceph/xenial/3",children:"Ceph charm"})]}),"\n",(0,c.jsxs)(s.p,{children:["(2)\xa0",(0,c.jsx)(s.a,{href:"https://jujucharms.com/ceph-osd/xenial/3",children:"Ceph osd charm"})]}),"\n",(0,c.jsxs)(s.p,{children:["(3)\xa0",(0,c.jsx)(s.a,{href:"https://jujucharms.com/docs/1.25/commands",children:"Juju commands"})]})]})}function o(e={}){const{wrapper:s}={...(0,h.R)(),...e.components};return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(r,{...e})}):r(e)}},66310:(e,s,n)=>{n.d(s,{A:()=>c});const c=n.p+"assets/images/ceph-healthy-after-expand-c21279c2ff3d76ad897f37e203e045ef.png"},85450:(e,s,n)=>{n.d(s,{A:()=>c});const c=n.p+"assets/images/ceph-healthy-8e251edbf4000cb53f3031867044b035.png"},14210:(e,s,n)=>{n.d(s,{A:()=>c});const c=n.p+"assets/images/ceph-juju-status-40c8d3d5b980db0d784675b5c8df610b.png"},30246:(e,s,n)=>{n.d(s,{A:()=>c});const c=n.p+"assets/images/ceph-ls-after-expand-ccdd63d685f2e209e71da2a541fe1a6e.png"},14282:(e,s,n)=>{n.d(s,{A:()=>c});const c=n.p+"assets/images/ceph-ls-ac4199b1bfef2c95d4cfa3ce97046718.png"},2955:(e,s,n)=>{n.d(s,{A:()=>c});const c=n.p+"assets/images/ceph-osd-yaml-6d0799fd64e3a4b52bd8419010494bec.png"},78512:(e,s,n)=>{n.d(s,{A:()=>c});const c=n.p+"assets/images/ceph-yaml-b44fc1517d776166e61773646b1dfada.png"},28453:(e,s,n)=>{n.d(s,{R:()=>p,x:()=>a});var c=n(96540);const h={},t=c.createContext(h);function p(e){const s=c.useContext(t);return c.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(h):e.components||h:p(e.components),c.createElement(t.Provider,{value:s},e.children)}}}]);