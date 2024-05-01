import React from "react";

import { useStateConext } from "../../contexts/ContextProvider";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  SplineAreaSeries,
  DateTime,
  Legend,
  Tooltip,
  LineSeries,
} from "@syncfusion/ej2-react-charts";
import {
  areaCustomSeries,
  areaPrimaryXAxis,
  areaPrimaryYAxis,
} from "../../data/dummy";
import { Header } from "../../components";

const Area = () => {
  const { currentMode } = useStateConext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Charts" title="Booking rate by locations" />
      <ChartComponent
        id="line-chart"
        height="420px"
        primaryXAxis={areaPrimaryXAxis}
        primaryYAxis={areaPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === "Dark" ? "#33373E" : "#fff"}
      >
        <Inject services={[LineSeries, DateTime, Legend, SplineAreaSeries]} />
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
      <div className="w-full flex justify-center">
        <p>*Click on a subject in the chart to compare with others.</p>
      </div>
    </div>
  );
};

export default Area;
