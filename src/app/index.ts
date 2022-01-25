import draw from "./draw";

const instantiatedCanvases: HTMLCanvasElement[] = [];

export function init(canvas: HTMLCanvasElement) {
  if (instantiatedCanvases.includes(canvas)) {
    return;
  }

  const ctx = canvas.getContext("2d");
  if (!ctx) {
    throw new Error("Could not get context");
  }

  instantiatedCanvases.push(canvas);

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  const render = () => {
    draw(ctx, {
      frames: 0,
    });
    requestAnimationFrame(render);
  };

  render();
}
