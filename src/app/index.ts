import draw from "./draw";

export function init(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    throw new Error("Could not get context");
  }

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const render = () => {
    draw(ctx);
    requestAnimationFrame(render);
  };
}
