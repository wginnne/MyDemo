import { Pipe } from "../../types/Pipe";

export const initLine: Pipe = (spec, vseed) => {
  return {
    ...spec,
    type: "line",
    direction: "vertical",
  };
};