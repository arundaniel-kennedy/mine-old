
function set_sun() {
  ctx.shadowBlur = 130;
  ctx.shadowColor = "yellow";
  ctx.drawImage(sun, c.width-110,-100,200,180);
}

function set_day_color(){
  window_tint_color = 'rgba(60, 60, 61, 0.4)';
  building_color = 'rgba(122, 158, 159, 1)';
  sky_color = 'rgba(135, 206, 235, 0.7)';
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

function icon_changes_day(){
  document.getElementById('github').src = "assets/g2.svg";
  document.getElementById('html').src = "skills/html.svg";
  document.getElementById('css').src = "skills/css.svg";
  document.getElementById('js').src = "skills/js.svg";
  document.getElementById('node').src = "skills/node.svg";
  document.getElementById('flask').src = "skills/flask.svg";
  document.getElementById('jsp').src = "skills/jsp.svg";
}

function day() {
  icon_changes_day();
  set_day_color();
  draw_sky();
  set_sun();
  trunk();
  branch1();
  branch2();
  draw_building();
  draw_window();
  street_light();
  draw_beacon();
  window.requestAnimationFrame(draw);
}
