---
layout: default
url: /blog/
title: Blog
---

# Blog

<ul class="posts-list">
  {{#each posts}}
    <li><a href="{{url}}">{{title}}</a></li>
  {{/each}}
</ul>
