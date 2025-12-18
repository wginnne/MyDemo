import { Pipe } from "../../../types/Pipe";

export const yLinear: Pipe = (spec, vseed) => {
  const axes = spec.axes || [];
  const axis = {
    type: "linear",
    orient: "left",
  };
  axes.push(axis);

  return {
    ...spec,
    yField: vseed.measures[0],
    axes,
  };
};