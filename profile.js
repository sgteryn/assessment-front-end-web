function clickColor(evt) {
	evt.preventDefault();
	
	alert("Green like money, limes and leaves on trees.");
}

function clickPlace(evt) {
	evt.preventDefault();
	
	alert("Anywhere near a beach, water is so calming to me.");
}

function clickRitual(evt) {
	evt.preventDefault();
	
	alert("Pray. Can I get and AMEN?!");
}

// function clickLinkdIn(evt) {
// 	evt.preventDefault()
// }

let favColor = document.querySelector('#color');
favColor.addEventListener("click", clickColor);

let favPlace = document.querySelector('#place');
favPlace.addEventListener("click", clickPlace);

let favRitual = document.querySelector('#ritual');
favRitual.addEventListener("click", clickRitual);