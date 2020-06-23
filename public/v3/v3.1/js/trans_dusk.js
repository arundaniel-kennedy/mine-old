var changing_color;
var f = 135;
var g = 206;
var h = 235;

function set_dusk_color(){
  window_tint_color = 'rgba(60, 60, 61, 0.4)';
  building_color = 'rgba(122, 158, 159, 1)';
  sky_color = '';
  pole_color = 'rgba(70, 70, 71, 1)';
  bulb_shadow = 'rgba(180, 180, 179, 1)';
  bulb_color = 'rgba(180, 180, 179, 1)';
  beacon_base_color = 'rgba(70, 70, 71, 1)';
  beacon_shadow = 'rgba(180, 180, 179, 1)';
  beacon_color = 'rgba(180, 180, 179, 1)';
  branch_shadow = 'rgba(96, 148, 51, 0.6)';
  branch_color = 'rgba(96, 148, 51, 0.9)';
  trunk_color = 'rgba(105, 86, 78, 1)';
}

function icon_changes_dusk(){
  document.getElementById('github').src = "assets/g2.svg";
  document.getElementById('html').src = "skills/html.svg";
  document.getElementById('css').src = "skills/css.svg";
  document.getElementById('js').src = "skills/js.svg";
  document.getElementById('node').src = "skills/node.svg";
  document.getElementById('flask').src = "skills/flask.svg";
  document.getElementById('jsp').src = "skills/jsp.svg";
}

function dusk() {

  if(f>0){
    f=f-1;
  }
  if(g>0){
    g=g-1;
  }
  if(h>0){
    h=h-1;
  }

  changing_color = 'rgba('+f.toString()+','+g.toString()+','+h.toString()+',1)';

  ctx.fillStyle = changing_color;
  ctx.fillRect(0 ,0 ,c.width ,c.height );

  console.log(changing_color);

  set_dusk_color();
  icon_changes_dusk();

  trunk();
  branch1();
  branch2();
  draw_building();
  draw_window();
  street_light();
  draw_beacon();
  window.requestAnimationFrame(draw);

  if(h==0){
    transc = false;
  }
}
