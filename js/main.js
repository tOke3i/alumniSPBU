$(window).load(function(){
	$('.grid').isotope({
		itemSelector: '.grid-item',
		/*layoutMode: 'fitRows',*/
		percentPosition: true,
		masonry: {
			columnWidth: '.grid-sizer'
		}
	});


	$('.grid-news').isotope({
		itemSelector: '.grid-news-item-wrap',
		// layoutMode: 'fitRows',
		percentPosition: true,
		masonry: {
			columnWidth: '.grid-sizer-news'
		}
	});
});
$(document).ready(function ($) {

	//developer funcitons
	// pageWidget(['index', 'blog', 'news','news_2','news_3', 'about_us', 'contact', 'gallery', 'job','webcasts','webcasts_2','404','university_page','partners', 'communities', 'patrons','donations','user','search-user']);
	// getAllClasses('html','.elements_list');

	//select
	$('.custom-select').selectric({
		onClose: function(select, element) {
			if (element.state.selectedIdx != 0){
					$(this).parents('.selectric-custom-select').find('.selectric').addClass('white-selected');
			}else {
					$(this).parents('.selectric-custom-select').find('.selectric').removeClass('white-selected');
			}
		},
		onInit: function(select, element) {
			if (element.state.selectedIdx != 0){
					$(this).parents('.selectric-custom-select').find('.selectric').addClass('white-selected');
			}else {
					$(this).parents('.selectric-custom-select').find('.selectric').removeClass('white-selected');
			}
		}
	});
	//fancybox
	$(".fancybox").fancybox({
		'padding': 0,
		helpers: {
        overlay: {
           locked: false
        }
    }
	});

	//radio
	  $('input[type="radio"].custom_r,input[type="checkbox"].custom_r').iCheck({
         radioClass: 'radio_custom',
         checkboxClass: 'checkbox_custom'
    });

	//date picker
	$( ".datepicker" ).datepicker();
	//exit-menu
	$('.main-menu__wrapper .exit-menu').on('click',function(e){
			e.preventDefault();
			$(this).parents('.main-menu__wrapper').hide();
	});
	//show-menu
	$('.show-menu-btn').on('click',function(e){
			e.preventDefault();
			$('.main-menu__wrapper').show();
	});
	




	$('.events-slider').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
                    slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 650,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
    $('.main_slider-wrapper').slick({
		// autoplay: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
    });
//	sidebar slider
	$(".sidebar-slider").slick({
		dots: true,
		controls: 'hide'
		});
//	burger
	$('#burger-mobile').on('click', function(){

		$('#nav').slideToggle();
		$(this).find('.burgerline').eq(1).slideToggle();
		event.preventDefault();
	});

	//profile page script
	$('.profile-user__wrapper .list-graduate__user .more').on('click',function(e){
		e.preventDefault();
		var $LineWrapper = $(this).parents('.list-graduate__user').find('.line-js-wrapper');
		if ($(this).hasClass('open')) {
			$(this).removeClass('open').html('<i class="fa fa-angle-down" aria-hidden="true"></i>');
			$LineWrapper.slideUp(500);
		} else {
			$(this).addClass('open').html('<i class="fa fa-angle-up" aria-hidden="true"></i>');
			$LineWrapper.slideDown(500);
		}
	});

	$('.profile-user__wrapper .wrapper__item-profile .item-prof .title').each(function(){
			var $LineWrapper = $(this).parents('.item-prof').find('.wrapper-line');
			if ($(this).hasClass('open')){
					$LineWrapper.slideDown(500);
			}
	});

	$('.profile-user__wrapper .wrapper__item-profile .item-prof .title').on('click',function(e){
			e.preventDefault();
			var $LineWrapper = $(this).parents('.item-prof').find('.wrapper-line');
			if ($(this).hasClass('open')){
				$(this).removeClass('open');
				$LineWrapper.slideUp(500);
			}else {
				$(this).addClass('open');
				$LineWrapper.slideDown(500);
			}
	});

});


//doc ready ends

$(document).ready(function(){
	$('#burger-mobile').click(function(){
		$(this).toggleClass('open');
	});
});


//BANNERS
$(document).ready(function(){
if ($('.banner-wrap-all-pg').length){
	var bgImageUrl = $(".banner-wrap-all-pg").attr('data-img');
	$(".banner-wrap-all-pg").backstretch(bgImageUrl);
	}
});





//CALENDAR STARTS

function Calendar2(id, year, month) {
	var Dlast = new Date(year,month+1,0).getDate(),
		D = new Date(year,month,Dlast),
		DNlast = new Date(D.getFullYear(),D.getMonth(),Dlast).getDay(),
		DNfirst = new Date(D.getFullYear(),D.getMonth(),1).getDay(),
		calendar = '<tr>',
		month=["Января","Февраля","Марта","Апреля","Мая","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря"];
	if (DNfirst != 0) {
		for(var  i = 1; i < DNfirst; i++) calendar += '<td>';
	}else{
		for(var  i = 0; i < 6; i++) calendar += '<td>';
	}
	for(var  i = 1; i <= Dlast; i++) {
		if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
			calendar += '<td class="today">' + i;
		}else{
			calendar += '<td>' + i;
		}
		if (new Date(D.getFullYear(),D.getMonth(),i).getDay() == 0) {
			calendar += '<tr>';
		}
	}
	for(var  i = DNlast; i < 7; i++) calendar += '<td>&nbsp;';
	document.querySelector('#'+id+' tbody').innerHTML = calendar;
	document.querySelector('#'+id+' thead td:nth-child(2)').innerHTML = month[D.getMonth()] +' '+ D.getFullYear();
	document.querySelector('#'+id+' thead td:nth-child(2)').dataset.month = D.getMonth();
	document.querySelector('#'+id+' thead td:nth-child(2)').dataset.year = D.getFullYear();
	if (document.querySelectorAll('#'+id+' tbody tr').length < 6) {  // чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
		document.querySelector('#'+id+' tbody').innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
	}
	function currentday() {
		var dates = new Date();
		var dayInMonth = dates.getDate();
		var monthtoday = dates.getMonth();
		var yearnow = dates.getFullYear();
		document.getElementById("currentdate").innerHTML = dayInMonth +' '+ month[monthtoday]+ " "+ yearnow ;

	}
	currentday();

}
if ($('#calendar-evets-pg').length){
	Calendar2("calendar2", new Date().getFullYear(), new Date().getMonth());


// переключатель минус месяц
document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(1)').onclick = function() {
	Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month)-1);
}
// переключатель плюс месяц
document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(3)').onclick = function() {
		Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month)+1);
	}

$('.mobile-toggle-calendar').on("click", function(){
	$('#calendar2').slideToggle();
	$('#currentdate').toggleClass('toggle-calendar');
});
}
//CALENDAR ENDS


//TABS
$(function () {

	var activeIndex = $('.active-tab').index(),
		$contentlis = $('.tabs-content .tabs-content__item'),
		$tabslis = $('.tabs li');

	$contentlis.eq(activeIndex).show();

	$('.tabs').on('click', 'li', function (e) {
		var $current = $(e.currentTarget),
			index = $current.index();

		$tabslis.removeClass('active-tab');
		$current.addClass('active-tab');
		$contentlis.hide().eq(index).show();
	});
});
