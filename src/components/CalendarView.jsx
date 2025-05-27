import SimpleAppointmentCard from "./SimpleAppointmentCard";
import userIcon from "../assets/user-icon.svg";
import { scheduleData } from "../data/scheduleData.js";

export default function CalendarView() {
  const { days, dates, times, todaySchedule, selectedDayIndex } = scheduleData;

  function checkSelection(selected, i) {
    if (selected && i === selectedDayIndex) {
      return "selected";
    }
    if (selected) {
      return "selected1";
    }
  }

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
        {days.map((day, index) => (
          <div
            key={day}
            className={`calendar-column ${
              index === selectedDayIndex ? "highlight" : ""
            }`}
          >
            <div className='calendar-day'>{day}</div>
            <div className='calendar-date'>{dates[index]}</div>
            {times.map((row, rowIndex) => (
              <div
                key={`${rowIndex}-${index}`}
                className={`calendar-time ${checkSelection(
                  row[index].selected,
                  index
                )}`}
              >
                {row[index].time}
              </div>
            ))}
          </div>
        ))}
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
