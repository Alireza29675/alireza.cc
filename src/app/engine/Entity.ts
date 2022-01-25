import Game from "./Game";

type TEntityCommonOptions = {
  game: Game;
  ctx: CanvasRenderingContext2D;
  frames: number;
};

type TEntitySetupOptions = TEntityCommonOptions & {};

type TEntityLoopOptions = TEntityCommonOptions & {};

export default class Entity {
  setup(_: TEntitySetupOptions) {}
  loop(_: TEntityLoopOptions) {}
}
