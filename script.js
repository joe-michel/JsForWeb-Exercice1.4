
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/

document.querySelector(".display").addEventListener("click", ()  => {
	let year = parseInt(document.querySelector(".year").value);
	let month = parseInt(document.querySelector(".month").value);
	let day = parseInt(document.querySelector(".day").value);
	let age = 2019 - year;
	if(month > 1){
		age = age - 1;
	}
	else if(day > 23){
		age = age - 1;
	}
	document.querySelector(".yourAge").innerText = "Congratulation you're " + age + " years old !";
});
