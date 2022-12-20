img = "";
status1 = "";


function draw(){
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Floppa", 200, 15)
    noFill();
    stroke("#FF0000");
    rect( 200,3,350,350);
   }


function preload(){
    img = loadImage("download.jpeg");
}



function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status1").innerHTML = "Status : DETECTING OBJECT";
}


function modelLoaded(){
    console.log("Model Loaded");
    status1 = true;
    objectDetector.detect(img, gotResult);
}


function gotResult(error, results){
    if (error) {
        console.log(error);
    }
    else{
    console.log(results);
}

}
