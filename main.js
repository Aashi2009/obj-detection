img= "";
status= "";
function preload(){
    img= loadImage('dog_cat.jpg');
}
function setup(){
    canvas= createCanvas(640, 420);
    canvas.center();
    objectDetector= ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML= "Status:Detecting objects";
}

function draw(){
    image(img, 0,0, 640, 420);
    fill('#FF0000');
    text("Dog", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350)

    fill("#FF000");
    text("Cat", 320, 120);
    noFill();
    stroke("#FF0000");
    rect(300, 90, 270, 320);

    
    fill("#FF000");
    text("Bowl", 320, 320);
    noFill();
    stroke("#FF0000");
    rect(290, 300, 100, 100);
}

function modelLoaded(){
    console.log("modelLoaded!!!! 🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈");
    status= true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.log("error🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴⚠⚠⚠⚠⚠");
    }
    console.log(results);
}