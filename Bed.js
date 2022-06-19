status = "";
img = "";

function preload() {
    img = loadImage("Bed.jpg");
}

function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
    document.getElementById("num_of_obj_bed").innerHTML = "Status: Detecting Objects"
}

function modelLoaded() {
    console.log("Model loaded!!!")
    status = true;
    objectDetector.detect(video, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    console.log(results);
}