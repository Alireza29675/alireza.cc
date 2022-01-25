import { TDraw } from "../types";

const clearPixels: TDraw = (ctx) => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
};

export default clearPixels;
