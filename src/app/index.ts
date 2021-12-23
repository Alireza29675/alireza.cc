export function init(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    throw new Error("Could not get context");
  }

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  for (let i = 0; i < window.innerWidth; i += 10) {
    for (let j = 0; j < window.innerHeight; j += 10) {
      ctx.fillStyle = `rgb(${i}, ${j}, ${i + j})`;
      ctx.fillRect(i, j, 5, 5);
    }
  }
}
