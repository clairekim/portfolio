(function($){ 
	$.defaultOptions = {
		duration : 500,
		easing: "easeInOutCubic",
		sectionName : "section"
	}
	$.fn.navMover = function(options){
        options = $.extend(null, $.defaultOptions, options);
		this.each(function(index){

			var gnbH = $('.site-header').height();
			var $nav = $(this).children(); 
			var $section = $( options.sectionName );

			$nav.on('click focusin', 'a', function() { 
				$(this).parent().addClass('on').siblings().removeClass('on');
				var i = $(this).parent().index();
				var secTopPos = $section.eq(i).offset().top - gnbH;
				$("html, body").stop().animate({scrollTop:secTopPos}, options.duration, options.easing);
				return false;
			});	

			$(window).scroll(function() {
				var scT = $(window).scrollTop();
				var pos = 0;
				$section.each(function(i){
					pos = Math.round( $section.eq(i).offset().top - gnbH );
					if(scT >= pos){
						$nav.eq(i).addClass('on').siblings().removeClass('on');	
					}
				});	
			});

		});
		return this;
	}
})($)





	



			


