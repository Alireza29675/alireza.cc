import mouse from "../utils/mouse";
import { getPixelCoordByPosition, setPixel } from "../pixels";

export default function putMouse() {
  const pixel = getPixelCoordByPosition(mouse.x, mouse.y);
  setPixel(pixel.x, pixel.y, 255);
}
