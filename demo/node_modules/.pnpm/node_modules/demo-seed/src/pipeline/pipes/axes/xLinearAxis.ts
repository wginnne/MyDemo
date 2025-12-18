import { Pipe } from "../../../types/Pipe";

export const xLinear: Pipe = (spec, vseed) => {
  const axes = spec.axes || [];
  const axis = {
    type: "linear",
    orient: "bottom",
  };

  axes.push(axis);
  return {
    ...spec,
    xField: vseed.measures[0],
  };
};