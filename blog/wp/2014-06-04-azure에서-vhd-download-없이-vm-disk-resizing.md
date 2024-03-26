---
title: "Azure에서 VHD download 없이 VM disk resizing"
date: "2014-06-04"
categories: 
  - "server"
tags: 
  - "azure"
  - "disk"
  - "resizing"
  - "vhd"
  - "vm"
  - "windowsazurediskresizer"
  - "without-download"
---

Azure에서 VM 생성시 disk size가 30GB 밖에 되질 않는다.

운영체제가 올라가는 disk이고 다른 data 들을 위한 공간은 disk를 하나 더 생성해서 붙여도 되겠지만 그럴 경우 linux는 추가로 mount를 해야 하고 내가 원하는 경로로 설정하기 위해서는 다른 작업을 거쳐야 할 수 있다.

이런 경우 운영체제가 올라가 있는 disk 자체를 resizing 할 필요성이 생기는데 (아무리 그래도 사실 30GB는 작다. 왜 최초 VM 생성시에 disk size를 지정할 수 없을까?) MSDN이나 기타 여러 곳의 자료들을 보면 내용이 좀 복잡하다. 보통 이런 것 같다.

1\. VM 삭제

2\. VHD download

3\. VHD resizing (별도의 tool을 이용)

4\. VHD upload

5\. VM 다시 생성

다른 과정이야 그냥 넘어간다 하더라도 download / upload가 걸린다. 30GB 짜리를 다운로드하고 늘려서 다시 업로드를 해야 한다니.

그래서 더 조사를 해봤더니 역시 나와 같은 고민을 하는 사람이 있었고 그 양반이 괜찮은 솔루션을 제시해 놨다.

그 과정은 아래와 같다.

1\. VM shutdown

2\. VM 삭제 (삭제할 때 drive는 유지하는 옵션을 골라야 한다)

3\. VM의 disk 삭제 (삭제할 때 VHD를 유지하는 옵션을 선택한다. 그럼 VHD 파일은 storage에 그대로 남아있게 됨)

4\. [WindowsAzureDiskResizer](https://github.com/maartenba/WindowsAzureDiskResizer)로 VHD resizing (Azure storage에 올라가 있는 그대로 resizing 됨)

5\. Disk 생성 (이제부터는 거꾸로 반복, resizing된 VHD로 disk를 생성한다)

6\. VM 생성 (5의 disk를 선택하고 원래의 VM 내용대로 설정한다)

 

### **결론**

VHD 파일을 분석해서 괜찮은 툴을 만들고 그걸 오픈소스로 공개한 Maarten Balliauw 덕분에 좀 편해졌다.

그래도 VM 삭제하고 다시 생성해야 하는 과정이나 애초에 disk size 선택이 불가능한 부분은 개선이 필요해 보인다.

 

### **참조**

1\. [Expanding an Existing Azure VM System Drive](http://blogs.lessthandot.com/index.php/enterprisedev/cloud/azure/expanding-an-existing-azure-vm-system-drive/) : 여기에 설명된 과정에 백업이 있는데 별로 중요하지 않거나 귀찮다면 skip 해도 무방하다

2\. [Tales from the trenches: resizing a Windows Azure virtual disk the smooth way](http://blog.maartenballiauw.be/post/2013/01/07/Tales-from-the-trenches-resizing-a-Windows-Azure-virtual-disk-the-smooth-way.aspx)
