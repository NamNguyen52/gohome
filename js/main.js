 $(document).scroll(function(){
    var y = $(this).scrollTop();

    if (y > 200) {
      $('nav').addClass("scrolled");
    } else {
      $('nav').removeClass("scrolled");
    }
});