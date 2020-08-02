console.log('this appears to be working');
var canvas;
var canvasContext;
var ballX = 50;

window.onload = function() {
    // get element canvas by id
    canvas = document.getElementById('gameCanvas');
    // set the type of drawing you want to do (2d or webgl(3d))
    canvasContext = canvas.getContext('2d');

    var interval = setInterval(drawEverything, 50);

    setTimeout(function(){
        clearInterval(interval);
    }, 5000);

}

function drawEverything() {

    ballX += 50;

    // set the fill color of drawing
    canvasContext.fillStyle  = 'black';
    // draw in the canvas with pos x, pos y, width, height
    canvasContext.fillRect(0,0,canvas.width,canvas.height);

    // draw ball
    canvasContext.fillStyle  = 'red';
    // draw in the canvas with pos x, pos y, width, height
    canvasContext.fillRect(ballX,200,50,50);

    console.log(ballX);

}