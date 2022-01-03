interface IEntityLoopOptions {
  frames: number;
}

export default class Entity {
  setup() {}
  loop(_: Partial<IEntityLoopOptions>) {}
}
