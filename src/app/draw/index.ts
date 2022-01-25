import { TDraw } from "../types";
import drawPixels from "./drawPixels";
import clearPixels from "./clearPixels";
import { resetShadow } from "../pixels";
import modify from "../modify";

const draw: TDraw = (ctx) => {
  resetShadow();
  modify();
  clearPixels(ctx);
  drawPixels(ctx);
};

export default draw;
