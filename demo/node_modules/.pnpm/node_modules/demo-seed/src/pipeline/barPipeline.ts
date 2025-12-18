import { Pipe } from "../types/Pipe";
import { xLinear } from "./pipes/axes/xLinearAxis";
import { yBand } from "./pipes/axes/yBandAxis";
import { initBar } from "./pipes/initBar";
import { initData } from "./pipes/initData";

export const barPipeline: Pipe[] = [initBar, initData, yBand, xLinear];