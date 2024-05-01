import React from "react";

import { pieChartData } from "../../data/dummy";
import { ChartsHeader, Pie as PieChart } from "../../components";

const Pie = () => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl shadow-lg">
    <ChartsHeader category="Pie" title="Customer segements" />
    <div className="w-full">
      <PieChart
        id="chart-pie"
        data={pieChartData}
        legendVisiblity
        height="full"
      />
    </div>
    <div className="w-full flex justify-center">
      <p>*Click on a subject in the chart to compare with others.</p>
    </div>
  </div>
);

export default Pie;
