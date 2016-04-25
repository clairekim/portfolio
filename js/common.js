$(document).ready(function() {
	
	// Init Skrollr
    var mySkrollr = skrollr.init({
		forceHeight: false	
	});
	
	
	//GNB
	var gnbH = $('.site-header').height();
	$(".gnb li a").on('click focusin', function() { 
		$(this).parent().addClass('on').siblings().removeClass('on');	
		var goPage = $(this).attr("href");
		$("html, body").animate({scrollTop:$(goPage).offset().top - gnbH}, 700, "easeInOutCubic");
		return false;
	});	
	//GNB 스크롤 연결
	$(window).scroll(function() {
		var scT = $(window).scrollTop();			
		var about = $('#page0').outerHeight()-gnbH-1;
		var skill = about + $('#page1').outerHeight();
		var port = skill + $('#page2').outerHeight();
		var contact = port + $('#page3').outerHeight();	
		gnbGo();	
		function gnbGo(){  
			if(scT < about){
				$(".gnb li").removeClass('on');
			}else if(scT >= about && scT < skill  ){
				$(".gnb li").eq(0).addClass('on').siblings().removeClass('on');
			}else if(scT >= skill && scT < port){
				$(".gnb li").eq(1).addClass('on').siblings().removeClass('on');
			}else if(scT >= port && scT < contact){
				$(".gnb li").eq(2).addClass('on').siblings().removeClass('on');
			}else{
				$(".gnb li").eq(3).addClass('on').siblings().removeClass('on');
			}
		}
	});	
	// top quick
	$(window).scroll(function() {
		go_top();
	});
	$("#quick > a, h1 > a").click(function() {
		$("html, body").animate({scrollTop:$("#page0").offset().top}, 700, "easeInOutCubic");
		return false;
	});

	function go_top() {
		var locate = $(window).scrollTop();
		if (locate < 900) {
			$("#quick").css("visibility","hidden");
		} else if (locate >= 900){
			$("#quick").css("visibility","visible");
		}
	}
	
});




			


