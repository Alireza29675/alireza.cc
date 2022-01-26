import { getPixelCoordByPosition } from "../pixels";

const mouse = {
  x: 0,
  y: 0,
  pixel: {
    x: 0,
    y: 0,
  },
};

window.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;

  const pixel = getPixelCoordByPosition(mouse.x, mouse.y);
  mouse.pixel.x = pixel.x;
  mouse.pixel.y = pixel.y;
});

export default mouse;
