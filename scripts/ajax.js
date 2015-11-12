$(document).ready(function() {
  var inspire_url = 'http://localhost:3000';
  var token = '';
  var id = '';
  var image_id = '';

  $("#profile").hide();

  // REGISTER REQUEST
  $("#register").on('submit', function(event) {
    event.preventDefault();

    $.ajax({
      method: 'POST',
      url: inspire_url + '/register',
      data: JSON.stringify({
        credentials: {
          email: $('#email').val(),
          password: $('#password').val(),
          password_confirmation: $('#password_confirmation').val()
        }
      }),
      contentType: 'application/json'
    }).done(function(){
      $("#register").hide();
      $(".complete-registration").fadeIn();
    }).fail(function(){
      console.log("error");
    });
  });

  // LOGIN REQUEST
  $("#login").on('submit', function(event) {
    event.preventDefault();
    $.ajax({
      method: 'POST',
      url: inspire_url + '/login',
      data: JSON.stringify({
        credentials: {
          email: $('#user_email').val(),
          password: $('#user_password').val()
        }
      }),
      contentType: 'application/json'
    }).done(function(data){
      $("#login").hide();
      $("#open-register").hide();
      $("#logout").show();
      $("#profile").show();
      token = data.user.token;
      id = data.user.id;
    }).fail(function(){
      console.log("error");
    });
  });

  // LOGOUT REQUEST
  $("#logout").on('click', function(event){
    $.ajax({
      method: 'DELETE',
      url: inspire_url + '/logout/' + id,
      headers: {
        Authorization: 'Token token=' + token
      }
    }).done(function(){
      $("#login").show();
      $("#open-register").show();
    }).fail(function(){
      console.log("error");
    })
  });

  // 'GET' /profiles REQUEST
  $("#profiles").on('click', function(event){
    $.ajax({
      method: 'GET',
      url: inspire_url + '/profiles',
      contentType: 'application/json'
    }).done(function(data){
      console.log("success");
    }).fail(function(){
      console.log("error");
    })
  });

  // 'POST' /profiles REQUEST
  $('#create-profile').on('submit', function(e){
    e.preventDefault();
    var reader = new FileReader();

    reader.onload = function(event){
      $.ajax({
        url: inspire_url + '/profiles',
        method: 'POST',
        data: { profile: {
          first_name: $('#first-name').val(),
          last_name: $('#last-name').val(),
          description: $("#description").val(),
          profile_picture: event.target.result,
          user_id: id
        } },
        headers: {
          Authorization: 'Token token=' + token
        }
      }).done(function(data){
        console.log('Success');
      }).fail(function(response){
        console.error('Whoops!');
      })
    };

    $fileInput = $('#profile-picture');
    reader.readAsDataURL($fileInput[0].files[0]);

  });

  // 'GET' /profiles/id REQUEST
  // $("").on('click', function(event){
    // $.ajax({
      // method: 'GET',
      // url: inspire_url + '/profiles/' + id,
      // headers: {
        // Authorization: 'Token token=' + token
      // },
      // contentType: 'application/json'
    // }).done(function(){
      // console.log("success");
    // }).fail(function(){
      // console.log("error")
    // })
  // });

  // 'PATCH' /profiles/id REQUEST
  $('#edit-profile').on('click', function(e){
    e.preventDefault();
    var reader = new FileReader();

    reader.onload = function(event){
      $.ajax({
        url: inspire_url + '/profiles/' + id,
        method: 'PATCH',
        data: { profile: {
          first_name: $('#first-name').val(),
          last_name: $('#last-name').val(),
          description: $("#description").val(),
          profile_picture: event.target.result,
          user_id: id
        } },
        headers: {
          Authorization: 'Token token=' + token
        }
      }).done(function(data){
        console.log('Success');
      }).fail(function(response){
        console.error('Whoops!');
      })
    };

    $fileInput = $('#profile-picture');
    reader.readAsDataURL($fileInput[0].files[0]);

  });

  // 'DELETE' /profiles/id REQUEST
  $("#delete-profile").on('click', function(event){
    $.ajax({
      method: 'DELETE',
      url: inspire_url + '/profiles/' + id,
      headers: {
        Authorization: 'Token token=' + token
      }
    }).done(function(){
      console.log("success");
    }).fail(function(){
      console.log("error");
    })
  });

    // 'GET' /images REQUEST
  $("#photos").on('click', function(event){
    $.ajax({
      method: 'GET',
      url: inspire_url + '/images',
      contentType: 'json'
    }).done(function(data){
      console.log("success");
    }).fail(function(){
      console.log("error");
    })
  });

  // 'POST' /images REQUEST
  $('#image-upload').on('submit', function(e){
    e.preventDefault();
    var reader = new FileReader();

    reader.onload = function(event){
      $.ajax({
        url: inspire_url + '/images',
        method: 'POST',
        data: { images: {
          caption: $("#caption").val(),
          image_post: event.target.result,
          profile_id: id
        } },
        headers: {
          Authorization: 'Token token=' + token
        }
      }).done(function(data){
        image_id = data.user.profile.images.find(params[id]);
        console.log('Success');
      }).fail(function(response){
        console.error('Whoops!');
      })
    };

    $fileInput = $('#image');
    reader.readAsDataURL($fileInput[0].files[0]);

  });

  // 'GET' /images/id REQUEST
  // $("").on('click', function(event){
    // $.ajax({
      // method: 'GET',
      // url: inspire_url + '/images/id'
    // }).done(function(data){
    //   console.log("success");
    // }).fail(function(){
    //   console.log("error");
    // })
  // });

  // 'PATCH' /images/id REQUEST
  // $("").on('click', function(event){
    // $.ajax({
      // method: 'PATCH',
      // url: inspire_url + '/images/id'
      // headers: {
        // Authorization: 'Token token=' + token
      // }
    // }).done(function(data){
    //   console.log("success");
    // }).fail(function(){
    //   console.log("error");
    // })
  // });

  // 'DELETE' /images/id REQUEST
  // $("").on('click', function(event){
    // $.ajax({
      // method: 'DELETE',
      // url: inspire_url + '/images/id'
      // headers: {
        // Authorization: 'Token token=' + token
      // }
    // }).done(function(data){
    //   console.log("success");
    // }).fail(function(){
    //   console.log("error");
    // })
  // });

});
