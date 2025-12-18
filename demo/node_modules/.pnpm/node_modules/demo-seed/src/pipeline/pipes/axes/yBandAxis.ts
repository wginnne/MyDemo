import { Pipe } from "../../../types/Pipe";
import { labelFormat } from "./labelFormat";

export const yBand: Pipe = (spec, vseed) => {
  debugger;
  const axes = spec.axes || [];
  const axis = {
    type: "band",
    orient: "left",
    label: {
      formatMethod: labelFormat,
    },
  };
  axes.push(axis);

  return {
    ...spec,
    yField: vseed.dimensions[0],
    axes,
  };
};