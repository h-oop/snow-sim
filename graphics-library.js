function stroke(style) {
    ctx.strokeStyle = style;
  }
  function fill(style) {
    ctx.fillStyle = style;
  }
  function lineWidth(width) {
    ctx.lineWidth = width;
  }
  
  
  
  
  
  
  //draw a stroke or fill rect with top left corner of (x, y) width of W and height of H
  function rect(x, y, w, h, mode) {
    if(mode === "fill") {
      ctx.fillRect(x, y, w, h);
    } else if (mode === "stroke") {
      ctx.strokeRect(x, y, w, h);
    }
  }
  
  
  
  //DDRAW LINE
  function line(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1); //endpoint 1
    ctx.lineTo(x2, y2); //endpoint 2
    ctx.stroke();
  }
  
  //Crik withc center x,y and radius r
  function circle(x, y, r, mode) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    if (mode === "fill") {
      ctx.fill();
    } else if (mode === "stroke") {
      ctx.stroke();
    }
  }
  
  
  //DDRAW trig
  function line(x1, y1, x2, y2, x3, y3, mode) {
    ctx.beginPath();
    ctx.moveTo(x1, y1); //endpoint 1
    ctx.lineTo(x2, y2); //endpoint 2
    ctx.lineTo(x3, y3); //endpoint 3
    ctx.lineTo(x1, y1); //return tos tart
    ctx.stroke();
    if (mode === "fill") {
      ctx.fill();
    } else if (mode === "stroke") {
      ctx.stroke();
    }
  }
  
  //text
  function text(message, x, y, mode) {
    if (mode === "fill") {
      ctx.fillText(message, x, y);
    } else if (mode === "stroke") {
      ctx.strokeText(message, x, y);
    }
  }
  
  //e;opis
  function ellipse(x, y, xRadius, yRadius, rotation, mode) {
    ctx.beginPath();
    ctx.ellipse(x, y, xRadius, yRadius, rotation, 0, 2 * Math.PI);
    if (mode === "fill") {
      ctx.fill();
    }else if (mode === "stroke") {
      ctx.stroke();
    }
  }
  
  //image
  function image(img, x, y, w, h) {
    image(dimImgEl, 0, 0, 300, 200)
  }
  
  function imageClip(img, xc, yc, wc, hc, x, y, w, h) {
    ctx.drawImage(img, xc, yc, wc, hc, x, y, w, h)
  }
  
  
  //////////////////
  
  //Library of Random functions
  
  //decimal btween low inclusive and high exclusive
  function randomDec(low, high) {
    return Math.random() * (high - low) + low;
  }
  
  //interger btween low inclusive and high exclusive
  function randomInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low);
  }
  
  function randomRGB() {
    let r = randomInt(0, 256);
    let g = randomInt(0, 256);
    let b = randomInt(0, 256);
  
    return `rgb(${r},${g},${b})`;
    
  }
  
  //fill canv w col
  function background(color) {
    fill(color);
    rect(0, 0, cnv.width, cnv.height, "fill")
  }