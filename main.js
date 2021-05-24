canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")

Car1_width = 120
Car1_height = 70
background_img = "racing.jpg"
car1_img = "/car1.png"
car1X = 10
car1Y = 10

Car2_width = 120
Car2_height = 70
car2_img = "/car2.png"
car2X = 10
car2Y = 100


 function add(){
     background_imgTag = new Image()
     background_imgTag.onload = uploadbackground
     background_imgTag.src = background_img

     car1_img_tag = new Image()
     car1_img_tag.onload = uploadcar
     car1_img_tag.src = "car1.png"

     car2_img_tag = new Image()
     car2_img_tag.onload = uploadcar
     car2_img_tag.src = "car2.png"
 }
 function uploadbackground(){
     ctx.drawImage (background_imgTag,0,0,canvas.width,canvas.height);
 }
 function uploadcar(){
    ctx.drawImage (car1_img_tag,car1X,car1Y,Car1_width,Car1_height);
    ctx.drawImage (car2_img_tag,car2X,car2Y,Car2_width,Car2_height);

}
window.addEventListener("keydown",myKeydown)
function myKeydown(e){
    keyPresd=e.keyCode
if(keyPresd == '40'){
    down();
    console.log("down")
}
if(keyPresd == '38'){
    up();
    console.log("up")
}
if(keyPresd == '37'){
    left();
    console.log("left")
}
if(keyPresd == '39'){
    right();
    console.log("right");
}

//This is for car 2.
if(keyPresd == '83'){
    down2();
    console.log("s key")
}
if(keyPresd == '87'){
    up2();
    console.log("up")
}
if(keyPresd == '65'){
    left2();
    console.log("left")
}
if(keyPresd == '68'){
    right2();
    console.log("right");
}

if(car1X > 700)
{
console.log("Car 1 Wins")
document.getElementById('game_score').innerHTML = "Car 1 wins";
}
if(car2X > 700)
{
console.log("Car 2 Wins")
document.getElementById('game_score').innerHTML = "Car 2 wins";
}


}
function up(){
    if(car1Y>0){
        car1Y = car1Y-10
        uploadbackground()
        uploadcar()
    }
}
function down(){
    if(car1Y<=500){
car1Y=car1Y+10
uploadbackground()
uploadcar()
    }
}
function left(){
    if(car1X>0){
        car1X=car1X-10
        uploadbackground()
uploadcar()
    }
}
function right(){
    if(car1X<700){
        car1X=car1X+10
        uploadbackground()
uploadcar()
    }

}




function up2(){
    if(car2Y>0){
        car2Y = car2Y-10
        uploadbackground()
        uploadcar()
    }
}
function down2(){
    if(car2Y<=500){
        car2Y=car2Y+10
uploadbackground()
uploadcar()
    }
}
function left2(){
    if(car2X>0){
        car2X=car2X-10
        uploadbackground()
uploadcar()
    }
}
function right2(){
    if(car2X<700){
        car2X=car2X+10
        uploadbackground()
uploadcar()
    }
}