<p align="center" class="has-mb-6">
<img class="not-gallery-item" height="48" src="https://www.royalscholar.cn/images/hu.svg">
<br> A simple, delicate, and modern theme for the static site generator Hexo.
<br>
<a href="https://github.com/humingfeng/hexo-theme-humingfeng">Preview</a> |
<a href="https://github.com/humingfeng/hexo-theme-humingfeng/archive/master.zip">Download</a>
<br>
</p>

![HMF](https://github.com/humingfeng/hexo-theme-humingfeng/blob/master/source/images/show.png)

### :cd: Installation

Download & extract or `git clone` Icarus from GitHub to your blog's theme folder, and that's it!

```shell
git clone https://github.com/humingfeng/hexo-theme-humingfeng.git themes/hexo-theme-humingfeng
```

Once started, HuMingfeng will remind you of any missing dependencies and configuration files.

### :gift: Features

> 说明：本主题在<https://github.com/ppoffice/hexo-theme-icarus> 的基础上进行二次开发
>
>
> **欢迎大家Star、Fork、提意见、喷。**

如果本主题也是你喜欢的菜，请动动手指 [Star](https://github.com/humingfeng/hexo-theme-humingfeng/stargazers) 支持一下


**Extensive Plugin Support**

Icarus includes plentiful search, comment, sharing and other plugins out of the box. You can choose any of them to enrich your
blog experience, or build your own plugin easily referring to the existing Icarus plugins.

Comment plugins

- [Changyan](https://ppoffice.github.io/hexo-theme-icarus/Plugins/Comment/changyan-comment-plugin/)
- [Disqus](https://ppoffice.github.io/hexo-theme-icarus/Plugins/Comment/disqus-comment-plugin/)
- [Facebook](https://ppoffice.github.io/hexo-theme-icarus/Plugins/Comment/facebook-comment-plugin/)
- [Gitment](https://ppoffice.github.io/hexo-theme-icarus/Plugins/Comment/gitment-comment-plugin/)
- [Isso](https://ppoffice.github.io/hexo-theme-icarus/Plugins/Comment/isso-comment-plugin/)
- [LiveRe](https://ppoffice.github.io/hexo-theme-icarus/Plugins/Comment/livere-comment-plugin/)
- [Valine](https://ppoffice.github.io/hexo-theme-icarus/Plugins/Comment/valine-comment-plugin/)

Search plugins

- [Insight Search](https://ppoffice.github.io/hexo-theme-icarus/Plugins/Search/insight-search-plugin/)
- [Google Custom Search Engine](https://ppoffice.github.io/hexo-theme-icarus/Plugins/Search/google-cse-plugin/)
- [Baidu Site Search](https://ppoffice.github.io/hexo-theme-icarus/Plugins/Search/baidu-search-plugin/)

Share plugins

- [AddThis](https://ppoffice.github.io/hexo-theme-icarus/Plugins/Share/addthis-share-plugin/)
- [AddToAny](https://ppoffice.github.io/hexo-theme-icarus/Plugins/Share/addtoany-share-plugin/)
- [Baidu Share](https://ppoffice.github.io/hexo-theme-icarus/Plugins/Share/baidu-share-plugin/)
- [Share.js](https://ppoffice.github.io/hexo-theme-icarus/Plugins/Share/share-js-share-plugin/)
- [ShareThis](https://ppoffice.github.io/hexo-theme-icarus/Plugins/Share/sharethis-share-plugin/)

Donation Buttons

- [Alipay](https://ppoffice.github.io/hexo-theme-icarus/Plugins/Donation/making-money-off-your-blog-with-donation-buttons/#Alipay)
- [Wechat](https://ppoffice.github.io/hexo-theme-icarus/Plugins/Donation/making-money-off-your-blog-with-donation-buttons/#Wechat)
- [Paypal](https://ppoffice.github.io/hexo-theme-icarus/Plugins/Donation/making-money-off-your-blog-with-donation-buttons/#Paypal)
- [Patreon](https://ppoffice.github.io/hexo-theme-icarus/Plugins/Donation/making-money-off-your-blog-with-donation-buttons/#Patreon)

Other plugins

- [Hexo Tag Plugin](https://ppoffice.github.io/hexo-theme-icarus/Configuration/Posts/hexo-built-in-tag-helpers/)
- [lightGallery & Justified Gallery](https://ppoffice.github.io/hexo-theme-icarus/Plugins/General/gallery-plugin/)
- [MathJax](https://ppoffice.github.io/hexo-theme-icarus/Plugins/General/mathjax-plugin/)
- [Site Analytics](https://ppoffice.github.io/hexo-theme-icarus/Plugins/General/site-analytics-plugin/)

**Rich Code Highlight Theme Choices**

Icarus directly import code highlight themes from the [highlight.js](https://highlightjs.org/) package, and makes more than
70 highlight themes available to you.

<table>
    <tr>
        <td><img src="https://ppoffice.github.io/hexo-theme-icarus/gallery/code-highlight/atom-one-light.png"></td>
        <td><img src="https://ppoffice.github.io/hexo-theme-icarus/gallery/code-highlight/monokai.png"></td>
        <td><img src="https://ppoffice.github.io/hexo-theme-icarus/gallery/code-highlight/androidstudio.png"></td>
    </tr>
</table>

**Elastic Theme Configuration**

In addition to the minimalistic and easy-to-understand configuration design, Icarus allows you to set configurations on a
per-page basis with the ability to merge and override partial configurations.

<div>
<table>
    <tr>
        <th>_config.yml</th>
        <th>post.md</th>
    </tr>
    <tr>
        <td>
            <pre>menu:
    Archives: /archives
    Categories: /categories
    Tags: /tags
    About: /about</pre>
        </td>
        <td>
            <pre>title: A Simple Post
menu:
    Go Home: /index.html
---
# Here is some simple markdown.</pre>
        </td>
    </tr>
</table>
</div>

**Responsive Layout**

No matter what modern browsering device your audiences are using, they can always get the best experience because Icarus's responsive
layout across multiple viewpoints.

### :hammer: Development

This project is built with

- Hexo 3.7.1
- Ejs
- Stylus
- Bulma 0.7.2

Please refer to the documentation for Icarus implementation details.

### :tada: Contribute

If you feel like to help us build a better humingfeng, you can

:electric_plug: Write a plugin |
:black_nib: <a href="https://github.com/humingfeng/hexo-theme-humingfeng/new/site/source/_posts">Submit a tutorial</a> |
:triangular_flag_on_post: <a href="https://github.com/humingfeng/hexo-theme-humingfeng/issues/new">Report a bug</a> |
:earth_asia: <a href="https://github.com/humingfeng/hexo-theme-humingfeng/tree/master/languages">Add a translation</a>

### :memo: License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/humingfeng/hexo-theme-humingfeng/blob/master/LICENSE) file for details.
