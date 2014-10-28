// doc ready function
$(function(){
	if (matchMedia) {
		var mq = window.matchMedia( "(max-width: 768px)" );
		mq.addListener(WidthChange);
		WidthChange(mq);
	}

	$(".nav-button").click(function() {
		$(".nav-links").slideToggle(500);
	});

	AboutLocalNav();

}); // doc ready function

// media query change
function WidthChange(mq) {
	if (mq.matches) { // window max is less than 768px
		$(".nav-button").show();
		$(".nav-links").hide();
	}
	else { // window max is greater than 768px
		$(".nav-button").hide();
		$(".nav-links").show();
	}
}

function AboutLocalNav() {
	$(".content").hide();
	$(".default-content").show();

	$(".local-nav li").click(function() {
		$(".content").hide();
		$(".local-nav li").removeClass("local-nav-active");
		$(this + " span").addClass("local-nav-arrow");
		$(this).addClass("local-nav-active");
	});
}