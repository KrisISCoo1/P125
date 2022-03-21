noseX=0;
noseY=0;
difference=0
rightWristX=0;
leftWristX=0;
function setup() {
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(400,400);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded() {
    console.log('PoseNet Is Initialized');
}
function draw() {
    background('#969A97');
    document.getElementById("square_side".innerHTML="width And Height of the square is:"+difference+"px");
    textSize(difference);
    fill("#76ff54A");
    text("Kris",noseX, noseY);
}
function gotPoses(results) {
    if (results.length>0) {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX="+noseX+"noseY="+noseY)
leftWristX=results[0].pose.leftWrist.x;
rightWristX=results[0].pose.rightWrist.x;
difference=floor(leftWristX-rightWristX);
console.log("left wrist's X is"+leftWristX+"right wrist's X is"+rightWristX+"leftWristX - rightWristX ="+difference)
    }
}