(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{391:function(t,s,a){t.exports=a.p+"assets/img/rerender1.62c08973.png"},515:function(t,s,a){"use strict";a.r(s);var n=a(45),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"回流-reflow-和重绘-repaint"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#回流-reflow-和重绘-repaint"}},[t._v("#")]),t._v(" 回流（reflow）和重绘（repaint）")]),t._v(" "),n("h2",{attrs:{id:"简单回顾浏览器的渲染机制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#简单回顾浏览器的渲染机制"}},[t._v("#")]),t._v(" 简单回顾浏览器的渲染机制")]),t._v(" "),n("p",[t._v("浏览器从下载文档到显示页面的过程是个复杂的过程，其中就包含了回流和重绘。")]),t._v(" "),n("ol",[n("li",[t._v("通常在文档初次加载时，浏览器引擎会使用 HTML 解析器解析 HTML 文档，构建 DOM 树")]),t._v(" "),n("li",[t._v("使用 CSS 解析器解析 CSS，构建 CSSOM 树（或叫 Style Rules）")]),t._v(" "),n("li",[t._v("DOM 树和 CSSOM 树结合，生成一棵渲染树（Render Tree）。渲染树的每个节点都有大小和边距等属性，类似于盒子模型（由于隐藏元素不需要显示，渲染树中并不包含 DOM 树中隐藏的元素）。")]),t._v(" "),n("li",[t._v("当渲染树构建完成后，我们就知道了所有节点的样式，浏览器即可开始计算它们要占据的空间大小及其在屏幕的位置，生成布局（Layout Flow）")]),t._v(" "),n("li",[t._v("最后再将布局绘制（paint）在屏幕上。绘制是填充像素的过程，它涉及绘出文本、颜色、边框和阴影，基本上包括元素的每个可视部分。绘制一般是在多个层上完成，它们需要按正确的顺序将每个层绘制到屏幕上。")])]),t._v(" "),n("p",[t._v("浏览器采用的是流式布局模型（Flow Based Layout），对于 Render Tree 的计算通常只需要遍历一次就可以完成，但 table 及其内部元素除外，它们可能需要多次计算，通常要花 3 倍于同等元素的时间，这也是为什么要避免使用 table 布局的原因之一。不过网页的布局模式也意味着一个元素可能影响其他元素，例如：元素的宽度一般会影响其子元素的宽度以及树中各处节点，因此对于浏览器来说布局过程是经常发生的（reflow）。")]),t._v(" "),n("p",[t._v("其中上面的第四步和第五步是最耗时的部分，这两步结合起来，就是我们通常所说的渲染。"),n("strong",[t._v("网页生成显示在屏幕上，至少会渲染一次（Layout Flow + Paint），在用户访问的过程中，还会不断重新渲染。")]),t._v(" 重新渲染需要重复之前的第四步（重新生成布局）+ 第五步（重新绘制）或者只有第五步（重新绘制）。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(391),alt:""}})]),t._v(" "),n("h2",{attrs:{id:"重绘-repaint"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#重绘-repaint"}},[t._v("#")]),t._v(" 重绘（repaint）")]),t._v(" "),n("h3",{attrs:{id:"概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),n("p",[t._v("当一个元素外观发生变化，但没有改变布局时，浏览器根据元素的新属性重新绘制，使元素呈现新的外观的过程，叫做重绘。")]),t._v(" "),n("h3",{attrs:{id:"常见的引起重绘的属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常见的引起重绘的属性"}},[t._v("#")]),t._v(" 常见的引起重绘的属性")]),t._v(" "),n("ul",[n("li",[t._v("color")]),t._v(" "),n("li",[t._v("visibility")]),t._v(" "),n("li",[t._v("box-shadow")]),t._v(" "),n("li",[t._v("text-decoration")]),t._v(" "),n("li",[t._v("border-style")]),t._v(" "),n("li",[t._v("border-radius")]),t._v(" "),n("li",[t._v("background")]),t._v(" "),n("li",[t._v("background-color")]),t._v(" "),n("li",[t._v("background-image")]),t._v(" "),n("li",[t._v("background-position")]),t._v(" "),n("li",[t._v("background-repeat")]),t._v(" "),n("li",[t._v("background-size")]),t._v(" "),n("li",[t._v("outline")]),t._v(" "),n("li",[t._v("outline-color")]),t._v(" "),n("li",[t._v("outline-style")]),t._v(" "),n("li",[t._v("outline-width")])]),t._v(" "),n("h2",{attrs:{id:"回流-reflow"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#回流-reflow"}},[t._v("#")]),t._v(" 回流（reflow）")]),t._v(" "),n("h3",{attrs:{id:"概念-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#概念-2"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),n("p",[t._v("当 DOM 的变化影响了元素的几何信息（DOM 对象的位置和尺寸大小），浏览器需要重新计算元素的几何属性（可以理解为渲染树需要重新计算），将其安放在界面中的正确位置，这个过程叫做回流。回流也叫做重排。")]),t._v(" "),n("blockquote",[n("p",[t._v("有一个比较形象比喻：回流就好比想河流里（文档流）扔了一块石头（DOM 变化），激起涟漪，然后引起周边的水流受到波及，所以叫做回流。")])]),t._v(" "),n("h3",{attrs:{id:"常见的引起回流的情况"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常见的引起回流的情况"}},[t._v("#")]),t._v(" 常见的引起回流的情况")]),t._v(" "),n("p",[t._v("任何会改变元素几何信息（元素的位置和尺寸大小）的操作，都会触发回流。")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("DOM 元素的几何属性发生变化，如元素尺寸改变——margin、padding、border、width 和 height")]),t._v(" "),n("p",[t._v("当 DOM 元素的几何属性变化时，渲染树中的相关节点就会失效，浏览器会根据 DOM 元素的变化重新构建渲染树中失效的节点。之后，会根据新的渲染树重新绘制出这部分页面。而且，当前元素的回流也会带来相关元素的回流。例如：容器节点的渲染树改变时，会触发子节点的重新计算，也会触发其后续兄弟节点的回流，祖先节点需要重新计算子节点的尺寸也会产生回流。最后，每个元素都将发生重绘。")])]),t._v(" "),n("li",[n("p",[t._v("DOM 树的结构发生变化，例如添加或删除可见的 DOM 元素")]),t._v(" "),n("p",[t._v("当 DOM 树的结构变化时，例如节点的增减和移动等，也会触发回流。浏览器引擎布局的过程。类似于树的前序遍历，是一个从上到下，从左到右的过程。通常在这个过程中，当前元素不会再影响其前面已经遍历过的元素。所以，如果在 body 最前面插入一个元素，会导致整个文档的重新渲染，而在其后插入一个元素，则不会影响到前面的元素。")])]),t._v(" "),n("li",[n("p",[t._v("内容变化，比如用户在 input 框中输入文字")])]),t._v(" "),n("li",[n("p",[t._v("浏览器窗口尺寸改变——resize 时间发生时")])]),t._v(" "),n("li",[n("p",[t._v("获取某些属性，例如计算 offsetWidth 和 offsetHeight 属性")])]),t._v(" "),n("li",[n("p",[t._v("设置 style 属性的值")])])]),t._v(" "),n("h4",{attrs:{id:"能引起回流的属性和方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#能引起回流的属性和方法"}},[t._v("#")]),t._v(" 能引起回流的属性和方法")]),t._v(" "),n("ul",[n("li",[t._v("width")]),t._v(" "),n("li",[t._v("height")]),t._v(" "),n("li",[t._v("padding")]),t._v(" "),n("li",[t._v("border")]),t._v(" "),n("li",[t._v("margin")]),t._v(" "),n("li",[t._v("poisiton")]),t._v(" "),n("li",[t._v("display")]),t._v(" "),n("li",[t._v("overflow")]),t._v(" "),n("li",[t._v("clientWidth")]),t._v(" "),n("li",[t._v("clientHeight")]),t._v(" "),n("li",[t._v("clientTop")]),t._v(" "),n("li",[t._v("clientLeft")]),t._v(" "),n("li",[t._v("offsetWidth")]),t._v(" "),n("li",[t._v("offsetHeight")]),t._v(" "),n("li",[t._v("offsetTop")]),t._v(" "),n("li",[t._v("offsetLeft")]),t._v(" "),n("li",[t._v("scrollWidth")]),t._v(" "),n("li",[t._v("scrollHeight")]),t._v(" "),n("li",[t._v("scrollTop")]),t._v(" "),n("li",[t._v("scrollLeft")]),t._v(" "),n("li",[t._v("scrollIntoView()")]),t._v(" "),n("li",[t._v("scrollTo()")]),t._v(" "),n("li",[t._v("getComputedStyle()")]),t._v(" "),n("li",[t._v("getBoundingClientRect()")]),t._v(" "),n("li",[t._v("scrollIntoViewIfNeeded()")])]),t._v(" "),n("h3",{attrs:{id:"回流的影响"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#回流的影响"}},[t._v("#")]),t._v(" 回流的影响")]),t._v(" "),n("h4",{attrs:{id:"影响范围"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#影响范围"}},[t._v("#")]),t._v(" 影响范围")]),t._v(" "),n("p",[t._v("由于浏览器渲染界面是基于流式布局模型的，所以触发回流会对周围 DOM 重新排列，影响的范围有两种：")]),t._v(" "),n("ul",[n("li",[t._v("全局范围：从根节点 html 开始对整个渲染树进行重新布局。一般不加限制的情况下通常会在全局范围引发回流。")]),t._v(" "),n("li",[t._v("局部范围：对渲染树中某部分或某一个渲染对象进行重新布局。\n"),n("ul",[n("li",[t._v("例如把一个 DOM 的宽高等几何信息写死，然后在 DOM 内部触发回流，就只会渲染该 DOM 内部的元素，不会影响到外界。")]),t._v(" "),n("li",[t._v("此外 CSS 新特性 contain 也会控制页面的重绘与回流。 "),n("code",[t._v("contain")]),t._v(" 属性允许我们指定特定的 DOM 元素和它的子元素，让他们能够独立于整个 DOM 树结构之外。目的是能够让浏览器有能力只对部分元素进行重绘、回流，而不必每次都针对整个页面。"),n("a",{attrs:{href:"https://github.com/chokcoco/iCSS/issues/23",target:"_blank",rel:"noopener noreferrer"}},[t._v("详情可查看此文章"),n("OutboundLink")],1)]),t._v(" "),n("li",[t._v("把 position 属性设置成 absolute 或 fixed 等操作，让元素脱离文档流")])])])]),t._v(" "),n("h4",{attrs:{id:"影响性能"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#影响性能"}},[t._v("#")]),t._v(" 影响性能")]),t._v(" "),n("p",[t._v("回流需要更新渲染树，性能开销非常大，会破坏用户体验，并且让 UI 展示非常迟缓，我们需要尽可能的减少触发回流的次数。")]),t._v(" "),n("p",[t._v("回流的性能花销跟渲染树有多少个节点需要重新构建有关系，所以我们应该尽量以局部布局的形式组织 html 结构，尽可能减小回流的影响范围，而不是一味地堆砌标签，随便一个元素触发回流都会导致全局范围的回流。")]),t._v(" "),n("h2",{attrs:{id:"重绘和回流的关系"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#重绘和回流的关系"}},[t._v("#")]),t._v(" 重绘和回流的关系")]),t._v(" "),n("p",[t._v("回流比重绘影响要大，单单改变元素的外观，肯定不会引起网页重新生成布局，但当元素的尺寸发生改变，浏览器完成回流之后，将会重新绘制受到此次回流影响的部分。"),n("strong",[t._v("重绘不会带来重新布局，因此重绘不一定会引发回流，但是回流必然会发生重绘。")])]),t._v(" "),n("p",[t._v("重绘和回流对浏览器性能的影响也是有区别的：重绘的代价很高，因为浏览器必须验证 DOM 树上其他节点元素的可见性，但是回流的代价更高，回流是影响浏览器性能的关键因素，因为其变化涉及到部分页面（或是整个页面）的布局更新。一个元素的回流可能会导致其所有子元素以及 DOM 中紧随其后的兄弟节点、祖先节点等元素的回流。")]),t._v(" "),n("h2",{attrs:{id:"浏览器优化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#浏览器优化"}},[t._v("#")]),t._v(" 浏览器优化")]),t._v(" "),n("p",[t._v("现代浏览器大多都对重绘和回流做了一些优化，一般都是通过渲染队列机制来批量更新布局。当我们修改了元素的外观或几何属性，会导致浏览器触发回流或重绘时，浏览器会把修改操作放到渲染队列中，等到队列中的操作到了**一定数量或者到了一定的时间间隔（至少一个浏览器刷新，即 16.6ms）**才会清空队列。")]),t._v(" "),n("p",[t._v("但是当我们主动获取布局信息的时候，渲染队列中可能有会影响这些属性或方法返回值的操作，即使没有，浏览器也会"),n("strong",[t._v("强制清空队列")]),t._v("，触发回流与重绘来确保返回正确的值。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 以下四次修改只会触发一次渲染（回流+重绘） */")]),t._v("\ndiv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'10px'")]),t._v("\ndiv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'10px'")]),t._v("\ndiv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'20px'")]),t._v("\ndiv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'20px'")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 以下代码会发生4次渲染（回流+重绘），因为使用console.log请求了这几个样式信息，即使该值与你操作中修改的值没有关联，也会立即执行渲染队列中的任务，这是浏览器为了给我们最精确的值 */")]),t._v("\ndiv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'10px'")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("div"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetLeft"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndiv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'10px'")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("div"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetTop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndiv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'20px'")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("div"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetWidth"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndiv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'20px'")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("div"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetHeight"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("强制清空渲染队列的 style 样式请求：")]),t._v(" "),n("ul",[n("li",[t._v("offsetTop、offsetLeft、offsetWidth、offsetHeight")]),t._v(" "),n("li",[t._v("scrollTop、scrollLeft、scrollWidth、scrollHeight")]),t._v(" "),n("li",[t._v("clientTop、clientLeft、clientWidth、clientHeight")]),t._v(" "),n("li",[t._v("width、height")]),t._v(" "),n("li",[t._v("getComputedStyle()")]),t._v(" "),n("li",[t._v("getBoundingClientRect()")]),t._v(" "),n("li",[t._v("IE 的 currentStyle")])]),t._v(" "),n("p",[t._v("我们在开发中，应该谨慎的使用这些 style 请求，注意上下文关系，避免一行代码触发一次回流，这对性能是个巨大的消耗。")]),t._v(" "),n("h2",{attrs:{id:"优化重绘和回流的建议"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#优化重绘和回流的建议"}},[t._v("#")]),t._v(" 优化重绘和回流的建议")]),t._v(" "),n("h3",{attrs:{id:"_1、分离读写操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、分离读写操作"}},[t._v("#")]),t._v(" 1、分离读写操作")]),t._v(" "),n("p",[t._v("针对上面发生四次渲染（回流+重绘）的代码，我们可以通过分离读写的操作，实现只触发一次渲染（回流+重绘）")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("div"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'10px'")]),t._v("\ndiv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'10px'")]),t._v("\ndiv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'20px'")]),t._v("\ndiv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'20px'")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("div"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetLeft"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("div"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetTop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("div"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetWidth"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("div"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetHeight"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("前面的样式设置，浏览器会优化到渲染队列中，然后在第一次 console.log 的时候，浏览器会把渲染队列清空，剩下的 console.log，因为渲染队列本来就是空的，所以没有触发渲染（回流+重绘）。")]),t._v(" "),n("h3",{attrs:{id:"_2、将多次改变样式属性的操作合并成一次操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、将多次改变样式属性的操作合并成一次操作"}},[t._v("#")]),t._v(" 2、将多次改变样式属性的操作合并成一次操作")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" changeDiv "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'changeDiv'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nchangeDiv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#093'")]),t._v("\nchangeDiv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("background "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#eee'")]),t._v("\nchangeDiv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'200px'")]),t._v("\n")])])]),n("p",[t._v("虽然现在大部分浏览器有渲染队列机制优化，不排除有些浏览器以及老版本的浏览器效率仍然地下，所以建议通过改变 class 或者 csstext 属性合并修改样式。")]),t._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div.changeDiv")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #eee"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #093"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'changeDiv'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("className "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'changeDiv'")]),t._v("\n")])])]),n("h3",{attrs:{id:"_3、将频繁重绘或者回流的节点设置为图层-图层能够阻止该节点的渲染行为影响别的节点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3、将频繁重绘或者回流的节点设置为图层-图层能够阻止该节点的渲染行为影响别的节点"}},[t._v("#")]),t._v(" 3、将频繁重绘或者回流的节点设置为图层，图层能够阻止该节点的渲染行为影响别的节点")]),t._v(" "),n("ul",[n("li",[t._v("将需要多次回流的元素的 position 属性设为 absolute 或 fixed，这样此元素就脱离了文档流，它的变化所影响的范围就会比较小。")]),t._v(" "),n("li",[t._v("启用 GPU 加速\nGPU 硬件加速是指应用 GPU 的图形性能对浏览器中的一些图形操作交给 GPU 完成，因为 GPU 是专门为处理图形而设计，所以它在速度和能耗上更有效率。GPU 加速通常包括以下几个部分：Canvas2D、布局合成、will-change、CSS3 3D 转换（transform）、WebGL 和视频（video）。")])]),t._v(" "),n("h3",{attrs:{id:"_4、缓存布局信息"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4、缓存布局信息"}},[t._v("#")]),t._v(" 4、缓存布局信息")]),t._v(" "),n("p",[t._v("在需要经常获取那些引起浏览器重排的属性值时，要缓存到变量中。其实还是在分离读写操作，而且进一步缓存起来，能避免多次读取属性值。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// bad 强制刷新 触发两次重排")]),t._v("\ndiv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" div"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetLeft "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'px'")]),t._v("\ndiv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" div"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetTop "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'px'")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// good 缓存布局信息 相当于读写分离")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" curLeft "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" div"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetLeft\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" curTop "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" div"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetTop\ndiv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" curLeft "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'px'")]),t._v("\ndiv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" curTop "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'px'")]),t._v("\n")])])]),n("h3",{attrs:{id:"_5、离线操作-dom"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5、离线操作-dom"}},[t._v("#")]),t._v(" 5、离线操作 DOM")]),t._v(" "),n("ul",[n("li",[t._v("由于 display 属性为 none 的元素不再渲染树中，对隐藏的元素操作不会一你发其他元素的回流，如果要对一个元素进行复杂的操作时，可以先隐藏它，操作完成后再显示，这样只在隐藏和显示时触发两次回流。")]),t._v(" "),n("li",[t._v("通过使用 DocumentFragment 创建一个 DOM 碎片，在它上面批量操作 DOM，操作完成之后，再添加到文档中，这样只会触发一次重排。")]),t._v(" "),n("li",[t._v("复制节点，在副本上操作，然后替换原节点。")])]),t._v(" "),n("h3",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),n("p",[t._v("重绘和回流会不断触发，这是不可避免的。但是我们再开发时，应尽量按照以上的建议来组织代码。")]),t._v(" "),n("h2",{attrs:{id:"参考文档"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[t._v("#")]),t._v(" 参考文档")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://juejin.cn/post/6844903745914929165",target:"_blank",rel:"noopener noreferrer"}},[t._v("浏览器重绘(repaint)重排(reflow)与优化"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://kb.cnblogs.com/page/169820/",target:"_blank",rel:"noopener noreferrer"}},[t._v("浏览器的重绘和重排"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/qappleh/Interview/issues/26",target:"_blank",rel:"noopener noreferrer"}},[t._v("介绍下重绘和回流（Repaint & Reflow），以及如何进行优化 "),n("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);