import { xBand } from "./pipes/axes/xBandAxis";
import { yLinear } from "./pipes/axes/yLinearAxis";
import { initColumn } from "./pipes/initColumn";
import { initData } from "./pipes/initData";

export const columnPipeline = [initColumn, initData, xBand, yLinear];