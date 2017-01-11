$(document).ready(function(){
	
	// Opens Search
	$(document).on('click', '.open-search', function(){
		$('#search').stop().slideToggle();
	});
	
	// Opens Main Nav
	$(document).on('click', '.open-menu', function(){
		$('.header-nav + ul').stop().slideToggle();
	});
	
	$(document).on('click', '#nav-sec', function(e){
		if($(this).offset().left == 0){
			$(this).removeClass('opened');
		}
		else{
			$(this).addClass('opened');
		}
	})
	
	function subOpen(target){
		target.toggleClass('open').siblings('ul').slideToggle();
	}

	$(document).on('click', '.nav-main ul span, #footer-inner-shell ul span', function(){
		subOpen($(this));
	});
});
