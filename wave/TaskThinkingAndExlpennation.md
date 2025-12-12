
# pipeline
First of all, what is pipeline:
make a big task break into some small steps, (where the output of the steps is the input of the next step. )
  ## core: 
  composition:we may can use some parts for many times, so we can ues composition to use one parts repeadly.
  ### FP:
  1.pipeline is pure function, one input only get one foxed output.
  2.function cannot change any values which isn't belong the function,such as global values...
  3.function can also see as an value like number,string.... it can also be the input and output of an function.



the task is transform this input to wave spec
The inpust vseed is 
const vsded = {
    "chartType": "column",
    "dataset": [
      { "date": "2019", "profit": 10, "sales": 20 },
      { "date": "2020", "profit": 30, "sales": 60 },
      { "date": "2021", "profit": 30, "sales": 60 },
      { "date": "2022", "profit": 50, "sales": 100 },
      { "date": "2023", "profit": 40, "sales": 80 }
    ]
}


we have known that the spec we want to have is some texts like this:
const spec = {
  type: 'liquid',
  valueField: 'value',
  maskShape: 'drop',
  outlineMargin: 10,  //the blank between graph and div.
  outlinePadding: 10,   //the blank between outside shape and inside graph.
  indicatorSmartInvert: true,
  data: {
    id: 'data',
    values: [
      {
        value: 1  //the hight of the water
      }
    ]
  },
  indicator: {  //datatype
    visible: true,
    title: {
      visible: true,
      style: {
        text: '进度'
      }
    },
    content: [   //data
      {
        visible: true,
        style: {
          fill: 'black',
          text: '100%'
        }
      }
    ]
  }
};


Without considering some basic setting of the graph.
maybe we can break the vseed context into different parts:
  1. 2019- profit:10
  2. 2019- sales:20
  3. 2020- profit:30
  4. 2020- sales:60
  5. 2021- profit:30
  6. 2021- sales:60
  7. 2022- profit:50
  8. 2022- sales:200

or just draw the profit/sales  50%



spec = {
  type: 'liquid',
  valueField: 'value',
  maskShape: 'drop',
  outlineMargin: 10,
  outlinePadding: 1-,
  indicatorSmartInvert: true,
  data: {
    id: `${i}_${j}`,(i,j都是循环序列)
    values: [
      {
        value: ValueAndText(vseed,i)[j]:value/100
      }
    ]
  },
  indicator: {
    visible: true,
    title: {
      visible: true,
      style: {
        text: ValueAndText(vseed,i)[j]:name
      }
    },
    content: [
      {
        visible: true,
        style: {
          fill: 'black',
          text: ValueAndText(vseed,i)[j]:value'
        }
      }
    ]
  }
};