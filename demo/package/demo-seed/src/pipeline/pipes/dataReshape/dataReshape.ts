import { sign } from "crypto";
import { IVSeed } from "../../../types/VSeed";


export const dataReshape = (spec:any, vseed:IVSeed) =>{
    vseed.measures;
    vseed.dataset;
    vseed.dimensions;

    if(vseed.measures.length ===0){
      setMeasures(null,vseed);
    }
    if(vseed.dimensions.length === 0){
      setDimension(null,vseed);
    }

    SingleIndex(spec,vseed);
    return{};

}



const setMeasures = (_: any, vseed: IVSeed) => {
    const measures: string[] = [];
    const Item = vseed.dataset[1];
    Object.entries(Item).forEach(([key, value]) => {
    if (typeof value === 'number') {
        measures.push( key );
    } 
  });
  vseed.measures = measures;
}


const setDimension = (_: any  , vseed:IVSeed)  =>{
  const dimensions: string[] = [];
  const item = vseed.dataset[1];
  Object.entries(item).forEach(([key, value]) => {   
    const isString = typeof value === 'string';
    const isAlreadyMeasure = vseed.measures.some(m => m === key);
    if (isString && !isAlreadyMeasure) {
      dimensions.push(key);
    }
  });
  vseed.dimensions = dimensions;
}


//转化成单独指标
const SingleIndex = (spec: any, vseed: IVSeed) => {

  if (!vseed.dataset || vseed.dataset.length === 0 || vseed.measures.length === 0) {
    return;
  }

  if (vseed.measures.length === 1) return; 

  const newDataset: any[] = [];

  vseed.dataset.forEach((row:any) => {
    vseed.measures.forEach((measureKey) => {
      const newRow: any = {};

      vseed.dimensions.forEach((dimKey) => {
        if (row.hasOwnProperty(dimKey)) {
          newRow[dimKey] = row[dimKey];
        }
      });
      newRow['id'] = measureKey;
      newRow['value'] = row[measureKey];
      newDataset.push(newRow);
    });
  });

  vseed.dataset = newDataset;
  vseed.measures = ['value'];
  if (!vseed.dimensions.includes('id')) {
    vseed.dimensions.push('id');
  }

};

