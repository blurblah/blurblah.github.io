"use strict";(self.webpackChunkblurblah_github_io=self.webpackChunkblurblah_github_io||[]).push([[26746],{24984:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var s=n(74848),a=n(28453);const r={title:"Juju bootstrap & deploy",date:"2015-08-31",categories:["devops"],tags:["bootstrap","canonical","charm","db-relation-changed","db-relation-joined","deploy","juju","relation"]},o=void 0,i={permalink:"/2015/08/31/wp/juju-bootstrap-deploy",source:"@site/blog/wp/2015-08-31-juju-bootstrap-deploy.md",title:"Juju bootstrap & deploy",description:"Ubuntu\ub97c \ubc30\ud3ec\ud558\uace0 \uc788\ub294 Canonical\uc5d0\uc11c \uc0ac\uc6a9\uc790\uac00 cloud \ud658\uacbd\uc5d0\uc11c \uc27d\uac8c \uc11c\ube44\uc2a4\ub97c \ubaa8\ub378\ub9c1\ud558\uace0 \ubc30\ud3ec\ud558\uae30 \uc704\ud55c tool\uc744 Juju\ub77c\ub294 \uc774\ub984\uc73c\ub85c \ub0b4\ub193\uc558\ub2e4. Server instance\ub97c \uac04\ud3b8\ud558\uac8c \uad00\ub9ac\ud55c\ub2e4\ub294 \uce21\uba74\uc5d0\uc11c\ub294 Chef\uc640 \uc720\uc0ac\ud558\uc9c0\ub9cc instance \uc790\uccb4\ub97c \uc0dd\uc131\ud558\uac70\ub098 \uc81c\uac70\ud560 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0 \ub610 \ub2e4\ub978 \uac83 \uac19\ub2e4.\xa0Juju\ub294 instance\uac00 \uc544\ub2cc service \uc704\uc8fc\uc758 \uad00\ub9ac\uc640 \ubc30\ud3ec\ub97c \ubaa9\uc801\uc73c\ub85c \ud558\uace0 \uc788\ub294 \uac83\uc73c\ub85c \ubcf4\uc778\ub2e4. \uc2e4\uc81c\ub85c \ud2b9\uc815 \uc11c\ube44\uc2a4 (charm\uc774\ub77c\uace0 \ubd80\ub974\ub294)\ub97c deploy\ud558\uba74 \uc2e0\uaddc instance\ub97c \ucd94\uac00\ud574\uc11c charm\uc5d0 \uc815\uc758\ub41c \ub0b4\uc6a9\ub300\ub85c \uc11c\ube44\uc2a4\ub97c \ubc30\ud3ec\ud558\uac8c \ub41c\ub2e4. (option\uc5d0 \ub530\ub77c \uc774\ubbf8 \ucd94\uac00\ub41c instance\uc5d0 \ubc30\ud3ec\ud558\ub294 \uac83\ub3c4 \uac00\ub2a5)",date:"2015-08-31T00:00:00.000Z",formattedDate:"August 31, 2015",tags:[{label:"bootstrap",permalink:"/tags/bootstrap"},{label:"canonical",permalink:"/tags/canonical"},{label:"charm",permalink:"/tags/charm"},{label:"db-relation-changed",permalink:"/tags/db-relation-changed"},{label:"db-relation-joined",permalink:"/tags/db-relation-joined"},{label:"deploy",permalink:"/tags/deploy"},{label:"juju",permalink:"/tags/juju"},{label:"relation",permalink:"/tags/relation"}],readingTime:9.94,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Juju bootstrap & deploy",date:"2015-08-31",categories:["devops"],tags:["bootstrap","canonical","charm","db-relation-changed","db-relation-joined","deploy","juju","relation"]},unlisted:!1,prevItem:{title:"Jenkins plugin \uac1c\ubc1c\ud658\uacbd \uc124\uc815",permalink:"/2015/10/07/wp/jenkins-plugin-\uac1c\ubc1c\ud658\uacbd-\uc124\uc815"},nextItem:{title:"Gerrit\uc5d0\uc11c custom label \uc0dd\uc131\ud558\uae30",permalink:"/2014/07/15/wp/gerrit\uc5d0\uc11c-custom-label-\uc0dd\uc131\ud558\uae30"}},d={authorsImageUrls:[]},l=[{value:"1. Juju\uc758 \uad6c\uc870",id:"1-juju\uc758-\uad6c\uc870",level:4},{value:"2. Bootstrap",id:"2-bootstrap",level:4},{value:"3. Charm",id:"3-charm",level:4},{value:"4. Deploy",id:"4-deploy",level:4},{value:"juju_status_after_deploy5. Instance\uc5d0 \uc811\uc18d\ud558\uace0 \uc2f6\ub2e4\uba74",id:"juju_status_after_deploy5-instance\uc5d0-\uc811\uc18d\ud558\uace0-\uc2f6\ub2e4\uba74",level:4},{value:"juju_ssh_using_private_key6. Add relation",id:"juju_ssh_using_private_key6-add-relation",level:4},{value:"7. Expose",id:"7-expose",level:4},{value:"8. \ucc38\uace0",id:"8-\ucc38\uace0",level:4}];function u(e){const t={a:"a",code:"code",h4:"h4",img:"img",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Ubuntu\ub97c \ubc30\ud3ec\ud558\uace0 \uc788\ub294 Canonical\uc5d0\uc11c \uc0ac\uc6a9\uc790\uac00 cloud \ud658\uacbd\uc5d0\uc11c \uc27d\uac8c \uc11c\ube44\uc2a4\ub97c \ubaa8\ub378\ub9c1\ud558\uace0 \ubc30\ud3ec\ud558\uae30 \uc704\ud55c tool\uc744 Juju\ub77c\ub294 \uc774\ub984\uc73c\ub85c \ub0b4\ub193\uc558\ub2e4. Server instance\ub97c \uac04\ud3b8\ud558\uac8c \uad00\ub9ac\ud55c\ub2e4\ub294 \uce21\uba74\uc5d0\uc11c\ub294 Chef\uc640 \uc720\uc0ac\ud558\uc9c0\ub9cc instance \uc790\uccb4\ub97c \uc0dd\uc131\ud558\uac70\ub098 \uc81c\uac70\ud560 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0 \ub610 \ub2e4\ub978 \uac83 \uac19\ub2e4.\xa0Juju\ub294 instance\uac00 \uc544\ub2cc service \uc704\uc8fc\uc758 \uad00\ub9ac\uc640 \ubc30\ud3ec\ub97c \ubaa9\uc801\uc73c\ub85c \ud558\uace0 \uc788\ub294 \uac83\uc73c\ub85c \ubcf4\uc778\ub2e4. \uc2e4\uc81c\ub85c \ud2b9\uc815 \uc11c\ube44\uc2a4 (charm\uc774\ub77c\uace0 \ubd80\ub974\ub294)\ub97c deploy\ud558\uba74 \uc2e0\uaddc instance\ub97c \ucd94\uac00\ud574\uc11c charm\uc5d0 \uc815\uc758\ub41c \ub0b4\uc6a9\ub300\ub85c \uc11c\ube44\uc2a4\ub97c \ubc30\ud3ec\ud558\uac8c \ub41c\ub2e4. (option\uc5d0 \ub530\ub77c \uc774\ubbf8 \ucd94\uac00\ub41c instance\uc5d0 \ubc30\ud3ec\ud558\ub294 \uac83\ub3c4 \uac00\ub2a5)"}),"\n",(0,s.jsx)(t.p,{children:"\ucc38\uace0 : \uc544\ub798\uc758 \ubaa8\ub4e0 \ud130\ubbf8\ub110 \uc774\ubbf8\uc9c0\uc5d0 \ud45c\uc2dc\ub41c dns name\uacfc instance-id \ub4e4\uc740 \uc774\ubbf8 \ub2e4 destroy \ud574\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub294 \uc815\ubcf4\ub4e4\uc784"}),"\n",(0,s.jsx)(t.h4,{id:"1-juju\uc758-\uad6c\uc870",children:"1. Juju\uc758 \uad6c\uc870"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://blurblah.net/wp-content/uploads/2015/08/juju_architecture.jpg",children:(0,s.jsx)(t.img,{alt:"juju_architecture",src:n(30330).A+"",width:"638",height:"479"})}),"\n<\ucd9c\ucc98 :\xa0",(0,s.jsx)(t.a,{href:"http://www.slideshare.net/LeonardoBorda/leonardo-borda-maas-and-juju-introduction%5C%3E",children:"http://www.slideshare.net/LeonardoBorda/leonardo-borda-maas-and-juju-introduction\\>"})]}),"\n",(0,s.jsx)(t.p,{children:"Juju\ub294 \uc704 \uadf8\ub9bc\ucc98\ub7fc client\uac00 state server\uc5d0 \uc0c1\ud0dc\uac12\uc744 \ucd94\uac00\ud558\uac70\ub098 update \ud558\ub3c4\ub85d \ub418\uc5b4\uc788\uace0 \ud558\uc704\uc758 \ubaa8\ub4e0 machine \ub4e4\uc740 state\uc758 \ubcc0\uacbd\uc5d0 \ub530\ub77c \ud2b9\uc815 \ub3d9\uc791\uc744 \ucc98\ub9ac\ud558\ub3c4\ub85d \ub418\uc5b4\uc788\ub294 \uac83\uc73c\ub85c \ubcf4\uc778\ub2e4. \uc608\ub97c \ub4e4\uc5b4 wordpress\uc640 mysql\uc744 \uc5f0\uacb0\ud558\ub77c\ub294 \uba85\ub839\uc744 client\uc5d0\uc11c \ubcf4\ub0b4\uba74 \ub0b4\ubd80\uc801\uc73c\ub85c event\uac00 \ubc1c\uc0dd\ub418\uace0 wordpress, mysql\uc774 event\uc5d0 \ub9de\ub294 hook\uc744 \uc2e4\ud589\ud574 \uc138\ubd80\uc801\uc778 \ub3d9\uc791\uc744 \ucc98\ub9ac\ud558\uac8c \ub418\uba70 \uadf8 \uacfc\uc815\uc5d0\uc11c\uc758 \uc0c1\ud0dc\uac12\ub4e4\uc740 \ubaa8\ub450 state server\uc5d0 \uc800\uc7a5\ub418\uac70\ub098 \ubcc0\uacbd\ub41c\ub2e4. (State\ub294 Mongo DB\ub85c \uad00\ub9ac\ub418\ub294 \uac83\uc73c\ub85c \ubcf4\uc784)"}),"\n",(0,s.jsx)(t.h4,{id:"2-bootstrap",children:"2. Bootstrap"}),"\n",(0,s.jsx)(t.p,{children:"Juju client \uc124\uce58 \ud6c4 \ub0b4\uac00 \uc0ac\uc6a9\ud558\ub294 cloud \ud658\uacbd (AWS, MS Azure, Openstack, Joyent, GCE, VMWare \ub4f1 \ub300\ubd80\ubd84\uc758 \ud658\uacbd\uc744 \uc9c0\uc6d0\ud55c\ub2e4)\uc5d0 \ub300\ud55c \uc124\uc815\uc744 \ub9c8\uce5c \ud6c4\uc5d0 bootstrap \uba85\ub839\uc744 \ub0b4\ub9ac\uba74 bootstrap instance\ub97c \uc0dd\uc131\ud558\uace0 \ud544\uc694\ud55c tool\ub4e4\uc758 \uc124\uce58, \uc124\uc815\uae4c\uc9c0 \uc9c4\ud589\ud55c\ub2e4. Bootstrap instance\ub294 state server\ub85c\uc11c \ub3d9\uc791\ud558\uac8c \ub41c\ub2e4."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://blurblah.net/wp-content/uploads/2015/08/juju_bootstrap.png",children:(0,s.jsx)(t.img,{alt:"juju_bootstrap",src:n(62557).A+"",width:"682",height:"534"})})}),"\n",(0,s.jsx)(t.p,{children:"Azure\uc758 \uacbd\uc6b0 vnet \uc0dd\uc131 \ud6c4\uc5d0 instance\ub97c \uc0dd\uc131\ud574\uc11c \uc5f0\uacb0\ud558\uac8c \ub418\uace0 hash\uac00 \ud3ec\ud568\ub41c \uac83\uc73c\ub85c \ubcf4\uc774\ub294 \ubb38\uc790\uc5f4\ub85c DNS name\uc744 \uc124\uc815\ud558\ub294 \uac78 \ud655\uc778\ud560 \uc218 \uc788\ub2e4.\xa0\uc0ac\uc2e4 Juju\ub85c \uad00\ub9ac\ud560 \uacbd\uc6b0 DNS name\uc740 \ud06c\uac8c \uc911\uc694\ud55c \uc694\uc18c\ub294 \uc544\ub2cc\ub370 \uc544\ub798\uc758 \uadf8\ub9bc\ucc98\ub7fc state server\uc5d0\uc11c \ubcc4\ub3c4\ub85c \uc77c\ub828\ubc88\ud638(0)\ub098 unit name\uc744 \ubd99\uc774\uace0 \uc788\uc5b4\uc11c client\uc5d0\uc11c\ub294 DNS name\uc774 \uc544\ub2c8\ub77c \uc77c\ub828\ubc88\ud638\ub098 unit name\uc73c\ub85c \ub300\ubd80\ubd84\uc758 \uad00\ub9ac\uac00 \uac00\ub2a5\ud558\ub2e4."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://blurblah.net/wp-content/uploads/2015/08/juju_status_after_bootstrap.png",children:(0,s.jsx)(t.img,{alt:"juju_status_after_bootstrap",src:n(25069).A+"",width:"682",height:"534"})})}),"\n",(0,s.jsx)(t.h4,{id:"3-charm",children:"3. Charm"}),"\n",(0,s.jsx)(t.p,{children:"Juju\uc5d0\uc11c \ubc30\ud3ec\ud558\uace0\uc790 \ud558\ub294 service\ub4e4\uc740 charm\uc774\ub77c\ub294 \uc774\ub984\uc73c\ub85c \uc815\uc758\ub418\uace0 \uad00\ub9ac\ub41c\ub2e4. (Chef\uc5d0\uc11c cookbook\uc774\ub098 recipe\ucc98\ub7fc) Charm\uc758 \uad6c\uc131\uc694\uc18c\ub294 \uc544\ub798\uc640 \uac19\ub2e4."}),"\n",(0,s.jsx)(t.p,{children:"(1) Metadata"}),"\n",(0,s.jsx)(t.p,{children:"(2) Hooks"}),"\n",(0,s.jsx)(t.p,{children:"(3) Custom contents"}),"\n",(0,s.jsx)(t.p,{children:"Metadata\ub294 name, description, relation, configuration option \ub4f1\uc73c\ub85c \uad6c\uc131\uc774 \ub418\ub294\ub370 \uc774 \uc911 \uc911\uc694\ud55c \uac83\uc740 relation\uc774\ub2e4."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://blurblah.net/wp-content/uploads/2015/08/juju_wordpress_metadata.png",children:(0,s.jsx)(t.img,{alt:"juju_wordpress_metadata",src:n(65400).A+"",width:"708",height:"315"})}),"\uc608\ub97c \ub4e4\uc5b4, Wordpress charm\uc758 metadata\ub294 \uc704\uc758 \uadf8\ub9bc\ucc98\ub7fc \uc815\uc758\ub418\uc5b4 \uc788\ub294\ub370 requires\uc640 provides, peers\ub85c \ub41c \ubd80\ubd84\uc774 relation \uc124\uc815\uc774\ub2e4. Relation\uc740 interface, kind, name\uc73c\ub85c \uad6c\uc131\ub418\uc5b4 \uc788\ub294\ub370 \uac01\uac01\uc758 \uc815\uc758\ub294 \uc774\ub807\ub2e4."]}),"\n",(0,s.jsx)(t.p,{children:"Interface : Hook\uc744 \ud1b5\ud574\uc11c \uc815\ubcf4\ub97c \uad50\ud658\ud558\uae30 \uc704\ud55c protocol (\uc9c4\uc9dc interface\uc758 \uc758\ubbf8\ub3c4 \uc788\uc9c0\ub9cc...)"}),"\n",(0,s.jsx)(t.p,{children:"Kind : Relation\uc758 \uc885\ub958\ub85c requirer, provder, peer \uc911 \ud558\ub098\ub97c \uc758\ubbf8\ud558\ub294\ub370 requirer\ub294 \uc774\ub7f0 relation\uc774 \ud544\uc694\ud574, provider\ub294 \uc774\ub7f0 relation\uc744 \ub0b4\uac00 \ud574\uc904\uac8c, peer\ub294 \ud074\ub7ec\uc2a4\ud130\ub9c1 \ud560 \ub54c\ub294 \uc774\ub7f0 \uac78\ub85c \ud558\uc790\ub85c \uc774\ud574\ud558\uba74 \ud3b8\ud560 \uac83 \uac19\ub2e4."}),"\n",(0,s.jsx)(t.p,{children:"Name : identifier\ub85c\uc11c\uc758 \uc5ed\ud560\uc774\uace0 \uc704 wordpress\xa0metadata\uc5d0\uc11c \ubcf4\uba74 name \ud56d\ubaa9\uc758 wordpress, \xa0requires: db: interface: mysql \ud56d\ubaa9\uc758 mysql\uc744 \ubaa8\ub450 name\uc774\ub77c\uace0 \uc0dd\uac01\ud558\uba74 \ub41c\ub2e4."}),"\n",(0,s.jsx)(t.p,{children:"Hook\uc740 \uc704\uc5d0\uc11c\ub3c4 \uc5b8\uae09\ud588\ub4ef\uc774 event\uac00 \ubc1c\uc0dd\ud588\uc744 \ub54c \uc2e4\ud589\ub418\ub294 script\ub85c \uc5b4\ub5a4 \uc5b8\uc5b4\ub85c \ub41c script\ub3c4 \uad00\uacc4\uc5c6\ub2e4\uace0 \uba85\uc2dc\ub418\uc5b4 \uc788\ub2e4. \uadf8\ub7ec\ub2c8\uae4c \ud2b9\uc815 event \ubc1c\uc0dd\uc2dc \uac01 service unit\ub4e4\uc774 \ud574\uc918\uc57c \ud558\ub294 \ub3d9\uc791\uc744 script\ub85c \uc815\uc758\ud558\uba74 \ub418\ub294\ub370 \uba87 \uac1c charm\uc744 \ub458\ub7ec\ubcf4\ub2c8 \ub300\ubd80\ubd84 bash\uc640 python\uc73c\ub85c \uad6c\ud604\ud558\ub294 \uac83\uc73c\ub85c \ubcf4\uc778\ub2e4."}),"\n",(0,s.jsx)(t.h4,{id:"4-deploy",children:"4. Deploy"}),"\n",(0,s.jsx)(t.p,{children:"Bootstrap \ud55c \uc774\ud6c4\uc5d0 \uc704\uc758 charm\uc744 \uac00\uc9c0\uace0 deploy\ud558\ub294 \uacfc\uc815\uc740 \ub2e8\uc21c\ud788 juju deploy <charm name> \ud615\ud0dc\uc758 command\ub9cc \uc2e4\ud589\ud558\uba74 \ub41c\ub2e4. \uc815\ub9d0 \uac04\ub2e8\ud558\ub2e4. \uc2e4\ud589\ud558\uba74 charm\uc774 \uc62c\ub77c\uac08\xa0instance\ub97c \uc0dd\uc131\ud558\uace0 instance \uc0dd\uc131\uc774 \uc644\ub8cc\ub418\uba74 charm\uc5d0 \uc815\uc758\ub41c install hook\uc774 \uc2e4\ud589\ub418\uc11c \ud544\uc694\ud55c tool\uc744 \uc124\uce58\ud558\uac70\ub098 \uc124\uc815\ud558\uac8c \ub41c\ub2e4. \uadf8\ub9ac\uace0 deploy \ud6c4\uc5d0 state server (bootstrap instance)\uc5d0 \uc0c1\ud0dc \uc815\ubcf4\ub97c \uc694\uccad\ud558\uba74 \uc544\ub798\uc640 \uac19\uc740 \ub0b4\uc6a9\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4."}),"\n",(0,s.jsxs)(t.h4,{id:"juju_status_after_deploy5-instance\uc5d0-\uc811\uc18d\ud558\uace0-\uc2f6\ub2e4\uba74",children:[(0,s.jsx)(t.a,{href:"https://blurblah.net/wp-content/uploads/2015/08/juju_status_after_deploy.png",children:(0,s.jsx)(t.img,{alt:"juju_status_after_deploy",src:n(75398).A+"",width:"682",height:"982"})}),"5. Instance\uc5d0 \uc811\uc18d\ud558\uace0 \uc2f6\ub2e4\uba74"]}),"\n",(0,s.jsx)(t.p,{children:"\ub300\ubd80\ubd84\uc758 \uad00\ub9ac\uac00 juju command\ub85c \uac00\ub2a5\ud558\uc9c0\ub9cc \uadf8\ub798\ub3c4 \ubc30\ud3ec\ub41c instance\uc5d0 \uc811\uc18d\ud574\uc57c\ud558\ub294 \uc0c1\ud669\uc774 \uc788\uc744 \uc218 \uc788\ub2e4. \uadf8 \uacbd\uc6b0 juju ssh 0 (0\ubc88\uc740 bootstrap instance\uc5d0 \ub300\ud574\uc11c \ubd99\uc5ec\uc9c4 \ubc88\ud638), juju ssh <unit_name> \ud615\ud0dc\uc758 command\ub97c \uc0ac\uc6a9\ud558\uba74 ssh\ub85c \uc811\uc18d\uc774 \uac00\ub2a5\ud558\ub2e4. \uc2e4\uc81c\ub85c bootstrap instance\ub098 \ub2e4\ub978 instance\ub97c \uc0dd\uc131\ud560 \ub54c juju client\uc5d0\uc11c \uad00\ub9ac\ud558\ub294 public key\ub97c \uc804\uc1a1\ud574\uc11c \uac01 instance (machine)\uc758 authorized_keys\uc5d0 \ucd94\uac00\ud558\uae30 \ub54c\ubb38\uc5d0 juju command\uac00 \uc2eb\ub2e4\uba74"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"ssh -i <private_key_path> ubuntu@<dns_name>\n"})}),"\n",(0,s.jsx)(t.p,{children:"\uc73c\ub85c \uc811\uc18d\ud560 \uc218 \uc788\ub2e4. (Juju client\uac00 \uc124\uce58\ub41c \uc7a5\ube44\uc758 private key\ub294 \uae30\ubcf8\uc801\uc73c\ub85c ~/.juju/ssh \uacbd\ub85c\uc5d0 \uc0dd\uc131\ub428)"}),"\n",(0,s.jsxs)(t.h4,{id:"juju_ssh_using_private_key6-add-relation",children:[(0,s.jsx)(t.a,{href:"https://blurblah.net/wp-content/uploads/2015/08/juju_ssh_using_private_key.png",children:(0,s.jsx)(t.img,{alt:"juju_ssh_using_private_key",src:n(18076).A+"",width:"682",height:"534"})}),"6. Add relation"]}),"\n",(0,s.jsx)(t.p,{children:"4\uc5d0\uc11c\ucc98\ub7fc charm\uc744 deploy \ud558\uace0\ub098\uba74 \ub2e8\uc9c0 \uc124\uce58\ub9cc \ub41c\ub2e4. Wordpress charm\uc758 \uacbd\uc6b0 \uc124\uce58\ud588\uc744 \ub54c wordpress\ub9cc \uc124\uce58\ub418\uace0 mysql \ub4f1\uc758 DB\ub294 \ubcc4\ub3c4\ub85c \uc124\uce58\ub418\uc9c0 \uc54a\ub294\ub2e4. MySQL\uc774 \ud544\uc694\ud558\ub2c8 deploy\ub97c \ud55c\ub2e4\ud574\ub3c4 \uc5ed\uc2dc \uc124\uce58\ub9cc \ub418\uace0 \uac01 service\ub294 \ubcc4\uac1c\uc758 \uac83\uc73c\ub85c \ub0a8\uc544\uc788\uac8c \ub41c\ub2e4. juju add-relation wordpress mysql \uba85\ub839\uc744 \uc2e4\ud589\ud574\ubcf4\uc790. (wordpress, mysql\uc740 charm\uc758 \uc774\ub984\uc774\uc9c0\ub9cc \uc774\ubbf8 \uc124\uce58\ub41c \uac83\uc774\uace0 state server\uc5d0\uc11c \uac01 service unit\uc5d0 \ub300\ud55c \uc0c1\ud0dc\ub97c \uad00\ub9ac\ud558\uace0 \uc788\uc73c\ub2c8 \ubb38\uc81c\uc5c6\ub2e4)"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://blurblah.net/wp-content/uploads/2015/08/juju_db_relation_joined.png",children:(0,s.jsx)(t.img,{alt:"juju_db_relation_joined",src:n(63596).A+"",width:"654",height:"450"})}),(0,s.jsx)(t.a,{href:"https://blurblah.net/wp-content/uploads/2015/08/juju_db_relation_changed.png",children:(0,s.jsx)(t.img,{alt:"juju_db_relation_changed",src:n(88563).A+"",width:"654",height:"450"})}),"\uc704 \uadf8\ub9bc\uc740 \uc21c\uc11c\ub300\ub85c mysql\uacfc wordpress\uac00 \uc124\uce58\ub41c instance\uc5d0\uc11c \uc218\uc9d1\ud55c \ub85c\uadf8\uc778\ub370 add-relation \uba85\ub839 \uc2e4\ud589\uc2dc mysql\uc5d0\uc11c\ub294 db-relation-joined, wordpress\uc5d0\uc11c\ub294 db-relation-changed\uac00 \uc21c\ucc28\uc801\uc73c\ub85c \uc2e4\ud589\ub418\ub294 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4. db-relation-joined\uc640 db-relation-changed\ub294 \uac01\uac01 mysql\uacfc wordpress charm\uc5d0 \uc815\uc758\ub418\uc5b4 \uc788\ub294 hook\uc73c\ub85c add-relation \uba85\ub839\uc774 \uc218\ud589\ub418\uba74 wordpress\uc640 mysql\uc774 provide\ud558\uace0 require\ud558\uace0 \uc788\ub294 \ud56d\ubaa9\uc778 db\uc5d0 \ub300\ud55c relation-joined hook\uc774 \uc2e4\ud589\ub418\ub294\ub370 db-relation-joined hook\uc740 mysql\uc5d0\ub9cc \uc815\uc758\ub418\uc5b4 \uc788\uc73c\ubbc0\ub85c \uba3c\uc800 \uc2e4\ud589\ub41c\ub2e4."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://blurblah.net/wp-content/uploads/2015/08/juju_relation_set.png",children:(0,s.jsx)(t.img,{alt:"juju_relation_set",src:n(63322).A+"",width:"332",height:"136"})}),"db-relation-joined hook\uc758 \ub0b4\uc6a9\uc744 \uc0b4\ud3b4\ubcf4\uba74 \uc704 \uadf8\ub9bc\ucc98\ub7fc relation-set \uba85\ub839\uc744 \ud638\ucd9c\ud574\uc11c db \uc811\uc18d\uc815\ubcf4\ub97c \uc124\uc815\ud558\ub294 \uac83\uc744 \uc54c \uc218 \uc788\ub2e4. \uc704\uc758 \uc811\uc18d\uc815\ubcf4\ub294 state server\uc5d0 \uc800\uc7a5\ub418\uace0\ub098\uba74 \ubcc0\uacbd\uc0ac\ud56d\uc774 \ubc1c\uc0dd\ub418\uc5c8\uae30 \ub54c\ubb38\uc5d0 db-relation-changed hook\uc774 \uc2e4\ud589\ub418\ub294\ub370 \uc774\uac83\uc740 wordpress\uc5d0\ub9cc \uc815\uc758\ub418\uc5b4 \uc788\ub294 hook\uc774\ubbc0\ub85c wordpress\uc5d0\uc11c\ub9cc \uc2e4\ud589\ub418\uba70 state server\uc5d0 \uc800\uc7a5\ub41c db \uc811\uc18d\uc815\ubcf4\ub97c \ubc1b\uc544\uc640\uc11c \uc124\uce58\ub41c wordpress\uc5d0 \uc124\uc815\ud30c\uc77c\ub4e4\uc744 \uc218\uc815\ud558\uac70\ub098 \ub2e4\ub978 \uc870\uc791\uc744 \uac00\ud558\ub3c4\ub85d \uc815\uc758\ub418\uc5b4 \uc788\uc5b4 wordpress\uc640 mysql \uc0ac\uc774\uc758 \uc5f0\uacb0\uc774 \uac00\ub2a5\ud574\uc9c4\ub2e4."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://blurblah.net/wp-content/uploads/2015/08/juju_relation_get.png",children:(0,s.jsx)(t.img,{alt:"juju_relation_get",src:n(99462).A+"",width:"285",height:"79"})})}),"\n",(0,s.jsx)(t.h4,{id:"7-expose",children:"7. Expose"}),"\n",(0,s.jsx)(t.p,{children:"Deploy\uc640 relation\uc758 \uacfc\uc815\uc744 \uac70\uce58\uace0 \ub098\ub354\ub77c\ub3c4 \ubc14\ub85c wordpress\ub97c \uc774\uc6a9\ud560 \uc218\ub294 \uc5c6\ub2e4. Cloud service \ub4e4\uc758 \ud2b9\uc131\uc0c1 \ubcf4\uc548 \ub4f1\uc758 \uc774\uc720\ub85c \ub300\ubd80\ubd84\uc758 port\ub294 \uc5f0\uacb0\uc774 \ub418\uc9c0 \uc54a\ub3c4\ub85d \ub9c9\ud600\uc788\uae30 \ub54c\ubb38\uc5d0 \ud2b9\uc815 port\ub97c \uc5f4\uc5b4\uc8fc\ub294 \uc791\uc5c5\uc774 \ud544\uc694\ud558\ub2e4. \uc704\uc758 \uacfc\uc815\uc73c\ub85c deploy \ud55c \uac83\uc740 wordpress\uc640 mysql \ubfd0\uc774\uace0 wordpress\ub9cc \uc5f4\uba74 \ub418\uae30 \ub54c\ubb38\uc5d0 \uac04\ub2e8\ud558\uac8c"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"juju expose wordpress\n"})}),"\n",(0,s.jsx)(t.p,{children:"\uba85\ub839\ub9cc \uc2e4\ud589\ud558\uace0 \ub098\uba74 \uc57d\uac04\uc758 \uc2dc\uac04 \ud6c4\uc5d0 \uc544\ub798\uc758 \uadf8\ub9bc\ucc98\ub7fc endpoint \uc124\uc815\uc774 \ucd94\uac00\ub41c \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4. (Azure \uae30\uc900)"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://blurblah.net/wp-content/uploads/2015/08/juju_expose.png",children:(0,s.jsx)(t.img,{alt:"juju_expose",src:n(35443).A+"",width:"931",height:"215"})}),"Wordpress\ub098 MySQL charm\uc5d0\uc11c \uc5b4\ub5a4 \ubd80\ubd84\uc774 expose\ub97c \uac00\ub2a5\ud558\uac8c \ud558\ub294\uc9c0 \uc544\uc9c1 \ucc3e\uc9c0 \ubabb\ud588\ub2e4. MySQL\uc744 expose \ud574\ubcf4\ub2c8 status\uc5d0\uc11c exposed flag \uac12\ub9cc false\uc5d0\uc11c true\ub85c \ubc14\ub014 \ubfd0 \uc2e4\uc81c endpoint \uc124\uc815\uc774 \ucd94\uac00\ub418\uc9c0\ub294 \uc54a\ub294\ub370 \uc774 \ubd80\ubd84\uc740 \uc880 \ub354 \uc0b4\ud3b4\ubcfc \ud544\uc694\uac00 \uc788\uc744 \uac83 \uac19\ub2e4."]}),"\n",(0,s.jsx)(t.h4,{id:"8-\ucc38\uace0",children:"8. \ucc38\uace0"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://jujucharms.com/docs/stable/getting-started",children:"https://jujucharms.com/docs/stable/getting-started"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"http://blog.labix.org/2013/06/25/the-heart-of-juju",children:"http://blog.labix.org/2013/06/25/the-heart-of-juju"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"http://askubuntu.com/questions/55179/what-is-the-purpose-of-the-bootstrapping-instance-in-juju",children:"http://askubuntu.com/questions/55179/what-is-the-purpose-of-the-bootstrapping-instance-in-juju"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"http://www.slideshare.net/LeonardoBorda/leonardo-borda-maas-and-juju-introduction",children:"http://www.slideshare.net/LeonardoBorda/leonardo-borda-maas-and-juju-introduction"})})]})}function c(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},30330:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/juju_architecture-6ac08b71c7859e5eda378f901819b870.jpg"},62557:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/juju_bootstrap-d64083add35d671c5f23171450b025f1.png"},88563:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/juju_db_relation_changed-12b34caf88619fe3c41988e02cc92c86.png"},63596:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/juju_db_relation_joined-e0269acda9b667187b6942467dadc91d.png"},35443:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/juju_expose-c8cbe72d5d171dcfd7592aecc645606f.png"},99462:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/juju_relation_get-620046d7aa6bd71392bb968e2f50be87.png"},63322:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/juju_relation_set-a07550cadbb64b5ce573eb8f1eb05573.png"},18076:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/juju_ssh_using_private_key-93e0322912011d64873060a859f601ff.png"},25069:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/juju_status_after_bootstrap-f01c189d32b3d239d281179b238a5217.png"},75398:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/juju_status_after_deploy-4ef179ac0a0b9cf83881de80dc6b1eac.png"},65400:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/juju_wordpress_metadata-dbd4b2c375cf5ce5f5c500d828910d79.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var s=n(96540);const a={},r=s.createContext(a);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);