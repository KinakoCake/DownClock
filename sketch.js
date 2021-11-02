let floor;
let time;
let hours = [];
let minutes = [];
let secounds = [];


function setup(){
  createCanvas(1600/2, 1600/2);

  matter.changeGravity(0, 0.16);
  floor = matter.makeBarrier(width/2, height, width, 4);
}

setInterval('addTimeNum()',1000);

function draw(){
  textSize(16);
  background(0);  
  fill(255);

  for(let j = hours.length - 1; j > 0; j--){
    hours[j].show();
    minutes[j].show();
    secounds[j].show();
  }
}

function addTimeNum(){
  time = new Date();

  hours.push(matter.makeSign(time.getHours(), random(0.06,width/3.04), random(15,50),));
  minutes.push(matter.makeSign(time.getMinutes(), random(width/3.04,width/1.56), random(15,50)));
  secounds.push(matter.makeSign(time.getSeconds(), random(width/1.56,width/1.06), random(15,50)));
}
