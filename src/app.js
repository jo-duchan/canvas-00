const canvas = document.querySelector("#canvasElement");
const ctx = canvas.getContext("2d");
const image = new Image();

const handleResize = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const imgRatio = image.width / image.height;
  const winRatio = window.innerWidth / window.innerHeight;
  let renderW, renderH, xStart, yStart;

  if (imgRatio < winRatio) {
    renderW = image.width * (window.innerHeight / image.height);
    renderH = window.innerHeight;
    xStart = (window.innerWidth - renderW) / 2;
    yStart = 0;
  } else if (imgRatio > winRatio) {
    renderW = window.innerWidth;
    renderH = image.height * (window.innerWidth / image.width);
    xStart = 0;
    yStart = (window.innerHeight - renderH) / 2;
  } else {
    renderW = window.innerWidth;
    renderH = window.innerHeight;
    xStart = 0;
    yStart = 0;
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(image, xStart, yStart, renderW, renderH);

  // Blending mode test
  ctx.globalCompositeOperation = "overlay";
  ctx.fillStyle = "#FFFFFF60";
  ctx.fillRect(xStart, yStart, renderW, renderH);
};

const handleCanvasLoad = () => {
  image.src = "./assets/europeana.jpg";
  image.onload = () => {
    handleResize();
  };
};

window.addEventListener("DOMContentLoaded", handleCanvasLoad);
window.addEventListener("resize", handleResize);
