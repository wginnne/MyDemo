export interface IVSeed {
    chartType: "line" | "bar" | "column";
    dataset : Array<object>;
    measures: string[];
    dimensions: string[];
}