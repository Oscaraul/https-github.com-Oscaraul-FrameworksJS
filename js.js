var canvas=document.getElementById('miCanvas'),
context= canvas.getContext('2d');


context.arc(100, 100, 50, Math.PI, Math.PI*1,5, false);
context.stroke();
