import mouse from "../utils/mouse";
import { setPixel, getPixelColor } from "../pixels";

const previous: { x: number; y: number }[] = [];

const FADING_TAIL = true;
const TAIL_LENGTH = 10;

export default function putMouse() {
  const { x, y } = mouse.pixel;
  const pixel = { x, y };
  const previousPixel = previous[previous.length - 1];
  if (
    FADING_TAIL ||
    !previousPixel ||
    previousPixel.x !== pixel.x ||
    previousPixel.y !== pixel.y
  ) {
    previous.push(pixel);
  }

  if (previous.length > TAIL_LENGTH) previous.shift();

  previous.forEach((p, index) => {
    const current = getPixelColor(p.x, p.y);
    const fadingRate = 150 / TAIL_LENGTH;
    setPixel(p.x, p.y, current + index * fadingRate);
  });

  setPixel(pixel.x, pixel.y, 255);
}
