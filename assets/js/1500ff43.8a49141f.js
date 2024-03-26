"use strict";(self.webpackChunkblurblah_github_io=self.webpackChunkblurblah_github_io||[]).push([[10702],{37959:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var o=n(74848),t=n(28453);const s={title:"cAdvisor + Prometheus + Grafana for Docker monitoring",date:"2016-11-28",categories:["docker"],tags:["cadvisor","docker-monitoring","docker-\ubaa8\ub2c8\ud130\ub9c1","grafana","prometheus","prometheus-grafana-\uc5f0\ub3d9"]},a=void 0,i={permalink:"/2016/11/28/wp/cadvisor-prometheus-grafana-for-docker-monitoring",source:"@site/blog/wp/2016-11-28-cadvisor-prometheus-grafana-for-docker-monitoring.md",title:"cAdvisor + Prometheus + Grafana for Docker monitoring",description:"\uc774\uc804 \uae00\uc5d0\uc11c docker monitoring\uc744 \ud558\uae30 \uc704\ud574\uc11c cAdvisor\ub97c \uc0ac\uc6a9\ud574\ubd24\ub294\ub370 \uba87\uac00\uc9c0 \ub2e8\uc810\ub4e4 \ub54c\ubb38\uc5d0 \ubc14\ub85c monitoring\uc5d0 \uc0ac\uc6a9\ud558\uae30\uc5d0\ub294 \ubb38\uc81c\uac00 \uc788\uc5c8\ub2e4. \uadf8\ub798\uc11c \ub9ce\uc774 \uc0ac\uc6a9\ud55c\ub2e4\ub294 prometheus\ub97c \uc0ac\uc6a9\ud574\ubcf4\uae30\ub85c \ud588\ub2e4.",date:"2016-11-28T00:00:00.000Z",formattedDate:"November 28, 2016",tags:[{label:"cadvisor",permalink:"/tags/cadvisor"},{label:"docker-monitoring",permalink:"/tags/docker-monitoring"},{label:"docker-\ubaa8\ub2c8\ud130\ub9c1",permalink:"/tags/docker-\ubaa8\ub2c8\ud130\ub9c1"},{label:"grafana",permalink:"/tags/grafana"},{label:"prometheus",permalink:"/tags/prometheus"},{label:"prometheus-grafana-\uc5f0\ub3d9",permalink:"/tags/prometheus-grafana-\uc5f0\ub3d9"}],readingTime:6.445,hasTruncateMarker:!1,authors:[],frontMatter:{title:"cAdvisor + Prometheus + Grafana for Docker monitoring",date:"2016-11-28",categories:["docker"],tags:["cadvisor","docker-monitoring","docker-\ubaa8\ub2c8\ud130\ub9c1","grafana","prometheus","prometheus-grafana-\uc5f0\ub3d9"]},unlisted:!1,prevItem:{title:"Marathon authentication",permalink:"/2016/11/29/wp/marathon-authentication"},nextItem:{title:"Mesos \uae30\ubc18\uc5d0\uc11c\uc758 Docker \ubd80\ud558 \ud14c\uc2a4\ud2b8\uc640 \ubaa8\ub2c8\ud130\ub9c1",permalink:"/2016/11/18/wp/mesos-\uae30\ubc18\uc5d0\uc11c\uc758-docker-\ubd80\ud558-\ud14c\uc2a4\ud2b8\uc640-\ubaa8\ub2c8\ud130\ub9c1"}},c={authorsImageUrls:[]},d=[{value:"1. cAdvisor \uc815\ub9ac",id:"1-cadvisor-\uc815\ub9ac",level:3},{value:"2. Prometheus",id:"2-prometheus",level:3},{value:"3. Prometheus \uc124\uce58\uc640 \uc124\uc815",id:"3-prometheus-\uc124\uce58\uc640-\uc124\uc815",level:3},{value:"4. Prometheus UI",id:"4-prometheus-ui",level:3},{value:"5. Grafana",id:"5-grafana",level:3},{value:"6. Grafana dashboard",id:"6-grafana-dashboard",level:3}];function h(e){const r={a:"a",code:"code",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"http://13.125.231.217/1450",children:"\uc774\uc804 \uae00"}),"\uc5d0\uc11c docker monitoring\uc744 \ud558\uae30 \uc704\ud574\uc11c cAdvisor\ub97c \uc0ac\uc6a9\ud574\ubd24\ub294\ub370 \uba87\uac00\uc9c0 \ub2e8\uc810\ub4e4 \ub54c\ubb38\uc5d0 \ubc14\ub85c monitoring\uc5d0 \uc0ac\uc6a9\ud558\uae30\uc5d0\ub294 \ubb38\uc81c\uac00 \uc788\uc5c8\ub2e4. \uadf8\ub798\uc11c \ub9ce\uc774 \uc0ac\uc6a9\ud55c\ub2e4\ub294 prometheus\ub97c \uc0ac\uc6a9\ud574\ubcf4\uae30\ub85c \ud588\ub2e4."]}),"\n",(0,o.jsx)(r.p,{children:"\xa0"}),"\n",(0,o.jsx)(r.h3,{id:"1-cadvisor-\uc815\ub9ac",children:"1. cAdvisor \uc815\ub9ac"}),"\n",(0,o.jsx)(r.p,{children:"Prometheus\ub97c \uc0ac\uc6a9\ud558\uae30 \uc804\uc5d0 \uba3c\uc800 cAdvisor\ub97c \uc815\ub9ac\ud574\ubcf4\uba74 \uc544\ub798\uc640 \uac19\ub2e4."}),"\n",(0,o.jsx)(r.p,{children:"(1) Container\uac00 \ub3d9\uc791\uc911\uc778 host \uac01\uac01\uc5d0 \uc124\uce58 (\ud074\ub7ec\uc2a4\ud130\ub9c1 \uc548\ub428)"}),"\n",(0,o.jsx)(r.p,{children:"(2) Host\uc640 container\uc758 \uc9c0\ud45c \ubaa8\ub450 \uc218\uc9d1"}),"\n",(0,o.jsx)(r.p,{children:"(3) \uc218\uc9d1\ub41c \uc9c0\ud45c\ub4e4\uc740 /metrics \uacbd\ub85c\uc5d0\uc11c \ud655\uc778 \uac00\ub2a5"}),"\n",(0,o.jsx)(r.p,{children:"\xa0"}),"\n",(0,o.jsx)(r.h3,{id:"2-prometheus",children:"2. Prometheus"}),"\n",(0,o.jsx)(r.p,{children:"Prometheus\ub294 docker container, VM \ub4f1\uc744 \ubaa8\ub2c8\ud130\ub9c1\ud560 \uc218 \uc788\ub294 \ud234\ub85c \uc218\uc9d1\ub418\ub294 \uc9c0\ud45c\ub4e4\uc744 \ub0b4\ubd80\uc5d0 DB\ub85c \ubcf4\uad00\ud558\ub294\ub370 \uc218\uc9d1\ub41c \uc9c0\ud45c\ub4e4\uc744 \ud655\uc778\ud558\uae30 \uc704\ud574 PromQL\uc774\ub77c\ub294 \ucffc\ub9ac\ub97c \uc81c\uacf5\ud558\uba70 \ub300\ub7b5\uc801\uc778 \uad6c\uc870\ub294 \uc544\ub798 \uadf8\ub9bc\uacfc \uac19\ub2e4. Alert\ub3c4 \uac00\ub2a5\ud558\ub2e4."}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"http://13.125.231.217/wp-content/uploads/2016/11/prom_architecture.png",children:(0,o.jsx)(r.img,{alt:"prom_architecture",src:n(21068).A+"",width:"599",height:"317"})}),"\n<\ucd9c\ucc98 :\xa0",(0,o.jsx)(r.a,{href:"https://www.ctl.io/developers/blog/post/monitoring-docker-services-with-prometheus",children:"https://www.ctl.io/developers/blog/post/monitoring-docker-services-with-prometheus"}),">"]}),"\n",(0,o.jsxs)(r.p,{children:['Prometheus\uc5d0\uc11c \uc911\uc694\ud558\uac8c \ubcf8 \uac83\uc740 \uadf8\ub9bc\uc5d0\uc11c\uc758 "scrape metrics"\ub97c \uc5b4\ub5bb\uac8c \ud560 \uac83\uc774\ub0d0\uc600\ub294\ub370 \ub2e4\ud589\ud788 cAdvisor\uc640\uc758 \uc5f0\ub3d9\uc740 prometheus \uc124\uc815 \ud30c\uc77c\uc5d0 cAdvisor\uc758 metrics \uacbd\ub85c\ub97c \uc9c0\uc815\ud574 \uc8fc\ub294 \uac83\uc73c\ub85c \uac04\ub2e8\ud788 \uac00\ub2a5\ud558\uace0 \ubcc4\ub3c4\ub85c ',(0,o.jsx)(r.a,{href:"https://hub.docker.com/r/prom/container-exporter/",children:"container-exporter"}),"\ub3c4 \uc81c\uacf5\ub418\uace0 \uc788\ub2e4. Container exporter\ub97c \uc0ac\uc6a9\ud560 \uacbd\uc6b0 cAdvisor\ucc98\ub7fc container\ub85c \uc62c\ub824\uc918\uc57c \ud558\ub294\ub370 Mesos, Marathon\uc744 \uc0ac\uc6a9\uc911\uc774\ub77c\uba74 Marathon\uc73c\ub85c \uac04\ub2e8\ud788 \uc62c\ub824\uc8fc\uba74 \ub418\uaca0\ub2e4. Container exporter\ub294 cAdvisor\uc640 \uc720\uc0ac\ud558\uac8c \uce21\uc815 \uc9c0\ud45c\ub4e4\uc744 \uc218\uc9d1\ud574\uc11c /metrics \uacbd\ub85c\ub85c export \ud560 \uc218 \uc788\ub294\ub370 cAdvisor\ucc98\ub7fc \uc790\uccb4\uc801\uc73c\ub85c monitoring UI\ub97c \uc81c\uacf5\ud558\uc9c0\ub294 \uc54a\ub294 \uac83 \uac19\ub2e4. cAdvisor\uc640\ub294 \uc218\uc9d1\ud558\ub294 \uc9c0\ud45c\ub4e4\uc774 \ucc28\uc774\uac00 \uc788\ub2e4. Prometheus \uc785\uc7a5\uc5d0\uc11c\ub294 cAdvisor, container exporter \ub458 \uc911\uc5d0 \ubb34\uc5c7\uc774\ub4e0 /metrics \uacbd\ub85c\uc5d0 \uc811\uadfc\ud574\uc11c \uc218\uc9d1\ub41c \ub370\uc774\ud130\ub4e4\uc744 \ub0b4\ubd80\uc5d0 \ubcf4\uad00\ud55c\ub2e4."]}),"\n",(0,o.jsx)(r.p,{children:"\xa0"}),"\n",(0,o.jsx)(r.h3,{id:"3-prometheus-\uc124\uce58\uc640-\uc124\uc815",children:"3. Prometheus \uc124\uce58\uc640 \uc124\uc815"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.strong,{children:"(1) Install"})}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"https://prometheus.io/docs/introduction/install/",children:"Installing \ud398\uc774\uc9c0"}),"\uc5d0 \uae30\uc220\ub41c \ub0b4\uc6a9\uc744 \ubcf4\uba74 release \ub41c \ud30c\uc77c\uc744 \ub2e4\uc6b4\ub85c\ub4dc\ud574\uc11c \uc555\ucd95\uc744 \ud480\uac70\ub098 source\ub97c \ube4c\ub4dc\ud574\uc11c \uc0ac\uc6a9\ud558\uac70\ub098 docker\ub85c \uc62c\ub9ac\uba74 \ub41c\ub2e4. \ub098\uc758 \uacbd\uc6b0\uc5d4 \ubcc4\ub3c4\uc758 VM\uc5d0 \ud30c\uc77c\uc744 \ub2e4\uc6b4\ub85c\ub4dc\ud574\uc11c \uc0ac\uc6a9\ud588\ub294\ub370 linux \ubc30\ud3ec\ud310 \ubcc4\ub85c \ubc84\uc83c\uc774 \ub530\ub85c \uc5c6\uc73c\ubbc0\ub85c \uadf8\ub0e5 linux \uc6a9\uc73c\ub85c \ub418\uc5b4\uc788\ub294 \ud30c\uc77c\uc744 \uc0ac\uc6a9\ud558\uba74 \ub41c\ub2e4. (macOS\ub294 darwin)"]}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.strong,{children:"(2) Configuration"})}),"\n",(0,o.jsx)(r.p,{children:"\ubb38\uc11c\ub4e4\uc744 \ubcf4\uba74 \uc124\uc815\ud30c\uc77c(prometheus.yml)\uc5d0\uc11c \ub2e4\uc591\ud55c \uc124\uc815\uc744 \uc9c0\uc6d0\ud558\uace0 \uc788\ub294\ub370 \uac00\ubccd\uac8c cAdvisor\uc640\uc758 \uc5f0\ub3d9\ub9cc\uc744 \ud574\ubcf4\uace0 \uc2f6\ub2e4\uba74 \uc544\ub798\ucc98\ub7fc scape_configs section\uc758 static_configs > targets \ubd80\ubd84\ub9cc \uc124\uc815\ud574\ub3c4 \uac00\ub2a5\ud558\ub2e4. targets\uc5d0\ub294 cAdvisor\uac00 \ub3d9\uc791\uc911\uc778 host\uc640 port \uc815\ubcf4\ub9cc \ub123\uc5b4\uc8fc\uba74 prometheus\ub294 yml \ud30c\uc77c\uc5d0 \uba85\uc2dc\ub41c\ub300\ub85c \uae30\ubcf8\uc73c\ub85c /metrics \uacbd\ub85c\uc5d0 \uc811\uadfc\ud574\uc11c \uce21\uc815\ub41c \uc9c0\ud45c\ub97c \uac00\uc838\uc628\ub2e4. cAdvisor\uac00 \uc544\ub2c8\ub77c container exporter\ub97c \uc0ac\uc6a9\ud558\uace0\uc790 \ud55c\ub2e4\uba74 targets \ubd80\ubd84\ub9cc \ubcc0\uacbd\ud574\uc8fc\uba74 \ub418\uace0 \ub450\uac00\uc9c0 \ubaa8\ub450 \uc0ac\uc6a9\ud574\ub3c4 \ubb34\ubc29\ud558\uc9c0\ub9cc \uc911\ubcf5\ub418\ub294 \uc9c0\ud45c\uac00 \ub9ce\uace0 cAdvisor\uac00 \ub354 \ub2e4\uc591\ud55c \uc9c0\ud45c\ub97c \uc218\uc9d1\ud55c\ub2e4."}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{children:"scrape_configs:\n  # The job name is added as a label `job=<job_name>` to any timeseries scraped from this config.\n  - job_name: 'mesosphere'\n\n    # Override the global default and scrape targets from this job every 5 seconds.\n    scrape_interval: 5s\n\n    # metrics_path defaults to '/metrics'\n    # scheme defaults to 'http'.\n\n    static_configs:\n      - targets: [\n        'cAdvisor_host1:port1',\n        'cAdvisor_host2:port2',\n        '...',\n        '...'\n      ]\n"})}),"\n",(0,o.jsx)(r.p,{children:"\xa0"}),"\n",(0,o.jsx)(r.h3,{id:"4-prometheus-ui",children:"4. Prometheus UI"}),"\n",(0,o.jsx)(r.p,{children:"Prometheus \uc124\uc815\uc744 \ub9c8\uce58\uace0 prometheus \ud30c\uc77c\uc744 \uc2e4\ud589\ud558\uba74 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c UI\ub97c \ud655\uc778\ud560 \uc218 \uc788\ub294\ub370 cAdvisor\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \uc9c0\ud45c\ub4e4\uc744 \uc120\ud0dd\ud558\uace0 PromQL\uc744 \uc0ac\uc6a9\ud574\uc11c \uc801\uc808\ud788 \ucffc\ub9ac\ud574\uc57c \ud55c\ub2e4."}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.a,{href:"http://13.125.231.217/wp-content/uploads/2016/11/prom_ui.png",children:(0,o.jsx)(r.img,{alt:"prom_ui",src:n(22871).A+"",width:"1552",height:"985"})})}),"\n",(0,o.jsx)(r.p,{children:"\uc2dc\uac04 \uac04\uaca9\uc744 \uc870\uc808\ud560 \uc218 \uc788\uace0 \uc6d0\ud558\ub294 \uadf8\ub798\ud504\ub97c \uacc4\uc18d \ucd94\uac00\ud574\uc11c \ud655\uc778\ud560 \uc218\ub294 \uc788\uc9c0\ub9cc \uadf8\ub798\ud504\uac00 \ub2e8\uc21c\ud558\uace0 cAdvisor\ucc98\ub7fc \ubc14\ub85c \uc0ac\uc6a9\ud558\uae30\uc5d0\ub294 \ubb54\uac00 \ubd80\uc871\ud558\ub2e4. \uc704 \uadf8\ub9bc\uc5d0\ub294 \uc81c\ub300\ub85c \ud45c\ud604\ub418\uc9c0 \uc54a\uc558\uc9c0\ub9cc cAdvisor\uac00 \uc218\uc9d1\ud558\ub294 \ub370\uc774\ud130 \uc911 CPU usage\uc758 \uacbd\uc6b0 CPU core \ubcc4\ub85c (cpu00, cpu01 \ub4f1) \uc0ac\uc6a9\ub7c9\uc744 \uc218\uc9d1\ud558\uace0 \uc788\uc5b4\uc11c \ub370\uc774\ud130\ub97c \uac00\uacf5\ud560 \ud544\uc694\uac00 \uc788\ub294\ub370 \uc774\uac83\uc740 PromQL\ub85c \ud574\uacb0\ud574\uc57c \ud55c\ub2e4."}),"\n",(0,o.jsx)(r.p,{children:"\xa0"}),"\n",(0,o.jsx)(r.h3,{id:"5-grafana",children:"5. Grafana"}),"\n",(0,o.jsxs)(r.p,{children:["Grafana\ub294 \ub2e8\uc21c\ud788 dashboard\ub97c \ud3b8\ud558\uac8c \ub9cc\ub4e4\uace0 \uad00\ub9ac\ud560 \uc218 \uc788\ub294 \ud234\uc778\ub370 data source \uc911 \ud558\ub098\ub85c prometheus\ub97c \uc9c0\uc6d0\ud558\uace0 \uc788\ub2e4. Prometheus\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 ",(0,o.jsx)(r.a,{href:"https://prometheus.io/docs/visualization/grafana/",children:"grafana \uc124\uce58 \ubb38\uc11c"}),"\ub97c \ucc38\uace0\ud574\uc11c \uc124\uce58\ud55c \ud6c4\uc5d0 \uc2e4\ud589\ud558\uace0, \uc544\ub798 \uadf8\ub9bc\ucc98\ub7fc data source \ucd94\uac00\ud558\ub294 \ubd80\ubd84\uc5d0\uc11c prometheus\uc758 \uacbd\ub85c\ub97c \ucd94\uac00\ud558\uba74 \ub41c\ub2e4."]}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.a,{href:"http://13.125.231.217/wp-content/uploads/2016/11/grafana_datasource.png",children:(0,o.jsx)(r.img,{alt:"grafana_datasource",src:n(41142).A+"",width:"478",height:"528"})})}),"\n",(0,o.jsxs)(r.p,{children:["Dashboard\ub97c \uc0dd\uc131\ud558\uba74 \ube48 \ud398\uc774\uc9c0\uac00 \ub098\uc624\ub294\ub370 \ub2e4\uc591\ud55c graph\ub97c \ucd94\uac00\ud558\uace0 \uc124\uc815\ud560 \ub54c graph\ub97c \uadf8\ub9ac\uae30 \uc704\ud55c data\ub294 prometheus\uc5d0\uc11c \uac00\uc838\uc624\uac8c \ub418\ubbc0\ub85c PromQL\uc744 \uc801\uc808\ud788 \uc0ac\uc6a9\ud574\uc918\uc57c \ud55c\ub2e4. (",(0,o.jsx)(r.a,{href:"https://prometheus.io/docs/querying/basics/",children:"PromQL \ubb38\uc11c"})," \ucc38\uc870)"]}),"\n",(0,o.jsx)(r.p,{children:"\xa0"}),"\n",(0,o.jsx)(r.h3,{id:"6-grafana-dashboard",children:"6. Grafana dashboard"}),"\n",(0,o.jsx)(r.p,{children:"Dashboard\ub97c \ub9cc\ub4e4\uace0 \uc218\uc815\ud574\ubcf4\ub2c8\xa0cAdvisor\uc640 prometheus\uc758 \ubaa8\ub2c8\ud130\ub9c1 \uce21\uba74\uc5d0\uc11c\uc758 \ubd80\uc871\ud55c \ubd80\ubd84\ub4e4\uc744\xa0grafana\uac00 \ubaa8\ub450 \ubcf4\uc644\ud560 \uc218 \uc788\ub2e4\ub294 \uc0dd\uac01\uc774 \ub4e0\ub2e4. Host\uc640 container\uc758 \uc0c1\ud0dc\ub97c \ube44\uad50\ud574\ubcf4\uae30\ub3c4 \uc88b\uace0 \uc2dc\uac04 \uac04\uaca9\uc744 \ub2e4\uc591\ud558\uac8c \ubcc0\uacbd\ud560 \uc218 \uc788\uc73c\uba70 \ud6e8\uc52c \ub2e4\uc591\ud55c \uadf8\ub798\ud504\ub97c \uc0ac\uc6a9\ud558\uac70\ub098 \uc544\ub798 \uadf8\ub9bc\ucc98\ub7fc \uc22b\uc790\ub9cc\uc73c\ub85c \ud639\uc740 \ud14c\uc774\ube14\ub85c \ud45c\uc2dc\ud560 \uc218\ub3c4 \uc788\ub2e4."}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.a,{href:"http://13.125.231.217/wp-content/uploads/2016/11/granfana.png",children:(0,o.jsx)(r.img,{alt:"granfana",src:n(7548).A+"",width:"1552",height:"985"})})})]})}function p(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},41142:(e,r,n)=>{n.d(r,{A:()=>o});const o=n.p+"assets/images/grafana_datasource-fb6f346113f3a3ee21da56c3bee0ec93.png"},7548:(e,r,n)=>{n.d(r,{A:()=>o});const o=n.p+"assets/images/granfana-5645cee6b3ac3de896d38416db3fe7ba.png"},21068:(e,r,n)=>{n.d(r,{A:()=>o});const o=n.p+"assets/images/prom_architecture-e93fabf9dff20e5b6a4d34ff5532bde6.png"},22871:(e,r,n)=>{n.d(r,{A:()=>o});const o=n.p+"assets/images/prom_ui-16b59374c7feabf1269c098428665c2b.png"},28453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>i});var o=n(96540);const t={},s=o.createContext(t);function a(e){const r=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),o.createElement(s.Provider,{value:r},e.children)}}}]);