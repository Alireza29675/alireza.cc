import { TDraw } from "../types";
import {
  PIXELS_WIDTH,
  PIXELS_HEIGHT,
  getPixelSize,
  PIXELS_GAP,
} from "../pixels";
import screen from "../utils/screen";

const drawPixels: TDraw = (ctx) => {
  for (let y = 0; y < PIXELS_HEIGHT; y++) {
    for (let x = 0; x < PIXELS_WIDTH; x++) {
      const size = getPixelSize();
      const sizeWithGap = size + PIXELS_GAP;

      const offsetX = screen.width / 2 - (PIXELS_WIDTH * sizeWithGap) / 2;
      const offsetY = screen.height / 2 - (PIXELS_HEIGHT * sizeWithGap) / 2;

      ctx.fillStyle = `white`;
      ctx.fillRect(
        sizeWithGap * x + offsetX,
        sizeWithGap * y + offsetY,
        size,
        size
      );
    }
  }
};

export default drawPixels;
