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
});
