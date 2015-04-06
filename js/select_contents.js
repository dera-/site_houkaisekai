function selectContent(id){
	var tabs     = document.getElementById("contents-tabs").getElementsByTagName("li");
	var contents = document.getElementById("contents").getElementsByClassName("panel");
	for(var i=0; i<tabs.length; i++){
		if(i == id){
			contents[i].style.display = 'block';
			tabs[i].className = 'active';
		}
		else{
			contents[i].style.display = 'none';
			tabs[i].className = null;
		}
	}
}