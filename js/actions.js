// $("button").click(function(){
//   $("p").toggle();
// });

// doc ready function
$(function(){
	if (matchMedia) {
		var mq = window.matchMedia( "(max-width: 768px)" );
		mq.addListener(WidthChange);
		WidthChange(mq);
	}

	$(".menu-button").click(menu);

}); // doc ready function

// media query change
function WidthChange(mq) {
	if (mq.matches) { // window max is less than 768px
		$(".menu-button").show();
		$(".nav-links").hide();
	}
	else { // window max is greater than 768px
		$(".menu-button").hide();
		$(".nav-links").show();
	}
}

function menu() {
	$(".nav-links").show();
}