var EventUtil = {
		addHandler:function(element,type,handler){             //'click'
			if (element.addEventListener) {
				element.addEventListener(type,handler,false);  //'click'
			}else if(element.attachEvent){
				element.attachEvent('on'+type,handler);    		//'onclick'
			}else {
				element['on'+type] = handler;
			}
		},
		removeHandler:function(element,type,handler){
			if (element.removeEventListener) {
				element.removeEventListener(type,handler,false);  //'click'
			}else if(element.detachEvent){
				element.detachEvent('on'+type,handler);    		//'onclick'
			}else {
				element['on'+type] = null;
			}
		} 
};