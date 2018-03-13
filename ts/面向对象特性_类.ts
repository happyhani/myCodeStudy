//类的声明 访问控制符
class Person {
	public name;// 默认的 外部可以访问
	
	private name;//私有属性，类的内部使用。外部不可以访问
	
	protected name;//受保护的。在类中 和继承的子类中被访问。外部不可以

	eat() {
		console.log(im eating);
	}

}


//类的构造函数 是一个特殊的方法。 类在实例化的时候调用，而且只被调用一次
class Person {
	constructor(public name:string) {//这里需要明确声明访问控制符
	//如果不写，相当于Person类中没有name属性
	}
	eat() {
		console.log(this.name);
	}
}
var p1 = new Person('batman');
p1.eat();
//在外部无法调用，只有在实例化构造函数时用。在调用构造函数时必须传入参数

//类的继承
//extends关键字声明继承关系，Employee继承了Person的属性和方法
class Employee extends Person {
	constructor(name: string, code: string) {
		super(name);//调用父类的构造函数
		console.log(this.code)
	}
	code: string;
	
	work() {
		//调用父类其他方法用super.
		super.eat();
		this.doWork();
	}
	private doWork() {  //为了让员工先吃饱在干活，设置成私有函数。让外部无法调用
		console.log('im working')
	}
}
var e1 = new Employee('name');

e1.work();













