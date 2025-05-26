import SimpleAppointmentCard from "./SimpleAppointmentCard";
import userIcon from "../assets/user-icon.svg";

export default function CalendarView() {
  const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
  const dates = [25, 26, 27, 28, 29, 30, 31];
  const times = [
    [
      { time: "10:00", selected: false },
      { time: "08:00", selected: false },
      { time: "12:00", selected: false },
      { time: "10:00", selected: false },
      { time: "----", selected: false },
      { time: "12:00", selected: false },
      { time: "09:00", selected: false },
    ],
    [
      { time: "11:00", selected: false },
      { time: "09:00", selected: true },
      { time: "---", selected: false },
      { time: "11:00", selected: false },
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
    ["Dentist", "Ts", "09:00-11:00", "Dr. chameleon kumar rao", true],
    [
      "Physiotherapy appointment",
      "Ts",
      "11:00-12:00",
      "Dr. AB Deviliers",
      false,
    ],
  ];
  const selectedDayIndex = 1;

  return (
    <section className='calendar-view'>
      <div className='user-add-icon'>
        <div className='user-icon'>
          <img src={userIcon} alt='user' />
        </div>
        <div className='add-icon'>
          <button>+</button>
        </div>
      </div>

      <div className='calendar-title-wrapper'>
        <h3 className='calendar-title-date'>October 2021</h3>
        <div className='calendar-nav'>
          <span className='left-arrow'>←</span>
          <span className='right-arrow'>→</span>
        </div>
      </div>

      <div className='calendar-grid'>
        {days.map((day,index) => (
          <div key={day} className='calendar-day'>
            <div
              className={`${index === selectedDayIndex ? "highlight" : ""}`}
            ></div>
            {day}
          </div>
        ))}

        {dates.map((date) => (
          <div key={date} className='calendar-date'>
            {date}
          </div>
        ))}

        {times.map((row, rowIndex) =>
          row.map((entry, i) => (
            <div
              key={`${rowIndex}-${i}`}
              className={`calendar-time ${entry.selected ? "selected" : ""}`}
            >
              {entry.time}
            </div>
          ))
        )}
      </div>
      <div className='schedules'>
        {todaySchedule.map((item, idx) => (
          <SimpleAppointmentCard
            key={idx}
            subject={item[0]}
            icon={item[1]}
            time={item[2]}
            docName={item[3]}
            selected={item[4]}
          />
        ))}
      </div>
    </section>
  );
}
