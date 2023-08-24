var y=300;
var x=300;
var t=0;
let speed=200;
var dir;
let score=0;
var coinx =x*Math.random();
var coiny =y*Math.random();
var r=20;
var dangerx=x*Math.random();
var dangery=y*Math.random();
var dangerx2=x*Math.random();
var dangery2=y*Math.random();

function spawn()
{
 dangerx=1150*Math.random();
 dangery=750*Math.random();
}

function spawn2()
{
    dangerx2=1150*Math.random();
    dangery2=750*Math.random();
}
setTimeout(spawn(),200);

all = function(){
window.onload=function Draw()
{
var canvas=document.getElementById('canvas');
var context=canvas.getContext('2d');


var up= document.getElementById('up');
var down=document.getElementById('down');
var right=document.getElementById('right');
var left=document.getElementById('left');


context.beginPath();
context.clearRect(0,0,1200,1200);
context.arc(coinx,coiny,20,0,2*Math.PI);
context.fillStyle="red";
context.fill();


context.beginPath();
context.arc(x,y,r,0, 2*Math.PI);
context.lineWidth=5;
if(r<50)
{context.strokeStyle="orange";
context.fillStyle="black";}
else if(r<100 && r>50)
{
    context.strokeStyle="black";
    context.fillStyle="purple";
}
context.fill();
context.stroke(); 


// var dangerx=x*Math.random();
// var dangery=y*Math.random();
// setTimeout(spawn(),20);

// Drawing dangers.
context.beginPath();
context.arc(dangerx,dangery,20,0,2*Math.PI);
context.fillStyle="green";
context.fill();

context.beginPath();
context.arc(dangerx2,dangery2,20,0,2*Math.PI);
context.fillStyle="green";
context.fill();



down.onclick=function(){
    dir=1
}

up.onclick=function(){
dir=-1;
}

right.onclick=function(){
    dir=2;
}

left.onclick=function(){
    dir=3;
}

    


var timepassed=(Date.now()-t)/1000;
t=Date.now();
if(dir==1)
{ y+=speed*timepassed;}
else if(dir==-1)
{ y+=dir*(speed*timepassed);}
else if(dir==2)
{x+=speed*timepassed;}
else if(dir==3)
{ x-=speed*timepassed;}

if(y>=750 )
{y=20;}

if(y<=0)
{y=740;}

if(x>=1200)
{x=10;}

if(x<=0)
{x=1190;}

// if( (coinx-20<=x && x<=coinx+20)  && (coiny-20<=y && y<=coiny+20)){
// score+=10;
// console.log(score);
// context.clearRect(0,0,600,600);
// coinx =550*Math.random();
// coiny =550*Math.random();
// r+=10;
// spawn2();
// }

// if( ((dangerx-20<=x && x<=dangerx+20)  && (dangery-20<=y && y<=dangery+20)) || (dangerx2-r<=x && x<=dangerx2+r)  && (dangery2-r<=y && y<=dangery2+r))
// {
//     alert("game over");
//     r=20;
//     score=0;
// }

var dist;
let X=(dangerx-x);
let Y=(dangery-y);
dist=Math.sqrt((X*X)+(Y*Y));
var dist2;
let X2=(dangerx2-x);
let Y2=(dangery2-y);
dist2=Math.sqrt((X2*X2)+(Y2*Y2));
//coin collision.
var coin_dist;
let X3=(coinx-x);
let Y3=(coiny-y);
coin_dist=Math.sqrt((X3*X3)+(Y3*Y3));


//coin collision.
if( coin_dist<=r+15){
    score+=10;
    context.clearRect(0,0,1200,1200);
    coinx =1150*Math.random();
    coiny =750*Math.random();
    r+=10;
    speed+=50;
    spawn2();
    }

//danger collision.
if(dist <= r+15 || dist2 <= r+15)
{
    alert("game over");
    r=20;
    score=0;
    speed=200;
}
let fps=Math.round(1/timepassed);
context.font="15px Arial";
context.fillStyle="black";
context.fillText("FPS:"+fps,20,30);
context.fillText("score==>"+score,20,40);


window.requestAnimationFrame(Draw);
}
}


setInterval(spawn,2000);
all();

window.addEventListener('keydown',(event)=>
{
    switch (event.key)
    {
        case 'a':
        dir=3
        break;
        case 'd':
            dir=2
            break;
        case 'w':
            dir=-1
            break;
        case 's':
            dir=1
            break;
    }
})

window.addEventListener('keyup',(event)=>
{
    switch (event.key)
    {
        case 'a':
            dir=0
            break;
        case 'd':
            dir=0
            break;
        case 'w':
            dir=0
            break;
        case 's':
            dir=0
            break;
    }
})