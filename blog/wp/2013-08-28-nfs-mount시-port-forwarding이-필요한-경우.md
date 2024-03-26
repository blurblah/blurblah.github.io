---
title: "NFS mount시 port forwarding이 필요한 경우"
date: "2013-08-28"
categories: 
  - "server"
tags: 
  - "mount"
  - "nfs"
  - "port-forwarding"
  - "scp"
---

NFS mount를 하는데 공유기를 사용하거나 하는 특정 환경에서 port forwarding이 필요한 경우가 있다.

(Mount 하고자 하는 경로가 있는 장비를 A, mount point를 지정할  (mount 명령을 실행할) 장비를 B라고 했을 때 A가 특정 환경에 놓인 경우에 해당함)

NFS mount에 대한 프로세스를 확인해보면 (rpcinfo -p), 3가지의 process가 관계되어 있음을 알 수 있는데 portmapper, nfs, mountd이다.

별도의 설정이 가해지지 않았다면 portmapper는 111, nfs는 2049 port가 사용되지만 문제는 mountd.

mountd는 기본적으로 임의의 port를 할당해서 사용하고 (service nfs-kernel-server restart 등으로 restart 해보면 port 번호가 바뀜) mountd의 port 번호를 고정하려면 /etc/services 파일을 수정해야 한다.

/etc/services 파일을 열어보면 mountd에 대한 내용이 없다.

원하는 위치에 mountd xxxxx/tcp와 mountd xxxxx/udp를 추가한 후 nfs-kernel-server를 restart 해보면 설정한 port로 고정됨을 확인할 수 있다.

 

Port forwarding은 111, 2049, xxxxx (mountd 설정 port) 세 가지로 해주면 문제없이 nfs로 mount 가능.

 

**난 왜 mount를 했는가?**

굳이 공유기를 사용하는 환경에서 mount를 하려고 했던 이유가 약 3기가 정도 되는 파일들을 복사하기 위함이었는데

속도가 느려서 파일 압축 후 scp로 전송해보니 scp가 더 빠르다.

파일 복사 등을 이유로 mount 하지는 말아야겠다.
