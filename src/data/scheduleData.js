const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
const dates = [25, 26, 27, 28, 29, 30, 31];
const times = [
  [
    { time: "10:00", selected: false },
    { time: "08:00", selected: false },
    { time: "12:00", selected: false },
    { time: "10:00", selected: false },
    { time: "----", selected: false },
    { time: "12:00", selected: true },
    { time: "09:00", selected: true },
  ],
  [
    { time: "11:00", selected: false },
    { time: "09:00", selected: true },
    { time: "---", selected: false },
    { time: "11:00", selected: true },
    { time: "14:00", selected: false },
    { time: "14:00", selected: false },
    { time: "10:00", selected: false },
  ],
  [
    { time: "12:00", selected: false },
    { time: "10:00", selected: false },
    { time: "13:00", selected: false },
    { time: "---", selected: false },
    { time: "16:00", selected: false },
    { time: "15:00", selected: false },
    { time: "11:00", selected: false },
  ],
];

const todaySchedule = [
  ["Dentist", "🦷", "09:00-11:00", "Dr. chameleon kumar rao", true],
  ["Physiotherapy appointment", "💪", "11:00-12:00", "Dr. AB Deviliers", false],
];

export const scheduleData = {
  days,
  dates,
  times,
  todaySchedule,
  selectedDayIndex: 1,
};
