// nav scroll fadein/fadeout 
$(document).scroll(function(){
    var y = $(this).scrollTop();

    if (y > 10) {
      $('nav').addClass("scrolled");
    } else {
      $('nav').removeClass("scrolled");
    }

});

// hero, product images, and product feature animations
$(document).ready(function(){
	$('#hero-header').animate({'opacity':'1', 'margin-top':'150px'}, 700);

	setTimeout(function() {
      $('.test-go-moment-container').animate({'opacity':'1', 'margin-top':'65px'}, 500);
	}, 1700);

  // $('.sell-point-container').addClass('hidden').viewportChecker({
  //   classToAdd: 'visible animated fadeInLeft',
  //   offset: 100
  // });
});

$(".feature-container").hover(function(){

	$(this).children("div.feature-description").toggleClass("hovered");
});

$(document).ready(function() {
  function filterPath(string) {
  return string
    .replace(/^\//,'')
    .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
    .replace(/\/$/,'');
  }
  var locationPath = filterPath(location.pathname);
  var scrollElem = scrollableElement('html', 'body');
 
  $('a[href*=#]').each(function() {
    var thisPath = filterPath(this.pathname) || locationPath;
    if (  locationPath == thisPath
    && (location.hostname == this.hostname || !this.hostname)
    && this.hash.replace(/#/,'') ) {
      var $target = $(this.hash), target = this.hash;
      if (target) {
        var targetOffset = $target.offset().top;
        $(this).click(function(event) {
          event.preventDefault();
          $(scrollElem).animate({scrollTop: targetOffset}, 1000, function() {
            location.hash = target;
          });
        });
      }
    }
  });
 
  function scrollableElement(els) {
    for (var i = 0, argLength = arguments.length; i <argLength; i++) {
      var el = arguments[i],
          $scrollElement = $(el);
      if ($scrollElement.scrollTop()> 0) {
        return el;
      } else {
        $scrollElement.scrollTop(1);
        var isScrollable = $scrollElement.scrollTop()> 0;
        $scrollElement.scrollTop(0);
        if (isScrollable) {
          return el;
        }
      }
    }
    return [];
  }
});

function testGo() {
	var guestNumber = document.getElementById('test-go-moment-input').value;
	$.ajax({
		method: 'POST',
		url: 'http://revone-staging.herokuapp.com/app/guests',
		data: "guest[mobile_number]=" + guestNumber + "&guest[name]=test&visit[hotel_id]=2",
		success: function() {
			console.log('success');
      document.getElementById('test-go-moment-input').value="Thank You!"
		},
		failure: function() {
			console.log('fail');
		}
	});
}

 $(document).ready(function(){
  var cb = new Codebird;
    cb.setConsumerKey(
        "c24MYuRlBhQDtvtLeV29SIsg6", 
        "GHw4g6Jtoir3LFXXjexTReMZGfvGhIvQ7Wkr6OYaJao09pay5X"
      );
    cb.setToken(
      "46941458-cisCoyQUA7ZVjONfoXIJrphUAYSmVQtBlMtsbWlRt", 
      "4g7PmoBi7SIqM5bImGbyCK6qTwtYA6Q89r6qxCZ4EHN13"
      );

  var params = {
    screen_name: "GoMoment"
  };

  cb.__call(
    "statuses_userTimeline",
    params,
    function (reply) {
        console.log(reply);
        var tweetDiv1 = document.getElementById('recent-tweet1');
        var tweetDiv2 = document.getElementById('recent-tweet2');
        var tweetDiv3 = document.getElementById('recent-tweet3');
        var tweetDiv4 = document.getElementById('recent-tweet4');
        var tweetDiv5 = document.getElementById('recent-tweet5'); 
        tweetDiv1.innerHTML = reply[0].text;
        tweetDiv2.innerHTML = reply[1].text;
        tweetDiv3.innerHTML = reply[2].text;
        tweetDiv4.innerHTML = reply[3].text;
        tweetDiv5.innerHTML = reply[4].text;
    }
  );
});

