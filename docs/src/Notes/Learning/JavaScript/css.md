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

## flex布局

Flexible Box模型，通常称为flexbox，是一维的布局模型

### Flex布局基础



#### flexbox的两根轴线

主轴和交叉轴

主轴由`flex-direction`定义，另一根轴垂直于它

##### 主轴

`flex-direction`可以取4个值：

- row
- row-reverse
- column
- column-reverse

row就是水平方向，inline(内联)方向

![If flex-direction is set to row the main axis runs along the row in the inline direction.](D:\linshi\uniapp_pic\basics1.png)

column是垂直方向，block(块)方向

![If flex-direction is set to column the main axis runs in the block direction.](D:\linshi\uniapp_pic\basics2.png)

##### 交叉轴

交叉轴垂直于主轴，主轴是`row`或`row-reverse`时，交叉轴是沿着列向下

主轴是`column`或`column-reverse`时，交叉轴是水平方向



#### 起始线和终止线

flex-direction是row

写英文主轴起始线是左边，终止线是右边


写阿拉伯文，起始线是右边，终止线是左边


#### Flex 容器

采用flexbox的区域就叫flex容器，创建flex容器，需要把容器的`display`属性值改为`flex`或者`inline-flex`

容器中的直系子元素会变成**flex元素**。所有CSS属性都会有一个初始值，flex容器中的所有flex元素会有以下行为：

- 元素排列为一行（`flex-direction`属性的初始值是`row`）
- 元素从主轴的起始线开始
- 元素不会在主维度方向拉伸，但是可以缩小
- 元素被拉伸来填充交叉轴的大小
- `flex-basis`属性为`auto`
- `flex-wrap`属性为`nowrap`

这会让你的元素呈线形排列，并且把自己的大小作为主轴上的大小。

如果有太多元素超出容器，它们会溢出而不会换行。

如果一些元素比其他元素高，那么元素会沿交叉轴被拉伸来填满它的大小。


##### 更改flex方向flex-direction

`flex-direction`属性是让我们更改flex元素的排列方向，`flex-direction:row-reverse`是让元素沿行方向显示，但是起始点和终止点位置会更换



#### 用flex-wrap实现多行Flex容器

`flexbox`是一维模型，但可以使我们的`flex`项目应该到多行中

我们应该把每一行看作一个新的`flex`容器

任何空间分布都将在该行上发生，而不影响空间分布的其他行



为实现多行效果，需要给属性`flex-wrap`添加一个属性值`wrap`


项目太大无法完全在一行显示就会换行显示

用nowrap则会缩小适应容器


如果子元素无法缩小则会溢出




#### 简写属性flex-flow

`flex-direction`和`flex-wrap`这两个属性可以简写成属性`flex-flow`

第一个值为flex-direction，第二个值为flex-wrap

```css
.box {
        display: flex;
        flex-flow: row wrap;
      }
```



#### flex 元素上的属性

有三个属性用于更好控制flex元素

- `flex-grow`
- `flex-shrink`
- `flex-basis`

这几个flex属性的作用其实就是改变flex容器中的**可用空间**的行为，也就是avaliable space

可用空间对于flex元素的对齐行为也很重要



假设在 1 个 500px 的容器中，我们有 3 个 100px 宽的元素，那么这 3 个元素需要占 300px 的宽，剩下 200px 的可用空间。在默认情况下，flexbox 的行为会把这 200px 的空间留在最后一个元素的后面。

如果期望这些元素能自动地扩展去填充满剩下的空间，那么我们需要去控制可用空间在这几个元素间如何分配

这就是`flex`属性要做的事



##### 元素属性：flex-basis

`flex-basis`定义元素的空间大小，默认值是`auto`，上面的例子中设定了宽度(width)为100px，所以`flex-basis`的值为100px

如果没有给元素设定尺寸，`flex-basis`的值采用元素内容的尺寸。

解释了：我们只要给flex元素的父元素声明`display:flex`，所有子元素都会排成一行，且自动分配大小



##### 元素属性：flex-grow

`flex-grow` 若被赋值为一个正整数，flex 元素会以 `flex-basis` 为基础，沿主轴方向增长尺寸。

这会使该元素延展，并占据此方向轴上的可用空间（available space）。如果有其他元素也被允许延展，那么他们会各自占据可用空间的一部分。


如果给元素设定`flex-grow`为1，容器中的可用空间会被占据，如果两个元素都是1，则会平分可用空间

flex-grow 属性可以按比例分配空间。如果第一个元素 `flex-grow` 值为 2，其他元素值为 1，则第一个元素将占有 2/4（上例中，即为 200px 中的 100px）, 另外两个元素各占有 1/4（各 50px）。



##### 元素属性：flex-shrink

`flex-grow`是处理flex元素在主轴上增加空间的问题，而`flex-shrink`则是处理flex元素收缩的问题



##### *Flex属性的简写

很少看到`flex-grow`，`flex-shrink`，和 `flex-basis` 属性单独使用

`Flex`简写形式允许按`flex-grow`（延展），`flex-shrink`（收缩），和 `flex-basis`（宽度）顺序书写


第一个数值是 `flex-grow`。赋值为正数的话是让元素增加所占空间

第二个数值是`flex-shrink` — 正数可以让它缩小所占空间，但是只有在 flex 元素总和超出主轴才会生效(现在没有超过主轴)

最后一个数值是 `flex-basis`；flex 元素是在这个基准值的基础上缩放的



预定义简写形式：

- `flex:initial`
- `flex:auto`
- `flex:none`
- `flex:<positive-number>`



> `flex:initial`是把flex元素重置为Flexbox的初始值，相当于`flex:0 1 auto`

在这里 `flex-grow` 的值为 0，所以 flex 元素不会超过它们 `flex-basis` 的尺寸。

`flex-shrink` 的值为 1, 所以可以缩小 flex 元素来防止它们溢出。

`flex-basis` 的值为 `auto`. Flex 元素尺寸可以是在主维度上设置的，也可以是根据内容自动得到的




> `flex:auto`等同于 `flex: 1 1 auto`

和上面的 `flex:initial` 基本相同，但是这种情况下，flex 元素在需要的时候既可以拉伸也可以收缩




> `flex:none`可以把flex元素设置为不可伸缩，等同于`flex:0 0 auto`

元素既不能拉伸或者收缩，但是元素会按具有 `flex-basis: auto` 属性的 flexbox 进行布局



- 常见的`flex:1`或者`flex:2`等等。相当于`flex: 1 1 0` 或者 `flex: 2 1 0`
  - 元素可以在`flex-basis`为0的基础上拉伸




#### 元素间的对齐和空间分配

Flexbox的一个关键特性是能够设置flex元素沿主轴方向和交叉轴方向的对齐方式，以及他们之间的空间分配



##### align-items

`align-items`属性可以使元素在交叉轴方向对齐

- `stretch`
- `flex-start`
- `flex-end`
- `center`



这个属性的初始值为`stretch`，flex元素会默认被拉伸到最高元素的高度

他们被拉伸来填满flex容器——最高的元素定义了容器的高度




设置`align-items`为`flex-start`，使flex元素按照顶部对齐

`flex-end`按flex容器的下部对齐

`center`使它们居中对齐


##### justify-content

`justify-content`属性用来使元素在主轴方向上对齐，主轴方向是通过`flex-direction`设置方向



- `stretch`
- `flex-start`
- `flex-end`
- `center`
- `space-around`
- `space-between`



初始值是`flex-start`，元素从容器的起始线排列


`flex-end`：从终止线开始排列


`center`，在中间排列




可以设置为`space-between`：把元素排列好后的剩余空间拿出来，平均分配到元素之间，所以元素之间间隔相等

或者使用`space-around`，使每个元素的左右空间相等


