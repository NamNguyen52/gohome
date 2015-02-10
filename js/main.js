$(document).scroll(function(){
    var y = $(this).scrollTop();

    if (y > 10) {
      $('nav').addClass("scrolled");
    } else {
      $('nav').removeClass("scrolled");
    }

});

$(document).ready(function(){

	$('#hero-header').animate({'opacity':'1', 'margin-top':'150px'}, 700, 'easeOutExpo');

	setTimeout(function() {
      $('.test-go-moment-container').animate({'opacity':'1', 'margin-top':'65px'}, 700, 'easeOutExpo');
	}, 1300);
});

$(".feature-container").hover(function(){

	$(this).children("div.feature-description").toggleClass("hovered");
});

$(window).scroll(function(){

	var iphoneImageHeight = $('.iphone-image').height();
	var windowHeight = $(window).height();
	var heightThreshhold = 350;
	var heightDiff = (windowHeight - iphoneImageHeight) + heightThreshhold;

	if ($(window).scrollTop() >= heightDiff) {
		$('.iphone-image').animate({'opacity':'1', 'margin-left':'-50px'},600, 'easeOutExpo');
		$('.iphone-gomoment-image').animate({'opacity':'1', 'margin-left':'20px'},600, 'easeOutExpo');
		$('#sell-point-1').animate({'opacity':'1','margin-top':'-350px'},600, 'easeOutExpo');
	}

});

$(window).scroll(function(){

	var imacImageHeight = $('.imac-image').height();
	var windowHeight = $(window).height();
	var heightThreshhold = 850;
	var heightDiff = (windowHeight - imacImageHeight) + heightThreshhold;

	if ($(window).scrollTop() >= heightDiff) {
		$('.imac-image').animate({'opacity':'1','margin-left':'20px'}, 600, 'easeOutExpo');
		$('.imac-gomoment-image').animate({'opacity':'1','margin-left':'43px'}, 600, 'easeOutExpo');
		$('#sell-point-2').animate({'opacity':'1', 'margin-top':'-250px'}, 600, 'easeOutExpo');
	}
});

function testGo() {
	var guestNumber = document.getElementById('test-go-moment-input').value;
	var hotelId = 100;
	$.ajax({
		method: 'POST',
		url: 'http://rev1.gomoment.com/app/guests',
		data: JSON.stringify({
			'mobile_number': guestNumber,
			'hotel_id':'100',
			'guest_name':'test guest'
		}),
		success: function() {
			console.log('success');
		},
		failure: function() {
			console.log('fail');
		}
	});
}

