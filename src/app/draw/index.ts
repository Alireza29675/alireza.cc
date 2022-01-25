import { TDraw } from "../types";
import drawPixels from "./drawPixels";
import clearPixels from "./clearPixels";
import { resetShadow } from "../pixels";

const draw: TDraw = (ctx) => {
  resetShadow();
  clearPixels(ctx);
  drawPixels(ctx);
};

export default draw;
