function window_glow() {
  if(glow>0){
    if(Math.random()>0.85){
      ctx.shadowBlur = 8;
      ctx.shadowColor = 'rgba(255, 255, 159, 0.8)';
      ctx.fillStyle = 'rgba(255, 255, 159, 0.8)';
    }
    glow++;
    if(glow>1500){
      glow = 0;
    }
  }else{
    ctx.shadowBlur = 10;
    ctx.shadowColor = 'rgba(255, 255, 159, 0.8)';
    ctx.fillStyle = 'rgba(255, 255, 159, 0.8)';
  }
}

function draw_window() {
  ctx.shadowBlur = 0;
  ctx.fillStyle = window_tint_color;
  for(j=0;j<1000;j+=120){
    for(i=30;i<c.height-build_height;i+=130){
      if(type){
        window_glow();
      }
      ctx.fillRect(build_width-spacing-100-j , build_height+i ,100,100 );
    }
  }
}

function draw_building() {
  ctx.shadowBlur = 0;
  ctx.fillStyle = building_color;
  ctx.fillRect(0 , build_height ,build_width,c.height );
}

function draw_sky() {
  ctx.shadowBlur = 0;
  ctx.fillStyle = sky_color;
  ctx.fillRect(0 ,0 ,c.width ,c.height );
}

function street_light() {
  ctx.shadowBlur = 0;
  ctx.fillStyle = pole_color;
  ctx.fillRect(build_width+30  ,pole_height ,10 ,c.height );
  ctx.fillRect(build_width+30  ,pole_height ,120 ,10 );
  ctx.beginPath();
  ctx.arc(build_width+105,pole_height+10 , 40, 0, Math.PI);
  ctx.closePath();
  ctx.shadowBlur = 0;
  ctx.shadowColor = bulb_shadow;
  ctx.fillStyle = bulb_color;
  ctx.fill();
}

function draw_beacon() {
  ctx.fillStyle = beacon_base_color;
  ctx.fillRect(build_width-30  ,build_height-10 ,30 ,10 );
  ctx.beginPath();
  ctx.arc(build_width-15,build_height-10 , 14, Math.PI , 2*Math.PI);
  ctx.closePath();
  ctx.shadowBlur = 0;
  ctx.shadowColor = beacon_shadow;//"rgba(178, 56, 73, 1)";
  ctx.fillStyle = beacon_color;//'rgba(178, 56, 73, 1)';
  ctx.fill();
}

function branch1() {
  ctx.beginPath();
  ctx.arc(build_width+70,pole_height+150, 90, 0 , 2*Math.PI);
  ctx.closePath();
  ctx.shadowBlur = 0;
  ctx.shadowColor = branch_shadow;//"rgba(178, 56, 73, 1)";
  ctx.fillStyle = branch_color;//'rgba(178, 56, 73, 1)';
  ctx.fill();
}

function branch2() {
  ctx.beginPath();
  ctx.arc(build_width+20,pole_height-140, 130, 0 , 2*Math.PI);
  ctx.closePath();
  ctx.shadowBlur = 0;
  ctx.shadowColor = branch_shadow;//"rgba(178, 56, 73, 1)";
  ctx.fillStyle = branch_color;//'rgba(178, 56, 73, 1)';
  ctx.fill();
}

function trunk() {
  ctx.beginPath();
  ctx.moveTo(build_width-220,c.height);
  ctx.lineTo(build_width-200,pole_height);
  ctx.lineTo(build_width-260,build_height+100);
  ctx.lineTo(build_width-170,pole_height-20);
  ctx.lineTo(build_width+20,pole_height-140);
  ctx.lineTo(build_width-130,pole_height+10);
  ctx.lineTo(build_width-130,pole_height+200);
  ctx.lineTo(build_width+70,pole_height+150);
  ctx.lineTo(build_width-130,c.height);
  ctx.stroke();
  ctx.closePath();
  ctx.shadowBlur = 0;
  ctx.fillStyle = trunk_color;//'rgba(178, 56, 73, 1)';
  ctx.fill();
}
