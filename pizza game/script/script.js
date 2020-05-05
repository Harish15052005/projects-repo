var startbtn = document.querySelector('.neonBtn');

var startOne = document.querySelector('.startOne');

var suace_menu = document.querySelector('.suace_menu');

var pizzabreadImg = document.querySelector('.pizzabreadImg');

var readyPizza = document.querySelector('.readyPizza');

var suace_tom = document.querySelector('.suace_tom');

var topping_menu =  document.querySelector('.Topping_menu')

var suace_tom_min = document.querySelector('.suace_tom_min');

var suace_tom_min_oni = document.querySelector('.suace_tom_min_oni');

var cheeseBtn = document.getElementById('cheese');

var cheese_menu = document.querySelector('.cheese_menu');

var suace_tom_green = document.querySelector('.suace_tom_green');

var sliced_cheese_res = document.querySelector('.sliced_cheese_res');

var sliced_cheese_menu =  document.querySelector('.sliced_cheese_menu');

var cube_chess_menu_res = document.querySelector('.cube_chess_menu_res');

var cube_chess_menu = document.querySelector('.cube_chess_menu');

var big_sliced_chees_menu_res = document.querySelector('.big_sliced_chees_menu_res');

var big_sliced_chees_menu = document.querySelector('.big_sliced_chees_menu');

var oni_chees_menu_res = document.querySelector('.oni_chees_menu_res');

var oni_chees_menu = document.querySelector('.oni_chees_menu');

var oli_topping_res = document.querySelector('.oli_topping_res');

var toppingBtn = document.getElementById('topping');

var Tom_topping_res = document.querySelector('.Tom_topping_res');

var tom_topping_menu = document.querySelector('.tom_topping_menu');

var oni_topping_res = document.querySelector('.oni_topping_res');

var oni_topping_menu = document.querySelector('.oni_topping_menu');

var OvenBtnxyz = document.getElementById('OvenBtnxyz')

var ClearTop = document.getElementById('ClearTop');

var cap_topping_res = document.querySelector('.cap_topping_res');

var cap_topping_menu = document.querySelector('.cap_topping_menu');

var oli_topping_menu = document.querySelector('.oli_topping_menu');

var cheeseToSuace = document.getElementById('cheeseToSuace');

var toppingTocheese = document.getElementById('toppingTocheese');

var meterFilling = document.querySelector('.meterFilling');

var ovenStop = document.querySelector('.ovenStop');

var demo = document.querySelector('.demo');

var ovenStart = document.querySelector('.ovenStart');

var meterFillingWidth = 100;

var shezwanChut_menu = document.querySelector('.shezwanChut_menu');

var para = document.querySelector('.Para')

var ovenMenu = document.querySelector('.oven'); 

var Mainpizzadiv = document.querySelector('.Mainpizzadiv');

// event lisnters

cube_chess_menu.addEventListener('click' , cube_chess_menu_res_res);

ovenStart.addEventListener('click' , startOven);

toppingTocheese.addEventListener('click' , toppingTocheese_fun)

cheeseToSuace.addEventListener('click' , cheeseToSuace_fun)

oli_topping_menu.addEventListener('click' , oli_topping_res_res)

ClearTop.addEventListener('click' , ClearTop_res);

oni_topping_menu.addEventListener('click' , oni_topping_res_res);

tom_topping_menu.addEventListener('click' , Tom_topping_res_res);

toppingBtn.addEventListener('click' , cheesemenudis)

oni_chees_menu.addEventListener('click' , oni_chees_menu_res_res)

big_sliced_chees_menu.addEventListener('click' , big_sliced_chees_menu_res_res);

sliced_cheese_menu.addEventListener('click' , sliced_cheese_res_res);

startbtn.addEventListener('click', start);

suace_tom.addEventListener('click' , suace_tomchange);

suace_tom_min_oni.addEventListener('click' , suace_tom_min_onichange);

suace_tom_min.addEventListener('click' , suace_tom_minchange);

suace_tom_green.addEventListener('click' , suace_tom_greenchange);

cheeseBtn.addEventListener('click' , suace_menudisnone);

cap_topping_res.addEventListener('click' , cap_topping_res_res);

OvenBtnxyz.addEventListener('click' , OvenDis)

// extra functions

function shezwanChut_menu_res(){
	
}

function OvenDis(){
	Mainpizzadiv.style.display = 'none';
	ovenMenu.style.display = 'inline-block';
}

function cheeseToSuace_fun(){
	suace_menu.style.display = 'inline-block';
	cheese_menu.style.display = 'none';
}
 
function toppingTocheese_fun(){

	cheese_menu.style.display = 'inline-block';
	topping_menu.style.display = 'none';
}

function Tom_topping_res_res(){
	
	Tom_topping_res.style.display = 'inline-block';
	cap_topping_menu.style.zIndex = '30';
	Tom_topping_res.style.zIndex = '60';
	oni_topping_res.style.zIndex = '30';
	oli_topping_res.style.zIndex = '30';
}

function oni_topping_res_res(){

	oni_topping_res.style.display = 'inline-block';
	cap_topping_menu.style.zIndex = '30';
	Tom_topping_res.style.zIndex = '30';
	oni_topping_res.style.zIndex = '60';
	oli_topping_res.style.zIndex = '30';
}

function cap_topping_res_res(){

	cap_topping_menu.style.display = 'inline-block';
	cap_topping_menu.style.zIndex = '60';
	Tom_topping_res.style.zIndex = '30';
	oni_topping_res.style.zIndex = '30';
	oli_topping_res.style.zIndex = '30';
}

function oli_topping_res_res(){
	oli_topping_res.style.display = 'inline-block';
	cap_topping_menu.style.zIndex = '30';
	Tom_topping_res.style.zIndex = '30';
	oni_topping_res.style.zIndex = '30';
	oli_topping_res.style.zIndex = '60';
}


function ClearTop_res(){

	Tom_topping_res.style.display = 'none';
	oni_topping_res.style.display = 'none';
	cap_topping_menu.style.display = 'none';
	oli_topping_res.style.display = 'none';
}

function suace_tomchange(){
		pizzabreadImg.src = "images/suace-tom-res.png"
	}

function suace_tom_min_onichange(){
		pizzabreadImg.src = "images/suace-tom-min-oni-res-main.png"
	}

function suace_tom_minchange(){
		pizzabreadImg.src = "images/suace-tom-min-res.png"
	}

function suace_tom_greenchange(){
		pizzabreadImg.src = "images/suace-tom-green-res.png"
	}

function suace_menudisnone(){
	suace_menu.style.display = 'none';
	cheese_menu.style.display = 'inline-block';
}

function sliced_cheese_res_res(){
	sliced_cheese_res.style.display = 'inline-block';
	cube_chess_menu_res.style.display = 'none';
	big_sliced_chees_menu_res.style.display = 'none';
	oni_chees_menu_res.style.display = 'none';
}

function cube_chess_menu_res_res(){
	sliced_cheese_res.style.display = 'none';
	cube_chess_menu_res.style.display = 'inline-block';
	big_sliced_chees_menu_res.style.display = 'none';
	oni_chees_menu_res.style.display = 'none';
}

function big_sliced_chees_menu_res_res(){
	sliced_cheese_res.style.display = 'none';
	cube_chess_menu_res.style.display = 'none';
	big_sliced_chees_menu_res.style.display = 'inline-block';
	oni_chees_menu_res.style.display = 'none';
}

function oni_chees_menu_res_res(){
	sliced_cheese_res.style.display = 'none';
	cube_chess_menu_res.style.display = 'none';
	big_sliced_chees_menu_res.style.display = 'none';
	oni_chees_menu_res.style.display = 'inline-block';
}

function cheesemenudis(){
	cheese_menu.style.display = 'none';
	topping_menu.style.display = 'inline-block';
}

// Main function

function startOven(){

	var xyz = setInterval(meterFillingWidthValue , 1000);

	function meterFillingWidthValue(){

		if (meterFillingWidth > 0) {
			meterFillingWidth -= 10;
	};

		meterFilling.style.left = "-" + meterFillingWidth + "%";

		if (meterFillingWidth == 30) {

		meterFilling.style.backgroundColor = 'red';
		para.innerText = "Quick, Stop The Oven";
	}

		if (meterFillingWidth == 0) {
			para.innerText = "Your Pizza Has burnt"
		}
}

ovenStop.addEventListener('click' , StopFun);

function StopFun(){

	clearInterval(xyz);
// readyPizza

	if (meterFillingWidth < 40 && meterFillingWidth > 0) {
			Mainpizzadiv.style.display = 'inline-block';
			ovenMenu.style.display = 'none';
			readyPizza.style.display = 'inline-block';
			topping_menu.style.display = 'none';
		};

	if (meterFillingWidth == 0) {
			para.innerText = "Restart Again"
		}

	if (meterFillingWidth > 30 && meterFillingWidth < 100) {
		Mainpizzadiv.style.display = 'inline-block';
		ovenMenu.style.display = 'none';
		topping_menu.style.display = 'none';
	};

}

};

function start(){

	startOne.style.display = 'none';
	pizzabreadImg.style.display = 'inline-block';
	window.setTimeout(suace_menudis , 600);

	function suace_menudis(){
		suace_menu.style.display = 'inline-block';
	}

}
