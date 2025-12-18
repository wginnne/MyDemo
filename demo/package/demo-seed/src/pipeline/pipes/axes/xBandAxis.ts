import { Pipe } from "../../../types/Pipe";
import { labelFormat } from "./labelFormat";

export const xBand: Pipe = (spec: any, vseed) => {
  const axes = spec.axes || [];
  const axis = {
    type: "band",
    orient: "bottom",
    label: {
      formatMethod: labelFormat,
    },
  };
  axes.push(axis);

  return {
    ...spec,
    xField: vseed.dimensions[0],
    axes,
  };
};