import { useEffect } from "react";
import "./App.css";
import { Builder } from "demo-seed";
import VChart from "@visactor/vchart";

const App = () => {
  useEffect(() => {
    const builder = Builder.from({
      chartType: "line",
      dataset: [
        { date: "2019", profit: 10 },
        { date: "2020", profit: 30 },
        { date: "2021", profit: 30 },
        { date: "2022", profit: 50 },
        { date: "2023", profit: 40 },
      ],
      measures: ["profit"],
      dimensions: ["date"],
    });

    const spec = builder.buildSpec();
    console.log('debug spec', spec)
    const vchart = new VChart(spec, {
      dom: "chart-container",
    });

    vchart.renderSync();

    return () => {
      vchart.release();
    };
  }, []);

  return (
    <div style={{ width: 200, height: 300 }}>
      <div
        id="chart-container"
        style={{ width: "400px", height: "400px" }}
      ></div>
      ;
    </div>
  );
};
export default App;
