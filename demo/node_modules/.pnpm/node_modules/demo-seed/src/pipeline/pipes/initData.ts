import { Pipe } from "../../types/Pipe";

export const initData : Pipe = (spec,vseed) => {
    return{
        ...spec,
        data: {
            values: vseed.dataset,
        }
    }
}