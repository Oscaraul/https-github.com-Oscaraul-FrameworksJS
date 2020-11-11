var canvas=document.getElementById('miCanvas'),
context= canvas.getContext('2d');

context.beginPath();

context.rect(50,100,100,50);
context.fillStyle="Blue";
context.fill();
context.lineWidth = 5;
context.strokeStyle= "black";

context.stroke();
