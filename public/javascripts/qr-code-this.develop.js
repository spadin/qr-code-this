var run;
jQuery(function() {
  run = function() {
    var loc = document.location.href;
    var html = '' +
      '<div id="qr_code_this">'+
      ' <img src="http://chart.apis.google.com/chart?cht=qr&chs=150x150&choe=UTF-8&chld=H&chl='+escape(loc)+'" width="150" height="150" align="center"/>'+
      ' <span><a href="http://sa.ndropad.in/" target="_blank">Sandro Padin</a> - <a href="#" id="qr_code_this_close">Close</a></span>'+
      '</div>';
    
    $(html).css({
      "position": "fixed",
      "top": "-210px",
      "right": "100px",
      "width": "150px",
      "height": "190px",
      "z-index": "9999"
    }).prependTo("body");
    
    $('#qr_code_this').animate({
      top: "0"
    },500);
    $('#qr_code_this_close').click(function() {
      $('#qr_code_this').animate({
        top: "-210px",
        onComplete: function() {
          $('#qr_code_this').remove();
        }
      },500);
      return false;
    });
    $('#qr_code_this').css({
      "background":"#eeeeee",
      "border":"1px solid #DEDEDE",
      "padding": "5px 20px 0px 20px",
      "-moz-box-shadow": "5px 5px 10px #999",
      "-webkit-box-shadow": "5px 5px 10px #999",
      "color":'#444'
    });
    $('#qr_code_this span').css({
      "display": "block",
      "float": "right",
      "clear": "right",
      "font-size": "10px",
      "padding-top": "5px"
    });
    $("#qr_code_this a").css({
      "color":"#444",
      "text-decoration": "underline"
    });
  };
  run();
});