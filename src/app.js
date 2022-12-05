const canvas = document.querySelector("#canvasElement");
const ctx = canvas.getContext("2d");
const image = new Image();
image.src = "./assets/europeana.jpg";
let isLoaded = false;
let stageWidth = 0;
let stageHeight = 0;
const pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;
const imgPos = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
};

const handleResize = () => {
  stageWidth = document.body.clientWidth;
  stageHeight = document.body.clientHeight;

  canvas.width = stageWidth * pixelRatio;
  canvas.height = stageHeight * pixelRatio;
  ctx.scale(pixelRatio, pixelRatio);

  if (isLoaded) {
    handleDraw();
  }
  console.log(
    `stageWidth: ${stageWidth}, stageHeight: ${stageHeight},  imgPos.width: ${imgPos.width}, imgPos.height: ${imgPos.height} `
  );
};

const handleDraw = () => {
  const stageRatio = stageWidth / stageHeight;
  const imgRatio = image.width / image.height;

  imgPos.width = stageWidth;
  imgPos.height = stageHeight;

  if (imgRatio > stageRatio) {
    imgPos.width = Math.round(image.width * (stageHeight / image.height));
    imgPos.x = Math.round((stageWidth - imgPos.width) / 2);
  } else {
    imgPos.height = Math.round(image.height * (stageWidth / image.width));
    imgPos.y = Math.round((stageHeight - imgPos.height) / 2);
  }

  ctx.clearRect(0, 0, imgPos.width, imgPos.height);
  ctx.drawImage(image, imgPos.x, imgPos.y, imgPos.width, imgPos.height);
  console.log(
    `imgPos.width: ${imgPos.width}, imgPos.height: ${imgPos.height} `
  );
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
