import mouse from "../utils/mouse";
import { getPixelCoordByPosition, setPixel, getPixelColor } from "../pixels";

const previous: { x: number; y: number }[] = [];

export default function putMouse() {
  const pixel = getPixelCoordByPosition(mouse.x, mouse.y);

  previous.push(pixel);
  if (previous.length > 10) previous.shift();

  previous.forEach((p, index) => {
    const current = getPixelColor(p.x, p.y);
    setPixel(p.x, p.y, current + index * 10);
  });

  setPixel(pixel.x, pixel.y, 255);
}
