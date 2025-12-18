import { IVSeed } from "./VSeed.ts";

export type Pipe = (spec: any, vseed: IVSeed) => any;
export type Pipeline = Pipe[];