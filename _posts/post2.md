---
id: 02
title: 'Try Out Codespaces Now'
coverImage: 'https://miro.medium.com/max/1400/1*f-qFtrJ0aF69P2GceZIQMw.png'
date: '2020-05-15T05:35:07.322Z'
author:
  name: Mac Hooper
excerpt: 'This was quite a special experience'
---
You likely have already heard of Codespaces, stuck waiting for your Beta invite? You can use it now, albeit without the ability to open the space directly from Github. How is this you may ask? Hosting your own Codespaces enviroment. Follow the instructions below to find out how!

**Setting up a machine to host the codespaces enviroment.**

You can use your own machine or server if you have one, or in my case as I didn’t want my desktop running non-stop mostly due to noise, I setup a linux based VM on Google Cloud Platform.

![](https://cdn-images-1.medium.com/max/5760/1*AP1agBHk_GwMMyhZ_ayQng.png)

Once this was complete with a nice simple Debian install I allowed Chrome Remote Desktop by install the .deb file, installed XFCE, and pasted in my remote desktop headless code. This allowed me to access my Virtual Machine with a Desktop Enviroment, meaning I could setup and run VSCode.

**Prepping VSCode**

Make sure you have an Azure account, you can get one [here](azure.microsoft.com). Then you install the following plugins on VSCode.

[Codespaces](https://marketplace.visualstudio.com/items?itemName=ms-vsonline.vsonline)

[Azure Account](https://marketplace.visualstudio.com/items?itemName=ms-vscode.azure-account)

Next you sign in to your Azure account using the VSCode extension and select the new Codespaces section from your left hand sidebar it is located above the extensions tab and below the run tab. Within this section you click `Register Self Hosted Codespace` follow the on screen instructions and your Codespace is all setup and ready to be used.

**Using your Codespace**

This is the simple bit, login to your [Codespaces area](https://visualstudio.com/services/visual-studio-codespaces). and you will see your Codespace enviroments listed, you can view all the details by clicking on it. However to get started developing you want to click `Create Codespace` in the top right, give the space a name, link it to a Github repo and choose the specs of the virtual machine. The last option allows you to set the space to auto suspend if left idle. Click create and your Codespace will begin to generate.

![](https://cdn-images-1.medium.com/max/5760/1*f-qFtrJ0aF69P2GceZIQMw.png)

That’s all there is too it, view the post below to see how to enable preferences sync meaning that all of your Codespaces no matter where you open them, from your laptop, iPad or desktop will all have the same themes and extensions installed.

[Unify your devices with the same VSCode themes and Extensions](https://medium.com/@machooper_69036/unify-your-devices-with-the-same-vscode-themes-and-extensions-a9a4f25ac8d7?source=your_stories_page---------------------------)