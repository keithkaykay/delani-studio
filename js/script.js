$(document).ready(function(){
  $("#development-image").click(function(){
    $("#development-image").slideDown('1500').hide('1000');
    $("#development").show('1500');
  });
  $("#development").click(function(){
    $("#development").slideUp('1500');
    $("#development-image").slideDown('1500');
  });
});

$(document).ready(function(){
  $("#design-image").click(function(){
    $("#design-image").slideDown('1500').hide('1000');
    $("#design").show('1500');
  });
  $("#design").click(function(){
    $("#design").slideUp('1500');
    $("#design-image").slideDown('1500');
  });
});

$(document).ready(function(){
  $("#product-image").click(function(){
    $("#product-image").slideDown('1500').hide('1000');
    $("#product").show('1500');
  });
  $("#product").click(function(){
    $("#product").slideUp('1500');
    $("#product-image").slideDown('1500');
  });
});

$(document).ready(function(){
  $("#bella-1").mouseover(function(){
    $("#cathew-1").show();
  }).mouseout(function(){
    $("#cathew-1").hide();
  });
});

$(document).ready(function(){
  $("#bella-2").mouseover(function(){
    $("#cathew-2").show();
  }).mouseout(function(){
    $("#cathew-2").hide();
  });
});

$(document).ready(function(){
  $("#bella-3").mouseover(function(){
    $("#cathew-3").show();
  }).mouseout(function(){
    $("#cathew-3").hide();
  });
});

$(document).ready(function(){
  $("#bella-4").mouseover(function(){
    $("#cathew-4").show();
  }).mouseout(function(){
    $("#cathew-4").hide();
  });
});

$(document).ready(function(){
  $("#bella-5").mouseover(function(){
    $("#cathew-5").show();
  }).mouseout(function(){
    $("#cathew-5").hide();
  });
});

$(document).ready(function(){
  $("#bella-6").mouseover(function(){
    $("#cathew-6").show();
  }).mouseout(function(){
    $("#cathew-6").hide();
  });
});

$(document).ready(function(){
  $("#bella-7").mouseover(function(){
    $("#cathew-7").show();
  }).mouseout(function(){
    $("#cathew-7").hide();
  });
});

$(document).ready(function(){
  $("#bella-8").mouseover(function(){
    $("#cathew-8").show();
  }).mouseout(function(){
    $("#cathew-8").hide();
  });
});

function submit(){
  var name=document.getElementById("name").value;
  var email=document.getElementById("email").value;
  var message = document.getElementById("message").value;
  if(name,email,message == ''){
      alert("Check if you have filled all forms")
  }
  else{
  alert("Thank you + ' ' " + name + ' ' + "for contacting delani studio. We will get back to you shortly." );
  }
  };