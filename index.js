var slideIndex = 0;
var party = 2;



$(document).ready(function(){
  carousel()
  function carousel() {
    var i;
    var x = document.getElementsByClassName("slides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 1000); // Change image every 2 seconds
  }

  $('.tab').on('click', function(){
    var $tab = $(this);
    var index = $tab.index()-1;
    var $content = $('.content').eq(index);

    if(!$tab.hasClass('active')){
      $tab.addClass('active');
      $tab.siblings().removeClass('active');
      $content.addClass('active');
      $content.siblings().removeClass('active');
    }
  })

  $('.nav').on('click', function(){
    $(".splash").css("display", "none");
    $("header").css("margin-top", "0");
    var $tab = $(this);
    console.log($tab)
    var index = $tab.index();
    console.log(index)
    var $content = $('.content').eq(index);
    console.log($content)

    if(!$tab.hasClass('active')){
      $tab.addClass('active');
      $tab.siblings().removeClass('active');
      $content.addClass('active');
      $content.siblings().removeClass('active');
    }
  })
})
