$( document ).ready(function() {

  $(".lookbooks").on("mouseenter", function () {
    var bgChange = $(this).data("bg"); 
    console.log("click");
    $(".lookbook-bg").find(".active").removeClass("active");
    $(".lookbook-bg").find("." + bgChange ).addClass("active");
  });


  $("#js-open-m-nav").on("click", function() {
      $("#js-open-m-nav").removeClass("active");
      $(".nav-links").addClass("open-m-nav");
      $("#js-close-m-nav").addClass("active");
      $(".m-header").addClass("active");
  });

  $("#js-close-m-nav").on("click", function() {
      $(".nav-links").removeClass("open-m-nav");
      $("#js-open-m-nav").addClass("active");
      $("#js-close-m-nav").removeClass("active");
      $(".m-header").removeClass("active");
  });

  $('#home-carousel').carousel();

});