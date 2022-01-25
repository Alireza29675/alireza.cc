import Game from "./engine/Game";

export function init(canvas: HTMLCanvasElement) {
  const game = new Game({ canvas });
  game.start();
}
