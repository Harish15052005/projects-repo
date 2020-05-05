	setInterval(function(){

		var hr = document.querySelector('.hr');
		var mm = document.querySelector('.mm');
		var sec = document.querySelector('.sec');

		var date = new Date();
		var hour = date.getHours() * 30 + "deg";
		var min = date.getMinutes() * 6 + "deg";
		var ss = date.getSeconds() * 6 + "deg";

		hr.style.transform = "rotate("+hour+")" ;
		mm.style.transform = "rotate("+min+")" ;
		sec.style.transform = "rotate("+ss+")" ;
		
		},1000);