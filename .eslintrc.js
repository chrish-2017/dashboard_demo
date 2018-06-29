module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    // ecmaVersion: 6,
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ['plugin:vue/essential'],
  plugins: [
    'vue'
  ],
  rules: {
    //////////********************最佳实践********************//////////
    'accessor-pairs': 'off', // 强制 getter 和 setter 在对象中成对出现
    'array-callback-return': 'error', // 强制数组方法的回调函数中有 return 语句
    'block-scoped-var': 'error', // 强制把变量的使用限制在其定义的作用域范围内
    'complexity': 'off', // 指定程序中允许的最大环路复杂度
    'consistent-return': 'off', // 要求 return 语句要么总是指定返回的值，要么不指定
    'curly': [ 'error', 'multi-line' ], // 强制所有控制语句使用一致的括号风格
    'default-case': [ 'error', { commentPattern: '^no default$' }], // 要求 switch 语句中有 default 分支
    'dot-notation': [ 'error', { allowKeywords: true }], // 强制尽可能地使用点号
    'dot-location': 'off', // 强制在点号之前和之后一致的换行
    eqeqeq: [ 'error', 'allow-null' ], // 要求使用 === 和 !==
    'guard-for-in': 'off', // 要求 for-in 循环中有一个 if 语句
    'no-alert': 'error', // 禁用 alert、confirm 和 prompt
    'no-caller': 'error', // 禁用 arguments.caller 或 arguments.callee
    'no-case-declarations': 'error', // 不允许在 case 子句中使用词法声明
    'no-div-regex': 'off', // 禁止除法操作符显式的出现在正则表达式开始的位置
    'no-else-return': 'error', // 禁止 if 语句中 return 语句之后有 else 块
    'no-empty-function': [ 'error', {
      allow: [
        'arrowFunctions',
        'functions',
        'methods',
      ],
    }], // 禁止出现空函数
    'no-empty-pattern': 'error', // 禁止使用空解构模式
    'no-eq-null': 'off', // 禁止在没有类型检查操作符的情况下与 null 进行比较
    'no-eval': 'error', // 禁用 eval()
    'no-extend-native': 'error', // 禁止扩展原生类型
    'no-extra-bind': 'error', // 禁止不必要的 .bind() 调用
    'no-extra-label': 'error', // 禁用不必要的标签
    'no-fallthrough': 'error', // 禁止 case 语句落空
    'no-floating-decimal': 'error', // 禁止数字字面量中使用前导和末尾小数点
    'no-implicit-coercion': 'off', // 禁止使用短符号进行类型转换
    'no-implicit-globals': 'off', // 禁止在全局范围内使用变量声明和 function 声明
    'no-implied-eval': 'error', // 禁止使用类似 eval() 的方法
    'no-invalid-this': 'off', // 禁止 this 关键字出现在类和类对象之外
    'no-iterator': 'off', // 禁用 __iterator__ 属性
    'no-labels': [ 'error', { allowLoop: false, allowSwitch: false }], // 禁用标签语句
    'no-lone-blocks': 'error', // 禁用不必要的嵌套块
    'no-loop-func': 'error', // 禁止在循环中出现 function 声明和表达式
    'no-magic-numbers': 'off', // 禁用魔术数字
    'no-multi-spaces': 'error', // 禁止使用多个空格
    'no-multi-str': 'error', // 禁止使用多行字符串
    'no-native-reassign': 'error', //
    'no-new': 'off', // 禁止使用 new 以避免产生副作用
    'no-new-func': 'error', // 禁止对 Function 对象使用 new 操作符
    'no-new-wrappers': 'error', // 禁止对 String，Number 和 Boolean 使用 new 操作符
    'no-octal': 'error', // 禁用八进制字面量
    'no-octal-escape': 'error', // 禁止在字符串中使用八进制转义序列
    'no-param-reassign': 'off', // 禁止对 function 的参数进行重新赋值
    'no-proto': 'error', // 禁用 __proto__ 属性
    'no-redeclare': 'error', // 禁止多次声明同一变量
    'no-return-assign': 'error', // 禁止在 return 语句中使用赋值语句
    'no-script-url': 'error', // 禁止使用 javascript: url
    'no-self-assign': 'error', // 禁止自我赋值
    'no-self-compare': 'error', // 禁止自身比较
    'no-sequences': 'error', // 禁用逗号操作符
    'no-throw-literal': 'off', // 禁止抛出异常字面量
    'no-unmodified-loop-condition': 'off', // 禁用一成不变的循环条件
    'no-unused-expressions': 'off', // 禁止出现未使用过的表达式
    'no-unused-labels': 'error', // 禁用出现未使用过的标
    'no-useless-call': 'off', // 禁止不必要的 .call() 和 .apply()
    'no-useless-concat': 'error', // 禁止不必要的字符串字面量或模板字面量的连接
    'no-useless-escape': 'error', // 禁用不必要的转义字符
    'no-void': 'off', // 禁用 void 操作符
    'no-warning-comments': 'off', // 禁止在注释中使用特定的警告术语
    'no-with': 'error', // 禁用 with 语句
    radix: 'off', // 强制在parseInt()使用基数参数
    'vars-on-top': 'off', // 要求所有的 var 声明出现在它们所在的作用域顶部
    'wrap-iife': 'off', // 要求 IIFE 使用括号括起来
    yoda: 'error', // 要求或禁止 “Yoda” 条件
    //////////********************最佳实践********************//////////

    //////////********************错误********************//////////
    'comma-dangle': [ 'error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    }], // 要求或禁止末尾逗号
    'no-cond-assign': [ 'error', 'except-parens' ], // 禁止条件表达式中出现赋值操作符
    'no-console': 'off', // 禁用 console
    'no-constant-condition': 'error', // 禁止在条件中使用常量表达式
    'no-control-regex': 'error', // 禁止在正则表达式中使用控制字符
    'no-debugger': 'error', // 禁用 debugger
    'no-dupe-args': 'error', // 禁止 function 定义中出现重名参数
    'no-dupe-keys': 'error', // 禁止对象字面量中出现重复的 key
    'no-duplicate-case': 'error', // 禁止出现重复的 case 标签
    'no-empty': 'error', // 禁止出现空语句块
    'no-empty-character-class': 'error', // 禁止在正则表达式中使用空字符集
    'no-ex-assign': 'error', // 禁止对 catch 子句的参数重新赋值
    'no-extra-boolean-cast': 'error', // 禁止不必要的布尔转换
    'no-extra-parens': [ 'error', 'functions' ], // 禁止不必要的括号
    'no-extra-semi': 'error', // 禁止不必要的分号
    'no-func-assign': 'error', // 禁止对 function 声明重新赋值
    'no-inner-declarations': [ 'error', 'functions' ], // 禁止在嵌套的块中出现变量声明或 function 声明
    'no-invalid-regexp': 'error', // 禁止 RegExp 构造函数中存在无效的正则表达式字符串
    'no-irregular-whitespace': 'error', // 禁止在字符串和注释之外不规则的空白
    'no-negated-in-lhs': 'error', //
    'no-obj-calls': 'error', // 禁止把全局对象作为函数调用
    'no-regex-spaces': 'error', // 禁止正则表达式字面量中出现多个空格
    'no-sparse-arrays': 'error', // 禁用稀疏数组
    'no-unexpected-multiline': 'off', // 禁止出现令人困惑的多行表达式
    'no-unreachable': 'error', // 禁止在return、throw、continue 和 break 语句之后出现不可达代码
    'no-unsafe-finally': 'error', // 禁止在 finally 语句块中出现控制流语句
    'use-isnan': 'error', // 要求使用 isNaN() 检查 NaN
    'valid-jsdoc': [ 'error', {
      prefer: {
        returns: 'return',
      },
      requireReturn: false,
    }], // 强制使用有效的 JSDoc 注释
    'valid-typeof': 'off', // 强制 typeof 表达式与有效的字符串进行比较
    //////////********************错误********************//////////

    //////////********************es6********************//////////
    'arrow-body-style': 'off', // 要求箭头函数体使用大括号
    'arrow-parens': [ 'error', 'as-needed' ], // 要求箭头函数的参数使用圆括号
    'arrow-spacing': [ 'error', { before: true, after: true }], // 强制箭头函数的箭头前后使用一致的空格
    'constructor-super': 'off', // 要求在构造函数中有 super() 的调用
    'generator-star-spacing': [ 'error', { before: false, after: true }], // 强制 generator 函数中 * 号周围使用一致的空格
    'no-class-assign': 'error', // 禁止修改类声明的变量
    'no-confusing-arrow': [ 'error', {
      allowParens: true,
    }], // 禁止在可能与比较操作符相混淆的地方使用箭头函数
    'no-const-assign': 'error', // 禁止修改 const 声明的变量
    'no-dupe-class-members': 'error', // 禁止类成员中出现重复的名称
    'no-new-symbol': 'off', // 禁止 Symbolnew 操作符和 new 一起使用
    'no-this-before-super': 'error', // 禁止在构造函数中，在调用 super() 之前使用 this 或 super
    'no-useless-computed-key': 'error', // 禁止在对象中使用不必要的计算属性
    'no-useless-constructor': 'error', // 禁用不必要的构造函数
    'no-var': 'error', // 要求使用 let 或 const 而不是 var
    'object-shorthand': [ 'error', 'always', {
      avoidQuotes: true,
      ignoreConstructors: false,
    }], // 要求或禁止对象字面量中方法和属性使用简写语法
    'prefer-const': [ 'error', {
      destructuring: 'all',
      ignoreReadBeforeAssign: true,
    }], // 要求使用 const 声明那些声明后不再被修改的变量
    'prefer-reflect': 'off', //
    'prefer-rest-params': 'off', // 要求使用剩余参数而不是 arguments
    'prefer-spread': 'off', // 要求使用扩展运算符而非 .apply()
    'prefer-template': 'off', // 要求使用模板字面量而非字符串连接
    'require-yield': 'off', // 要求 generator 函数内有 yield
    'template-curly-spacing': 'error', // 要求或禁止模板字符串中的嵌入表达式周围空格的使用
    'yield-star-spacing': [ 'error', { before: false, after: true }], // 强制在 yield* 表达式中 * 周围使用空格
    //////////********************es6********************//////////

    //////////********************node********************//////////
    'callback-return': 'off', // 强制数组方法的回调函数中有 return 语句
    'global-require': 'off', // 要求 require() 出现在顶层模块作用域中
    'handle-callback-err': 'off', // 要求回调函数中有容错处理
    'no-mixed-requires': 'off', // 禁止混合常规变量声明和 require 调用
    'no-new-require': 'off', // 禁止调用 require 时使用 new 操作符
    'no-path-concat': 'off', // 禁止对 __dirname 和 __filename 进行字符串连接
    'no-process-env': 'off', // 禁用 process.env
    'no-process-exit': 'off', // 禁用 process.exit()
    'no-restricted-modules': 'off', // 禁用通过 require 加载的指定模块
    'no-sync': 'off', // 禁用同步方法
    //////////********************node********************//////////

    //////////********************风格********************//////////
    'array-bracket-spacing': [ 'error', 'always', {
      objectsInArrays: false,
      arraysInArrays: false,
    }], // 强制数组方括号中使用一致的空格
    'block-spacing': [ 'error', 'always' ], // 禁止或强制在代码块中开括号前和闭括号后有空格
    'brace-style': [ 'error', '1tbs', { allowSingleLine: true }], // 强制在代码块中使用一致的大括号风格
    camelcase: 'off', // 强制使用骆驼拼写法命名约定
    'comma-spacing': [ 'error', { before: false, after: true }], // 强制在逗号前后使用一致的空格
    'comma-style': [ 'error', 'last' ], // 强制使用一致的逗号风格
    'computed-property-spacing': 'off', // 强制在计算的属性的方括号中使用一致的空格
    'consistent-this': 'off', // 当获取当前执行环境的上下文时，强制使用一致的命名
    'eol-last': 'error', // 要求或禁止文件末尾存在空行
    'func-names': 'off', // 要求或禁止使用命名的 function 表达式
    'func-style': 'off', // 强制一致地使用 function 声明或表达式
    'id-blacklist': 'off', // 禁用指定的标识符
    'id-length': 'off', // 强制标识符的最小和最大长度
    'id-match': 'off', // 要求标识符匹配一个指定的正则表达式
    indent: [ 'error', 2, { SwitchCase: 1, VariableDeclarator: 1 }], // 强制使用一致的缩进
    'key-spacing': [ 'error', { beforeColon: false, afterColon: true }], // 强制在对象字面量的属性中键和值之间使用一致的间距
    'keyword-spacing': [ 'error', {
      before: true,
      after: true,
      overrides: {
        return: { after: true },
        throw: { after: true },
        case: { after: true },
      },
    }], // 强制在关键字前后使用一致的空格
    'linebreak-style': [ 'error', 'unix' ], // 强制使用一致的换行风格
    'lines-around-comment': 'off', // 要求在注释周围有空行
    'max-depth': 'off', // 强制可嵌套的块的最大深度
    'max-len': 'off', // 强制一行的最大长度
    'max-nested-callbacks': 'off', // 强制回调函数最大嵌套深度
    'max-params': 'off', // 强制函数定义中最多允许的参数数量
    'max-statements': 'off', // 强制函数块最多允许的的语句数量
    'max-statements-per-line': 'off', // 强制每一行中所允许的最大语句数量
    'new-cap': 'off', // 要求构造函数首字母大写
    'new-parens': 'error', // 要求调用无参构造函数时有圆括号
    'newline-after-var': 'off', //
    'newline-before-return': 'off', //
    'newline-per-chained-call': [ 'error', { ignoreChainWithDepth: 3 }], // 要求方法链中每个调用都有一个换行符
    'no-array-constructor': 'error', // 禁用 Array 构造函数
    'no-bitwise': 'error', // 禁用按位运算符
    'no-continue': 'off', // 禁用 continue 语句
    'no-inline-comments': 'off', // 禁止在代码后使用内联注释
    'no-lonely-if': 'off', // 禁止 if 作为唯一的语句出现在 else 语句中
    'no-mixed-spaces-and-tabs': [ 'error', false ], // 禁止空格和 tab 的混合缩进
    'no-multiple-empty-lines': [ 'error', { max: 2, maxEOF: 1 }], // 禁止出现多行空行
    'no-negated-condition': 'off', // 禁用否定的表达式
    'no-nested-ternary': 'off', // 禁用嵌套的三元表达式
    'no-new-object': 'error', // 禁用 Object 的构造函数
    'no-plusplus': 'off', // 禁用一元操作符 ++ 和 --
    'no-restricted-syntax': [
      2,
      'WithStatement',
    ], // 禁用特定的语法
    'no-spaced-func': 'error', //
    'no-ternary': 'off', // 禁用三元操作符
    'no-trailing-spaces': 'error', // 禁用行尾空格
    'no-underscore-dangle': 'off', // 禁止标识符中有悬空下划线
    'no-unneeded-ternary': 'error', // 禁止可以在有更简单的可替代的表达式时使用三元操作符
    'no-whitespace-before-property': 'error', // 禁止属性前有空白
    'object-curly-spacing': [ 'error', 'always' ], // 强制在大括号中使用一致的空格
    'object-property-newline': 'off', // 强制将对象的属性放在不同的行上
    'one-var': 'off', // 强制函数中的变量要么一起声明要么分开声明
    'one-var-declaration-per-line': [ 'error', 'always' ], // 要求或禁止在变量声明周围换行
    'operator-assignment': 'off', // 要求或禁止在可能的情况下使用简化的赋值操作符
    'operator-linebreak': 'off', // 强制操作符使用一致的换行符
    'padded-blocks': 'off', // 要求或禁止块内填充
    'quote-props': [ 'error', 'as-needed', { keywords: false }], // 要求对象字面量属性名称用引号括起来
    quotes: [ 'error', 'single', { avoidEscape: true }], // 强制使用一致的反勾号、双引号或单引号
    'require-jsdoc': 'off', // 要求使用 JSDoc 注释
    semi: [ 'error', 'always' ], // 要求或禁止使用分号代替 ASI
    'semi-spacing': [ 'error', { before: false, after: true }], // 强制分号之前和之后使用一致的空格
    'sort-vars': 'off', // 要求同一个声明块中的变量按顺序排列
    'space-before-blocks': 'error', // 强制在块之前使用一致的空格
    'space-before-function-paren': [ 'error', {
      anonymous: 'never',
      named: 'never',
    }], // 强制在 function的左括号之前使用一致的空格
    'space-in-parens': [ 'error', 'never' ], // 强制在圆括号内使用一致的空格
    'space-infix-ops': 'error', // 要求操作符周围有空格
    'space-unary-ops': [ 'error', {
      words: true,
      nonwords: false,
    }], // 强制在一元操作符前后使用一致的空格
    'spaced-comment': [ 'error', 'always', {
      exceptions: [ '-', '+' ],
      markers: [ '*!' ],
    }], // 强制在注释中 // 或 /* 使用一致的空格
    'wrap-regex': 'off', // 要求正则表达式被括号括起来
    //////////********************风格********************//////////

    //////////********************变量********************//////////
    'init-declarations': 'off', // 要求或禁止 var 声明中的初始化
    'no-catch-shadow': 'off', // 禁止 catch 子句的参数与外层作用域中的变量同名
    'no-delete-var': 'error', // 禁止删除变量
    'no-label-var': 'error', // 不允许标签与变量同名
    'no-restricted-globals': 'off', // 禁用特定的全局变量
    'no-shadow': 'off', // 禁止变量声明与外层作用域的变量同名
    'no-shadow-restricted-names': 'error', // 禁止将标识符定义为受限的名字
    'no-undef': 'error', // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
    'no-undef-init': 'error', // 禁止将变量初始化为 undefined
    'no-undefined': 'off', // 禁止将 undefined 作为标识符
    'no-unused-vars': [ 'error', { vars: 'local', args: 'after-used' }], // 禁止出现未使用过的变量
    'no-use-before-define': [ 'error', 'nofunc' ], // 禁止在变量定义之前使用它们
    //////////********************变量********************//////////
  }
};
