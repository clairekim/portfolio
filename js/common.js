$(document).ready(function() {
	
	// Init Skrollr
    var mySkrollr = skrollr.init({
		forceHeight: false	
	});
	
	// 플러그인 적용
	$(".gnb").navMover({
		duration : 700,
		sectionName: '.content > section'   //class, id, element
	});	

	//상단으로 이동
	$("#quick > a, h1 > a").click(function() {
		$("html, body").animate({scrollTop:$("#page0").offset().top}, 700, "easeInOutCubic");
		return false;
	});
	
	// top quick
	$(window).scroll(function() {
		go_top();
	});
	function go_top() {
		var locate = $(window).scrollTop();
		var wHeight = $(window).height();
		if (locate < wHeight) {
			$("#quick").css("visibility","hidden");
		} else if (locate >= wHeight){
			$("#quick").css("visibility","visible");
		}
	}
	
});




			


