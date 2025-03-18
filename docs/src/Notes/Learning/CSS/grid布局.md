---
title: "grid布局"
desc: "grid 布局简要介绍"
tags: "CSS"
updateTime: "2025-3-18 20:23"
outline: deep
---
# Grid 布局



### 网格布局的基本概念

[CSS 网格布局](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_grid_layout)引入了二维网格布局系统，可用于布局页面主要的区域布局或小型组件。



#### 什么是网格？

网格是一组相交的水平线和垂直线，它定义了网格的列和行。

我们可以将网格元素放置在与这些行和列相关的位置上。

网格布局的特点：

- 固定的轨道尺寸或者弹性的轨道尺寸
  - 可以使用固定的轨道尺寸创建网格，比如使用像素单位。
  - 你也可以使用比如百分比或者专门为此目的创建的新单位 `fr`来创建有弹性尺寸的网格。
- 元素位置
  - 可以使用行号、行名或者标定一个网格区域来精确定位元素
  - 网格同时还使用一种算法来控制未给出明确网格位置的元素
- 创建额外的轨道来包含元素
  - 使用网格布局定义一个显式网格
  - 根据规范它会处理你加在网格外面的内容，当必要时它会自动增加行和列，它会尽可能多的容纳所有的列

- 对齐控制
  - 可以控制一旦放置到网格区域中的物体对齐，以及整个网格如何对齐

- 控制重叠内容
  - 多个元素可以放置在网格单元格中，或者区域可以部分地彼此重叠
  - 可以 用CSS 中的**z-index**属性来控制重叠区域显示的优先级




一切是通过在网格容器上创建一个网格来开始的



#### 网格容器

首先要进行元素声明`display:grid`或`display:inline-play`来创建一个网格容器

这个元素的所有直系子元素将成为网格元素



实例：

一个类名为 `wrapper` 的`div` 元素作为容器，它内部有五个子元素

```html
<div class="wrapper">
   <div>One</div>
   <div>Two</div>
   <div>Three</div>
   <div>Four</div>
   <div>Five</div>
</div>
```

将`.wrapper`作为一个网格容器

```css
.wrapper {
  display: grid;
}
```

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230627111930401.png" alt="image-20230627111930401" style="zoom:50%;" />

可以在开发者模式检测<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230627112159281.png" alt="image-20230627112159281" style="zoom: 80%;" />是否是grid

如果想要列子更”网格化“，我们需要列轨道



#### 网格轨道

通过 **grid-template-columns** 和 **grid-template-rows**属性来定义网格中的行和列

这些属性定义了网格的轨道

一个网格轨道就是网格中任意两条线之间的空间

在下图中你可以看到一个高亮的轨道——网格的第一个行轨道

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230627113056396.png" alt="image-20230627113056396" style="zoom:50%;"/>

我可以通过添加 `grid-template-columns` 属性将列轨道添加到之前的例子，然后定义列轨道的大小

现在创建一个网格，包含三个200像素款的列轨道

子元素将在每个网格单元中展开

```html
<div class="wrapper">
   <div>One</div>
   <div>Two</div>
   <div>Three</div>
   <div>Four</div>
   <div>Five</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: 200px 200px 200px;
}
```

![image-20230627140836366](https://ik.imagekit.io/breezecome/blog/css/image-20230627140836366.png)



##### `fr`单位

轨道可以用任何的长度单位定义

网格还引入了另一个长度单位来帮助我们创建灵活的网格轨道

新的`fr`单位代表网格容器中可用空间的一等分

实例：网格定义将创建三个相等宽度的轨道，这些轨道会随着可用空间增长和收缩

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230627141823452.png" alt="image-20230627141823452" style="zoom:50%;" />

###### 不等的大小

可以设置2fr、1fr、1fr

```css
.wrapper {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
}
```

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230627142507380.png" alt="image-20230627142507380" style="zoom:50%;" />

###### 混合绝对尺寸的轨道与 fr 单位轨道

```css
.wrapper {
  display: grid;
  grid-template-columns: 500px 1fr 2fr;
}
```

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230627142721521.png" alt="image-20230627142721521" style="zoom:50%;" />



##### 在轨道清单中使用`repeat()`

有着多轨道的大型网格可使用 `repeat()` 标记来重复部分或整个轨道列表

```css
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

可以写成

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

Repeat 语句也可以用于重复轨道列表中的一部分

比如这个网格

```css
.wrapper {
  display: grid;
  grid-template-columns: 20px repeat(6, 1fr) 20px;
}
```

它起始轨道为 20 像素，接着重复了 6 个`1fr`的轨道，最后再添加了一个 20 像素的轨道



Repeat 语句可以传入一个轨道列表，可以创建一个多轨道模式的重复轨道列表

例子：网格有共计 10 个轨道，1 个`1fr`轨道后面跟着 1 个`2fr`轨道，该模式重复 5 次

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(5, 1fr 2fr);
}
```



##### 隐式和显式网络

创建上文中网格例子的时候，我们用 `grid-template-columns` 属性定义了自己的列轨道

但却让网格按所需的内容创建行，这些行会被创建在隐式网格中

显式网格包含了在 `grid-template-columns` 和 `grid-template-rows` 属性中定义的行和列



如果在网格定义之外又放了一些东西，或者因为内容的数量而需要的更多网格轨道的时候，网格将会在隐式网格中创建行和列

按照默认，这些轨道将自动定义尺寸，所以会根据它里面的内容改变尺寸。



也可以在隐式网格中用 `grid-auto-rows` 和 `grid-auto-columns` 属性来定义一个设置大小尺寸的轨道



实例：用 `grid-auto-rows` 属性来确保在隐式网格中创建的轨道是 200 像素高

```html
<div class="wrapper">
   <div>One</div>
   <div>Two</div>
   <div>Three</div>
   <div>Four</div>
   <div>Five</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 200px;
}
```

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230627145725377.png" alt="image-20230627145725377" style="zoom:50%;" />

这个高是200px



##### 轨道大小和`minmax()`

在设置一个显式的网格或者定义自动创建的行和列的大小时，可以给网格设置一个最小的尺寸，但又要确保他们能扩大到容纳他里面添加的内容

实例，设置行的高度永远不会缩小到 100 像素以下，但如果内容延伸到 300 px高时，网格行高也延伸到 300 px

网格用 minmax() 函数来解决这个问题

实例：用 minmax() 作为 grid-auto-rows 的值

自动创建的行高将会是最小 100 像素，最大为 auto

用 auto 意味着行的尺寸将会根据内容的大小来自动变换：根据本行中最高的单元，把空间扩展到足够容纳该单元

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
}
```

```html
<div class="wrapper">
  <div>One</div>
  <div>Two
    <p>I have some more content in.</p>
    <p>This makes me taller than 100 pixels.</p>
  </div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230627151036135.png" alt="image-20230627151036135" style="zoom:50%;" />



#### 网格线

当我们定义网格时，我们定义的是网格轨道，而不是网格线

Grid 会为我们创建编号的网格线来让我们来定位每一个网格元素

例如下面这个三列两行的网格中，就拥有四条纵向的网格线

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230627151349525.png" alt="image-20230627151349525" style="zoom:50%;" />

网格线的编号顺序取决于文章的书写模式。在从左至右书写的语言中，编号为 1 的网格线位于最左边

在从右至左书写的语言中，编号为 1 的网格线位于最右边。网格线也可以被命名，我们将在稍后的教程中看到如何完成这一操作。



##### 根据网格线定位items（跨轨道放置网格元素）

当放置元素时，我们使用 网格线 定位，而非 网格轨道

使用[`grid-column-start` (en-US)](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start), [`grid-column-end` (en-US)](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end), [`grid-row-start` (en-US)](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start) 和 [`grid-row-end` (en-US)](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-end) 属性

实例：把前两个元素放到了我们的三列网格中



从左至右，第一个元素从列线 1 开始，延伸至列线 4，也就是我们这个例子中最右边的列线

并从行线 1 延伸到行线 3，占据了两个行轨道



第二个元素从列线 1 开始，延伸了一个轨道。因为这是默认行为，所以我不用指定结束线。

并且它从行线 3 到行线 5，跨越了两个行轨道。剩下的元素会自动放到网格剩余的空间中。

```html
<div class="wrapper">
   <div class="box1">One</div>
   <div class="box2">Two</div>
   <div class="box3">Three</div>
   <div class="box4">Four</div>
   <div class="box5">Five</div>
</div>
```

```css
.wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 100px;
}
.box1 {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 3;
}
.box2 {
    grid-column-start: 1;
    grid-row-start: 3;
    grid-row-end: 5;
}
```

<a name="跳转网格线"></a>

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230627153558749.png" alt="image-20230627153558749" style="zoom:50%;" />



#### 网格单元

一个网格单元是在一个网格元素中最小的单位，从概念上来讲其实它和表格的一个单元格很像

一旦一个网格元素被定义在一个父级元素当中，那么他的子级元素将会排列在每个事先定义好的网格单元中。

在下图中，将第一个网格单元作高亮处理。

<img src="https://ik.imagekit.io/breezecome/blog/css/1_grid_cell.png" alt="The first cell of the grid highlighted" style="zoom:50%;" />



#### 网格区域

网格元素可以向行或着列的方向扩展一个或多个单元，并且会创建一个网格区域

网格区域的形状是一个矩形 - 也就是说不可能创建出一个类似于“L”形的网格区域

下图高亮的网格区域扩展了 2 列以及 2 行

<img src="https://ik.imagekit.io/breezecome/blog/css/1_grid_area.png" alt="A grid area" style="zoom:50%;" />



#### 网格间距

在两个网格单元之间的 *网格横向间距* 或 *网格纵向间距* 可使用 [`grid-column-gap` (en-US)](https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap) 和 [`grid-row-gap` (en-US)](https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap) 属性来创建，或者直接使用两个合并的缩写形式 [`grid-gap` (en-US)](https://developer.mozilla.org/en-US/docs/Web/CSS/gap)。

实例：创建一个横向间距为 10px、纵向间距为 1em 的网格元素

```css
.wrapper {
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-column-gap: 10px;
   grid-row-gap: 1em;
}
```

```html
<div class="wrapper">
   <div>One</div>
   <div>Two</div>
   <div>Three</div>
   <div>Four</div>
   <div>Five</div>
</div>
```

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230627154610132.png" alt="image-20230627154610132" style="zoom:50%;" />

间距使用的空间会在 使用弹性长度 fr 的轨道的空间计算前就被留出来，间距的尺寸定义行为和普通轨道一致，但不同的是你不能向其中插入任何内容。

从以基线定位的角度来说，间距就像一条很宽的基线



#### 嵌套网格

一个网格元素也可以成为一个网格容器。

下面实例中：我事先有了一个 3 列的网格元素，并有两个跨轨道的网格

在这个例子中，第一个网格元素含有几个子级元素

当这些元素不是网格容器的直接子级元素时，它们不会参与到网格布局中，并显示为正常的文档流

```html
<div class="wrapper">
    <div class="box box1">
        <div class="nested">a</div>
        <div class="nested">b</div>
        <div class="nested">c</div>
    </div>
    <div class="box box2">Two</div>
    <div class="box box3">Three</div>
    <div class="box box4">Four</div>
    <div class="box box5">Five</div>
</div>
```

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230627161232108.png" alt="image-20230627161232108" style="zoom:50%;" />

如果把 `box1` 设置成 `display: grid` 你可以给它定义轨道然后它也会变成一个网格元素，它的子级元素也会排列在这个新网格元素中

```css
.box1 {
   grid-column-start: 1;
   grid-column-end: 4;
   grid-row-start: 1;
   grid-row-end: 3;
   display: grid;
   grid-template-columns: repeat(3, 1fr);
}
```

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230627165522897.png" alt="image-20230627165522897" style="zoom:50%;" />



##### 没有子网格的嵌套

如果把box1设置为display: grid，它也会变成一个网格。然后，项目就会在这个新的网格上铺开。

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230627164744418.png" alt="image-20230627164744418" style="zoom:50%;" />

```css
.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

```css
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  gap: 3px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.box {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}

.box1 {
  grid-column: 1 / 4;
}

.nested {
  border: 2px solid #ffec99;
  border-radius: 5px;
  background-color: #fff9db;
  padding: 1em;
}

```

嵌套网格和他的父级并没有关系

它并没有从它的父级继承 [`grid-gap` (en-US)](https://developer.mozilla.org/en-US/docs/Web/CSS/gap) 属性，并且嵌套网格里面的网格线没有与父级的网格线对齐



##### 子网络

可以将上面的嵌套网格的例子进行修改，使用 `display: subgrid` 而不是 `display: grid`，然后移除轨道定义。

嵌套网格将会使用父级网格元素中的轨道定义来排列它其中的网格元素

```css
.box1 {
   grid-column-start: 1;
   grid-column-end: 4;
   grid-row-start: 1;
   grid-row-end: 3;
   display: subgrid;
}
```



#### 使用`z-index`控制层级

多个网格项目可以占用同一个网格单位（可以简单理解为单元格），此时，可以使用`z-index`属性来控制重叠项目的堆叠顺序

[网格线编号位置](#跳转网格线)

[网格线标题](#####根据网格线定位items（跨轨道放置网格元素）)

如果我们回到之前根据网格线编号放置网格项目的话，我们可以更改此项来使两个网格项目重叠

```html
<div class="wrapper">
   <div class="box box1">One</div>
   <div class="box box2">Two</div>
   <div class="box box3">Three</div>
   <div class="box box4">Four</div>
   <div class="box box5">Five</div>
</div>
```

```css
.wrapper {
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-auto-rows: 100px;
}
.box1 {
   grid-column-start: 1;
   grid-column-end: 4;
   grid-row-start: 1;
   grid-row-end: 3;
}
.box2 {
   grid-column-start: 1;
   grid-row-start: 2;
   grid-row-end: 4;
}
```

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230627214351141.png" alt="image-20230627214351141" style="zoom:50%;" />

原来的box2是这样的

```css
.box2 {
    grid-column-start: 1;
    grid-row-start: 3;
    grid-row-end: 5;
}
```

网格项目 `box2` 现在覆盖于 `box1` 之上，其覆盖顺序遵循文档流的原始顺序（后来居上）



##### 控制顺序

我们可以在网格项目发生重叠时使用 `z-index` 属性控制重叠的顺序——就像放置网格项目一样

如果我们给 `box2` 设定一个低于 `box1` 的 `z-index` 值的话，`box2` 将会显示在 box1 的下方

```css
.wrapper {
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-auto-rows: 100px;
}
.box1 {
   grid-column-start: 1;
   grid-column-end: 4;
   grid-row-start: 1;
   grid-row-end: 3;
   z-index: 2;
}
.box2 {
   grid-column-start: 1;
   grid-row-start: 2;
   grid-row-end: 4;
   z-index: 1;
}
```

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230627215127398.png" alt="image-20230627215127398" style="zoom:50%;" />

