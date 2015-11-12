$(document).ready(function() {
  var inspire_url = 'http://localhost:3000'

  // REGISTER REQUEST
  $("#register").on('submit', function(event) {
    event.preventDefault();

    $.ajax({
      method: 'POST',
      url: inspire_url + '/register',
      data: {
        credentials: {
          email: $('#email').val(),
          password: $('#password').val(),
          password_confirmation: $('#password_confirmation').val()
        }
      }
    }).done(function(){
      $("#register").hide();
      $(".complete-registration").fadeIn();
    }).fail(function(){
      console.log("error");
    });
  });

  // LOGIN REQUEST
  $("#login").on('submit', function(event) {
    $.ajax({
      method: 'POST',
      url: inspire_url + '/login',
      data: {
        credentials: {
          email: $('#user_email').val(),
          password: $('#user_password').val()
        }
      }
    }).done(function(){
      $("#login").hide();
      $("#logout").show();
    }).fail(function(){
      console.log("error");
    });
  });
});
