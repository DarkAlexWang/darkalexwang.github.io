---
title: Deploy Hexo MD Files on GitHub
date: 2015-06-04 21:55:00
tags: [Git,GitHub Pages,Tech,Deploy,Hexo,Deploy]
---
## Modify _config.yml File
默认生成的_config.yml：

~~~
# Deployment
## Docs: http://hexo.io/docs/deployment.html
deploy:
type:
~~~
修改后的_config.yml：
~~~
deploy:
type: git
repo: 对应仓库的SSH地址（可以在GitHub对应的仓库中复制）
branch: 分支（User Pages为master，Project Pages为gh-pages）
~~~
为了能够使Hexo部署到GitHub上，需要安装一个插件：
~~~
$ npm install hexo-deployer-git --save
~~~
然后，执行下列指令即可完成部署：
~~~
$ hexo generate
$ hexo deploy
~~~
之后，可以通过在浏览器键入：username.github.io进行浏览，开心吧~

## Deploy MD and config files on github

# Methond one:


优化部署与管理
1. 概述

Hexo部署到GitHub上的文件，是.md（你的博文）转化之后的.html（静态网页）。因此，当你重装电脑或者想在不同电脑上修改博客时，就不可能了（除非你自己写html o(^▽^)o ）。

其实，Hexo生成的网站文件中有.gitignore文件，因此它的本意也是想我们将Hexo生成的网站文件存放到GitHub上进行管理的（而不是用U盘或者云备份啦(╬▔皿▔)凸）。这样，不仅解决了上述的问题，还可以通过git的版本控制追踪你的博文的修改过程，是极赞的。

但是，如果每一个GitHub Pages都需要创建一个额外的仓库来存放Hexo网站文件，我感觉很麻烦（10个项目需要20个仓库(ˉ▽ˉ；)…）。

所以，我利用了分支！！！

简单地说，每个想建立GitHub Pages的仓库，起码有两个分支，一个用来存放Hexo网站的文件，一个用来发布网站。

下面以我的博客作为例子详细地讲述。
2. 我的博客搭建流程

    创建仓库，CrazyMilk.github.io；
    创建两个分支：master 与 hexo；
    设置hexo为默认分支（因为我们只需要手动管理这个分支上的Hexo网站文件）；
    使用git clone git@github.com:CrazyMilk/CrazyMilk.github.io.git拷贝仓库；
    在本地CrazyMilk.github.io文件夹下通过Git bash依次执行npm install hexo、hexo init、npm install 和 npm install hexo-deployer-git（此时当前分支应显示为hexo）;
    修改_config.yml中的deploy参数，分支应为master；
    依次执行git add .、git commit -m “…”、git push origin hexo提交网站相关的文件；
    执行hexo generate -d生成网站并部署到GitHub上。

这样一来，在GitHub上的CrazyMilk.github.io仓库就有两个分支，一个hexo分支用来存放网站的原始文件，一个master分支用来存放生成的静态网页。完美( •̀ ω •́ )y！
3. 我的博客管理流程
* 日常修改

在本地对博客进行修改（添加新博文、修改样式等等）后，通过下面的流程进行管理：

    依次执行git add .、git commit -m “…”、git push origin hexo指令将改动推送到GitHub（此时当前分支应为hexo）；
    然后才执行hexo generate -d发布网站到master分支上。

虽然两个过程顺序调转一般不会有问题，不过逻辑上这样的顺序是绝对没问题的（例如突然死机要重装了，悲催….的情况，调转顺序就有问题了）。
* 本地资料丢失

当重装电脑之后，或者想在其他电脑上修改博客，可以使用下列步骤：

    使用git clone git@github.com:CrazyMilk/CrazyMilk.github.io.git拷贝仓库（默认分支为hexo）；
    在本地新拷贝的CrazyMilk.github.io文件夹下通过Git bash依次执行下列指令：npm install hexo、npm install、npm install hexo-deployer-git（记得，不需要hexo init这条指令）。

# Methond two:

使用 hexo，很多人的第一个困惑就是，如何保存 README.md 文件。网上的方法是，在
source 目录下存放 README.md 文件。但这还不够，因为在进行 hexo generate 时会把
README.md 渲染成 README.html。

Use `skip_render` command to omit the fils with .md and .yml. This commend by
default use source/ directory.

`skip_render: README.md # 禁止进行渲染的文件`

The file tree under `source/` folder should look like the following:

│  README.md
│
├─categories
│      index.md
│
├─ori_data
│  │  config.yml
│  │
│  ├─categories
│  │      index.md
│  │
│  ├─posts
│  │      2013-02-05-my-blog-in-github.md
│  │      2013-02-06-resolve-goagent-cp65001.m
│  │      2013-03-11-c_stack.md
│  │      2015-05-03-hello-hexo.md
│  │
│  ├─tags
│  │      index.md
│  │
│  └─themes
│      └─next
│              config.yml
│
├─tags
│      index.md
│
└─_posts
2013-02-05-my-blog-in-github.md
2013-02-06-resolve-goagent-cp65001.md
2013-03-11-c_stack.md
2013-03-18-understand_typdef_funp.md
2013-03-24-understand_container_of.md
2015-05-03-hello-hecommend by

The `_config.yml` file should be modified to :

~~~
...
# Directory
source_dir: source
public_dir: public
tag_dir: tags
archive_dir: archives
category_dir: categories
code_dir: downloads/code
i18n_dir: :lang
skip_render: [README.md, ori_data/*, ori_data/posts/*, ori_data/tags/*,
ori_data/categories/*, ori_data/themes/next/*] # 禁止进行渲染的文件
...
~~~
P.S.
* Need to change the `_config.yml` or `_post/` to `config.yml` and `post/`,
    because they will be omitted with `_` prefix.
* After the configuration, we can run `hexo generate` and `hexo deploy`, we can
    cd into `.deploy_git/` directory, and take a look at the following file
    tree.
* After this, you can simply make modification in `source/_posts/` directory
    and then copy the files to `source/ori_data/posts/`.

## Reference
1. [将原始的 .md 文件纳入 hexo
   的版本管理](http://baurine.github.io/2015/05/10/hexo_git.html)
2.
[GitHub Pages + Hexo搭建博客](http://crazymilk.github.io/2015/12/28/GitHub-Pages-Hexo%E6%90%AD%E5%BB%BA%E5%8D%9A%E5%AE%A2/#more)
