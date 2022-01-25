import { TDraw } from "../types";
import {
  PIXELS_WIDTH,
  PIXELS_HEIGHT,
  getPixelSize,
  PIXELS_GAP,
} from "../pixels";

const drawPixels: TDraw = (ctx) => {
  for (let y = 0; y < PIXELS_HEIGHT; y++) {
    for (let x = 0; x < PIXELS_WIDTH; x++) {
      const size = getPixelSize();

      ctx.fillStyle = `white`;
      ctx.fillRect(
        (size + PIXELS_GAP) * x,
        (size + PIXELS_GAP) * y,
        size,
        size
      );
    }
  }
};

export default drawPixels;
