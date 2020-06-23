
function windo() {
  ctx.shadowBlur = 0;
  ctx.fillStyle = 'rgba(60, 60, 61, 0.6)';
  for(j=0;j<1000;j+=150){
    for(i=50;i<c.height-build_height;i+=150){
      ctx.fillRect(build_width-spacing-100-j , build_height+i ,100,100 );
    }
  }
}

function day_build() {
  ctx.shadowBlur = 0;
  ctx.fillStyle = 'rgba(122, 158, 159, 1)';
  ctx.fillRect(0 , build_height ,build_width,c.height );
}

function set_sun() {
  ctx.shadowBlur = 130;
  ctx.shadowColor = "yellow";
  ctx.drawImage(sun, c.width-110,-100,200,180);
}

function day_sky() {
  ctx.shadowBlur = 0;
  ctx.fillStyle = 'rgba(135, 206, 235, 0.7)';
  ctx.fillRect(0 ,0 ,c.width ,c.height );
}

function street_light_day() {
  ctx.shadowBlur = 0;
  ctx.fillStyle = 'rgba(70, 70, 71, 1)';
  ctx.fillRect(build_width+30  ,pole_height ,10 ,c.height );
  ctx.fillRect(build_width+30  ,pole_height ,120 ,10 );
  ctx.beginPath();
  ctx.arc(build_width+105,pole_height+10 , 40, 0, Math.PI);
  ctx.closePath();
  ctx.shadowBlur = 0;
  ctx.shadowColor = "rgba(180, 180, 179, 1)";
  ctx.fillStyle = 'rgba(180, 180, 179, 1)';
  ctx.fill();
}

function beacon_build() {
  ctx.fillStyle = 'rgba(70, 70, 71, 1)';
  ctx.fillRect(build_width-30  ,build_height-10 ,30 ,10 );
  ctx.beginPath();
  ctx.arc(build_width-15,build_height-10 , 14, Math.PI , 2*Math.PI);
  ctx.closePath();
  ctx.shadowBlur = 0;
  ctx.shadowColor = 'rgba(180, 180, 179, 1)';//"rgba(178, 56, 73, 1)";
  ctx.fillStyle = 'rgba(180, 180, 179, 1)';//'rgba(178, 56, 73, 1)';
  ctx.fill();
}

function day() {
  day_sky();
  set_sun();
  day_build();
  windo();
  street_light_day();
  beacon_build();
  window.requestAnimationFrame(draw);
}
