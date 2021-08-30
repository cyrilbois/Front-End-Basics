(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{579:function(t,v,e){"use strict";e.r(v);var _=e(45),a=Object(_.a)({},(function(){var t=this,v=t.$createElement,e=t._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"javascript-词法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#javascript-词法"}},[t._v("#")]),t._v(" JavaScript 词法")]),t._v(" "),e("p",[t._v("文法是编译原理中对语言写法的一种规定，文法分为词法和语法。")]),t._v(" "),e("p",[t._v("词法的最小语义单元是：token，翻译为“标记”或“词”。从字符串到词的整个过程是没有结构的，只要符合词的规则，就构成词。词法分析技术上可以使用状态机或者正则表达式来进行。")]),t._v(" "),e("p",[t._v("一般来说，词法设计不会包含冲突。不过，JavaScript 中有一些特别之处：")]),t._v(" "),e("ul",[e("li",[t._v("除法和正则表达式冲突问题")])]),t._v(" "),e("p",[t._v("同样是斜杠运算符"),e("code",[t._v("/")]),t._v("，"),e("code",[t._v("/")]),t._v(" 和 "),e("code",[t._v("/=")]),t._v(" 是除法运算符，但是两个斜杠括起来就是正则表达式 "),e("code",[t._v("/abc/")])]),t._v(" "),e("ul",[e("li",[t._v("字符串模板和 "),e("code",[t._v("}")]),t._v(" 冲突问题")])]),t._v(" "),e("p",[t._v("字符串模板语"),e("code",[t._v("Hello, ${name}")]),t._v("，理论上，"),e("code",[t._v("${}")]),t._v("内部可以放任何 JavaScript 代码，但是因为这些代码最后需要以"),e("code",[t._v("}")]),t._v("结尾，所以，这部分代码不允许出现"),e("code",[t._v("}")]),t._v("运算符，但是有例外情况：")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("Hello, ")]),e("span",{pre:!0,attrs:{class:"token interpolation"}},[e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h2",{attrs:{id:"输入分类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#输入分类"}},[t._v("#")]),t._v(" 输入分类")]),t._v(" "),e("p",[t._v("词法分析过程，JavaScript 源码文本会被从左到右扫描，并被转换成一系列输入元素：")]),t._v(" "),e("ul",[e("li",[t._v("WhiteSpace 空白字符")]),t._v(" "),e("li",[t._v("LineTerminator 换行符")]),t._v(" "),e("li",[t._v("Comment 注释")]),t._v(" "),e("li",[t._v("Token 词\n"),e("ul",[e("li",[t._v("IdentifierName 标识符名称，例如定义的变量名或关键字")]),t._v(" "),e("li",[t._v("Punctuator 符号，运算符和大括号等符号")]),t._v(" "),e("li",[t._v("NumbericLiteral 数字直接量，就是数字")]),t._v(" "),e("li",[t._v("StringLiteral 字符串直接量，就是直接用单引号或双引号引起来的字符串")]),t._v(" "),e("li",[t._v("Template 字符串模板，用反引号 ` 括起来的直接量")])])])]),t._v(" "),e("p",[t._v("注：直接量（literal），就是程序中能直接使用的数据值。")]),t._v(" "),e("h2",{attrs:{id:"空白符号-whitespace"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#空白符号-whitespace"}},[t._v("#")]),t._v(" 空白符号 WhiteSpace")]),t._v(" "),e("p",[t._v("空白符提升了源码的可读性，并将 token 区分开。这些符号通常不影响代码的功能。在压缩代码的过程中会移除源码的空白，减少数据传输量。")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("编码")]),t._v(" "),e("th",[t._v("名称")]),t._v(" "),e("th",[t._v("缩写")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("字符串中写法")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("U+0009")]),t._v(" "),e("td",[t._v("缩进 TAB 符（制表符）")]),t._v(" "),e("td",[e("code",[t._v("<HT>")]),t._v(" 或 "),e("code",[t._v("<TAB>")])]),t._v(" "),e("td",[t._v("水平制表符")]),t._v(" "),e("td",[t._v("\\t")])]),t._v(" "),e("tr",[e("td",[t._v("U+000B")]),t._v(" "),e("td",[t._v("垂直方向 TAB 符（垂直制表符）")]),t._v(" "),e("td",[e("code",[t._v("<VT>")])]),t._v(" "),e("td",[t._v("垂直制表符")]),t._v(" "),e("td",[t._v("\\v")])]),t._v(" "),e("tr",[e("td",[t._v("U+000C")]),t._v(" "),e("td",[t._v("分页符")]),t._v(" "),e("td",[e("code",[t._v("<FF>")])]),t._v(" "),e("td",[t._v("分页符")]),t._v(" "),e("td",[t._v("\\f")])]),t._v(" "),e("tr",[e("td",[t._v("U+0020")]),t._v(" "),e("td",[t._v("空格")]),t._v(" "),e("td",[e("code",[t._v("<SP>")])]),t._v(" "),e("td",[t._v("空格")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("U+00A0")]),t._v(" "),e("td",[t._v("非断行空格")]),t._v(" "),e("td",[e("code",[t._v("<NBSP>")])]),t._v(" "),e("td",[t._v("文字排版中在该空格处不会换行")]),t._v(" "),e("td",[t._v("HTML 中用 "),e("code",[t._v("&nbsp;")]),t._v(" 生成的就是它")])]),t._v(" "),e("tr",[e("td",[t._v("U+200C")]),t._v(" "),e("td",[t._v("零宽非连接符（ES5）")]),t._v(" "),e("td",[e("code",[t._v("<ZWNJ>")])]),t._v(" "),e("td",[t._v("放置在一些经常被当成连字的字符之间，用于将他们分别以独立形式展示")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("U+200D")]),t._v(" "),e("td",[t._v("零宽连接符（ES5）")]),t._v(" "),e("td",[e("code",[t._v("<ZWJ>")])]),t._v(" "),e("td",[t._v("放置在一些通常不会被标记为连字的字符之间，用于将这些字符以连字形式展示")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("U+FEFF")]),t._v(" "),e("td",[t._v("零宽非断行空格（ES5）")]),t._v(" "),e("td",[e("code",[t._v("<ZWNBSP>")]),t._v("旧称"),e("code",[t._v("<BOM>")])]),t._v(" "),e("td",[t._v("在以 UTF 格式编码的文件中，常常在文件首插入一个额外的 U+FEFF，解析 UTF 文件的程序可以根据 U+FEFF 的表示方法猜测文件采用哪种 UTF 编码方式")]),t._v(" "),e("td")])])]),t._v(" "),e("h2",{attrs:{id:"换行符-lineterminator"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#换行符-lineterminator"}},[t._v("#")]),t._v(" 换行符 LineTerminator")]),t._v(" "),e("p",[t._v("除了空白符外，换行符也可以提高源码的可读性，不同的是，换行符还可以影响 JavaScript 代码的执行，也会影响自动分号补全的执行。")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("编码")]),t._v(" "),e("th",[t._v("名称")]),t._v(" "),e("th",[t._v("缩写")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("字符串中写法")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("U+000A")]),t._v(" "),e("td",[t._v("换行符")]),t._v(" "),e("td",[e("code",[t._v("<LF>")])]),t._v(" "),e("td",[t._v("正常的换行符")]),t._v(" "),e("td",[t._v("\\n")])]),t._v(" "),e("tr",[e("td",[t._v("U+000D")]),t._v(" "),e("td",[t._v("回车符")]),t._v(" "),e("td",[e("code",[t._v("<CR>")])]),t._v(" "),e("td",[t._v("真正意义上的“回车”")]),t._v(" "),e("td",[t._v("\\r")])]),t._v(" "),e("tr",[e("td",[t._v("U+2028")]),t._v(" "),e("td",[t._v("行分隔符")]),t._v(" "),e("td",[e("code",[t._v("<LS>")])]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("U+2029")]),t._v(" "),e("td",[t._v("段分隔符")]),t._v(" "),e("td",[e("code",[t._v("<PS>")])]),t._v(" "),e("td"),t._v(" "),e("td")])])]),t._v(" "),e("h2",{attrs:{id:"注释-comment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注释-comment"}},[t._v("#")]),t._v(" 注释 Comment")]),t._v(" "),e("p",[t._v("注释用来在源码中增加提示、笔记、建议、警告等信息，可以帮助阅读和理解源码。在调试时，可以用来将一段代码屏蔽掉。")]),t._v(" "),e("h3",{attrs:{id:"单行注释-single-line-comment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单行注释-single-line-comment"}},[t._v("#")]),t._v(" 单行注释 single-line comment")]),t._v(" "),e("p",[t._v("使用 "),e("code",[t._v("//")]),t._v("，会将该行中符号以后的文本都视为注释，除了四种 LineTerminator 之外，所有字符都可以作为单行注释。")]),t._v(" "),e("h3",{attrs:{id:"多行注释-multiple-line-comment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多行注释-multiple-line-comment"}},[t._v("#")]),t._v(" 多行注释 multiple-line comment")]),t._v(" "),e("p",[t._v("使用 "),e("code",[t._v("/* */")]),t._v("，这种方式更加灵活，可以在单行内使用多行注释，当然可以实现多行的注释，甚至可以用在代码中当做行内注释（可读性会变差，谨慎使用）")]),t._v(" "),e("p",[t._v("多行注释中允许自由地出现 MultiLineNotAsteriskChar ，也就是除了 "),e("code",[t._v("*")]),t._v(" 之外的所有字符。除了最后的结束位置，其他的任何 "),e("code",[t._v("*")]),t._v(" 之后，不能出现正斜杠 "),e("code",[t._v("/")]),t._v("。")]),t._v(" "),e("p",[t._v("需要注意：多行注释中是否包含换行符号，会对 JavaScript 语法产生影响，对于 “no line terminator”规则来说，带换行的多行注释与换行符是等效的。")]),t._v(" "),e("h2",{attrs:{id:"标识符名称-identifiername"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#标识符名称-identifiername"}},[t._v("#")]),t._v(" 标识符名称 IdentifierName")]),t._v(" "),e("p",[t._v("IdentifierName 可以是 Identifier（就是我们自己定义的变量、函数）、NullLiteral（null 直接量）、BooleanLiteral 或者 keyword（关键字），在 ObjectLiteral 中，IdentifierName 还可以直接当做属性名称使用。仅当不是保留字时，IdentifierName 会被解析成 Identifier。")]),t._v(" "),e("p",[t._v("IdentifierName 可以以美元符"),e("code",[t._v("$")]),t._v("、下划线"),e("code",[t._v("_")]),t._v("、或者字母开始，除了开始字符以外，IdentifierName 中还可以使用连接标记、数字、以及连接符号。")]),t._v(" "),e("p",[t._v("JavaScript 中的一切都是区分大小写的，即关键字、变量、函数名和所有的标识符（Identifier）都要区分大小写。")]),t._v(" "),e("h3",{attrs:{id:"关键字"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关键字"}},[t._v("#")]),t._v(" 关键字")]),t._v(" "),e("p",[t._v("关键字属于 IdentifierName ，这些关键字可用于表示控制语句的开始或结束，或者用于执行特定操作等。在 JavaScript 中，关键字有：")]),t._v(" "),e("ul",[e("li",[t._v("await")]),t._v(" "),e("li",[t._v("break")]),t._v(" "),e("li",[t._v("case")]),t._v(" "),e("li",[t._v("catch")]),t._v(" "),e("li",[t._v("class")]),t._v(" "),e("li",[t._v("const")]),t._v(" "),e("li",[t._v("continue")]),t._v(" "),e("li",[t._v("debugger")]),t._v(" "),e("li",[t._v("default")]),t._v(" "),e("li",[t._v("delete")]),t._v(" "),e("li",[t._v("do")]),t._v(" "),e("li",[t._v("else")]),t._v(" "),e("li",[t._v("export")]),t._v(" "),e("li",[t._v("extends")]),t._v(" "),e("li",[t._v("finally")]),t._v(" "),e("li",[t._v("for")]),t._v(" "),e("li",[t._v("function")]),t._v(" "),e("li",[t._v("if")]),t._v(" "),e("li",[t._v("import")]),t._v(" "),e("li",[t._v("in")]),t._v(" "),e("li",[t._v("instanceof")]),t._v(" "),e("li",[t._v("new")]),t._v(" "),e("li",[t._v("return")]),t._v(" "),e("li",[t._v("super")]),t._v(" "),e("li",[t._v("switch")]),t._v(" "),e("li",[t._v("this")]),t._v(" "),e("li",[t._v("throw")]),t._v(" "),e("li",[t._v("try")]),t._v(" "),e("li",[t._v("typeof")]),t._v(" "),e("li",[t._v("var")]),t._v(" "),e("li",[t._v("void")]),t._v(" "),e("li",[t._v("while")]),t._v(" "),e("li",[t._v("with")]),t._v(" "),e("li",[t._v("yield")])]),t._v(" "),e("p",[t._v("为未来使用而保留的关键字")]),t._v(" "),e("ul",[e("li",[t._v("enum")])]),t._v(" "),e("p",[t._v("在严格模式下，还有一些额外的为了未来使用而保留的关键字")]),t._v(" "),e("ul",[e("li",[t._v("implements")]),t._v(" "),e("li",[t._v("interface")]),t._v(" "),e("li",[t._v("package")]),t._v(" "),e("li",[t._v("private")]),t._v(" "),e("li",[t._v("protected")]),t._v(" "),e("li",[t._v("public")]),t._v(" "),e("li",[t._v("static")])]),t._v(" "),e("h4",{attrs:{id:"关键字的使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关键字的使用"}},[t._v("#")]),t._v(" 关键字的使用")]),t._v(" "),e("p",[t._v("事实上关键字（保留字）是仅针对标识符（Identifier）的词法定义而言的，而不是标识符名（IdentifierName）的文法定义，例如下面的例子就不排斥关键字作为标识符名。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('a = { import: "test" }\na.import\na["import"]\n')])])]),e("p",[t._v("但是下面的就会报错，函数声明的标识符不能使用关键字")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("function import() {} // 报错\n")])])]),e("h3",{attrs:{id:"符号-punctuator"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#符号-punctuator"}},[t._v("#")]),t._v(" 符号 Punctuator")]),t._v(" "),e("p",[t._v("因为前面提到的除法和正则问题， "),e("code",[t._v("/")]),t._v(" 和 "),e("code",[t._v("/=")]),t._v(" 两个运算符被拆封为 DivPunctuator，因为前面提到的字符串模板问题， "),e("code",[t._v("}")]),t._v(" 也被独立拆分。加在一起，所有的符号为：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("\n{ ( ) [ ] . ... ; , < > <= >= == != === !== + - * % ** ++ -- << >> >>> & | ^ ! ~ && || ? : = += -= *= %= **= <<= >>= >>>= &= |= ^= => / /= }\n")])])]),e("h3",{attrs:{id:"数字直接量-numbericliteral"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数字直接量-numbericliteral"}},[t._v("#")]),t._v(" 数字直接量 NumbericLiteral")]),t._v(" "),e("p",[t._v("JavaScript 规范中规定的数字直接量可以支持四种写法：十进制数、二进制整数、八进制整数和十六进制整数。")]),t._v(" "),e("p",[t._v("十进制的 Number 可以带小数，小数点前后部分都可以省略，但是能同时省略。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(".01\n12.\n12.01\n\n12.toString() // 因为 12. 会被当作省略了小数点后面部分的数字，而单独看成一个整体，就会报错\n// 可以增加一个空格，让点单独成为一个 token，或者再加一个点。\n12 .toString()\n12..toString()\n")])])]),e("p",[t._v("十进制数直接量还支持科学计数法，这里的 e 后面部分，只允许使用整数。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("10.24E+2\n10.24e-2\n10.24e2\n")])])]),e("p",[t._v("十进制数直接量可以以 0 开头，但是如果 0 以后的最高位比 8 小，数值将会被认为是八进制，不会报错，但得到的值可能不是期望的。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// 谨慎使用 0 开头的数值：\n0888 // 转换为十进制 888\n0777 // 转换为八进制 777，十进制 511\n")])])]),e("p",[t._v("当以 0x 0b 0o 开头是，表示特定进制的整数，这几种进制都不支持小数，也不支持科学计数法。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("0xFA  //十六进制整数\n0o73  //八进制整数\n0b10000 //二进制整数\n")])])]),e("h3",{attrs:{id:"字符串直接量-stringliteral"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#字符串直接量-stringliteral"}},[t._v("#")]),t._v(" 字符串直接量 StringLiteral")]),t._v(" "),e("p",[t._v("字符串直接量支持单引号和双引号两种写法，区别仅仅是写法不同，在双引号字符串直接量中，双引号必须转义，在单引号字符串直接量中，单引号必须转义。字符串中其他必须转义的字符是 "),e("code",[t._v("\\")]),t._v(" 和所有的换行符。")]),t._v(" "),e("p",[t._v("JavaScript 中支持四种转义，"),e("strong",[t._v("单字符转义")]),t._v("有特别意义的字符包括 SingleEscapeCharacter 定义的 9 中。此外还有数字、x 和 u。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// 十六进制转义序列\n'\\xA9' //\"©\"\n\n// Unicode 转义序列\n'\\u00A9' //\"©\"\n\n// Unicode 编码转义\n'\\u{2F804}' //\"你\"\n")])])]),e("h3",{attrs:{id:"正则表达式直接量-regularexpressionliteral"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式直接量-regularexpressionliteral"}},[t._v("#")]),t._v(" 正则表达式直接量 RegularExpressionLiteral")]),t._v(" "),e("p",[t._v("正则表达式由 Body 和 Flags 两部分组成：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("/RegularExpressionBody/Flags\n")])])]),e("p",[t._v("其中 Body 部分至少有一个字符，以避免当成是行注释符号。第一个字符不能是 "),e("code",[t._v("*")]),t._v(" ，因为 "),e("code",[t._v("/*")]),t._v("跟多行注释有语法冲突。正则表达式有自己的语法规则，在词法阶段，仅会对它做简单解析。")]),t._v(" "),e("h3",{attrs:{id:"字符串模板"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#字符串模板"}},[t._v("#")]),t._v(" 字符串模板")]),t._v(" "),e("p",[t._v("模板就是一个有反引号括起来的，可以在中间插入代码的字符串。模板支持添加处理函数的写法，这时模板的各段会被拆开，传递给函数当参数：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('function f(){\n    console.log(arguments);\n}\n\nvar a = "world"\nvar b = "ha"\nf`Hello ${a}!${b}~`; //[["hello","!","~"],"word","ha"]\n\n')])])]),e("h2",{attrs:{id:"带注释的-ecmascript-5-1-规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#带注释的-ecmascript-5-1-规范"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"http://es5.github.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("带注释的 ECMAScript 5.1 规范"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"零宽非断行空格-零宽非连接符-零宽连接符的应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#零宽非断行空格-零宽非连接符-零宽连接符的应用"}},[t._v("#")]),t._v(" 零宽非断行空格，零宽非连接符，零宽连接符的应用")]),t._v(" "),e("ol",[e("li",[t._v("隐形水印（隐形指纹）")]),t._v(" "),e("li",[t._v("加密信息分享")]),t._v(" "),e("li",[t._v("逃脱敏感词过滤")])]),t._v(" "),e("p",[t._v("以下几篇文章是详细介绍：")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://juejin.cn/post/6844903669192720391",target:"_blank",rel:"noopener noreferrer"}},[t._v("零宽度字符：和谐？屏蔽？不存在的"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/yuanfux/zero-width-lib",target:"_blank",rel:"noopener noreferrer"}},[t._v("操作零宽字符的库"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.codesky.me/archives/be-careful-what-you-copy-invisibly-inserting-usernames-into-text-with-zero-width-characters.wind",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用零宽字符将用户名不可见的插入文本中"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.umpox.com/zero-width-detection/",target:"_blank",rel:"noopener noreferrer"}},[t._v("零宽字符的小 demo"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);v.default=a.exports}}]);