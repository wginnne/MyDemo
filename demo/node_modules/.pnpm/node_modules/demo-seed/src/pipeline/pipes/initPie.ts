import { Pipe } from "../../types/Pipe";

export const initPie: Pipe = (spec, vseed) => {
  return {
    ...spec,
    type: "",
    direction: "horizontal",
  };
};