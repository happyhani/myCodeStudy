function test(a: string, b?: string, c:string="jojo") {
    console.log(a);
    console.log(b);
    console.log(c);
    
}
test('xxx', 'yyy', 'zzz');
test('xxx','yyy');

//c:string="jojo" 默认参数值要放到最后面。 c:any 任意类型
//a: string,参数类型是string。在变量后，方法后（代表返回值），方法参数后声明。
//b?: string,b参数是可选的。
//可选参数和默认参数需要在必选参数后面