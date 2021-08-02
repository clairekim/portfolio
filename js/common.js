$(document).ready(function() {	
	
	// 제작 플러그인 적용, 섹션이동
	$(".gnb").navMover({
		duration : 700,
		sectionName: '.content > section', //class, id, element
		topMargin : 80
	});

	//포트폴리오 스와이퍼
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

	//quick/로고 상단이동
	$(".quick-top a, .logo a").on('click', function(e) {
		e.preventDefault();
		$("html, body").animate({scrollTop:0}, 500, "easeInOutCubic");
		return false;
	});
	
	//quick 나타나기/감추기
	$(window).scroll(function() {
		var locate = $(this).scrollTop();
		var wHeight = $(window).height();
		if (locate < wHeight) {
			$(".quick-top").css("visibility","hidden");
		} else if (locate >= wHeight){
			$(".quick-top").css("visibility","visible");
		}
	});	

	//히스토리, 스크롤 애니메이션 
	$(window).on('scroll', function(){
		var screenQuarter = ($(window).height()/4)*3;
		var scrollPos = $(window).scrollTop() + screenQuarter;
		$('.list-history li').each(function(index){
			var liPos = $(this).offset().top;			
			if( !$(this).hasClass('open') && scrollPos >= liPos) {
				$(this).addClass('open');
			}
		});
	});	
	
});




			


