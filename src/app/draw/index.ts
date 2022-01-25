import { TDraw } from "../types";
import drawPixels from "./drawPixels";
import clearPixels from "./clearPixels";

const draw: TDraw = (ctx) => {
  clearPixels(ctx);
  drawPixels(ctx);
};

export default draw;
