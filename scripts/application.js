$(document).ready(function(){

  $(".page-content").show();
  $(".edit-profile").hide();

  $("#home").on('click', function(event){
    $(".page-content").show();
    $(".user-profile").hide();
    $(".explore-profiles").hide();
    $(".explore-photos").hide();
  });

  $("#open-register").on('click', function(event){
    $(".register-wrapper").fadeIn(350);
  });

  $(".close").on('click', function(event){
    $(".register-wrapper").fadeOut(350);
  });

  $(".edit-profile").on('click', function(event){
    $("#edit-profile").show();
  });

  $("#profiles").on('click', function(event){
    $(".page-content").hide();
    $(".user-profile").hide();
    $(".explore-profiles").show();
  })

});
