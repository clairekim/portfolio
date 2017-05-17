(function($){ 
	$.defaultOptions = {
		duration : 500,
		easing: "easeInOutCubic",
		sectionName : "section",
		topMargin : 0
	}
	$.fn.navMover = function(options){
        options = $.extend(null, $.defaultOptions, options);
		this.each(function(index){
			
			var $nav = $(this).children(); 
			var $section = $( options.sectionName );	

			//네비 클릭시
			$nav.on('click focusin', 'a', function() { 
				$(this).parent().addClass('on').siblings().removeClass('on');
				var i = $(this).parent().index();
				var secTopPos = $section.eq(i).offset().top - options.topMargin;
				$("html, body").stop().animate({scrollTop:secTopPos}, options.duration, options.easing);
				return false;
			});	

			//윈도우 스크롤 이동시
			$(window).scroll(function() {
				var scT = $(window).scrollTop();
				var winHalf = $(window).outerHeight() / 2;
				var pos = 0;
				$section.each(function(i){
					pos = Math.round( $section.eq(i).offset().top - options.topMargin - winHalf );
					if(scT >= pos){
						$nav.eq(i).addClass('on').siblings().removeClass('on');	
					}
				});	
			});

		});
		return this;
	}
})($);