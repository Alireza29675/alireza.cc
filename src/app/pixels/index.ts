import screen from "../utils/screen";

export const PIXELS_WIDTH = 60;
export const PIXELS_HEIGHT = 40;
export const PIXELS_GAP = 2;

const buffer = new ArrayBuffer(PIXELS_WIDTH * PIXELS_HEIGHT);
const pixels = new Uint8Array(buffer);

export function getPixelSize() {
  const { width, height } = screen;
  const ratio = PIXELS_WIDTH / PIXELS_HEIGHT;

  const heightIsFitting = height < width / ratio;

  const fittingSide = heightIsFitting ? height : width;
  const fittingPixels = heightIsFitting ? PIXELS_HEIGHT : PIXELS_WIDTH;

  const spaceWithoutGaps = fittingSide - PIXELS_GAP * (fittingPixels - 1);
  return spaceWithoutGaps / fittingPixels;
}

export function getPixelIndex(x: number, y: number) {
  return y * PIXELS_WIDTH + x;
}

export function getPixelColor(x: number, y: number) {
  return pixels[getPixelIndex(x, y)];
}

export function setPixel(x: number, y: number, value: number) {
  pixels[getPixelIndex(x, y)] = value;
}
