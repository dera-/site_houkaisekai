function dropDownEvent(){
	var content = document.getElementsByClassName("dropdown-menu");
	var isOpened = content[0].style.display === "block";
	if(isOpened) content[0].style.display = "none";
	else content[0].style.display = "block";
}

function showStory(num){
	document.getElementsByClassName("dropdown-menu")[0].style.display = "none";
	$.ajax( {
        url: 'story/section'+num+'.json',
        complete: function( data ) {
        	var json = eval('('+data.responseText+')');
			$('#story > .panel-heading').text(json["title"]);
			$('#story > .panel-body').html(json["content"].split("\n").join("<br>"));
        }
    } );
}