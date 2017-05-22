(function($){ 

	function NavMover(selector, options){
		//프로퍼티 생성
		this.$nav = null;
		this.$section = null;

		this.init(selector, options);
		//this.navMove();
		//this.scrollMove();
	}
	//요소초기화 
	NavMover.prototype.init = function(selector, options){
		this.$nav =  $(selector).children();
		this.$section = $( options.sectionName );		
		var objThis = this; 

		//네비 클릭
		this.$nav.on('click focusin', 'a', function() { 
			$(this).parent().addClass('on').siblings().removeClass('on');
			var i = $(this).parent().index();
			var secTopPos = objThis.$section.eq(i).offset().top - options.topMargin;
			$("html, body").stop().animate({scrollTop:secTopPos}, options.duration, options.easing);
			return false;
		});

		//윈도우 스크롤 이동시
		$(window).scroll(function(i) {
			var scT = $(window).scrollTop();
			var winHalf = $(window).outerHeight() / 2;
			var pos = 0;
			//console.log(objThis.$section)
			objThis.$section.each(function(i){
				pos = $(this).offset().top - options.topMargin - winHalf ;
				if(scT >= pos){
					objThis.$nav.eq(i).addClass('on').siblings().removeClass('on');	
				}
			});	
		});
	}

	//메서드
	// NavMover.prototype.navMove = function(){ }
	// NavMover.prototype.scrollMove = function(){ }

	$.defaultOptions = {
		duration : 500,
		easing: "easeInOutCubic",
		sectionName : "section",
		topMargin : 0
	}
	$.fn.navMover = function(options){
        options = $.extend(null, $.defaultOptions, options);
		this.each(function(index){ 
			var navMover = new NavMover(this, options); 
		});
		return this;
	}

})($);