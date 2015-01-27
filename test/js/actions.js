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

	
}); // doc ready function

// media query change
function WidthChange(mq) {
	if (mq.matches) { // window max is less than 768px
		$(".nav-button").show();
		$(".nav-links").hide();
		
		$(".local-nav").hide();
		$(".content").show();

		$("#calendar-large").hide();
		$("#calendar-small").show();
	}
	else { // window max is greater than 768px
		$(".nav-button").hide();
		$(".nav-links").show();

		$(".local-nav").show();
		AboutLocalNav();

		$("#calendar-large").show();
		$("#calendar-small").hide();
	}
}

function AboutLocalNav() {
	$(".content").hide();
	$(".default-content").show();

	$(".local-nav li").click(function() {
		$(".content").hide();
		$(".local-nav li").removeClass("local-nav-active");
		$(".local-nav li span").html("&nbsp;&nbsp;");

		var id = $(this).attr('id');

		$("#" + id).addClass("local-nav-active");
		$("#" + id + " span").html("<");
		$("." + id + "-content").show();
	});
}