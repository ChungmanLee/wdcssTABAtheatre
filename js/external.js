const stage = document.querySelector('.stage');
const seats = document.querySelectorAll('.row .seat:not(.reserved');
const count = document.getElementById('count');
const total = document.getElementById('total');
const prfrmSelect = document.getElementById('prfrm');
populateUI();
let ticketPrice = +prfrmSelect.value;
// Save selected performance index and price
function setPrfrmData(prfrmIndex, prfrmPrice) {
	localStorage.setItem('selectedPrfrmIndex', prfrmIndex);
	localStorage.setItem('selectedPrfrmPrice', prfrmPrice);
}
// update total and count
function updateSelectedCount() {
	const selectedSeats = document.querySelectorAll('.row .seat.selected');
	const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));
	localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
	//copy selected seats into arr
	// map through array
	//return new array of indexes
	const selectedSeatsCount = selectedSeats.length;
	count.innerText = selectedSeatsCount;
	total.innerText = selectedSeatsCount * ticketPrice;
}
// get data from localstorage and populate ui
function populateUI() {
	const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
	if(selectedSeats !== null && selectedSeats.length > 0) {
		seats.forEach((seat, index) => {
			if(selectedSeats.indexOf(index) > -1) {
				seat.classList.add('selected');
			}
		});
	}
	const selectedPrfrmIndex = localStorage.getItem('selectedPrfrmIndex');
	if(selectedPrfrmIndex !== null) {
		prfrmSelect.selectedIndex = selectedPrfrmIndex;
	}
}
// Performance select events
prfrmSelect.addEventListener('change', (e) => {
	ticketPrice = +e.target.value;
	setPrfrmData(e.target.selectedIndex, e.target.value);
	updateSelectedCount();
});
// Seat click event
stage.addEventListener('click', (e) => {
	if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved')) {
		e.target.classList.toggle('selected');
		updateSelectedCount();
	}
});
// intial count and total
updateSelectedCount();

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