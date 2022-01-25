import screen from "./utils/screen";

export const PIXELS_WIDTH = 60;
export const PIXELS_HEIGHT = 40;
export const PIXELS_GAP = 2;

const MAX_INDEX = PIXELS_WIDTH * PIXELS_HEIGHT;

const buffer = new ArrayBuffer(MAX_INDEX);
const pixels = new Uint8Array(buffer);
const shadow = new Uint8Array(buffer);

export function resetShadow() {
  pixels.forEach((v, i) => (shadow[i] = 22));
}

export const getPixelSize = (() => {
  const results = new Map<string, number>();

  return () => {
    const { width, height } = screen;

    if (results.has(`${width}x${height}`)) {
      return results.get(`${width}x${height}`) as number;
    }

    const ratio = PIXELS_WIDTH / PIXELS_HEIGHT;

    const heightIsFitting = height < width / ratio;

    const fittingSide = heightIsFitting ? height : width;
    const fittingPixels = heightIsFitting ? PIXELS_HEIGHT : PIXELS_WIDTH;

    const spaceWithoutGaps = fittingSide - PIXELS_GAP * (fittingPixels - 1);
    const result = spaceWithoutGaps / fittingPixels;

    results.set(`${width}x${height}`, result);
    return result;
  };
})();

export function getPixelIndex(x: number, y: number) {
  return y * PIXELS_WIDTH + x;
}

export function getPermanentPixelColor(x: number, y: number) {
  return pixels[getPixelIndex(x, y)];
}

export function getPixelColor(x: number, y: number) {
  return shadow[getPixelIndex(x, y)];
}

export function setPermanentPixel(x: number, y: number, value: number) {
  value = Math.max(0, Math.min(255, value));
  if (x < 0 || x >= PIXELS_WIDTH || y < 0 || y >= PIXELS_HEIGHT) {
    return;
  }
  pixels[getPixelIndex(x, y)] = value;
}

export function setPixel(x: number, y: number, value: number) {
  value = Math.max(0, Math.min(255, value));
  if (x < 0 || x >= PIXELS_WIDTH || y < 0 || y >= PIXELS_HEIGHT) {
    return;
  }
  shadow[getPixelIndex(x, y)] = value;
}

export function getPixelCoordByIndex(index: number) {
  const x = index % PIXELS_WIDTH;
  const y = Math.floor(index / PIXELS_WIDTH);
  return { x, y };
}

export function getPixelCoordByPosition(x: number, y: number) {
  const size = getPixelSize();
  const sizeWithGap = size + PIXELS_GAP;

  const offsetX = screen.width / 2 - (PIXELS_WIDTH * sizeWithGap) / 2;
  const offsetY = screen.height / 2 - (PIXELS_HEIGHT * sizeWithGap) / 2;

  const pixelX = Math.floor((x - offsetX) / sizeWithGap);
  const pixelY = Math.floor((y - offsetY) / sizeWithGap);

  return {
    x: pixelX,
    y: pixelY,
  };
}

export function getPixelIndexByPosition(x: number, y: number) {
  const pixel = getPixelCoordByPosition(x, y);
  return getPixelIndex(pixel.x, pixel.y);
}
