const vseed = {
    "chartType": "liquid",
    "dataset": [
      { "date": "2019", "profit": 10, "sales": 20 },
      { "date": "2020", "profit": 30, "sales": 60 },
      { "date": "2021", "profit": 30, "sales": 60 },
      { "date": "2022", "profit": 50, "sales": 100 },
      { "date": "2023", "profit": 40, "sales": 80 }
    ]
}




const ValueAndText=(vseed,i) =>{
  if (!vseed || !vseed[1] || !vseed[1][index]) return [];
  const Item = vseed[1][i];
  
  const discreate = [];
  const continuous = [];
  Object.entries(Item).forEach(([key, value]) => {
    if (typeof value === 'number') {
        continuous.push({ key, value });
    } 
    else {
        discreate.push({ key, value });
    }
  });
  const result = [];
  discreate.forEach(disItem=>{
    continuous.forEach(conItem=>{
      const combinedName = `${disItem.value}-${conItem.key}`;
      result.push({
        name:combinedName,
        value : conItem.value
      })
    })
  })
  if (continuous.length >= 2) {
    const ratioName = `${continuous[0].key}/${continuous[1].key}`
    const ratioValue = continuous[0].key/continuous[1].key
    result.push({
      name:ratioName,
      value : ratioValue,
  })
}

  return result;
}



const settingsGenerator = (type, maskShape, id, value) => ({
  type: type,
  valueField: 'value',
  maskShape: maskShape,
  outlineMargin: 10,
  outlinePadding: 10,
  indicatorSmartInvert: true,
  data: {
    id: id,
    values: [
      { value: value } // 这里的 value 是计算后(除以100)的值
    ]
  }
});


const indicatorGenerator = (text) => ({
  visible: true,
  title: {
    visible: true,
    style: {
      text: text 
    }
  }
});

const contentGenerator = (valueText) => ([
  {
    visible: true,
    style: {
      fill: 'black',
      text: valueText 
    }
  }
]);


  

const createSettings = (id, value) => ({
  type: 'liquid',
  valueField: 'value',
  maskShape: 'drop',
  outlineMargin: 10,
  outlinePadding: 10,
  indicatorSmartInvert: true,
  data: { id, values: [{ value }] }
});




const buildSpecs = (vseed) => {
  const specsArray = []; 
  const rowCount = vseed.length;

  for (let i = 0; i < rowCount; i++) {
    const items = ValueAndText(vseed, i);
    
    items.forEach((item, j) => {

      const singleSpec = {
        ...createSettings(`${i}_${j}`, item.value / 100),
        indicator: {
          ...createIndicator(item.name),
          content: createContent(String(item.value))
        }
      };

      specsArray.push(singleSpec);
    });
  }

  return specsArray; // 返回 i*j 个 spec
};

const specs = buildSpecs(vseed);
console.log(`一共生成了 ${specs.length} 个图表配置`);
console.log(specs);