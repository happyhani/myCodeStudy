typings

*.d.ts 文件

比如在ts中用jquery等框架。
index.d.ts文件中会把$ export出去

DefinitelyTyped在github中有几乎所有的js的类型定义文件
在jquery.d.ts中：
declare module "jquery" {
    export = $;
}
declare var jQuery: JQueryStatic;
declare var $: JQueryStatic;

github上有一个工具typings是专门安装类型定义文件的。