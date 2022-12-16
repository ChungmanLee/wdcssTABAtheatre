// form validation of event page
function validateForm(){
	var x = document.forms["myForm"]["name"].value;
	if (x == null || x == "" || x == "Enter your full name")
	{
	alert("Your name must be filled out");
	return false;
	}
	
	var x = document.forms["myForm"]["e-mail"].value;
	if (x == null || x == "" || x == "example@gmail.com")
	{
	alert("E-mail must be filled out");
	return false;
	}

	var x = document.forms["myForm"]["event"].value;
	if (x == "Select Event")
	{
	alert("Event must be selected");
	return false;
	}

	var x = document.forms["myForm"]["date"].value;
	if (x == null || x == "")
	{
	alert("Date must be selected");
	return false;
	}
	
	var x = document.forms["myForm"]["members"].value;
	if (x < 1)
	{
	alert("Members must be more than 1");
	return false;
	}
}


//typying animation
const content = "egistration"
const text = document.querySelector("#typing-reg")
let index = 0;

function typing(){
	text.textContent += content[index++];
	if (index >content.length){
		text.textContent = "R"
		index=0;
	}
}

setInterval(typing, 250)

//scroll animation
let observer = new IntersectionObserver((e)=>{
	e.forEach((box)=>{
		if(box.isIntersecting){
			box.target.style.opacity = 1;
		} else{
			box.target.style.opacity = 0;
		}
	})
})

let div = document.querySelectorAll(".img-evt")
observer.observe(div[0])
observer.observe(div[1])
observer.observe(div[2])
observer.observe(div[3])
observer.observe(div[4])
observer.observe(div[5])
observer.observe(div[6])