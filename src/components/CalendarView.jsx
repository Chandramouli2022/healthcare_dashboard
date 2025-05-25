import SimpleAppointmentCard from "./SimpleAppointmentCard";

export default function CalendarView() {
  const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
  const dates = [25, 26, 27, 28, 29, 30, 31];
  const times = [
    ["10:00", "08:00", "12:00", "10:00", "----", "12:00", "09:00"],
    ["11:00", "09:00", "---", "11:00", "14:00", "14:00", "10:00"],
    ["12:00", "10:00", "13:00", "---", "16:00", "15:00", "11:00"],
  ];

  const todaySchedule = [
    ["Dentist", "Ts", "09:00-11:00", "Dr. chameleon kumar rao"],
    ["Physiotherapy appointment", "Ts", "11:00-12:00", "Dr. AB Deviliers"],
  ];

  return (
    <section className='calendar-view'>
      <div className='user-add-icon'>
        <div className='user-icon'>user</div>
        <div className='add-icon'>+</div>
      </div>

      <div className='calendar-title-wrapper'>
        <h3 className='calendar-title-date'>October 2021</h3>
        <div className='calendar-nav'>
          <span className='left-arrow'></span>
          <span className='right-arrow'></span>
        </div>
      </div>

      <div className='calendar-grid'>
        {days.map((day) => (
          <div key={day} className='calendar-day'>
            {day}
          </div>
        ))}

        {dates.map((date) => (
          <div key={date} className='calendar-date'>
            {date}
          </div>
        ))}

        {times.map((row, rowIndex) =>
          row.map((time, i) => (
            <div key={`${rowIndex}-${i}`} className='calendar-time'>
              {time}
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
          />
        ))}
      </div>
    </section>
  );
}
