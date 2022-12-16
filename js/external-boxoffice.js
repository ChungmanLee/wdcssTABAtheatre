// boxoffice
function required(){
	var empt = document.forms["query"]["firstname"].value;
	if (empt == "")
	{
		alert("Please enter your first name");
		return false;
	}
	else{
		alert("Your query is sent!");
		return true;
	}
}