function set_moon() {
  ctx.shadowBlur = 130;
  ctx.shadowColor = "white";
  ctx.drawImage(moon, c.width-110,-100,200,180);
}

function lamp_control() {
  if(flick>0){
    if(Math.random()>0.5){
      ctx.shadowBlur = 50;
      ctx.shadowColor = "rgba(255, 255, 153, 1)";
      ctx.fillStyle = 'rgba(255, 255, 153, 1)';
      ctx.fill();
    }
    if(flick>50){
      flick = 0;
    }else{
      flick++;
    }
  }else{
    ctx.shadowBlur = 50;
    ctx.shadowColor = "rgba(255, 255, 153, 1)";
    ctx.fillStyle = 'rgba(255, 255, 153, 1)';
    ctx.fill();
  }
}

function beacon_light() {
  beacon++;
  if(beacon>15){
    ctx.shadowBlur = 30;
    ctx.shadowColor = "rgba(178, 56, 73, 1)";
    ctx.fillStyle = 'rgba(178, 56, 73, 1)';
    ctx.fill();
    if(beacon>35){
      beacon=0;
    }
  }
}

function set_night_color(){
  window_tint_color = 'rgba(255, 255, 159, 0.1)';
  building_color = 'rgba(48, 66, 67, 1)';
  sky_color = 'rgba(0, 0, 0,1)';
  pole_color = 'rgba(70, 70, 71, 1)';
  bulb_shadow = 'rgba(180, 180, 179, 0.1)';
  bulb_color = 'rgba(180, 180, 179, 0.1)';
  beacon_base_color = 'rgba(70, 70, 71, 1)';
  beacon_shadow = 'rgba(180, 180, 179, 0.1)';
  beacon_color = 'rgba(180, 180, 179, 0.1)';
  branch_shadow = 'rgba(78, 110, 49, 0.5)';
  branch_color = 'rgba(78, 110, 49, 0.5)';
  trunk_color = 'rgba(105, 86, 78, 0.5)';
}

function icon_changes_night() {
  document.getElementById('github').src = "assets/g.svg";
  document.getElementById('html').src = "skills/html_dark.svg";
  document.getElementById('css').src = "skills/css_dark.svg";
  document.getElementById('js').src = "skills/js_dark.svg";
  document.getElementById('node').src = "skills/node_dark.svg";
  document.getElementById('flask').src = "skills/flask_dark.svg";
  document.getElementById('jsp').src = "skills/jsp_dark.svg";
}

function night() {
  icon_changes_night();
  set_night_color();
  draw_sky();
  set_moon();
  trunk();
  branch1();
  branch2();
  draw_building();
  draw_window();
  street_light();
  lamp_control();
  draw_beacon();
  beacon_light();
  window.requestAnimationFrame(draw);
}
