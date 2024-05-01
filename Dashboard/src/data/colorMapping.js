export const colorMappingData = [
  [
    { x: "9am", y: 40 },
    { x: "10am", y: 70 },
    { x: "11am", y: 90 },
    { x: "12pm", y: 150 },
    { x: "1pm", y: 200 },
    { x: "2pm", y: 250 },
    { x: "3pm", y: 180 },
    { x: "4pm", y: 160 },
    { x: "5pm", y: 175 },
    { x: "6pm", y: 180 },
    { x: "7pm", y: 100 },
  ],

  ["#3A98A4"],
  ["#6391B2"],
  ["#9086B1"],
  ["#B479A1"],
  ["#CB7087"],
];

export const rangeColorMapping = [
  { start: "50", end: "50", colors: colorMappingData[1] },

  {
    start: "51",
    end: "100",
    colors: colorMappingData[2],
  },

  {
    start: "101",
    end: "150",
    colors: colorMappingData[3],
  },
  {
    start: "151",
    end: "200",
    colors: colorMappingData[4],
  },
  {
    start: "201",
    end: "250",
    colors: colorMappingData[5],
  },
];

export const ColorMappingPrimaryXAxis = {
  valueType: "Category",
  majorGridLines: { width: 0 },
  title: "Hours",
};

export const ColorMappingPrimaryYAxis = {
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  labelFormat: "{value} $",
  title: "Sales by hours",
};
