import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  HiloSeries,
  Tooltip,
  DateTime,
  Zoom,
  Logarithmic,
  Crosshair,
} from "@syncfusion/ej2-react-charts";

import {
  financialChartData,
  FinancialPrimaryXAxis,
  FinancialPrimaryYAxis,
} from "../../data/dummy";

import { ChartsHeader } from "../../components";
import { useStateConext } from "../../contexts/ContextProvider";
const date1 = new Date("2017, 1, 1");

function filterValue(value) {
  if (value.x >= date1) {
    return value.x, value.high, value.low;
  }
}
const returnValue = financialChartData.filter(filterValue);

const Financial = () => {
  const { currentMode } = useStateConext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Financial" title="Monthly Report" />
      <div className="w-full">
        <ChartComponent
          id="charts"
          primaryXAxis={FinancialPrimaryXAxis}
          primaryYAxis={FinancialPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true, shared: true }}
          crosshair={{ enable: true, lineType: "Vertical", line: { width: 0 } }}
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
        >
          <Inject
            services={[
              HiloSeries,
              Tooltip,
              DateTime,
              Logarithmic,
              Crosshair,
              Zoom,
            ]}
          />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={returnValue}
              xName="x"
              yName="low"
              name="Sale"
              type="Hilo"
              low="low"
              high="high"
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
      <div className="w-full flex justify-center">
        <p>*Click on a subject in the chart to compare with others.</p>
      </div>
    </div>
  );
};

export default Financial;
