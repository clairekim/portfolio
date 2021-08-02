$(document).ready(function() {	
	
	// 제작 플러그인 초기화, 섹션이동
	$(".gnb").navMover({
		duration : 700,
		sectionName: '.content > section', //class, id, element
		topMargin : 80
	});

	//스와이퍼 초기화
	var portSwiper = new Swiper('.port .swiper-container', {
		slidesPerView: 1,
		slidesPerGroup:1,
		spaceBetween: 10,
		navigation: {
		  nextEl: $('.port').find('.btn-arrow-next'),
		  prevEl: $('.port').find('.btn-arrow-prev'),
		},
		pagination: {
		  el: $(this).find('.swiper-pagination'),
		  clickable: true,
		},
		breakpoints: {
		  750: {
			slidesPerView: 3.2,
			slidesPerGroup:3.2,
		  },
		  480: {
			slidesPerView: 2.2,
			slidesPerGroup:2.2,
		  }
		}
	  });

	//quick/로고 이동
	var $quickTop = $(".quick-top");
	$quickTop.on("click", "a", function(e) {
		e.preventDefault();
		$("html, body").animate({scrollTop:0}, 500, "easeInOutCubic");
	});
	
	//quick 나타나기/감추기
	$(window).scroll(function() {
		var locate = $(this).scrollTop();
		var wHeight = $(window).height();
		if (locate < wHeight) {
			$quickTop.css("visibility","hidden");
		} else if (locate >= wHeight){
			$quickTop.css("visibility","visible");
		}
	});	

	//스크롤 반응 애니메이션 
	$(window).on('scroll', function(){
		var screenQuarter = ($(window).height()/4)*3;
		var scrollPos = $(window).scrollTop() + screenQuarter;
		var $lstHistory = $('.list-history');
		$lstHistory.find('li').each(function(){
			var liPos = $(this).offset().top;			
			if( !$(this).hasClass('open') && scrollPos >= liPos) {
				$(this).addClass('open');
			} else if ( $(this).hasClass('open') && scrollPos < liPos ) {
				$(this).removeClass('open');
			}
		});
	});	
	
});




			


