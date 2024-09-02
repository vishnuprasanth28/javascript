function checkString(str){
	if(str===null || str===undefined || str.substring(0,2)==="Py"){
		return str;
	}
	else{
		return "cy"+str;
	}
}
console.log(checkString("cycle"));
console.log(checkString("cle"));