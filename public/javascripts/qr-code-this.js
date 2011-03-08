javascript:(function(e,a,g,h,f,c,b,d){if(!(f=e.jQuery)||g>f.fn.jquery||h(f)){c=a.createElement("script");c.type="text/javascript";c.src="http://ajax.googleapis.com/ajax/libs/jquery/"+g+"/jquery.min.js";c.onload=c.onreadystatechange=function(){if(!b&&(!(d=this.readyState)||d=="loaded"||d=="complete")){h((f=e.jQuery).noConflict(1),b=1);f(c).remove()}};a.documentElement.childNodes[0].appendChild(c)}})(window,document,"1.2.6",function($,L){
  $.getCSS = function( url, media ) {
      $(document.createElement('link')).attr({
          href: url,
          media: media || 'screen',
          type: 'text/css',
          rel: 'stylesheet'
      }).appendTo('head');
  };
  $.getCSS('http://qr-code-this.heroku.com/stylesheets/qr-code-this.css');
  run = function() {
    var loc = document.location.href;
    var html = '' +
      '<div id="qr_code_this">'+
      ' <img src="http://chart.apis.google.com/chart?cht=qr&chs=150x150&choe=UTF-8&chld=H&chl='+escape(loc)+'" width="150" height="150" align="center"/>'+
      ' <span><a href="http://sa.ndropad.in/" target="_blank">Sandro Padin</a> - <a href="#" id="qr_code_this_close">Close</a></span>'+
      '</div>';
    
    $(html).css({
      position: "fixed",
      top: "-210px",
      right: "100px",
      width: "150px",
      height: "180px",
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
  };
  run();
});