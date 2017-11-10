//接口Interface
//用法一：作为一个方法的参数 接口声明属性
interface IPerson {
	name: string;
	age: number
}

class Person {
	
	constructor(public config: IPerson) {
		
	}
	
}
var p1 = new Person({  //满足接口的所有属性
	name: 'zhangsan',
	age: 18
});
//用法二： 接口声明方法
interface Animal {
	eat();
}

class Sheep implements Animal {//一个类实现Animal接口
	eat() {
		console.log('i eat grass');
	}
}

class Tiger implements Animal {//一个类实现Animal接口
	eat() {
		console.log('i eat meat');
	}
}












