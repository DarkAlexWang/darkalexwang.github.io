---
title: set up a Django Project
date: 2016-06-04 22:07:38
tags: [Django,Tech,Project,Python]
---
---
**NOTE**

搬运文章，原创作者:http://joshuablog.herokuapp.com/
Just for study purpose, I don't hold the copyright, if this is affecting anyone, please let me know.

---

## 写在前面

如果用Python写Web的吧，那就不得不提及Django了。我们先借助wiki来了解下吧。

|Django是一个开放源代码的Web应用框架，由Python写成。采用了MVC的软件设计模式，即
|模型M，视图V和控制器C。Django的主要目标是使得开发复杂的、数据库驱动的网站变得简
|单。Django注重组件的重用性和“可插拔性”，敏捷开发和DRY法则（Don’t Repeat
|Yourself）。在Django中Python被普遍使用，甚至包括配置文件和数据模型。—维基百科

上面那段话，我们只需知道Django很好用很快捷就好了。下面我们来看看怎么去搭建一个Django工程。由于操作的时候是在Windows上，所以这里就只写Windows平台了。

## 安装Python

因为Django是基于Python的，所以安装Django之前我们需要先安装好Python，这个有Python的下载地址 。由于Django最新稳定版推荐使用Python3，所以我们就直接下载最新稳定版的python。下载安装后，我们还需要把Python的安装目录和脚本目录添加到环境变量。如下:

|C:\Python34\;C:\Python34\Scripts;

然后我们打开cmd， 输入python

|C:\Users\archerda> python

如果能看见下面这个输出，就说明安装Python成功了。

|C:\Users\archerda>python
|Python 3.4.3 (v3.4.3:9b73f1c3e601, Feb 24 2015, 22:43:06) [MSC v.1600 32 bit (Intel)] on win32
|Type “help”, “copyright”, “credits” or “license” for more information.
|>>>

## 安装Django

安装Django有 2 种方式，第一种是用 python 自带的 pip，另一种是下载压缩包安装。

1. pip方式（推荐）

因为pip放在python目录下的Scripts目录下，所以我们必须先把Scripts文件夹的路径放在环境变量中。然后依次执行以下步骤。

* 用管理员权限打开cmd；
* 执行

|pip install Django

* cmd输出以下语句，安装Django成功

|Installing collected packages: Django
|Successfully installed Django-1.8.3

2. 压缩包方式

先下载压缩包Latest release: Django-1.8.3.tar.gz,下载后放在任意文件夹上，比如

|C:\Django-1.8.3

然后cmd切换到该目录，执行以下命令安装Django

|python setup.py install

以上 2 种方式安装完成后，会生成以下文件夹

|C:\Python34\Lib\site-packages\django

这就是Django的安装目录了。在这里我们需要添加Django环境变量

|C:\Python34\Lib\site-packages;

至此， Django安装完毕。我们可以在cmd检测下。

|C:\Windows\system32> django-admin –version
|1.8.3

## 新建第一个Django工程

先切入到 Python 的工作区间，比如

|E:\Python

然后，用 django-admin 工具来新建工程，如下

|E:\Python> django-admin startproject testdjango

如此，就会在 E:\Python 生成一个 testdjango 文件夹。文件目录及解释如下：

* testdjango 工程文件夹
* testdjango
* __init__.py 表明该目录为一个python包
* settings.py 项目设置文件
* urls.py URL映射管理
* wsgi.py Python Web Server Gateway Interface，是Python应用程序或框架和Web服务器之间的一种接口
* manage.py 对项目进行操作的命令

工程建立完毕。然后激动人心的时刻到了。我们要开始运行这个工程。

* cmd 切换到 testdjango 工程文件夹下。
* 执行

|E:\Python\testdjango> manage.py runserver 127.0.0.1:8080

* cmd 输出

| Performing system checks…
| System check identified no issues (0 silenced).
| You have unapplied migrations; your app may not work properly until they are applied.
| Run ‘python manage.py migrate’ to apply them.
| July 24, 2015 - 10:30:05
| Django version 1.8.3, using settings ‘testdjango.settings’
| Starting development server at http://127.0.0.1:8080/
| Quit the server with CTRL-BREAK.

说明服务器已经成功运行了。

* 访问 http://127.0.0.1:8080/ ， 页面输出

| It worked!
| Congratulations on your first Django-powered page.

至此，第一个Django工程就顺利完工了。

## 最后，总结下

* Django的安装

| 1. pip install Django
| 2. python setup.py install

* App的生成与启动

| django-admin startproject {project_name}

* 启动服务器

| manage.py runserver [[IP:] 端口]

* 用浏览器打开URL

| http://localhost:端口/[函数名]

到这里，第一个Django工程就顺利地搭建了。学习Django的第一课，对比Java的Web工程，我觉得Django还是很有意思的。趁着几天，好好学学Python。

完。
