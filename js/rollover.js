function smartRollover() {  
	if(document.getElementsByTagName) {  
		var images = document.getElementsByTagName("img");  
		for(var i=0; i < images.length; i++) {
			try{
			  if(images[i].getAttribute("src").match("_off.")) 
				  {  
					  images[i].onmouseover = function() {  
					  this.setAttribute("src", this.getAttribute("src").replace("_off.", "_on."));  
				  }
				  images[i].onmouseout = function() {  
					  this.setAttribute("src", this.getAttribute("src").replace("_on.", "_off."));  
				  }  
			  }
			}catch(e){
				//getAttributeで取得する属性が無かった場合、nullが返ってきてエラーになる為回避
			}
		}  
	}  
}  
if(window.addEventListener) {  
	window.addEventListener("load", smartRollover, false);  
}  
else if(window.attachEvent) {  
	window.attachEvent("onload", smartRollover);  
}