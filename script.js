// garf

let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;


//initial snowflake dump
let snowflakes = [];
for (let n = 1; n <= 200; n++) {
  snowflakes.push(newSnow());
}


//main draw loop
requestAnimationFrame(draw);
function draw() {
  //clear canvas
  background("black");
  
  //move and draw every snowflake
  for (let i = 0; i < snowflakes.length; i++) {
    moveSnow(snowflakes[i]);
    drawSnow(snowflakes[i]);
  }

  requestAnimationFrame(draw);
}


//evnt, >arrow adds <arrow deletes
document.addEventListener("keydown", keydownHandler);

function keydownHandler(event) {
  if (event.keyCode === 39) {
    snowflakes.push(newSnow());
  } else if (event.keyCode === 37) {
    snowflakes.pop();
  }
}
