"use strict";(self.webpackChunkblurblah_github_io=self.webpackChunkblurblah_github_io||[]).push([[63478],{9515:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=n(74848),t=n(28453);const a={title:"\uc7a5\uc560\ub85c \uc0b4\ud3b4\ubcf8 AWS EFS performance issue?",date:"2017-08-08",categories:["devops"],tags:["aws-efs","burst-mode","elastic-file-system","high-load-average","network-io","nfs","performance","slow-cpu-usage","\ub300\uae30-\ud504\ub85c\uc138\uc2a4","\uc131\ub2a5","\uc7a5\uc560"],coverImage:"efs-04-read-bmon.png"},i=void 0,o={permalink:"/2017/08/08/wp/\uc7a5\uc560\ub85c-\uc0b4\ud3b4\ubcf8-aws-efs-performance-issue",source:"@site/blog/wp/2017-08-08-\uc7a5\uc560\ub85c-\uc0b4\ud3b4\ubcf8-aws-efs-performance-issue.md",title:"\uc7a5\uc560\ub85c \uc0b4\ud3b4\ubcf8 AWS EFS performance issue?",description:"\ucd5c\uadfc\uc5d0 \uacbd\ud5d8\ud55c \uc7a5\uc560\ub97c \uc815\ub9ac\ud55c \ub0b4\uc6a9. \ub0b4\uac00 \ubb54\uac00 \ub193\uce5c\uac74\uc9c0\ub3c4 \ubaa8\ub974\uaca0\uc9c0\ub9cc \uc77c\ub2e8 \ud604\uc0c1\ub9cc \ubd24\uc744 \ub54c\uc5d0\ub294 AWS EFS \uc0ac\uc6a9\uc2dc \uc8fc\uc758\ub294 \ud574\uc57c\ud560 \uac83 \uac19\ub2e4. \uc774\ubbf8 \ub9cc\ub4e4\uc5b4\uc838\uc788\ub294 \uad6c\uc870\ub97c \ubcc0\uacbd\ud558\uae30\ub294 \uc27d\uc9c0 \uc54a\uc9c0\ub9cc \uacf5\uc6a9 storage\ub97c \ub2e4\ub978 \uac78\ub85c \uad50\uccb4\ud558\uac70\ub098 \ud30c\uc77c \uc800\uc7a5\uc744 \ub2e4\ub978 \ubc29\uc2dd\uc73c\ub85c \uc804\ud658\ud560 \ud544\uc694\uac00 \uc788\uc74c.",date:"2017-08-08T00:00:00.000Z",formattedDate:"August 8, 2017",tags:[{label:"aws-efs",permalink:"/tags/aws-efs"},{label:"burst-mode",permalink:"/tags/burst-mode"},{label:"elastic-file-system",permalink:"/tags/elastic-file-system"},{label:"high-load-average",permalink:"/tags/high-load-average"},{label:"network-io",permalink:"/tags/network-io"},{label:"nfs",permalink:"/tags/nfs"},{label:"performance",permalink:"/tags/performance"},{label:"slow-cpu-usage",permalink:"/tags/slow-cpu-usage"},{label:"\ub300\uae30-\ud504\ub85c\uc138\uc2a4",permalink:"/tags/\ub300\uae30-\ud504\ub85c\uc138\uc2a4"},{label:"\uc131\ub2a5",permalink:"/tags/\uc131\ub2a5"},{label:"\uc7a5\uc560",permalink:"/tags/\uc7a5\uc560"}],readingTime:6.855,hasTruncateMarker:!1,authors:[],frontMatter:{title:"\uc7a5\uc560\ub85c \uc0b4\ud3b4\ubcf8 AWS EFS performance issue?",date:"2017-08-08",categories:["devops"],tags:["aws-efs","burst-mode","elastic-file-system","high-load-average","network-io","nfs","performance","slow-cpu-usage","\ub300\uae30-\ud504\ub85c\uc138\uc2a4","\uc131\ub2a5","\uc7a5\uc560"],coverImage:"efs-04-read-bmon.png"},unlisted:!1,prevItem:{title:"AWS ES with IoT",permalink:"/aws-es-with-iot"},nextItem:{title:"Deploy Cloud Foundry and Diego to AWS",permalink:"/2017/08/06/wp/deploy-cloud-foundry-and-diego-to-aws"}},c={authorsImageUrls:[]},l=[{value:"1. \uc0ac\uac74\uc758 \uc2dc\uc791",id:"1-\uc0ac\uac74\uc758-\uc2dc\uc791",level:3},{value:"2. \uc65c \uc774\ub798?",id:"2-\uc65c-\uc774\ub798",level:3},{value:"3. \uce21\uc815\ud574\ubcf4\uc790",id:"3-\uce21\uc815\ud574\ubcf4\uc790",level:3},{value:"4. AWS EFS\uc758 performance",id:"4-aws-efs\uc758-performance",level:3},{value:"5. \ub300\uc751\uc740 \uc5b4\ub5bb\uac8c?",id:"5-\ub300\uc751\uc740-\uc5b4\ub5bb\uac8c",level:3},{value:"6. \ub354 \uc0b4\ud3b4\ubcfc \ub0b4\uc6a9",id:"6-\ub354-\uc0b4\ud3b4\ubcfc-\ub0b4\uc6a9",level:3}];function d(e){const s={a:"a",h3:"h3",img:"img",p:"p",strong:"strong",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["\ucd5c\uadfc\uc5d0 \uacbd\ud5d8\ud55c \uc7a5\uc560\ub97c \uc815\ub9ac\ud55c \ub0b4\uc6a9. ",(0,r.jsx)(s.strong,{children:"\ub0b4\uac00 \ubb54\uac00 \ub193\uce5c\uac74\uc9c0\ub3c4 \ubaa8\ub974\uaca0\uc9c0\ub9cc"})," \uc77c\ub2e8 \ud604\uc0c1\ub9cc \ubd24\uc744 \ub54c\uc5d0\ub294 AWS EFS \uc0ac\uc6a9\uc2dc \uc8fc\uc758\ub294 \ud574\uc57c\ud560 \uac83 \uac19\ub2e4. \uc774\ubbf8 \ub9cc\ub4e4\uc5b4\uc838\uc788\ub294 \uad6c\uc870\ub97c \ubcc0\uacbd\ud558\uae30\ub294 \uc27d\uc9c0 \uc54a\uc9c0\ub9cc \uacf5\uc6a9 storage\ub97c \ub2e4\ub978 \uac78\ub85c \uad50\uccb4\ud558\uac70\ub098 \ud30c\uc77c \uc800\uc7a5\uc744 \ub2e4\ub978 \ubc29\uc2dd\uc73c\ub85c \uc804\ud658\ud560 \ud544\uc694\uac00 \uc788\uc74c."]}),"\n",(0,r.jsx)(s.p,{children:"\xa0"}),"\n",(0,r.jsx)(s.h3,{id:"1-\uc0ac\uac74\uc758-\uc2dc\uc791",children:"1. \uc0ac\uac74\uc758 \uc2dc\uc791"}),"\n",(0,r.jsx)(s.p,{children:"\uad6c\uc131\ub418\uc5b4 \uc788\ub294 \uc2dc\uc2a4\ud15c\uc744 \uc124\uba85\ud558\uba74 \uc5ec\ub7ec\uac1c\uc758 VM\uc774 \uc11c\ub85c \uacf5\uc720\ud560 \uc218 \uc788\ub294 storage\uac00 \ud544\uc694\ud574\uc11c AWS EFS\ub97c \uc774\uc6a9 NFS\ub85c \ub9c8\uc6b4\ud2b8\ub97c \ud574\ub450\uc5c8\ub2e4. AWS\uc758 \uac00\uc774\ub4dc\ub300\ub85c NFS version\uc740 4.1\uc774\uace0 buffer\ub294 1MB\ub85c \uc124\uc815\ub41c \uc0c1\ud0dc."}),"\n",(0,r.jsx)(s.p,{children:"\uc2dc\uc2a4\ud15c \uc704\uc5d0 gitlab\uc774 docker container\ub85c \uc62c\ub77c\uac00 \uc788\uace0 \ub9c8\uc6b4\ud2b8 \ub418\uc5b4\uc788\ub294 EFS\ub97c \uc774\uc6a9\ud558\uace0 \uc788\uc5c8\ub294\ub370 \uac11\uc790\uae30 gitlab \uc11c\ube44\uc2a4\uac00 \uc8fd\uae30 \uc2dc\uc791\ud588\ub2e4. \ub85c\uadf8\ub97c \ud655\uc778\ud574\ubcf4\ub2c8 \uc544\ub798 \uadf8\ub9bc\ucc98\ub7fc unicorn\uc758 worker\ub4e4\uc774 timeout\uc5d0 \uac78\ub824\uc11c \uc8fd\uac70\ub098 \ub2e4\uc2dc \uc62c\ub77c\uc624\uc9c8 \ubabb\ud558\ub294 \uac78 \ud655\uc778"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"http://13.125.231.217/wp-content/uploads/2017/08/efs-01-unicorn.png",children:(0,r.jsx)(s.img,{src:n(35457).A+"",width:"585",height:"439"})})}),"\n",(0,r.jsx)(s.p,{children:"\xa0"}),"\n",(0,r.jsx)(s.h3,{id:"2-\uc65c-\uc774\ub798",children:"2. \uc65c \uc774\ub798?"}),"\n",(0,r.jsx)(s.p,{children:"Container\ub2c8\uae4c \uc11c\ube44\uc2a4 \uc2a4\ud0dd\uc740 \uace0\uc815\ub41c \ud615\ud0dc\ub85c \ub3d9\uc791\ud558\ub294\uac70\ub77c \ub2e4\uc2dc \uc62c\ub9ac\uba74 \uc0b4\uc544 \ub3cc\uc544\uc624\uac70\ub098 \ubb54\uac00 \ub2e4\ub978 \ubc18\uc751\uc744 \ubcf4\uc77c\uac70\ub77c \uc0dd\uac01\ud588\ub294\ub370 1\uacfc \uac19\uc740 \ud604\uc0c1\uc774 \ubc18\ubcf5\ub418\uae30\uc5d0 container\uac00 \ub3cc\uace0 \uc788\ub294 host\uc5d0\uc11c top\uc744 \ucc0d\uc5b4\ubd24\ub354\ub2c8 \uc774\ub7ac\ub2e4."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"http://13.125.231.217/wp-content/uploads/2017/08/efs-02-top.png",children:(0,r.jsx)(s.img,{src:n(15839).A+"",width:"585",height:"439"})})}),"\n",(0,r.jsx)(s.p,{children:"Load average\ub294 \ubbf8\uce5c\ub4ef\uc774 \ub192\uc740\ub370 cpu usage\ub294 \uc881\uc300\ub9cc\ud558\ub2e4. \uadf8\ub7ec\ub2c8\uae4c cpu\ub294 \ub180\uace0 \uc788\ub294\ub370 \ub300\uae30 \ud504\ub85c\uc138\uc2a4\ub294 \uc5c4\uccad \ub9ce\ub2e4\ub294 \uc598\uae30. Cpu\uac00 \ud798\ub4e4\uc5b4\ud558\ub294 \uc791\uc5c5\uc774 \ub9ce\uc544\uc11c \ubc8c\uc5b4\uc9c4 \ubb38\uc81c\ub77c\uba74 scale up, out\uc744 \ud558\uac70\ub098 \ubb34\uac70\uc6b4 \uc791\uc5c5\uc774 \ubb54\uc9c0 \ud30c\uc545\ud574\uc11c \uc798\uac8c \ucabc\uac1c\ub294 \ubc29\ubc95\uc744 \uc0dd\uac01\ud574\ubcf4\uba74 \ub418\uaca0\ub294\ub370 \uc774\ub7f0 \uc0c1\ud0dc\ub294 \ud504\ub85c\uc138\uc2a4\ub4e4\uc774 \uc5b4\ub518\uac00\uc5d0 \ubb36\uc5ec\uc788\uc744 \uac00\ub2a5\uc131\uc774 \ub192\ub2e4\uace0 \uc0dd\uac01\ud588\ub2e4. \uadf8\ub9ac\uace0 EFS\uac00 NFS\ub85c \ub9c8\uc6b4\ud2b8\ub418\uc5b4 \uc788\uc73c\ub2c8 network i/o\uac00 \uc6d0\uc778\uc77c\uc9c0\ub3c4 \ubaa8\ub974\uaca0\ub2e4\uace0 \uc758\uc2ec\ud568"}),"\n",(0,r.jsx)(s.p,{children:"\xa0"}),"\n",(0,r.jsx)(s.h3,{id:"3-\uce21\uc815\ud574\ubcf4\uc790",children:"3. \uce21\uc815\ud574\ubcf4\uc790"}),"\n",(0,r.jsx)(s.p,{children:"EFS\ub97c \uc758\uc2ec\ud55c \uc774\uc720\ub294 \uc2e4\uc81c \ub9c8\uc6b4\ud2b8\ub41c \uacbd\ub85c\uc5d0 \ud30c\uc77c\uc744 \uc4f0\uac70\ub098 \uc77d\uc5c8\uc744 \ub54c \ub290\ub9ac\ub2e4\ub294 \uac78 \uccb4\uac10\ud55c \uacbd\uc6b0\uac00 \ub9ce\uc558\uae30 \ub54c\ubb38\uc778\ub370 \uadf8\ub798\uc11c \uc5b4\ub290 \uc815\ub3c4\uc778\uc9c0 \uc815\ud655\ud788 \uce21\uc815\ud574\ubcf4\uae30\ub85c \ud588\ub2e4. \uc77c\ub2e8 \uc544\ub798 \uadf8\ub9bc\ucc98\ub7fc \ub9c8\uc6b4\ud2b8\ub41c \ud2b9\uc815 \ub514\ub809\ud1a0\ub9ac\uc758 \uc0ac\uc774\uc988\ub97c \uc77d\uace0 \uc0ad\uc81c\ud558\uba74\uc11c \ub3d9\uc2dc\uc5d0 bmon\uc73c\ub85c \uce21\uc815. 125MB \uc9dc\ub9ac \ub514\ub809\ud1a0\ub9ac \uc0ac\uc774\uc988 \uce21\uc815\ud558\ub294\ub370 12\ucd08 \uc815\ub3c4 \uac78\ub838\uace0 \uc0ad\uc81c\ud558\ub294\ub370\uc5d0\ub294 1\ubd84\uc774 \ub118\uac8c \uc18c\uc694\ub418\uc5c8\ub2e4. \uccb4\uac10\ud55c \uac83 \ub9cc\ud07c \ub290\ub9ac\ub2e4."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"http://13.125.231.217/wp-content/uploads/2017/08/efs-03-time.png",children:(0,r.jsx)(s.img,{src:n(66920).A+"",width:"552",height:"175"})})}),"\n",(0,r.jsx)(s.p,{children:"\uc544\ub798 \uadf8\ub9bc\ucc98\ub7fc \ub514\ub809\ud1a0\ub9ac \uc0ac\uc774\uc988\ub97c \ud655\uc778\ud558\ub294\ub370 RX, TX \ubaa8\ub450 \ucd08\ub2f9 300KB\ub97c \ub118\uc9c0 \ubabb\ud55c\ub2e4. \uac00\uc6b4\ub370\uc5d0 \uc788\ub294 \uadf8\ub798\ud504\uac00 \uc885\ubaa8\uc591\uc73c\ub85c \uc2dc\uac04\ucd95 \uc55e\ub4a4\ub85c \ube44\uc5b4\uc788\ub294 \uc774\uc720\ub294 \ub514\ub809\ud1a0\ub9ac \uc0ac\uc774\uc988 \ud655\uc778 \uc804\ud6c4\ub85c\ub294 \ubcc4 \ub2e4\ub978 \uc791\uc5c5\uc774 \uc5c6\uc5c8\uae30 \ub54c\ubb38."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"http://13.125.231.217/wp-content/uploads/2017/08/efs-04-read-bmon.png",children:(0,r.jsx)(s.img,{src:n(47151).A+"",width:"1024",height:"622"})})}),"\n",(0,r.jsx)(s.p,{children:"\ub514\ub809\ud1a0\ub9ac \uc0ad\uc81c\uc2dc\uc5d0\ub294 \uc5b4\ub5a4\uc9c0 \uc544\ub798 \uadf8\ub9bc\uc744 \ubcf4\uc790. \uc77c\ubc18\uc801\uc73c\ub85c read \ubcf4\ub2e4 write\uac00 \ub290\ub9b0 \uac83\ucc98\ub7fc \ub514\ub809\ud1a0\ub9ac \uc0ac\uc774\uc988 \ud655\uc778\ud560 \ub54c \ubcf4\ub2e4 \ub290\ub9ac\ub2e4. RX, TX \ubaa8\ub450 150KB/s\ub97c \ub118\uc9c0 \ubabb\ud568."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"http://13.125.231.217/wp-content/uploads/2017/08/efs-05-write-bmon.png",children:(0,r.jsx)(s.img,{src:n(40693).A+"",width:"1024",height:"622"})})}),"\n",(0,r.jsx)(s.p,{children:"\xa0"}),"\n",(0,r.jsx)(s.h3,{id:"4-aws-efs\uc758-performance",children:"4. AWS EFS\uc758 performance"}),"\n",(0,r.jsxs)(s.p,{children:["EFS\uc5d0\uc11c \uc791\uc5c5\ub418\ub294\uac8c \ub290\ub9ac\ub2e4\ub294 \uac83\ub3c4 \uccb4\uac10\ud588\uace0 \uc2e4\uc81c \uce21\uc815\ud55c \uac83\ub3c4 \uadf8\ub807\ub2e4. \uadf8\ub807\ub2e4\uba74 \uc815\ub9d0 EFS\uc758 performance\uac00 \ub5a8\uc5b4\uc9c0\ub294 \uac83\uc77c\uae4c? EFS\uc758 ",(0,r.jsx)(s.a,{href:"http://docs.aws.amazon.com/efs/latest/ug/performance.html",children:"performance \ubb38\uc11c"}),"\ub97c \ubcf4\ub2c8 \uc77c\ubc18\uc801\uc778 \uacbd\uc6b0\uc5d0 \uc5b4\ub5bb\ub2e4\ub77c\ub294 \ub0b4\uc6a9\uc740 \ubaa8\ub974\uaca0\uc9c0\ub9cc \uc0ac\uc6a9 \uc6a9\ub7c9\ubcc4 burst mode\ub85c \ub3d9\uc791\ud558\ub294 \uc218\uce58\ub4e4\uc5d0 \ucc28\uc774\uac00 \uc788\uc74c\uc744 \uc54c \uc218 \uc788\uc5c8\ub2e4. (\uc544\ub798 \uadf8\ub9bc)"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"http://13.125.231.217/wp-content/uploads/2017/08/efs-06-burst.png",children:(0,r.jsx)(s.img,{src:n(28068).A+"",width:"763",height:"361"})})}),"\n",(0,r.jsx)(s.p,{children:"\uc608\ub97c \ub4e4\uc5b4, EFS\ub97c 10GB \uc815\ub3c4 \uc0ac\uc6a9\ud558\uace0 \uc788\ub294 \uacbd\uc6b0 \ubca0\uc774\uc2a4\ub77c\uc778\uc778 0.5MB/s \ubcf4\ub2e4 \ub0ae\uc740 I/O\uac00 \ubc1c\uc0dd\ud560 \uacbd\uc6b0 credit\uc774 \ucda9\uc804\ub418\uace0 \uadf8 credit\uc744 \uc18c\ube44\ud558\uba74\uc11c burst mode\ub85c \ub3d9\uc791\ud560 \uc218 \uc788\ub294 \ucd5c\ub300 \uc2dc\uac04\uc740 \ud558\ub8e8\uc5d0 7.2\ubd84, \uadf8\ub9ac\uace0 \uadf8 \uc2dc\uac04\ub3d9\uc548 throughput\uc740 100MB/s \uc774\ub2e4. \uc7a5\uc560\uac00 \ubc1c\uc0dd\ud55c \uc2dc\uc2a4\ud15c\uc5d0\uc11c \uc0ac\uc6a9\uc911\uc778 EFS\uc758 \uc0ac\uc774\uc988\ub294 8GB \uc815\ub3c4\uc600\ub294\ub370 \ub9de\ub294 \uac83\uc778\uc9c0\ub294 \ubaa8\ub974\uaca0\uc9c0\ub9cc credit\uc744 \ub2e4 \uc18c\uc9c4\ud55c \uacbd\uc6b0\uc5d0 AWS\uc5d0\uc11c \ubca0\uc774\uc2a4\ub77c\uc778 \uc815\ub3c4\ub85c \uc131\ub2a5\uc744 \uc81c\ud55c\ud558\ub294 \uac83\uc774\ub77c\uba74 \uc5b4\ub290 \uc815\ub3c4 \uc124\uba85\uc774 \ub41c\ub2e4\uace0 \ubcf8\ub2e4."}),"\n",(0,r.jsx)(s.p,{children:"\xa0"}),"\n",(0,r.jsx)(s.h3,{id:"5-\ub300\uc751\uc740-\uc5b4\ub5bb\uac8c",children:"5. \ub300\uc751\uc740 \uc5b4\ub5bb\uac8c?"}),"\n",(0,r.jsx)(s.p,{children:"\ub2e4\ub978 \uc0ac\uc6a9\uc790\ub4e4\uc740 \uc5b4\ub5a8\uae4c \uc2f6\uc5b4\uc11c \ud655\uc778\ud574\ubcf4\ub2c8 reddit\uc5d0 \uc774\ub7f0 thread\uac00 \uc788\ub354\ub77c."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://www.reddit.com/r/aws/comments/6eeu60/terrible%5C_efs%5C_performance/",children:"https://www.reddit.com/r/aws/comments/6eeu60/terrible\\_efs\\_performance/"})}),"\n",(0,r.jsx)(s.p,{children:"\ubb50 \uc774\ub7f0\uc800\ub7f0 \uc598\uae30 \ub3c4\uc911\uc5d0 \uc7ac\ubbf8\uc788\ub294 \ubd80\ubd84\uc774 \ub208\uc5d0 \ub4e4\uc5b4\uc654\ub294\ub370 burst mode\ub97c \uc704\ud574 dummy \ud30c\uc77c\uc744 \uc313\uc544\ub450\uace0 \uc4f4\ub2e4\ub294 \ub0b4\uc6a9. 1TB\ub97c \ub123\uc5b4\ub450\uba74 \ubca0\uc774\uc2a4\ub77c\uc778\uc740 50MB/s\uc774\ub2c8 \uadf8\uac83\ubcf4\ub2e4 \ub0ae\uac8c \uc0ac\uc6a9\ub418\uba74 \ud558\ub8e8\uc5d0 720\ubd84\uc740 100MB/s\ub85c \uc0ac\uc6a9 \uac00\ub2a5\ud558\ub2e4. \uadf8\ub9cc\ud07c \ube44\uc6a9\uc774 \ubc1c\uc0dd\ud558\ub2c8 \ubb38\uc81c\uc9c0\ub9cc."}),"\n",(0,r.jsx)(s.p,{children:"\xa0"}),"\n",(0,r.jsx)(s.h3,{id:"6-\ub354-\uc0b4\ud3b4\ubcfc-\ub0b4\uc6a9",children:"6. \ub354 \uc0b4\ud3b4\ubcfc \ub0b4\uc6a9"}),"\n",(0,r.jsx)(s.p,{children:"NFS\uc758 buffer size\ub97c \uc870\uc815\ud574\ubcfc\uae4c \uc0dd\uac01\uc744 \ud574\ubd24\ub294\ub370 \ubb34\uc791\uc815 size\ub97c \ud06c\uac8c \ud55c\ub2e4\uace0 \uc131\ub2a5\uc774 \ud655\uc5f0\ud558\uac8c \uc88b\uc544\uc9c4\ub2e4\uac70\ub098 \ud558\ub294 \uac83 \uac19\uc9c0\ub294 \uc54a\ub2e4."}),"\n",(0,r.jsxs)(s.p,{children:["\ucc38\uace0 : ",(0,r.jsx)(s.a,{href:"https://www.linkedin.com/pulse/nfs-performance-tuning-using-rsize-wsize-rahul-vishwakarma",children:"https://www.linkedin.com/pulse/nfs-performance-tuning-using-rsize-wsize-rahul-vishwakarma"})]}),"\n",(0,r.jsx)(s.p,{children:"\uc2e4\ud5d8\uc744 \ub354 \ud574\ubcf8\ub2e4\uba74 \uc774\ub7f0\uac8c \uac00\ub2a5\ud560 \uac83 \uac19\ub2e4. (\uc2dc\uac04\uc774 \ub418\uba74)"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"(1) EC2 instance \ud558\ub098\ub97c \ub9cc\ub4e4\uc5b4\uc11c \ubd99\uc5b4\uc788\ub294 disk\ub97c \ub2e4\ub978 vm\uc774 NFS\ub85c \ub9c8\uc6b4\ud2b8\ud574\uc11c \uc131\ub2a5 \uce21\uc815"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"(2) Reddit\uc5d0 \uc788\ub294 \uae00\ucc98\ub7fc dummy \ud30c\uc77c\uc744 \ub123\uc5b4\ub450\uace0 \uc131\ub2a5\uc774 \uc5b4\ub5bb\uac8c \ubcc0\ud558\ub294\uc9c0 \ud655\uc778"})})]})}function p(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},35457:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/efs-01-unicorn-f9d5f334a3b41a67c4eaa69cc6e0de9f.png"},15839:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/efs-02-top-58a937c273f490e7f93e8c2687e2fecd.png"},66920:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/efs-03-time-a1103e808448e2e425ca0ef55e7b6b2c.png"},47151:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/efs-04-read-bmon-1024x622-1421fb23b75fbca5da0a81ef504a9b66.png"},40693:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/efs-05-write-bmon-1024x622-9be5d37773c551ad04a8c63fde5b7ae0.png"},28068:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/efs-06-burst-d449b2d27e1c0de1462fd611f8054c68.png"},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>o});var r=n(96540);const t={},a=r.createContext(t);function i(e){const s=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(a.Provider,{value:s},e.children)}}}]);