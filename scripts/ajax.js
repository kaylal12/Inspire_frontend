// 'use strict'
// var inspireapi = {
//   inspire: 'http://localhost:3000',

//   register: function register(credentials, callback) {
//     $.ajax({
//       method: 'POST',
//       url: this.inspire + '/register',
//       contentType: 'application/json; charset=utf-8',
//       data: JSON.stringify(credentials),
//       dataType: 'json'
//     }, callback);
//   }
// };

// $(document).ready(function(){

//   var form2object = function(form) {
//     var data = {};
//     $(form).children().each(function(index, element) {
//       var type = $(this).attr('type');
//       if ($(this).attr('name') && type !== 'submit' && type !== 'hidden') {
//         data[$(this).attr('name')] = $(this).val();
//       }
//     });
//     return data;
//   };

//   var wrap = function wrap(root, formData) {
//     var wrapper = {};
//     wrapper[root] = formData;
//     return wrapper;
//   };

//   var callback = function callback(error, data) {
//     if (error) {
//       console.error(error);
//       $('#result').val('status: ' + error.status + ', error: ' +error.error);
//       return;
//     }
//     $('#result').val(JSON.stringify(data, null, 4));
//   };

//   $('#register').on('submit', function(e) {
//     var credentials = wrap('credentials', form2object(this));
//     inspireapi.register(credentials, callback);
//     e.preventDefault();
//   });
// });

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

  // LOGOUT REQUEST
  // $("#logout").on('click', function(event){
    // $.ajax({
      // method: 'DELETE',
      // url: inspire_url + '/logout/id'
      // headers: {
        // Authorization: 'Token token=' + token
      // }
    // })
  // });

  // 'GET' /profiles REQUEST
  // $(".explore-profiles").on('click', function(event){
    // $.ajax({
      // method: 'GET',
      // url: inspire_url + '/profiles'
    // })
  // })

  // 'GET' /images REQUEST
  // $(".explore-photos").on('click', function(event){
    // $.ajax({
      // method: 'GET',
      // url: inspire_url + '/images'
    // })
  // })

  // 'POST' /profiles REQUEST
  $('#create-profile').on('submit', function(e){
    e.preventDefault();
    var reader = new FileReader();

    reader.onload = function(event){
      $.ajax({
        url: inspire_url + '/profiles',
        method: 'POST',
        data: { profile: {
          first_name: $('#first_name').val(),
          last_name: $('#last_name').val(),
          description: $("#description").val(),
          profile_picture: event.target.result,
          // user_id: ?
        } }
      }).done(function(response){
        console.log('Success');
      }).fail(function(response){
        console.error('Whoops!');
      })
    };

    $fileInput = $('#profile_picture');
    reader.readAsDataURL($fileInput[0].files[0]);

  });

  // 'GET' /profiles/id REQUEST
  // $("").on('click', function(event){
    // $.ajax({
      // method: 'GET',
      // url: inspire_url + '/profiles/id'
    // })
  // });

  // 'PATCH' /profiles/id REQUEST
  // $("").on('click', function(event){
    // $.ajax({
      // method: 'PATCH',
      // url: inspire_url + '/profiles/id'
      // headers: {
        // Authorization: 'Token token=' + token
      // }
    // })
  // });

  // 'DELETE' /profiles/id REQUEST
  // $("").on('click', function(event){
    // $.ajax({
      // method: 'DELETE',
      // url: inspire_url + '/profiles/id'
      // headers: {
        // Authorization: 'Token token=' + token
      // }
    // })
  // });

  // 'POST' /images REQUEST
  // $('#image-upload').on('submit', function(e){
  //   e.preventDefault();
  //   var reader = new FileReader();

  //   reader.onload = function(event){
  //     $.ajax({
  //       url: inspire_url + '/images',
  //       method: 'POST',
  //       data: { images: {
  //         caption: $('#caption').val(),
  //         image_post: event.target.result,
  //         // user_id: ?
  //       } }
  //     }).done(function(response){
  //       console.log('Success');
  //     }).fail(function(response){
  //       console.error('Whoops!');
  //     })
  //   };

  //   $fileInput = $('#profile_picture');
  //   reader.readAsDataURL($fileInput[0].files[0]);

  // });

  // 'GET' /images/id REQUEST
  // $("").on('click', function(event){
    // $.ajax({
      // method: 'GET',
      // url: inspire_url + '/images/id'
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
    // })
  // });

});
