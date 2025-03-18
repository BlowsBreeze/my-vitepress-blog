---
title: "flex布局"
desc: "flex 布局详细介绍"
tags: "CSS"
updateTime: "2025-3-18 20:42"
outline: deep
---
# Flex布局

小编经验，最经典的 flex 属性，应该是
```css
main {
    display: flex;
    justify-content: center;   // 主轴居中
    align-items: center;       // 交叉轴居中
}
```

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

![If flex-direction is set to row the main axis runs along the row in the inline direction.](https://ik.imagekit.io/breezecome/blog/css/basics1.png)

column是垂直方向，block(块)方向

![If flex-direction is set to column the main axis runs in the block direction.](https://ik.imagekit.io/breezecome/blog/css/basics2.png)

##### 交叉轴

交叉轴垂直于主轴，主轴是`row`或`row-reverse`时，交叉轴是沿着列向下

主轴是`column`或`column-reverse`时，交叉轴是水平方向



#### 起始线和终止线

flex-direction是row

写英文主轴起始线是左边，终止线是右边

![Working in English the start edge is on the left.](https://ik.imagekit.io/breezecome/blog/css/basics5.png)

写阿拉伯文，起始线是右边，终止线是左边

![The start edge in a RTL language is on the right.](https://ik.imagekit.io/breezecome/blog/css/basics6.png)

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

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230612110013492.png" alt="image-20230612110013492" style="zoom:67%;" />

##### 更改flex方向flex-direction

`flex-direction`属性是让我们更改flex元素的排列方向，`flex-direction:row-reverse`是让元素沿行方向显示，但是起始点和终止点位置会更换

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230612110345025.png" alt="image-20230612110345025" style="zoom:67%;" />



#### 用flex-wrap实现多行Flex容器

`flexbox`是一维模型，但可以使我们的`flex`项目应该到多行中

我们应该把每一行看作一个新的`flex`容器

任何空间分布都将在该行上发生，而不影响空间分布的其他行



为实现多行效果，需要给属性`flex-wrap`添加一个属性值`wrap`

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230612110954761.png" alt="image-20230612110954761" style="zoom:67%;" />

项目太大无法完全在一行显示就会换行显示

用nowrap则会缩小适应容器

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230612111125731.png" alt="image-20230612111125731" style="zoom:67%;" />

如果子元素无法缩小则会溢出

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230612111220691.png" alt="image-20230612111220691" style="zoom:67%;" />



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

<img src="https://ik.imagekit.io/breezecome/blog/css/basics7.png" alt="This flex container has available space after laying out the items." style="zoom:80%;" />

如果期望这些元素能自动地扩展去填充满剩下的空间，那么我们需要去控制可用空间在这几个元素间如何分配

这就是`flex`属性要做的事



##### 元素属性：flex-basis

`flex-basis`定义元素的空间大小，默认值是`auto`，上面的例子中设定了宽度(width)为100px，所以`flex-basis`的值为100px

如果没有给元素设定尺寸，`flex-basis`的值采用元素内容的尺寸。

解释了：我们只要给flex元素的父元素声明`display:flex`，所有子元素都会排成一行，且自动分配大小



##### 元素属性：flex-grow

`flex-grow` 若被赋值为一个正整数，flex 元素会以 `flex-basis` 为基础，沿主轴方向增长尺寸。

这会使该元素延展，并占据此方向轴上的可用空间（available space）。如果有其他元素也被允许延展，那么他们会各自占据可用空间的一部分。

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230612114118468.png" alt="image-20230612114118468" style="zoom:67%;" />

如果给元素设定`flex-grow`为1，容器中的可用空间会被占据，如果两个元素都是1，则会平分可用空间

flex-grow 属性可以按比例分配空间。如果第一个元素 `flex-grow` 值为 2，其他元素值为 1，则第一个元素将占有 2/4（上例中，即为 200px 中的 100px）, 另外两个元素各占有 1/4（各 50px）。



##### 元素属性：flex-shrink

`flex-grow`是处理flex元素在主轴上增加空间的问题，而`flex-shrink`则是处理flex元素收缩的问题



##### *Flex属性的简写

很少看到`flex-grow`，`flex-shrink`，和 `flex-basis` 属性单独使用

`Flex`简写形式允许按`flex-grow`（延展），`flex-shrink`（收缩），和 `flex-basis`（宽度）顺序书写

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230612142006158.png" alt="image-20230612142006158" style="zoom:67%;" />

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

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230612143914308.png" alt="image-20230612143914308" style="zoom:50%;" />



> `flex:auto`等同于 `flex: 1 1 auto`

和上面的 `flex:initial` 基本相同，但是这种情况下，flex 元素在需要的时候既可以拉伸也可以收缩

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230612143853719.png" alt="image-20230612143853719" style="zoom:50%;" />



> `flex:none`可以把flex元素设置为不可伸缩，等同于`flex:0 0 auto`

元素既不能拉伸或者收缩，但是元素会按具有 `flex-basis: auto` 属性的 flexbox 进行布局



- 常见的`flex:1`或者`flex:2`等等。相当于`flex: 1 1 0` 或者 `flex: 2 1 0`
  - 元素可以在`flex-basis`为0的基础上拉伸

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230612144728404.png" alt="image-20230612144728404" style="zoom:50%;" />



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

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230612150839424.png" alt="image-20230612150839424" style="zoom:50%;" />



设置`align-items`为`flex-start`，使flex元素按照顶部对齐<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230612151244462.png" alt="image-20230612151244462" style="zoom:50%;" />

`flex-end`按flex容器的下部对齐<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230612151344077.png" alt="image-20230612151344077" style="zoom:50%;" />

`center`使它们居中对齐<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230612151445303.png" alt="image-20230612151445303" style="zoom:50%;" />



##### justify-content

`justify-content`属性用来使元素在主轴方向上对齐，主轴方向是通过`flex-direction`设置方向



- `stretch`
- `flex-start`
- `flex-end`
- `center`
- `space-around`
- `space-between`



初始值是`flex-start`，元素从容器的起始线排列

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230612153636569.png" alt="image-20230612153636569" style="zoom:50%;" align="left"/>

`flex-end`：从终止线开始排列

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230612153703920.png" alt="image-20230612153703920" style="zoom:50%;" align="left"/>

`center`，在中间排列

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230612153746591.png" alt="image-20230612153746591" style="zoom:50%;" align="left"/>



可以设置为`space-between`：把元素排列好后的剩余空间拿出来，平均分配到元素之间，所以元素之间间隔相等<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230612152225850.png" alt="image-20230612152225850" style="zoom:50%;" />

或者使用`space-around`，使每个元素的左右空间相等

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230612152157785.png" alt="image-20230612152157785" style="zoom:50%;" align="left"/>



### Flex 容器中的对齐方式



#### 交叉轴

##### align-self用于对齐单个flex子项

`align-items`属性是给所有flex项目统一设置`align-self`的对齐属性

我们可以给单个 flex 项目明确声明`align-self`属性



- 直接子代组合器
  - `>`组合器选择前一个元素的直接子代节点
  - **语法：**`A > B `
  - **例子：**`ul>li`匹配直接嵌套在`<ul>`元素内的所有`<li>`元素

[CSS选择器之间子组合器(>)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Child_combinator)



例子：flex 容器为 `align-items: flex-start`，这意思是所有的 flex 项目都在交叉轴方向的开始端对齐。

用 `first-child`(第一个元素) 选择器给第一个 flex 项目设置了 `align-self: stretch` ；

另外一个 flex 项目用 selected 的类设置成 `align-self: center` 。

你能试着改变 `align-items` 或者在单个 `align-self` 的值，可以发现这些值是怎么影响对齐的

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230612164438236.png" alt="image-20230612164438236" style="zoom: 67%;" align="left"/>

```html
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div class="selected">Three</div>
  <div>Four</div>
</div>
```



##### 改变主轴方向

目前我们的`flex-direction`是`row`，主轴是水平方向，交叉轴对齐是上至下的垂直方向

<img src="https://ik.imagekit.io/breezecome/blog/css/align4.png" alt="三个项目，第一个对齐到 flex-start，第二个到中心，第三个到 flex-end。在垂直轴上对齐。"  align="left"/>

当`flex-direction`是`column`，`align-items`和`align-self`对齐的flex项目则是水平方向从左往右

<img src="https://ik.imagekit.io/breezecome/blog/css/align5.png" alt="三个项目，第一个对齐到 flex-start，第二个到中心，第三个到 flex-end。在水平轴上对齐。"  align="left"/>

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230612165802544.png" alt="image-20230612165802544" style="zoom:67%;" />

```html
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div class="selected">Three</div>
  <div>Four</div>
</div>
```



#### 轴对齐内容——align-content属性

前文是对 flex 容器内的 flex 项目或者单个 flex 项目进行对齐操作

如果有换行的多条 flex 项目的 flex 容器，可以用`align-content`来控制每行之间的空间分配



要使用`align-content`生效，flex容器的height要大于flex项的高度



`align-content`属性值：

- `align-content:flex-start`
- `align-content:flex-end`
- `align-content:center`
- `align-content:space-between`
- `align-content:space-around`
- `align-content:stretch`
- `align-content:space-evenly`（没有在 Flexbox 特性中定义）

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230612171455463.png" alt="image-20230612171455463" style="zoom: 50%;" />

举个例子

```css
.box {
  display: flex;
  flex-wrap: wrap;
  height: 400px;
  align-content: space-evenly;
}
```

```html
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
</div>
```

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230612171611997.png" alt="image-20230612171611997" style="zoom:50%;" />

```css
.box {
  display: flex;
  flex-wrap: wrap;
  height: 400px;
  align-content: space-around;
}
```

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230612171646144.png" alt="image-20230612171646144" style="zoom:50%;" />



更改`flex-direction`为`column`

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230612172802450.png" alt="image-20230612172802450" style="zoom:50%;" />

```css
.box {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 500px;
  height: 400px;
  align-content: space-between;
}
```

```html
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
</div>
```



#### 对齐主轴内容

`align-items`和`align-content`是flex项目关于交叉轴上的对齐

只有一个属性`justify-content`是用于主轴上的对齐

用`justify-content`这个属性的时候，我们只控制主轴显示出的flex多余空间



我们开始定义`display:flex`，flex水平排队从容器的初始端显示

`justify-content`的初始值是`flex-start`，其他多余的空间都会显示在flex项目的后面

![Three items, each 100 pixels wide in a 500 pixel container. The available space is at the end of the items.](https://ik.imagekit.io/breezecome/blog/css/align6.png)

`justify-content`属性和`align-content`有一样的属性值

- `flex-start`
- `flex-end`
- `center`
- `space-between`
- `space-around`
- `stretch`
- `space-enenly`



`justify-content`的值为`space-between`，显示完flex项目后可用空间分配在flex项目的水平方向

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230613101934485.png" alt="image-20230613101934485" style="zoom:67%;" />

如果主轴方向`flex-direction`设置成`column`，那么`justify-content`分配的空间是纵向的分配

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230613102212196.png" alt="image-20230613102212196" style="zoom: 50%;" />



##### 对齐和书写模式

`flex-start`和`flex-end`是受书写模式影响的，比如英文和阿拉伯文

将`direction`属性设置成`rtl`强行让flex项目从右往左排列

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230613103126352.png" alt="image-20230613103126352" style="zoom:50%;" />

直接整个翻转

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230613103158122.png" alt="image-20230613103158122" style="zoom:50%;" />

没用`rtl`就是这样



#### 对齐和 flex-direction

`row-reverse`是更换起始点和终止点，`column-reverse`也一样

只要记住reverse是更换起始点和终止点即可



下面例子是`flex-direction:row-reverse`和`justify-content:flex-end`

书写模式从左到右的语言，弹性项目会对齐到左边

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230613103944971.png" alt="image-20230613103944971" style="zoom:50%;" />

`flex-direction:row`时，弹性盒子会对齐到右边

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230613104003434.png" alt="image-20230613104003434" style="zoom:50%;" />



#### 使用自动的外边距在主轴上对齐

想要处理个别弹性项目在主轴上的对齐，并没有`justify-items`和`justify-self`属性可以用

这时候我们可以用自动外边距来处理弹性项目的分开对齐



一个常见的案例是导航栏，一些重要项目右对齐，而一组其他主要项目左对齐。你可能会想，这个时候就需要一个 `justify-self` 属性。但是下面的情况，如图所示，有 3 个项目在左边，2 个在右边。假设可以在项目 d 上设置 `justify-self` 的话，那么跟在后面的项目 e 的对齐方式也会发生改变。可

能这正是我们想要的效果，但某些时候并不是

![Five items, in two groups. Three on the left and two on the right.](https://ik.imagekit.io/breezecome/blog/css/align7.png)



另一个**方法**就是吧项目d的`margin-left`属性设置成`auto`，自动的外边距会占据所有的剩余空间

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230613110031524.png" alt="image-20230613110031524" style="zoom:50%;" />

把`push`类加到其他上看看效果，平分了剩余空间

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230613105119718.png" alt="image-20230613105119718" style="zoom:50%;" />



### Flex布局的排序方式

#### 反转项目显示

就是`flex-direction`的4个属性

- `row`
- `row-reverse`
- `column`
- `column-reverse`



#### order属性

使用[`order`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/order) 属性指定单个项目并更改其在视觉顺序中的显示位置

为项目分配代表它组的整数

按照该整数(最低的值)首先按照视觉顺序放置项目



例子：5个条目这样分配

- Source item 1: `order: 2`
- Source item 2: `order: 3`
- Source item 3: `order: 1`
- Source item 4: `order: 3`
- Source item 5: `order: 1`

项目将按以下顺序显示

- Source item 3: `order: 1`
- Source item 5: `order: 1`
- Source item 1: `order: 2`
- Source item 2: `order: 3`
- Source item 4: `order: 3`

<img src="https://ik.imagekit.io/breezecome/blog/css/order-property.png" alt="Items have a number showing their source order which has been rearranged." style="zoom:50%;" />

弹性项目默认 `order` 值为 `0`, 因此整数值大于 0 的项目，将会显示在那些未指定 `order` 值的项目之后

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230613113743200.png" alt="image-20230613113743200" style="zoom:50%;" />

`order : -1`可以显示在最上面



### 控制Flex子元素在主轴上的比例

探索应用于弹性（flex）元素的三个属性，它们能使我们在主轴方向上控制弹性元素的尺寸和伸缩性——[`flex-grow`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-grow)、[`flex-shrink`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-shrink) 和 [`flex-basis`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-basis)

了解这些属性的伸缩是掌握弹性盒子（flexbox）的关键



- `flex-grow`：该元素获得（伸张）多少正可用空间（positive free space）？
- `flex-shrink`：该元素要消除（收缩）多少负可用空间（negative free space）？
- `flex-basis`：在该元素未伸张和收缩之前，它的大小是多少？



简写属性 [`flex`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex) 表达

```css
.item {
  flex: 2 1 auto;
}
```



#### 作用于主轴的重要概念

了解flex属性在主轴上的控制比率，涉及弹性元素在任何伸缩之前的自然尺寸以及可用空间(free space)



##### 弹性元素(flex item)的尺寸

为了计算出有多少可用空间能用于放置弹性元素，浏览器必须知道这个元素有多大

在 CSS 中还有 [`min-content`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/min-content) 和 [`max-content`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/max-content) 这两个概念；这两个关键字可以用来代替[长度单位](https://developer.mozilla.org/zh-CN/docs/Web/CSS/length)。

例子：

第一段设置了 `min-content` 的宽度。在支持这个关键字的浏览器你可以看见文本已尽可能抓住机会来自动换行，使之变得尽可能小且没有溢出。这就是该字符串的 `min-content` 大小。本质上讲，字符串中**最长的单词**决定了大小。

第二段设置了 `max-content` 值，其与前者相反。它会变得尽可能大，没有自动换行的机会。如果容器太窄，它就会溢出其自身的盒子。

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230613141810540.png" alt="image-20230613141810540" style="zoom:50%;" />

记住这种行为，以及 `min-content` 和 `max-content` 所产生的影响，我们将在后文中探索 `flex-grow` 和 `flex-shrink`



##### 正负可用空间

我们需要理解**正负可用空间**（positive and negative free space）的概念。当一个弹性容器有正可用空间时，它就有更多的空间用于在容器内显示弹性元素。

比如说，如果我们有 500px 宽的容器，[`flex-direction`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-direction) 属性值为 `row`，三个 100px 宽的弹性元素，那么我们还有 200px 的正可用空间，如果我们想要填充整个容器，则可将其分配到元素中。

<img src="https://ik.imagekit.io/breezecome/blog/css/basics7-1686637614593-5.png" alt="该图像展示了在元素显示后剩余的空间。" style="zoom: 80%;" />

当弹性元素的自然尺寸加起来比弹性容器内的可用空间大时，我们产生了负可用空间。比如我们有一个像上面那样的 500px 宽的容器，但是三个弹性元素每个都为 200px 宽，那我们就一共需要 600px 宽，因此就有了 100px 的负可用空间。这可以从弹性元素中删除以使其能适应容器。

<img src="https://ik.imagekit.io/breezecome/blog/css/ratios1.png" alt="元素从容器中溢出" style="zoom: 80%;" />

#### flex-basis 属性

[`flex-basis`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-basis) 属性在任何空间分配发生之前初始化弹性元素的尺寸

此属性的初始值为 `auto`。如果 `flex-basis` 设置为 `auto`，浏览器会先检查元素的主尺寸是否设置了绝对值再计算出它们的初始值。比如说你已经给你的元素设置了 200px 的宽，则 200px 就是这个元素的 `flex-basis`。

如果你的元素为自动调整大小，则 `auto` 会解析为其内容的大小。

此时你所熟知的 `min-content` 和 `max-content` 大小会变得有用，弹性盒子会将元素的 `max-content` 大小作为 `flex-basis`。

例子：

在这个示例中我们创建了一些固定的盒子，它们的 `flex-grow` 和`flex-shrink` 都设置为 `0`

第一个元素，显式地设置其宽度为 150px，作为主尺寸，即设置 `flex-basis` 为 150px，而另外两个元素没有设置宽度而是根据它们内容的宽度设置尺寸

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230613143637060.png" alt="image-20230613143637060" style="zoom:67%;" />

除了 `auto` 关键字以外，你还可以使用 `content` 关键字作为 `flex-basis` 的值。这会导致即使元素设置了宽度，`flex-basis` 还是会根据内容大小进行设置

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230613144011322.png" alt="image-20230613144011322" style="zoom:67%;" />



可用通过设置 flex-basis 为 `auto` 并确保你的元素没有设置宽度，它能自动调整大小

空间分配时，如果你想要弹性盒子完全忽略元素的尺寸就需要设置 `flex-basis` 为 `0`

这显式地说明弹性盒子可用抢占所有空间，并按比例进行分配



#### flex-grow 属性

[`flex-grow`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-grow) 属性指定了**弹性增长因子**（flex grow factor）

决定了在分配正可用空间时，弹性元素相对于弹性容器中的其余弹性元素的增长程度

如果你所有的元素都设置了相同的 `flex-grow` 属性值，那么空间将会在它们之间平均分配

如果你想要这种情形，通常你需要使用 `1` 作为值

如果 flex-grow 的值全部相同，并且在弹性容器中还有正可用空间，那么它就会被平均地分配给所有元素



###### 结合`flex-grow`和`flex-basis`

 `flex-grow` 和 `flex-basis` 会相互影响



`flex:1 1 auto;`



这个例子中设置 `flex-basis` 的值为 `auto` 且没有设置它们的宽，因此它们是自动调整大小的。这意味着弹性盒子的大小取决于元素的 `max-content` 大小。

在布局完元素之后，弹性容器中还有一些正可用空间，展示在这幅图片的阴影区域中：

![图像使用阴影区域展示了正可用空间](https://ik.imagekit.io/breezecome/blog/css/ratios2.png)

使用与内容大小相等的`flex-basis`，然后从总可用空间(弹性容器的宽度中)减去可用的分配空间(如上图a b hello)的空间

剩余空间再平均分配

![在元素之间分配的正空间](https://ik.imagekit.io/breezecome/blog/css/ratios3.png)

元素较大的总空间就较大



如果想要三个同样尺寸的元素就用`flex: 1 1 0;`

此时元素的尺寸计算值是 0——所有空间都用来争夺

并且所有元素具有相同的 `flex-grow` 值，它们每个都获得相等的空间分配。

最终结果是三个等宽的可伸缩元素。

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230613164347734.png" alt="image-20230613164347734" style="zoom:67%;" />



##### 为元素设置不同的 flex-grow 因子

我们能够通过分配不同的 `flex-grow` 值来进一步控制我们单个元素的大小。

如果我们设置 `flex-basis` 值为 `0` 则所用空间都可以被分配，我们可以给每个弹性元素分配不同的 `flex-grow` 因子。



例子：

- 设置第一个元素的值为 `1`。
- 设置第二个元素的值为 `1`。
- 设置第三个元素的值为 `2`。

`flex-basis` 值为 `0` 意味着可用空间会根据以下规则分配。

我们需要将弹性增长因子相加，然后将弹性容器的正可用空间总量除以该值，在这个例子中为 4。

而后我们就可以根据每一个的值分配空间——第一个元素得到一个单位、第二个元素得到一个单位、第三个元素得到二个单位。

也就是说第三个元素是第一个和第二个元素的两倍。

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230613165625730.png" alt="image-20230613165625730" style="zoom:67%;" />



#### flex-shrink 属性

[`flex-shrink`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-shrink) 属性指定了**弹性收缩因子**（flex shrink factor），它确定在分配负可用空间时，弹性元素相对于弹性容器中其余弹性元素收缩的程度。

 `flex-grow` 用于添加可用空间，而 `flex-shrink` 减少空间来使盒子适应它们的容器而不溢出。

例子：

弹性容器有三个元素，我们已经给它们每一个设置了 200px 的宽度，并且设置容器为 500px 宽。

设置 `flex-shrink` 为 `0` 的元素不允许收缩，以使它们溢出了盒子

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230613194034527.png" alt="image-20230613194034527" style="zoom:67%;" />

改变`flex-shrink`值为1时，每个元素都收缩了同样大小的量

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230613194139664.png" alt="image-20230613194139664" style="zoom:67%;" />

就变的比他们初始宽度还小



##### 结合`flex-shrink`和`flex-basis`

`flex-shrink` 和 `flex-grow`作用效果都很好，但它们并不完全相同

1.

> “注意：当分配负空间时，弹性收缩因子乘以弹性元素的基本尺寸。
>
> 这会根据元素能够缩小的比例分配负空间。
>
> 例如，在较大的元素明显缩小之前，较小的子元素不会缩小到 0。”

2.负可用空间消除期间弹性盒子会阻止小的元素缩小到 0。

这些元素会以 `min-content` 的大小进行铺设——这个大小是它们利用任何可以利用的自动换行机会后所变成的。

例子：

在 `flex-basis` 解析为内容大小的位置你会看到 `min-content` 的铺设。如果你改变弹性容器的宽度——比如增加到 700px 宽，再减少弹性元素的宽度，你会看到前两个元素将换行，但是它们绝不会小于 `min-content` 的大小。随着盒子变得越来越小，第三个元素随后从空间中溢出。

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230613200621743.png" alt="image-20230613200621743" style="zoom:67%;" />

像这样溢出

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230613200654058.png" alt="image-20230613200654058" style="zoom:50%;" />

正常会换行

在实践中，收缩行为会倾向于给你合理的结果。你通常不希望自己的内容完全消失，或者文本框比自己的最小内容要小，因此上述规则对于需要缩小以适应容器的内容的合理行为而言是有意义的。



##### 给元素设置不同的`flex-shrink`因子

在 `flex-grow` 值相同的情形下，你可以给弹性元素设置不同的 `flex-shrink` 因子。

假如你想让一个元素比它的兄弟元素收缩的更快或更慢，或者不再收缩，这会改变它的默认行为。

例子：

第一个元素设置 `flex-shrink` 的值为 1、第二个为 `0`（因此它将不会收缩）、第三个为 `4`。

第三个元素比第一个收缩的更快。

任意设置不同的值——你可以给 `flex-grow` 使用小数或者大一点的数。选择对于你来说任意合理的数。（布局都不会变）

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230613201616826.png" alt="image-20230613201616826" style="zoom:67%;" />

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230613201718710.png" alt="image-20230613201718710" style="zoom:50%;" />



#### 掌握弹性元素的大小

真正理解弹性元素如何工作的关键是理解有多少东西参与影响弹性元素



##### 什么设置了元素的基本大小

1. `flex-basis` 设置为 `auto`，那么元素设置了宽度吗？如果设置了，元素的大小将会基于设置的宽度
2. `flex-basis` 设为了 `auto` 或 `content`（在支持的浏览器中）? 如果设置了，元素的大小为原始大小
3. `flex-basis` 是不为 `0` 的长度单位吗？如果是这样，那这就是元素的大小。
4. `flex-basis` 设为了 `0`？如果是这样，则**元素的大小**不在空间分配计算的考虑之内。



##### 我们有可用空间吗？

元素没有正可用空间就不会增长，没有负可用空间就不会缩小



1. 如果我们把所有元素的宽度相加（如果在列方向工作则为高度），总和是否小于容器的总宽度（或高度）？如果是这样，那么你有正可用空间，并且 `flex-grow` 会发挥作用。
2. 如果我们把所有的元素的宽度相加（如果在列方向工作则为高度），总和是否大于容器的总宽度（或高度）？如果是这样，那么你有负可用空间，并且 `flex-shrink` 会发挥作用。



##### 分配空间的其他方式

如果我们不想将空间添加到元素中，记住你可以在弹性容器中使用指南中所描述的对准属性来处理元素之间或元素周围的空闲空间。

[`justify-content`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content) 属性能够在元素之间或元素周围分配空闲空间

还可以在弹性元素上使用自动边距（auto margin）来吸收空间并在元素之间创建间距



### 包装 Flex 布局中的元素

Flexbox为一维布局，那么只能设计为行或者设计为列

Flex拥有一种将 flex 元素包裹在新的一行内的特性



#### 把物件包装起来

[`flex-wrap`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-wrap) 属性的初始值是`nowrap`

如果你有一组的对其容器而言太宽的弹性物件，它们就会溢出

如果你想要一旦它们变得太宽就换行，你必须给 `flex-wrap` 属性添加`wrap`值，或者，用`row wrap` 或 `column wrap` 值作用于[`flex-flow`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-flow)的速写



例子：

有 10 个`160px`的`flex-basis`物件，它们都具备伸展和收缩能力。一旦第一行达到了没有足够空间放置额外 160 像素物件的点，一个新的弹性行就会被建立，一直这样直到所有的物件被放置。

因为物件可以伸展，它们会扩展大于 160 像素从而完整地填充一行。如果在最后一行只有 1 个物件，它就将拉长了充满整行。

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230613210229238.png" alt="image-20230613210229238" style="zoom: 50%;" />

在列上也一样，会拉伸高度填满每一列

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230613210330774.png" alt="image-20230613210330774" style="zoom:50%;" />



#### 包装和flex-direction

`flex-direction`设置成row-reverse，那么物件就会从容器底部开始反堆叠

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230613212852310.png" alt="image-20230613212852310" style="zoom:50%;" />

反向只能发生在行内、行的方向。每行右边开始跳上来也是右边开始

从容器底部上来的反向



#### 一维布局介绍

如上列，如果我们的物件被允许伸展和收缩，当最后一行或一列有较少的物件时，那么这些物件就会伸展从而填满可用空间。



弹性盒子中并没有方法告诉一行里的物件和上一行里的物件对齐——每个弹性行表现得就像一个新的弹性容器。

它在主要坐标轴上处理空间分布。如果只有一个物件，并且这个物件允许伸展，他就会填充坐标轴，就好像你有一个单物件的弹性容器。



如果想在二维方向上布局，就可以使用网格布局(Grid 布局)

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230613213520658.png" alt="image-20230613213520658" style="zoom: 67%;" />

```html
      <div class="box">
        <div>One</div>
        <div>Two</div>
        <div>Three</div>
        <div>Four</div>
        <div>Five</div>
        <div>Six</div>
        <div>Seven</div>
        <div>Eight</div>
        <div>Nine</div>
        <div>Ten</div>
      </div>
```



#### 基于弹性盒子的网格系统如何工作？

如果你对弹性items设置了百分比的宽度—— `flex-basis` 或是通过对items增加宽度同时让 `flex-basis` 的值保持为`auto` 

可以获得二维布局



这里设置`flex-grow`和`flex-shrink`为`0`来固定flex items，接着使用百分比来控制弹性

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230619205804184.png" alt="image-20230619205804184" style="zoom:50%;" />

如果要弹性items在坐标轴上对齐，用这样的方法来控制宽度就能达到这个效果

向 flex items 增加宽度的做法，可能会比将组件切换成网格布局提供的更好体验



#### 在 items 之间建立间隔

包装flex items很可能需要间隔

实例是建立间隔但不在容器边缘建立间隔，需要在弹性容器自身上使用负边距

适当的间隙只发生在items的内边缘

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230620102131023.png" alt="image-20230620102131023" style="zoom: 67%;" />



#### 折叠items

`visibility: collapse`

`visibility: visible`



#### visibility:hidden 和display:none 区别

当你为了隐藏一个物件去设置 `display: none` ，物件就被格式化的页面结构移除

在实际中的意义就是计数器忽略了它，类似转换的事情不会运行



使用 `visibility: hidden` 保持了格式化结构的框，这十分有用，它仍旧表现的像是布局中的一部分即便用户看不到它





### 经典的 Flex 布局示例



#### 导航

导航的一个常见特征，就是使用水平条的样式去呈现一系列元素



##### 在元素外部处理空间分布

为了让多余的空间分布在多个元素之间或周围，我们使用 flexbox 中相应的对齐属性以及 [`justify-content`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content) 属性

可以通过 [Aligning Items in a flex container](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container) 来阅读更多关于这个专门用来处理主轴（main axis）对齐的属性



使用 `justify-content: space-between` 使元素之间拥有相同的空间。

你可以通过 `space-around` 的值来改变空间分布的方式，在浏览器支持的环境下还可以使用 `space-evenly`。

你也可以使用 `flex-start` 让空间展示在所有元素末尾。

使用 `flex-end` 让空间展示在所有元素之前， `center` 可以居中所有元素

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230620153620645.png" alt="image-20230620153620645" style="zoom:67%;" />



##### 让元素自己处理空间分布

`flex:auto`是`flex:1 1 auto`的简写，所有元素都在`flex-basis`尺寸上自动收缩，较长的元素会获得更多的空间

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230620154122755.png" alt="image-20230620154122755" style="zoom:67%;" />

如果`flex:1`，即`flex:1 1 0`，则是所有元素具有相同宽度

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230620154650302.png" alt="image-20230620154650302" style="zoom:67%;" />



#### 拆分导航

另一种在主轴上对齐元素的方式就是使用自动边距。这种方式将创造出一部分元素左对齐而另一部分右对齐的导航栏设计。

在 [Using auto margins for main axis alignment](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container#using_auto_margins_for_main_axis_alignment) 这篇文章中介绍的自动边距技术。

所有的元素在主轴上按照弹性盒布局的默认设定 `flex-start` 进行对齐，同时我们给那个需要右对齐的元素添加 `margin-left: auto;` 样式

你可以尝试将那个类名转移到其他元素上以改变（向右）分割作用的位置。



例子里我们也为每个元素启用了 `margin` 属性来控制元素间的间隔，并给容器添加负边距以保证元素与容器的接洽处没有缝隙。

在弹性盒布局实现盒式对齐规范中的 `gap` 属性前，如果我们想要控制元素的间隔就不得不使用使用边距属性

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230620160606326.png" alt="image-20230620160606326" style="zoom:67%;" />



#### 元素居中

现在，使用弹性盒布局中的对齐属性即可居中

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230620162222960.png" alt="image-20230620162222960" style="zoom:67%;" />

align-items:垂直居中

justify-content:水平居中

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230620162523430.png" alt="image-20230620162523430" style="zoom:67%;" />

也可以用align-self来达到所需效果



#### 绝对底部

 不管是flexbox(弹性布局) 还是 CSS Grid(网格布局)，这些布局方式都只对弹性盒容器或者网格容器的（直接）子元素生效

即使`content` 长度不定，组件在高度上仍会充满整个弹性盒容器或者网格容器

常规块布局的方法都会导致 `content` 内容较少时 `footer` 上升到 `content` 下方而不是容器的底部

<img src="https://ik.imagekit.io/breezecome/blog/css/flex-cards.png" alt="Two card components showing that the internals of the component do not stretch with the wrapper." style="zoom:50%;" />



弹性盒模型就能解决常规块布局的问题

首先创建弹性盒模型 `display:flex`，然后启用`flex-direction:column`

然后我们在`content`部分启用`flex:1`，这个元素就可以在`flex-basis`为0的基础上伸缩

因为这是唯一一个可以延伸的元素，它会占据所有在弹性盒容器中可以占据的空间，同时将 `footer` 推至底部

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230620171423936.png" alt="image-20230620171423936" style="zoom: 67%;" />

如果不是flex属性则会回到上面

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230620171640061.png" alt="image-20230620171640061" style="zoom: 67%;" />



#### 媒体对象

媒体对象是网页设计中的常见模式：这种模式下，一侧具有图片或其他元素，另一侧具有文本。

理想情况下，媒体对象应该可以翻转：即把图片从左侧移动到右侧。

[媒体对象](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox#%E5%AA%92%E4%BD%93%E5%AF%B9%E8%B1%A1)



#### 表单控件

这里Input和button包含在一个容器里

<img src="https://ik.imagekit.io/breezecome/blog/css/image-20230620174518893.png" alt="image-20230620174518893" style="zoom:67%;" />