# 数组扁平化

ES6 flat实现

```js
arr.flat(Infinty);
```

flat语法：`flat(depth)`

depth：要提取嵌套数组的结构深度，默认值为 1



递归：

```js
const arr = [1, [2, [3, 4, 5]]];
function flatten(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
```

### 递归过程解析

让我们逐步解析递归调用是如何展开的：

1. `flatten([1, [2, [3, 4, 5]]])`:
   - 第一个元素是 `1`，不是数组，所以直接加入 `result`，此时 `result = [1]`。
   - 第二个元素是 `[2, [3, 4, 5]]`，是一个数组，调用 `flatten([2, [3, 4, 5]])`。
2. `flatten([2, [3, 4, 5]])`:
   - 第一个元素是 `2`，不是数组，所以加入 `result`，此时 `result = [2]`。
   - 第二个元素是 `[3, 4, 5]`，是一个数组，调用 `flatten([3, 4, 5])`。
3. `flatten([3, 4, 5])`:
   - 所有元素 `3`, `4`, `5` 都不是数组，直接加入 `result`，得到 `result = [3, 4, 5]`。
4. 递归返回：
   - `flatten([3, 4, 5])` 返回 `[3, 4, 5]`。
   - `flatten([2, [3, 4, 5]])` 得到 `result = [2, 3, 4, 5]`。
   - `flatten([1, [2, [3, 4, 5]]])` 得到 `result = [1, 2, 3, 4, 5]`。

最终输出结果为 `[1, 2, 3, 4, 5]`。

