---
title: "css"
desc: "css基础"
tags: "CSS"
updateTime: "2024-12-19 15:16"
outline: deep
---
#### box-sizing

用来设置width和height具体指的哪个区域的尺寸

- content-box(默认值)
  - 设置width和height为内容区域的尺寸
- border-box
  - 设置width和height为自边框以内的尺寸

box-sizing

改为border-box则会将内边距加入总的长宽，content+padding+border=width/height

默认值是 `box-sizing:content-box`
