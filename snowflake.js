
//

//creates the values of an individual snow
function newSnow(initX, initY, initR, initColor) {
    return {
      x: randomInt(0, cnv.width),
      y: 0,
      r: randomInt(1, 6),
      
      //creates individual speed and angle
      snx: randomDec(-1, 1),
      sny: randomDec(-2, 5.5),
      color: "white"
    }
  }
  
  //draws individual snowb
  function drawSnow(aSnow) {
    fill(aSnow.color);
    circle(aSnow.x, aSnow.y, aSnow.r, "fill");
  }
  
  //animation movement
  function moveSnow(aSnow) {
    
    if (aSnow.y <= cnv.height) {
      aSnow.x += aSnow.snx;
      aSnow.y += aSnow.sny;
    } else {
      //moves to top
      aSnow.x = randomInt(0, cnv.width);
      aSnow.y = 0;
      //resets speed and angle to new random
      aSnow.snx = randomDec(-1, 1);
      aSnow.sny = randomDec(-2, 5.5);
    }
  }
  
  