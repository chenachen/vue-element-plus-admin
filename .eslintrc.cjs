/* eslint-disable no-magic-numbers */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const prettierConfig = require('./.prettierrc.cjs')

module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/vue3-essential',
        '@vue/eslint-config-prettier',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'vue'],
    rules: {
        'prettier/prettier': ['error', prettierConfig],
        'vue/multi-word-component-names': 'off',
        'vue/html-indent': [
            'error',
            4,
            {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: [],
            },
        ],
        indent: [
            // 4个空格缩进
            'error',
            4,
        ],
        'linebreak-style': ['error', 'unix'],
        quotes: [
            // 单引号
            'error',
            'single',
        ],
        semi: [
            // 分号结束
            'error',
            'never',
        ],
        'no-promise-executor-return': 'error', // promise不能返回值
        'no-self-compare': 'error', // 不能和自己对比
        'arrow-body-style': ['error', 'as-needed'], // 只能判断是否省略{}
        camelcase: [
            // 强制驼峰命名
            'error',
            { properties: 'always' },
        ],
        curly: 'error', // if不能省略 {}
        'default-param-last': 'error', // 默认参数放最后
        eqeqeq: 'error', // 需要用三个等号
        'guard-for-in': 'error', // for in 需要判断hasOwnProperty
        'max-lines-per-function': ['error', 40], // 函数最大40行
        'max-params': ['error', 3], // 函数最大三个参数，更多参数考虑合并
        'no-confusing-arrow': 'error', // 禁止使用比较容易混淆的箭头
        'no-else-return': 'error', // if return 了就不允许用else
        'no-empty-function': 'error', // 禁止空函数
        'no-empty-static-block': 'error', // 禁止空块
        'no-eval': 'error', // 禁止使用eval
        'no-extra-label': 'error', // 禁止使用不必要的label
        'no-labels': 'error', // 禁止使用label
        'no-lonely-if': 'error', // 禁止只有单独的if逻辑
        'no-magic-numbers': [
            // 禁止魔数
            'error',
            {
                ignore: [0, 1], // 忽略01，
                ignoreArrayIndexes: true, // 忽略数组索引
                ignoreDefaultValues: true, // 忽略默认参数
                enforceConst: true, // 用const声明
            },
        ],
        'no-multi-assign': 'error', // 不要链式声明赋值
        'no-mixed-operators': 'error', // 禁止混合二元运算符
        'no-multi-str': 'error', // 字符串不要换行
        'no-undef-init': 'error', // 不要给变量赋值为undefined
        'no-var': 'error', // 不要用var
        'prefer-arrow-callback': 'error', // 回调函数用箭头函数，避免this心智负担
        'prefer-const': 'error', // 不重新赋值的变量用const
        'prefer-destructuring': [
            // 强制对象解构，数组可以不用
            'error',
            {
                object: true,
                array: false,
            },
        ],
        'prefer-template': 'error', // 优先使用模板字符串
        'quote-props': ['error', 'as-needed'], // 引用时在需要的时候加上""
        'arrow-parens': ['error', 'as-needed'], // 箭头函数需要的时候才加括号
        'arrow-spacing': 'error', // 箭头函数前后需要空格
        'block-spacing': ['error', 'always'], // 块需要空格
        'brace-style': 'error', // 只能使用one true brace style风格
        'comma-spacing': 'error', // 逗号前面不给空格，后面必须有
        'computed-property-spacing': 'error', // 计算属性不给有空格
        'comma-style': 'error',
        'dot-location': ['error', 'property'], // 成员表达式中的点应该和属性部分在同一行
        'func-call-spacing': 'error', // 函数调用括号不要有空格
        'function-paren-newline': ['error', 'never'], // 配置了最大三个参数，就别换行了
        'key-spacing': [
            'error',
            {
                mode: 'strict', // 在对象字面的冒号前后强制执行一个空格
            },
        ],
        'keyword-spacing': 'error', // 关键字前后必须有空格
        'no-multi-spaces': 'error', // 不要多余空格
        'no-multiple-empty-lines': 'error', // 不要多余空行
        'no-trailing-spaces': 'error', // 行尾不要有空格
        'no-whitespace-before-property': 'error', // 不允许在圆点周围或开头的括号前有空白
        'no-tabs': 'error',
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                prev: '*',
                next: 'return', // return之前有空格
            },
        ],
        'space-infix-ops': 'error', // 运算符前后需要空格
        'wrap-iife': ['error', 'inside'],
    },
}
