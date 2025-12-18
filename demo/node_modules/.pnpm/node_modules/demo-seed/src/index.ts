import {
  barPipeline,
  columnPipeline,
  linePipeline,
  piePipeline,
} from "./pipeline";
import { execPipeline } from "./pipeline/utils/execPipeline";
import { Pipe } from "./types/Pipe";
import { IVSeed } from "./types/VSeed";

export class Builder {
  private vseed: IVSeed;

  buildSpec() {
    const { chartType } = this.vseed;

    // 声明内容
    const pipelineMap = {
      bar: barPipeline,
      line: linePipeline,
      column: columnPipeline,
    };

    const pipeline: Pipe[] = pipelineMap[chartType];

    // 执行内容
    return execPipeline(pipeline, this.vseed);
  }

  constructor(vseed: IVSeed) {
    this.vseed = vseed;
  }

  static from(vseed: IVSeed) {
    return new Builder(vseed);
  }
}