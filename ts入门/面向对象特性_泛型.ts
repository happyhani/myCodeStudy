//泛型generic

class Person {
	
	constructor(public name:string) {

	}
	eat() {
		console.log('im eating');
	}
}

class Employee extends Person {
	constructor(name: string, code: string) {
		super(name);
		console.log(this.code)
	}
	code: string;
	
	work() {
		super.eat();
		this.doWork();
	}
	private doWork() { 
		console.log('im working')
	}
}
var e1 = new Employee('name');
var workers: Array<Person> = [];//<Person>是Array的泛型
workers[0] = new Person('zhangsan');
workers[1] = new Employee('list', '1');
















