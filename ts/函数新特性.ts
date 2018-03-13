//Rest and Spread 操作符
//第一种用法
function fn1(...args){
    args.forEach(function (arg) {
        console.log(arg)
    })
}
fn1(1,2,3)

fn1(4,5,6,7,8,1,2,3)

//编译成js后
//function fn1() {
//  var args = [];
//  for (var _i = 0; _i < arguments.length; _i++) {
//      args[_i] = arguments[_i];
//  }
//  args.forEach(function (arg) {
//      console.log(arg);
//  });
//}
//fn1(1, 2, 3);

//第二种，是第一种反过来用
function fn1(a,b,c){
	console.log(a);	
	console.log(b);
	console.log(c);	
}

var args = [1,2];
fn1(...args);

var args1 = [5,6,7,8,9];
fn1(...args1);

//编译成js后
//function fn1(a, b, c) {
//  console.log(a);
//  console.log(b);
//  console.log(c);
//}
//var args = [1, 2];
//fn1.apply(void 0, args);
//var args1 = [5, 6, 7, 8, 9];
//fn1.apply(void 0, args1);




// destructuring 析构表达式

function getStock(){
	return {
		code: 'IBM',
		price:100,
		name:{
			name1:100,
			name2:200
		}
	}	
}
//取出code的值存到codex变量中
var { code:codex, price, name:{name1} } = getStock();
console.log( codex );
console.log( price );
console.log( name1 );

//数组的析构
var array1 = [1, 2, 3, 4];


function dosome([number1,number2,...others]) {
	console.log(number1);//1
	console.log(number2);//2
	console.log(others);//array中有3 4
}
dosome(array1);



//generator函数
function* getStockPrice(stock){
	
	while(true){ 
		
		yield 	Math.random()*100;
	}
}

var priceGenerator = getStockPrice('IBM');

var limitPrice  =15;

var price = 100;

while(price > limitPrice){
	price = priceGenerator.next().value;
	console.log(`the generator return ${price}`);
	
}
console.log(`buying at ${price}`)






