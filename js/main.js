 $(document).scroll(function(){
    var y = $(this).scrollTop();

    if (y > 50) {
      $('nav').addClass("scrolled");
    } else {
      $('nav').removeClass("scrolled");
    }
});