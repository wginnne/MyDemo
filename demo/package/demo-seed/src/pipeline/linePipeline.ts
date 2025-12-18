import { xBand } from "./pipes/axes/xBandAxis";
import { yLinear } from "./pipes/axes/yLinearAxis";
import { initData } from "./pipes/initData";
import { initLine } from "./pipes/initLine";

export const linePipeline = [initLine, initData, xBand, yLinear];