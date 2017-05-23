(function($){
	function NavMover(selector, options){
		//프로퍼티 생성
		this.$nav = null;
		this.$section = null;

		this.init(selector, options);
		this.navMove();
		this.scrollMove();
	}
	//요소초기화 : this. 붙여주기 ->  NavMover의 속성임을 지정
	NavMover.prototype.init = function(selector, options){
		this.$nav =  $(selector).children();
		this.$section = $( options.sectionName );		
		this.$options = options; 
	}

	//메서드 : this의 scope에 유의
	NavMover.prototype.navMove = function(){	
		var objThis = this; //메서드 안에서의 this는 메서드를 가진 객체. cf) 메서드 내부 중첩함수에서 this -> window
		//네비 클릭
		this.$nav.eq(0).addClass('on');
		this.$nav.on('click focusin', 'a', function() { 
			$(this).parent().addClass('on').siblings().removeClass('on');
			var i = $(this).parent().index();
			var secTopPos = objThis.$section.eq(i).offset().top - objThis.$options.topMargin;
			$("html, body").stop().animate({scrollTop:secTopPos}, objThis.$options.duration, objThis.$options.easing);
			return false;
		});

	 }
	NavMover.prototype.scrollMove = function(){ 
		var objThis = this;
		//윈도우 스크롤 이동시
		$(window).scroll(function() {
			var scT = $(window).scrollTop();
			var winHalf = $(window).outerHeight() / 2;
			var pos = 0;
			objThis.$section.each(function(i){
				pos = $(this).offset().top - objThis.$options.topMargin - winHalf;
				if(scT >= pos){
					objThis.$nav.eq(i).addClass('on').siblings().removeClass('on');	
				}
			});	
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