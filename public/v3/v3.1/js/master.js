var c = document.getElementById("c");
var ctx = c.getContext("2d");

var d = new Date();
var h = d.getHours();

if(h>=6 && h<=18){
  type = 0;
  document.documentElement.setAttribute('data-theme','light');
}else{
  type = 1;
  document.documentElement.setAttribute('data-theme','dark');
}

var glow = 0;
var flick = 0;
var beacon = 0;

var sun = new Image();
var moon = new Image();

var build_width;
var build_height;
var pole_height;
var spacing;

var window_tint_color;
var building_color;
var sky_color;
var pole_color;
var bulb_shadow;
var bulb_color;
var beacon_base_color;
var beacon_shadow;
var beacon_color;
var branch_shadow;
var branch_color;
var trunk_color;

document.onselectstart=new Function ("return false")
if (window.sidebar){
    document.onmousedown=false
    document.onclick=true
  }

function init() {
  sun.src = 'js/images/sun.png';
  moon.src = 'js/images/moon.png';
  window.requestAnimationFrame(draw);
}

$("#submit").hover(function(){
  $("#submit").removeClass("btn-primary");
  if(type){
    $("#submit").addClass("btn-light");
  }else{
    $("#submit").addClass("btn-dark");
  }

},
function(){
  if(type){
    $("#submit").removeClass("btn-light");
  }else{
    $("#submit").removeClass("btn-dark");
  }
  $("#submit").addClass("btn-primary");
});

function mail_me(){
  var email = $("#email").val();
  var msg = $("#msg").val();

  $.ajax({
   url : "https://us-central1-mail-app-dany.cloudfunctions.net/app/mail",
   method : "POST",
   dataType : 'text',
   contentType : "application/x-www-form-urlencoded; charset=utf-8",
   async : false,
   cache : false,
   data : {email:email,msg:msg},
   success : function(data)
   {
     console.log(data);
     if(type){
       $("#submit").removeClass("btn-light");
     }else{
       $("#submit").removeClass("btn-dark");
     }
     $("#submit").addClass("btn-warning");
     $("#submit").html("<div class=\"spinner-border\" role=\"status\"><span class=\"sr-only\">Loading...</span></div>");

     setTimeout(function(){
       $("#submit").removeClass("btn-warning");
       $("#submit").addClass("btn-success");
       $("#submit").html("Mail Sent!");
     },1000);
   },
   error:function(data)
   {
     console.log(data);
     if(type){
       $("#submit").removeClass("btn-light");
     }else{
       $("#submit").removeClass("btn-dark");
     }
     $("#submit").addClass("btn-warning");
     $("#submit").html("<div class=\"spinner-border\" role=\"status\"><span class=\"sr-only\">Loading...</span></div>");

     setTimeout(function(){
       $("#submit").removeClass("btn-warning");
       $("#submit").addClass("btn-danger");
       $("#submit").html("Mail not Sent! mail me @ ad@weunitx.com");
      },1000);
   }
  });
}

$('#submit').on("click",function(){
  mail_me();
});

function getMousePosition(canvas, event) {
       let rect = canvas.getBoundingClientRect();
       let x = event.clientX - rect.left;
       let y = event.clientY - rect.top;

       if(x>c.width-110 && y<100){
          if(type){
            type = 0;
            document.documentElement.setAttribute('data-theme','light');
          }else{
            type = 1;
            document.documentElement.setAttribute('data-theme','dark');
          }
       }else if(x<build_width && y>build_height){
          glow++;
       }else if(x>build_width+30 && x< build_width+150 && y>pole_height && y<pole_height+50){
          flick++;
       }
 }

 let canvasElem = document.querySelector("canvas");

 canvasElem.addEventListener("mousedown", function(e)
 {
     getMousePosition(canvasElem, e);
 });

function draw()
{
  c.height = window.innerHeight;//y
  c.width = window.innerWidth;//x
  build_width = c.width*0.2;
  build_height = c.height*0.2
  pole_height = c.height*0.7
  spacing = c.width*0.04;

  if(type){
    night();
  }else{
    day();
  }
}

init();
