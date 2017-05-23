(function($){
	function NavMover(selector, options){
		//프로퍼티 생성
		this.$nav = null;
		this.$section = null;
		this.init(selector, options);
	}
	//초기화
	NavMover.prototype.init = function(selector, options){
		//프로퍼티 초기화
		this.$nav =  $(selector).children();
		this.$section = $( options.sectionName );		
		this.$options = options; 

		//메서드 초기화
		var objThis = this; //메서드 안에서의 this는 메서드를 가진 객체. cf) 메서드 내부 중첩함수에서 this -> window
		this.$nav.on('click focusin', 'a', function(){ //네비 클릭
			objThis.navMove($(this));
		});		
		$(window).scroll( function(){//윈도우 스크롤 이동시
			objThis.scrollMove(objThis);
		});
	}

	//메서드 : this의 scope에 유의
	NavMover.prototype.navMove = function($navMenu){	
		$navMenu.parent().addClass('on').siblings().removeClass('on');
		var i = $navMenu.parent().index();
		var secTopPos = this.$section.eq(i).offset().top - this.$options.topMargin;
		$("html, body").stop().animate({scrollTop:secTopPos}, this.$options.duration, this.$options.easing);
		return false;
	 }
	NavMover.prototype.scrollMove = function(objThis){
		var scT = $(window).scrollTop();
		var winHalf = $(window).outerHeight() / 2;
		var pos = 0;
		this.$section.each(function(i){
			pos = $(this).offset().top - objThis.$options.topMargin - winHalf;
			if(scT >= pos){
				objThis.$nav.eq(i).addClass('on').siblings().removeClass('on');	
			}
		});
	}

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