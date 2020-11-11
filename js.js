var canvas=document.getElementById('miCanvas'),
context= canvas.getContext('2d');

context.arc(120, 120, 70, 0, 2*Math.PI,false);
context.stroke();
