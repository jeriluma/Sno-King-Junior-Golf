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

	// $(".local-nav li").click(function() {
	// 	$(".content").hide();
	// 	if($(this).hasClass("local-nav-active")) {
	// 		$(this).removeClass("local-nav-active");
	// 	}
	// 	$(this).find("span").removeClass("local-nav-arrow");
	// });


	$(".philosophy").click(function() {
		$(".content").hide();
		$(".local-nav li").removeClass("local-nav-active");
		$(".philosophy").addClass("local-nav-active");
		
		$(".local-nav li span").html("&nbsp;&nbsp;");
		$(".philosophy span").html("<");
		$(".philosophy-content").show();
	});

	$(".curriculum").click(function() {
		$(".content").hide();
		$(".local-nav li").removeClass("local-nav-active");
		$(".curriculum").addClass("local-nav-active");
		
		$(".local-nav li span").html("&nbsp;&nbsp;");
		$(".curriculum span").html("<");
		$(".curriculum-content").show();
	});

	$(".requirement").click(function() {
		$(".content").hide();
		$(".local-nav li").removeClass("local-nav-active");
		$(".requirement").addClass("local-nav-active");
		
		$(".local-nav li span").html("&nbsp;&nbsp;");
		$(".requirement span").html("<");
		$(".requirement-content").show();
	});

	$(".cost").click(function() {
		$(".content").hide();
		$(".local-nav li").removeClass("local-nav-active");
		$(".cost").addClass("local-nav-active");
		
		$(".local-nav li span").html("&nbsp;&nbsp;");
		$(".cost span").html("<");
		$(".cost-content").show();
	});
}