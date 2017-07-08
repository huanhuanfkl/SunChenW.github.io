// JavaScript Document
function list(id){
	var Tag=document.getElementById(id);
	if(!Tag.getElementsByClassName){
	Tag.getElementsByClassName = function(className, element){
		var children = (Tag).getElementsByTagName('div');
		var elements = new Array();
		for (var i=0; i<children.length; i++){
			var child = children[i];
			var classNames = child.className.split(' ');
			for (var j=0; j<classNames.length; j++){
				if (classNames[j] == className){ 
					elements.push(child);
					break;
				}
			}
		} 
		return elements;
	};
}
	var TagsTit=Tag.getElementsByClassName("nt")[0].getElementsByTagName('span');
	var TagsCnt=Tag.getElementsByClassName("nc")[0].getElementsByTagName("ul");
				var len=TagsTit.length; 
				var flag=0;//修改默认值
				for(i=0;i<len;i++){
					TagsTit[i].value = i;
					TagsTit[i].onmouseover=function(){changeNav(this.value)}; 
					TagsCnt[i].style.display='none';					
				}
				TagsTit[flag].className='topC1';
				TagsCnt[flag].style.display='block';
				function changeNav(v){	
					TagsTit[flag].className='topC0';
					TagsCnt[flag].style.display='none';
					flag=v;	
					TagsTit[v].className='topC1';
					TagsCnt[v].style.display='block';
				}
}