import SimpleAppointmentCard from "./SimpleAppointmentCard";

export default function UpcomingSchedule() {
  const upcomingSchedule = [
    ["Dentist", "Ts", "09:00-11:00"],
    ["Physiotherapy appointment", "Ts", "11:00-12:00"],
  ];
  const upcomingScheduleNext = [
    ["Dentist", "Ts", "09:00-11:00"],
    ["Physiotherapy appointment", "Ts", "11:00-12:00"],
  ];
  return (
    <section className='upcoming-schedule'>
      <h3>The Upcoming Schedule</h3>
      <div className='schedules'>
        {upcomingSchedule.map((item, idx) => (
          <SimpleAppointmentCard
            key={idx}
            subject={item[0]}
            icon={item[1]}
            time={item[2]}
            docName={item[3]}
          />
        ))}
        {upcomingScheduleNext.map((item, idx) => (
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
