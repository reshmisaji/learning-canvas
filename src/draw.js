export const changeColor = () => {
  const canvas = document.getElementById("my-canvas");
  const canvasContext = canvas.getContext("2d");
  canvasContext.strokeStyle = document.getElementById("palate").value;
  canvas.style.cursor =
    "url(https://cdn.emojidex.com/emoji/seal/eyeliner.png),pointer";
};

const createEraser = () => {
  const eraser = document.getElementById("eraser");
  const canvas = document.getElementById("my-canvas");
  const canvasContext = canvas.getContext("2d");
  eraser.addEventListener("mousedown", function() {
    canvasContext.lineWidth = 4;
    canvasContext.strokeStyle = "white";
  });
};

const draw = () => {
  const canvas = document.getElementById("my-canvas");
  const canvasContext = canvas.getContext("2d");
  const brush = { x: 0, y: 0 };
  createEraser();
  const onPaint = () => {
    canvasContext.lineTo(brush.x, brush.y);
    canvasContext.stroke();
  };

  canvas.addEventListener(
    "mousemove",
    function(event) {
      brush.x = event.pageX - this.offsetLeft;
      brush.y = event.pageY - this.offsetTop;
    },
    false
  );

  canvas.addEventListener(
    "mousedown",
    function() {
      canvasContext.beginPath();
      canvasContext.moveTo(brush.x, brush.y);

      canvas.addEventListener("mousemove", onPaint, false);
    },
    false
  );

  canvas.addEventListener(
    "mouseup",
    function() {
      canvas.removeEventListener("mousemove", onPaint, false);
    },
    false
  );
};

window.onload = draw;
