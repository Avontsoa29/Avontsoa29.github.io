// Get the canvas element and context
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Head

ctx.beginPath();
ctx.arc(200, 150, 80, 0, Math.PI * 2); // x=200, y=150, radius=80
ctx.fillStyle = '#7B3F00'; // skin color
ctx.fill();
ctx.stroke();

//Eyes

ctx.beginPath();
ctx.arc(170, 140, 10, 0, Math.PI * 2); // left eye
ctx.arc(230, 140, 10, 0, Math.PI * 2); // right eye
ctx.fillStyle = 'white';
ctx.fill();
ctx.stroke();

// Pupils
ctx.beginPath();
ctx.arc(170, 140, 5, 0, Math.PI * 2); // left pupil
ctx.arc(230,140, 5, 0, Math.PI * 2); // right pupil
ctx.fillStyle = 'black';
ctx.fill();

// Mouth

ctx.fillStyle = 'red';
ctx.fillRect(170, 80, 40, 10); // x=170, y=80, width=60, height=10

// Hair

ctx.beginPath();
ctx.moveTo(120, 100); // start at top left of head
ctx.lineTo(280, 100); // top right of head
ctx.lineTo(260, 50); // upper right hair point
ctx.lineTo(140, 50); // upper left hair point
ctx.closePath();
ctx.fillStyle = 'brown';
ctx.fill();
ctx.stroke();

// Nose

ctx.beginPath();
ctx.moveTo(200, 150); // top of nose
ctx.lineTo(190, 170); // bottom left
ctx.lineTo(210, 170); // bottom right
ctx.closePath();
ctx.fillStyle = '#7B3F00';
ctx.fill();
ctx.stroke();
