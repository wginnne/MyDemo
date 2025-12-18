import { Pipe } from "../../types/Pipe";

export const initColumn: Pipe = (spec, vseed) => {
  return {
    ...spec,
    type: "bar",
    direction: "vertical",
  };
};