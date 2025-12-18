import { Pipe } from "../../types/Pipe";

export const initBar: Pipe = (spec, vseed) => {
  return {
    ...spec,
    type: "bar",
    direction: "horizontal",
  };
};