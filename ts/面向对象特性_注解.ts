//注解annotation
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app works!';
}
当前文件名app.component.ts里面有AppComponent类。

@Component是类AppComponent本身有的一个注解。注解本身是由angular2提供的，注解有3个属性，告诉angular2怎么来处理AppComponent这个ts的类。
当在angualr2框架中去实例化一个AppComponent类时，angualr2应该去加载app.component.html和app.component.css展示在页面中

app.component.html中是<h1>{{title}}</h1>
所以打开页面时，页面上显示app works!这行字。

注解是告诉框架怎么来处理程序的元素。这里的元素是一个类，注解还可以在属性上，方法上。
