$(document).ready(function() {	
	
	// 플러그인 적용
	$(".gnb").navMover({
		duration : 700,
		sectionName: '.content > section', //class, id, element
		topMargin : 80
	});	

	// Init Skrollr
    var mySkrollr = skrollr.init({
		forceHeight: false	
	});

	//quick/로고 상단이동
	$("#quick > a, h1 > a").click(function() {
		$("html, body").animate({scrollTop:0}, 500, "easeInOutCubic");
		return false;
	});
	
	//quick 나타나기
	$(window).scroll(function() {
		var locate = $(this).scrollTop();
		var wHeight = $(window).height();
		if (locate < wHeight) {
			$("#quick").css("visibility","hidden");
		} else if (locate >= wHeight){
			$("#quick").css("visibility","visible");
		}
	});	
	
});




			


