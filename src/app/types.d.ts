export type TDraw = (
  ctx: CanvasRenderingContext2D,
  options?: {
    frames: number;
  }
) => void;
