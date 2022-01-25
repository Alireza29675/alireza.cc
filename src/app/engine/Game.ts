import Entity from "./Entity";

export default class Game {
  public frames: number = 0;

  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private started: boolean = false;
  private entities: Entity[] = [];
  private queueTasks: Array<() => void> = [];

  constructor({ canvas }: { canvas: HTMLCanvasElement }) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  }

  private get commonOptions() {
    return {
      game: this,
      canvas: this.canvas,
      ctx: this.ctx,
      frames: this.frames,
    };
  }

  private get setupOptions() {
    return {
      ...this.commonOptions,
    };
  }

  private get loopOptions() {
    return {
      ...this.commonOptions,
    };
  }

  start() {
    this.started = true;

    for (let task = null; (task = this.queueTasks.shift()); ) {
      task();
    }

    this.loop();
  }
  stop() {
    this.started = false;
  }

  private runOrQueue(fn: (...args: any) => void) {
    if (this.started) {
      fn();
    } else {
      this.queueTasks.push(fn);
    }
  }

  register(entity: Entity) {
    this.entities.push(entity);
    this.runOrQueue(() => {
      entity.setup(this.setupOptions);
    });
  }
  unregister(entity: Entity) {
    const index = this.entities.indexOf(entity);
    this.entities.splice(index, 1);
  }

  loop() {
    if (!this.started) {
      return;
    }

    this.frames++;

    // Iterate through the entities loop
    for (const entity of this.entities) {
      entity.loop(this.loopOptions);
    }

    requestAnimationFrame(this.loop.bind(this));
  }
}
