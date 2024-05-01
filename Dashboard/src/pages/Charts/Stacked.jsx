import React from "react";

import { ChartsHeader, Stacked as StackedChart } from "../../components";

const Stacked = () => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <ChartsHeader category="Stacked" title="Revenue Breakdown" />
    <div className="w-full">
      <StackedChart />
    </div>
    <div className="w-full flex justify-center">
      <p>*Click on a subject in the chart to compare with others.</p>
    </div>
  </div>
);

export default Stacked;
