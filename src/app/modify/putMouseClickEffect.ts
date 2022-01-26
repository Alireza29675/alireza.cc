import {
  getPixelColor,
  PIXELS_HEIGHT,
  setPermanentPixel,
  setPixel,
} from "../pixels";
import mouse from "../utils/mouse";

const sparkles: Generator[] = [];

let interval: any = null;

window.addEventListener("mousedown", () => {
  interval = setInterval(() => {
    sparkles.push(createSnow());
  }, 50);
});

window.addEventListener("mouseup", () => {
  clearInterval(interval);
});

function* createSnow() {
  const { x, y } = mouse.pixel;

  for (var i = y; i < PIXELS_HEIGHT - 1; i++) {
    if (getPixelColor(x, i + 1) === 255) {
      break;
    }
    setPixel(x, i, 100);
    yield;
  }

  setPermanentPixel(x, i, 255);
}

export default function putMouseClickEffect() {
  for (let sparkle of sparkles) {
    sparkle.next();
  }
}
