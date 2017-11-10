window.onload = function(){
	var oDiv = document.getElementById("div1");
	var oNext = document.getElementById("next");
	var oPrev = document.getElementById("prev");
	var oUl = document.getElementById("ul1");
	var oList = document.getElementById("list");
	var buttons = oList.getElementsByTagName('li');
	var animated = false;
	var index = 1;
	
	function showButton(){
		for(var i=0; i<buttons.length;i++){
			if(buttons[i].className == 'active'){
				buttons[i].className = '';
				break;
			}
		}
		buttons[ index-1 ].className = 'active';
	}
	
	function animate(offset){
//		animated = true;
		var newLeft = parseInt(oUl.style.left) + offset;
		oUl.style.left = newLeft +'px';
		if( parseInt(oUl.style.left )< -500*4 ){
			oUl.style.left = -500+'px';
		}else if(parseInt(oUl.style.left ) > -500){
			oUl.style.left = -500*4+'px';
		}
			
	}
	
	
	oNext.onclick = function(){
		index++;
		if( index >4 ){
			index = 1;
		}
		showButton();
		//oUl.style.left = -500*index+"px";
		if(!animated){
			animate(-500);
		}
	}
	oPrev.onclick = function(){
		index--;
		if( index < 1 ){
			index = 4;
		}
		showButton();
		//oUl.style.left = -500*index+"px";
		if(!animated){
			animate(500);
		}
	}
	
	for(var i=0;i<buttons.length;i++){
		buttons[i].onclick = function(){
			if(this.className == 'active'){
				return;
			}
			var myIndex = parseInt(this.getAttribute('index'));
			index = myIndex;
			oUl.style.left = -500*index+"px";
			showButton();
		}
	}
	
	function play(){
		timer = setInterval(function(){next.onclick();},2000);
		
	}
	
	function stop(){
		clearInterval(timer);
	}
	
	oDiv.onmouseover = stop;
	oDiv.onmouseout = play;
	play();
	
	
	//setInterval(animate,2000);	
}