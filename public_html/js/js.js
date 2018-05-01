$(window).on('resize', function () {
  var win = $(this);
  if (win.width() <= 767) {
    $('#abs-row').attr("style", "position:static");
    $('#abs-row').attr("class", "container justify-content-center text-center px-0");
    $('.back').attr("class", "back col-md-4 p-0");
    $('.back,#center').attr("style", "box-shadow:3px 10px 21px -9px rgba(0,0,0,0.0)");
    $('#salary').attr("class", "row  justify-content-center");
    $('#invisible').attr("class", "col-md-3 d-none");
    $('#statistic').attr("style", "line-height: 40px;box-shadow: 3px 9px 28px -4px rgba(0,0,0,0.75); ")
    $("#logo").attr("style", "border-radius:0; line-height: 0px; margin:0 auto");
    $(".row .c-text").attr("class","row text-center c-text");
  }
  if (win.width() <= 775) {
    $('#over').removeClass();
    $('#back').attr("src", "");
  } else {
    $('#over').addClass('card-img-overlay');
    $('#back').attr("src", "images/back_1.jpg");
    $('#abs-row').attr("style", "");
    $('.back').attr("class", "back col-md-4");
    $('#salary').attr("row  justify-content-center pb-5");
    $('#abs-row').attr("class", "container justify-content-center text-center");
    $('.back,#center').attr("style", "box-shadow: 3px 10px 21px -9px rgba(0,0,0,0.75);");
    $('#invisible').attr("class", "col-md-3 invisible");
    $('#statistic').attr("style", "line-height: 40px;box-shadow:0px 7px 23px 5px rgba(0,0,0,0); ")
    $("#logo").attr("style", "border-radius:0; line-height: 0px;");
     $(".row .c-text").attr("class","row c-text");
  }
});
$(document).ready(function () {

  $('.btn1').on('click', function () {
    if (validateForm('form1')) {
      console.log(123);
      window.location.href = "thanks.html";
    }
  });
  $('.btn2').on('click', function () {
    if (validateForm('form2')) {
      console.log(123);
      window.location.href = "thanks.html";
    }
  });
  $('#form1').validate({// initialize the plugin
    rules: {
      name1: {
        required: true,
        minlength:2
      },
      phone1: {
        required: true,
        minlength: 10
      },
      email1: {
        required: true,
        email: true
      }

    }
  });
  $('#form2').validate({// initialize the plugin
    rules: {
      name2: {
        required: true,
        minlenght: 2
      },
      phone2: {
        required: true,
        minlength: 10
      },
      email2: {
        required:true,
        email: true
      }

    }
  });
});
function validateForm(form) {

  var nameReg = /^[A-Za-z]{2,20}$/;
  var numberReg = /^[0-9]{10}$/;
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  var name = (form == 'form1') ? $('#name1').val(): $('#name').val();
  var phone = (form == 'form1') ? $('#phone1').val() : $('#phone').val();
  var email = (form == 'form1') ? $('#email1').val() : $('#email').val();
  var inputVal = new Array(name, phone, email);
  var inputMessage = new Array("name", "phone number", "email address");
  $('span.error').hide();

  if (form == 'form1') {
    if (inputVal[0] === "") {
      $('#name1').after('<span class="error"> Please enter your ' + inputMessage[0] + '</span>');


    } else if (!nameReg.test(name)) {
      $('#name1').after('<span class="error"> Letters only</span>');

    }  if (inputVal[1] === "") {
      $('#phone1').after('<span class="error"> Please enter your ' + inputMessage[1] + '</span>');

    } else if (!numberReg.test(phone)) {
      $('#phone1').after('<span class="error">Numbers Only</span>');

    }  if (inputVal[2] === "") {
      $('#email1').after('<span class="error"> Please enter your ' + inputMessage[2] + '</span>');

    } else if (!emailReg.test(email)) {
      $('#email1').after('<span class="error"> Please enter a valid email address</span>');

    }
    else
      return true;
  }
  
  if (form == 'form2') {
    if (inputVal[0] === "") {
      $('#name').after('<span class="error"> Please enter your ' + inputMessage[0] + '</span>');


    } else if (!nameReg.test(name)) {
      $('#name').after('<span class="error"> Letters only</span>');

    }  if (inputVal[1] === "") {
      $('#phone').after('<span class="error"> Please enter your ' + inputMessage[1] + '</span>');

    } else if (!numberReg.test(phone)) {
      $('#phone1').after('<span class="error">Numbers Only</span>');

    }  if (inputVal[2] === "") {
      $('#email').after('<span class="error"> Please enter your ' + inputMessage[2] + '</span>');

    } else if (!emailReg.test(email)) {
      $('#email').after('<span class="error"> Please enter a valid email address</span>');

    }
    else
      return true;
  }

}
 