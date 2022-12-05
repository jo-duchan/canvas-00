const canvas = document.querySelector("#canvasElement");
const ctx = canvas.getContext("2d");
const image = new Image();
image.src = "./assets/europeana.jpg";
let isLoaded = false;
let stageWidth = 0;
let stageHeight = 0;
const imgPos = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
};

const handleResize = () => {
  // drawImage 초기화
  if (isLoaded) {
    handleDraw();
  }
};

const handleDraw = () => {
  // ctx.drawImage();
};

const handleLoad = () => {
  image.onload = () => {
    isLoaded = true;
    handleResize();
    handleDraw();
  };
};

window.addEventListener("DOMContentLoaded", handleLoad);
window.addEventListener("resize", handleResize);
