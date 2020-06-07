
function windo_glow() {
  if(glow>0){
    if(Math.random()>0.85){
      ctx.shadowBlur = 8;
      ctx.shadowColor = 'rgba(255, 255, 159, 0.8)';
      ctx.fillStyle = 'rgba(255, 255, 159, 0.8)';
    }
    glow++;
    if(glow>1000){
      glow = 0;
    }
  }else{
    ctx.shadowBlur = 8;
    ctx.shadowColor = 'rgba(255, 255, 159, 0.8)';
    ctx.fillStyle = 'rgba(255, 255, 159, 0.8)';
  }
}

function windo_build() {
  for(j=0;j<1000;j+=150){
    for(i=50;i<c.height-build_height;i+=150){
      windo_glow();
      ctx.fillRect(build_width-spacing-100-j , build_height+i ,100,100 );
    }
  }
}

function night_build() {
  ctx.shadowBlur = 0;
  ctx.shadowColor = "white";
  ctx.fillStyle = 'rgba(122, 158, 159, 0.4)';
  ctx.fillRect(0 , build_height ,build_width,c.height );
}

function set_moon() {
  ctx.shadowBlur = 130;
  ctx.shadowColor = "white";
  ctx.drawImage(moon, c.width-110,-100,200,180);
}

function night_sky() {
  ctx.fillStyle = 'rgba(0, 0, 0,1)';
  ctx.fillRect(0 ,0 ,c.width ,c.height );
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

function street_light_night() {
  ctx.shadowBlur = 0;
  ctx.fillStyle = 'rgba(70, 70, 71, 1)';
  ctx.fillRect(build_width+30  ,pole_height ,10 ,c.height );
  ctx.fillRect(build_width+30  ,pole_height ,120 ,10 );
  ctx.beginPath();
  ctx.arc(build_width+105,pole_height+10 , 40, 0, Math.PI);
  ctx.closePath();
  lamp_control();
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

function beacon_build_night() {
  ctx.shadowBlur = 0;
  ctx.fillStyle = 'rgba(70, 70, 71, 1)';
  ctx.fillRect(build_width-30  ,build_height-8 ,30 ,8 );
  ctx.beginPath();
  ctx.arc(build_width-15,build_height-8 , 14, Math.PI , 2*Math.PI);
  ctx.closePath();
  beacon_light();
}

function stars() {

}

function night() {
  night_sky();
  night_build();
  windo_build();
  set_moon();
  street_light_night();
  beacon_build_night();
  window.requestAnimationFrame(draw);
}
