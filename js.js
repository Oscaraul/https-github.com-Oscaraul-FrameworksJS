var canvas=document.getElementById('miCanva'),
context= canvas.getContext('2d');

context.beginPath();
context.moveTo(100,30);
context.lineTo(200,150);
context.stroke();
