import { TDraw } from "../types";
import { PIXELS_WIDTH, PIXELS_HEIGHT, getPixelSize } from "../pixels";

const draw: TDraw = (ctx) => {
  for (let y = 0; y < PIXELS_HEIGHT; y++) {
    for (let x = 0; x < PIXELS_WIDTH; x++) {
      const pixelSize = getPixelSize();

      ctx.fillStyle = `white`;
      ctx.fillRect(x * 10, y * 10, 10, 10);
    }
  }
};

export default draw;
