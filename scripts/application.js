$(document).ready(function(){

  $("#open-register").on('click', function(event){
    $(".register-wrapper").fadeIn(350);
  });

  $(".close").on('click', function(event){
    $(".register-wrapper").fadeOut(350);
  });

  $("#profile").on('click', function(event){
    $(".user-profile").show();
  })

});
