"use strict";(self.webpackChunkblurblah_github_io=self.webpackChunkblurblah_github_io||[]).push([[96958],{38025:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=r(74848),n=r(28453);const i={title:"\ub355\ub9cc\uc774 \uc7a0\ub4e0 \uc2dc\uac04\uc5d0 - Raspberry pi\ub97c CCTV\ub85c \ud65c\uc6a9\ud558\uae30",date:"2016-03-16",categories:["others"],tags:["camera","cctv","led-off","modprobe","motion","raspberry-pi","v4l2","video"]},a=void 0,s={permalink:"/2016/03/16/wp/\ub355\ub9cc\uc774-\uc7a0\ub4e0-\uc2dc\uac04\uc5d0-raspberry-pi\ub97c-cctv\ub85c-\ud65c\uc6a9\ud558\uae30",source:"@site/blog/wp/2016-03-16-\ub355\ub9cc\uc774-\uc7a0\ub4e0-\uc2dc\uac04\uc5d0-raspberry-pi\ub97c-cctv\ub85c-\ud65c\uc6a9\ud558\uae30.md",title:"\ub355\ub9cc\uc774 \uc7a0\ub4e0 \uc2dc\uac04\uc5d0 - Raspberry pi\ub97c CCTV\ub85c \ud65c\uc6a9\ud558\uae30",description:"Raspberry pi\ub85c \ubb58 \ud574\ubcfc\uae4c \ud558\ub2e4\uac00 \uc694\uc998 \uc9c4\ud589\uc911\uc778 \ud504\ub85c\uc81d\ud2b8\ub3c4 \uc788\uace0 \ud574\uc11c CCTV\ub85c \ud65c\uc6a9\ud574\ubcf4\uae30\ub85c \ud588\ub2e4.",date:"2016-03-16T00:00:00.000Z",formattedDate:"March 16, 2016",tags:[{label:"camera",permalink:"/tags/camera"},{label:"cctv",permalink:"/tags/cctv"},{label:"led-off",permalink:"/tags/led-off"},{label:"modprobe",permalink:"/tags/modprobe"},{label:"motion",permalink:"/tags/motion"},{label:"raspberry-pi",permalink:"/tags/raspberry-pi"},{label:"v4l2",permalink:"/tags/v-4-l-2"},{label:"video",permalink:"/tags/video"}],readingTime:3.93,hasTruncateMarker:!1,authors:[],frontMatter:{title:"\ub355\ub9cc\uc774 \uc7a0\ub4e0 \uc2dc\uac04\uc5d0 - Raspberry pi\ub97c CCTV\ub85c \ud65c\uc6a9\ud558\uae30",date:"2016-03-16",categories:["others"],tags:["camera","cctv","led-off","modprobe","motion","raspberry-pi","v4l2","video"]},unlisted:!1,prevItem:{title:"\ub355\ub9cc\uc774 \uc7a0\ub4e0 \uc2dc\uac04\uc5d0 - python socket\uc73c\ub85c IP \uc5bb\uae30",permalink:"/2016/03/18/wp/\ub355\ub9cc\uc774-\uc7a0\ub4e0-\uc2dc\uac04\uc5d0-python-socket\uc73c\ub85c-ip-\uc5bb\uae30"},nextItem:{title:"\ub355\ub9cc\uc774 \uc7a0\ub4e0 \uc2dc\uac04\uc5d0 - Tell me your IP",permalink:"/2016/03/16/wp/\ub355\ub9cc\uc774-\uc7a0\ub4e0-\uc2dc\uac04\uc5d0-tell-me-your-ip"}},l={authorsImageUrls:[]},p=[{value:"1. Motion \uc0ac\uc6a9",id:"1-motion-\uc0ac\uc6a9",level:4},{value:"2. modprobe",id:"2-modprobe",level:4},{value:"3. LED off",id:"3-led-off",level:4},{value:"4. \uacb0\ub860",id:"4-\uacb0\ub860",level:4}];function d(e){const t={a:"a",h4:"h4",img:"img",p:"p",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Raspberry pi\ub85c \ubb58 \ud574\ubcfc\uae4c \ud558\ub2e4\uac00 \uc694\uc998 \uc9c4\ud589\uc911\uc778 \ud504\ub85c\uc81d\ud2b8\ub3c4 \uc788\uace0 \ud574\uc11c CCTV\ub85c \ud65c\uc6a9\ud574\ubcf4\uae30\ub85c \ud588\ub2e4."}),"\n",(0,o.jsx)(t.p,{children:"\uc5b4\ucc28\ud53c \uce74\uba54\ub77c \ubaa8\ub4c8\uc740 \uc788\uace0 \uae30\ubcf8 \uc81c\uacf5\ub418\ub294 \ud234\ub85c \uc2a4\ud2f8\uc0ac\uc9c4\uc740 \ucc0d\uc5b4\ubcf8 \uc801\uc774 \uc788\uc73c\ub2c8 \uac00\ubccd\uac8c \uc811\uadfc\ud560 \uc218 \uc788\uc744\uac70\ub77c \uc0dd\uac01\ud588\ub2e4."}),"\n",(0,o.jsx)(t.h4,{id:"1-motion-\uc0ac\uc6a9",children:"1. Motion \uc0ac\uc6a9"}),"\n",(0,o.jsx)(t.p,{children:"\uac80\uc0c9\uc744 \ud574\ubcf4\ub2c8 motion\uc774\ub77c\ub294 \ud234\uc744 CCTV\ub85c \ud65c\uc6a9\ud560 \ub54c \ub9ce\uc774 \uc0ac\uc6a9\ud558\ub294 \uac83 \uac19\uc558\ub2e4."}),"\n",(0,o.jsx)(t.p,{children:"MJPEG\uc73c\ub85c \uc2a4\ud2b8\ub9ac\ubc0d \ube44\uc2b7\ud558\uac8c \ud574\uc8fc\uace0 \ubcc4\ub3c4\uc758 \ud074\ub77c\uc774\uc5b8\ud2b8 \uc5c6\uc774 \ube0c\ub77c\uc6b0\uc800\ub85c \uac00\ubccd\uac8c \uc601\uc0c1\ud655\uc778\ub3c4 \uac00\ub2a5\ud55c \uac83 \uac19\uc544\uc11c \uc120\ud0dd."}),"\n",(0,o.jsx)(t.p,{children:"OS\ub85c \ub370\ube44\uc548 \uacc4\uc5f4\uc758 Raspbian\uc744 \uc0ac\uc6a9\ud558\uace0 \uc788\uc73c\ubbc0\ub85c apt-get\uc73c\ub85c \uac04\ub2e8\ud558\uac8c \uc124\uce58\ud560 \uc218 \uc788\uace0 /etc/motion/motion.conf \ud30c\uc77c\uc5d0\uc11c \uac01\uc885 \uc124\uc815\uc744 \ubcc0\uacbd\ud560 \uc218 \uc788\ub2e4."}),"\n",(0,o.jsx)(t.p,{children:"\uc6d0\uaca9\uc73c\ub85c \uc601\uc0c1 \ud655\uc778\uacfc \uc124\uc815\uc744 \uc81c\uc5b4\ud558\uae30 \uc704\ud574 webcam_localhost\uc640 control_localhost\ub97c \ubcc0\uacbd\ud558\uace0 restart\ub97c \ud588\ub294\ub370 (default\ub85c localhost\uc5d0\uc11c\ub9cc \uc811\uadfc \uac00\ub2a5\ud558\ub3c4\ub85d \uc124\uc815\ub418\uc5b4 \uc788\uc74c) \uc601\uc0c1\uc774 \ub098\uc624\uc9c8 \uc54a\uc558\ub2e4."}),"\n",(0,o.jsx)(t.p,{children:"\uc774\uc0c1\ud574\uc11c \uc2dc\uc2a4\ud15c \ub85c\uadf8\ub97c \ud655\uc778\ud574\ubcf4\ub2c8"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://blurblah.net/wp-content/uploads/2016/03/fail_to_open_video_device.png",children:(0,o.jsx)(t.img,{alt:"fail_to_open_video_device",src:r(30136).A+"",width:"682",height:"478"})}),"device\ub97c \uc5f4 \uc218 \uc5c6\ub2e4\uace0 \ud55c\ub2e4."]}),"\n",(0,o.jsx)(t.p,{children:"\uc608\uc804\uc5d0 \uce74\uba54\ub77c \ubaa8\ub4c8 \uc7a5\ucc29\ud558\uace0 raspi-config\uc5d0\uc11c enable \uc124\uc815\ub3c4 \ud574\uc92c\ub294\ub370 \uc2e4\uc81c /dev\uc5d0 \ubcf4\ub2c8 video0\uc774 \uc5c6\uc5c8\uace0 motion\uc758 \uc124\uc815 \ud30c\uc77c\uc740 video capture\ub97c \uc704\ud574 default\ub85c /dev/video0\ub97c \uc77d\ub3c4\ub85d \ub418\uc5b4\uc788\uc5c8\ub2e4."}),"\n",(0,o.jsx)(t.h4,{id:"2-modprobe",children:"2. modprobe"}),"\n",(0,o.jsx)(t.p,{children:"\ub85c\ub529\ub418\uc5b4 \uc788\ub294 \ubaa8\ub4c8\ub4e4\uc744 \uc0b4\ud3b4\ubcf4\uae30\ub85c \ud588\ub2e4."}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://blurblah.net/wp-content/uploads/2016/03/lsmod.png",children:(0,o.jsx)(t.img,{alt:"lsmod",src:r(66549).A+"",width:"682",height:"478"})}),"\uadf8\ub9bc\ucc98\ub7fc \uc774\ub7f0\uc800\ub7f0 \ubaa8\ub4c8\ub4e4\uc740 \ubcf4\uc774\uc9c0\ub9cc video \uad00\ub828\ub41c\uac74 \uc5c6\ub2e4."]}),"\n",(0,o.jsxs)(t.p,{children:["\uadf8\ub798\uc11c \ubb38\uc11c\ub97c \uc880 \ucc3e\uc544\ubcf4\ub2c8 camera\ub294 v4l2 driver\ub97c \uc0ac\uc6a9\ud558\ub3c4\ub85d \ub418\uc5b4\uc788\uace0\xa0(",(0,o.jsx)(t.a,{href:"https://www.raspberrypi.org/documentation/hardware/camera.md",children:"https://www.raspberrypi.org/documentation/hardware/camera.md"}),") \uc0ac\uc6a9\uc911\uc778 raspberry pi\uac00 broadcom\uc758 bcm2835 chip\uc774 \ubc15\ud600 \uc788\uc5b4\uc11c bcm2835-v4l2\ub77c\ub294 \ubaa8\ub4c8\uc744 raspbian\uc5d0 \ub123\uc5b4\ub454\xa0\uac83\uc73c\ub85c \ubcf4\uc778\ub2e4."]}),"\n",(0,o.jsx)(t.p,{children:"modprobe \uba85\ub839\uc73c\ub85c bcm2835-v4l2\ub97c \ub85c\ub529\ud558\uace0 \ub098\uc11c \ud655\uc778\ud574\ubcf4\uba74 \uc544\ub798 \uadf8\ub9bc\ucc98\ub7fc video \uad00\ub828 \ubaa8\ub4c8\uc774 \ub72c\ub2e4."}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://blurblah.net/wp-content/uploads/2016/03/lsmod_after_modprobe.png",children:(0,o.jsx)(t.img,{alt:"lsmod_after_modprobe",src:r(42049).A+"",width:"682",height:"478"})}),"\ubaa8\ub4c8\uc744 \ub85c\ub4dc\ud55c \ud6c4 motion\uc744 restart \ud558\ub2c8 \ubb38\uc81c\uc5c6\uc774 \uc601\uc0c1\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc5c8\ub294\ub370 modprobe\ub294 \uc77c\uc2dc\uc801\uc73c\ub85c \ubaa8\ub4c8\uc744 \uc62c\ub824\uc8fc\ub294 \uac83\uc774\uae30 \ub54c\ubb38\uc5d0 boot \uc774\ud6c4\uc5d0 \ud56d\uc0c1 \uc0ac\uc6a9\ud558\uae30 \uc6d0\ud55c\ub2e4\uba74 /etc/modules \ud30c\uc77c\uc5d0 \ubaa8\ub4c8 \uc774\ub984\uc744 \ucd94\uac00\ud574\uc57c \ud55c\ub2e4."]}),"\n",(0,o.jsx)(t.h4,{id:"3-led-off",children:"3. LED off"}),"\n",(0,o.jsx)(t.p,{children:"Video\uac00 \uc815\uc0c1\uc73c\ub85c \ub098\uc624\ub294\uac74 \ud655\uc778\ud588\ub294\ub370 \uce74\uba54\ub77c \ubaa8\ub4c8\uc5d0 \ub2ec\ub824\uc788\ub294 \uc801\uc0c9 LED\uac00 \ud56d\uc0c1 \ucf1c\uc838\uc788\ub294\uac8c \ub9c8\uc74c\uc5d0 \uac78\ub838\ub2e4."}),"\n",(0,o.jsx)(t.p,{children:"\uc0c1\ub2f9\ud788 \ubc1d\uc544\uc11c \ub208\uc5d0 \uac70\uc2ac\ub9ac\uace0 \uc791\uc9c0\ub9cc \uc4f8\ub370\uc5c6\uc774 \ud30c\uc6cc\ub97c \uc18c\ubaa8\ud558\uae34 \uc2eb\uc73c\ub2c8 \uaebc\ubcf4\uae30\ub85c \ud588\ub2e4."}),"\n",(0,o.jsx)(t.p,{children:"\uad00\ub828 \ubb38\uc11c\uac00 \uc788\uc744 \uac83 \uac19\uc544\uc11c \ucc3e\uc544\ubcf4\ub2c8 \uc5ed\uc2dc..."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://www.raspberrypi.org/documentation/configuration/config-txt.md",children:"https://www.raspberrypi.org/documentation/configuration/config-txt.md"})}),"\n",(0,o.jsx)(t.p,{children:"\ubb38\uc11c\uc5d0 \uc758\ud558\uba74 Raspberry PI\ub294 BIOS\xa0\ub300\uc2e0\xa0/boot/config.txt \ud30c\uc77c\uc5d0\uc11c \uac01\uc885 \uc124\uc815\uc744 \ubcc0\uacbd\ud560 \uc218 \uc788\ub3c4\ub85d \ud574\ub480\ub2e4\uace0 \ud55c\ub2e4."}),"\n",(0,o.jsx)(t.p,{children:"/boot/config.txt\uc5d0 disable_camera_led = 1 \uc744 \ucd94\uac00\ud574\uc8fc\uace0 reboot \ud558\uba74 \uce74\uba54\ub77c\ub294 \ub3d9\uc791\uc911\uc774\uc9c0\ub9cc LED\ub294 \ucf1c\uc9c0\uc9c0 \uc54a\ub294 \uac78 \ud655\uc778\ud560 \uc218 \uc788\ub2e4."}),"\n",(0,o.jsx)(t.h4,{id:"4-\uacb0\ub860",children:"4. \uacb0\ub860"}),"\n",(0,o.jsx)(t.p,{children:"\uacb0\uad6d \ud574\ub193\uace0 \ubcf4\ub2c8 \ub69d\ub69d \ub04a\uc5b4\uc9c0\uae34 \ud558\uc9c0\ub9cc \ud6cc\ub96d\ud55c \ud004\ub9ac\ud2f0\ub97c \uc6d0\ud588\ub358 \uac83\uc740 \uc544\ub2c8\ub2c8\uae4c \uadf8\ub0e5 \ub118\uae30\uae30\ub85c \ud588\uc74c"}),"\n",(0,o.jsx)(t.p,{children:"(framerate \uc870\uc808\ud574\ub3c4 \ubcc4 \ucc28\uc774 \uc5c6\uc5c8\uc74c)"})]})}function c(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},30136:(e,t,r)=>{r.d(t,{A:()=>o});const o=r.p+"assets/images/fail_to_open_video_device-45eda3255f1d92bf72551f31463cc243.png"},66549:(e,t,r)=>{r.d(t,{A:()=>o});const o=r.p+"assets/images/lsmod-b7986d17379b1f16b39dcbd238301bb9.png"},42049:(e,t,r)=>{r.d(t,{A:()=>o});const o=r.p+"assets/images/lsmod_after_modprobe-1ebb8355e1af0bf0f6f99d2e65b85e13.png"},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>s});var o=r(96540);const n={},i=o.createContext(n);function a(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);