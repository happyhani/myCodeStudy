//箭头函数用于匿名表达式   会解决传统匿名函数中this关键字所带来的问题
function Get(name){
	this.name = name;
	setInterval(function(){
		console.log(this.name)
	},1000);
}
var get = Get('haha')

function Get1(name){
	this.name = name;
	setInterval( () => {
		console.log(this.name)
	},1000);
}
var get1 = Get1('haha')

//forEach  for in  for of
var array1=[1,2,3,4,5];
array1.destc = 'five number' //typescript不允许这么写
//不支持在循环中打断 break不能用，而且会忽略属性值array1.destc
array1.forEach( value=>console.log(value));
for(var n in array1){
	//遍历出key 包括destc属性
}
for(var n of array1){
	//直接遍历出value  忽略array1.destc 支持break
	if(n>2){
		break;
	}
}






