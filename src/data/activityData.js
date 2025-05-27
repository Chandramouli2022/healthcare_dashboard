const activityData = [
  { day: "Mon", values: [10, 5, 4, 3] },
  { day: "Tue", values: [10, 5, 4, 3] },
  { day: "Wed", values: [10, 5, 4, 3] },
  { day: "Thu", values: [10, 5, 4, 3] },
  { day: "Fri", values: [10, 5, 4, 3] },
  { day: "Sat", values: [10, 5, 4, 3] },
  { day: "Sun", values: [10, 5, 4, 3] },
  { day: "", values: [10, 5, 4, 3] },
];
const arrRef = [10, 5, 4, 3];
const heartData = [
  { day: "Mon", values: [0, 5, 0, 0] },
  { day: "Tue", values: [5, 0, 0, 3] },
  { day: "Wed", values: [0, 0, 2, 0] },
  { day: "Thu", values: [0, 5, 2, 0] },
  { day: "Fri", values: [0, 0, 0, 0] },
  { day: "Sat", values: [5, 5, 0, 0] },
  { day: "Sun", values: [0, 0, 2, 0] },
  { day: "nMon", values: [0, 5, 0, 0] },
];

const LegData = [
  { day: "Mon", values: [0, 0, 0, 0] },
  { day: "Tue", values: [5, 5, 0, 0] },
  { day: "Wed", values: [0, 0, 2, 3] },
  { day: "Thu", values: [0, 0, 2, 0] },
  { day: "Fri", values: [0, 5, 0, 0] },
  { day: "Sat", values: [5, 0, 0, 3] },
  { day: "Sun", values: [0, 0, 2, 3] },
  { day: "nMon", values: [0, 0, 0, 3] },
];

const organConfigs = [
  { name: "leg", data: LegData, color: "rgb(55, 52, 169,0.8)" },
  { name: "heart", data: heartData, color: "rgb(0,255,255,0.8)" },
  {
    name: "lungs",
    data: typeof lungsData !== "undefined" ? lungsData : null,
    color: "green",
  },
  {
    name: "brain",
    data: typeof brainData !== "undefined" ? brainData : null,
    color: "purple",
  },
].filter((organ) => organ.data);
const daysName = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
const heightDiff = ["0px", "20px", "15px", "5px"];
const maxVal = Math.max(...activityData.flatMap((day) => day.values));
const barColors = ["#D3D3D3", "#D3D3D3", "#D3D3D3", "#D3D3D3"];

export const data = {
  activityData,
  arrRef,
  organConfigs,
  daysName,
  heightDiff,
  maxVal,
  barColors,
};
