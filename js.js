var canvas=document.getElementById('miCanvas'),
context= canvas.getContext('2d');

context.beginPath();

context.moveTo(30,300);
context.lineTo(30,100);

context.moveTo(30,300);
context.lineTo(200,300);

context.moveTo(200,300);
context.lineTo(200,100);

context.moveTo(30,100);
context.lineTo(200,100);

context.moveTo(30,300);
context.lineTo(200,100);

context.moveTo(500,100);
context.lineTo(400,100);

context.stroke();
