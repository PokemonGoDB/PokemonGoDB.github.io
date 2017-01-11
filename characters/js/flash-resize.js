function setFlashWidth(divid, newW){
	document.getElementById(divid).style.width = newW+"px";
}
function setFlashHeight(divid, newH){
	document.getElementById(divid).style.height = newH+"px";
}
function setFlashSize(divid, newW, newH){
	setFlashWidth(divid, newW);
	setFlashHeight(divid, newH);
}
