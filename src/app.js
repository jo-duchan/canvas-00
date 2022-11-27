const canvas = document.querySelector("#canvasElement");
const ctx = canvas.getContext("2d");

// canvas init
canvas.width = 1920;
canvas.height = 1080;

canvas.addEventListener("click", () => {
  console.log("canvas", canvas);
});
