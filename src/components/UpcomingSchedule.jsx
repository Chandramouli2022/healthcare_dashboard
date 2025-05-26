import SimpleAppointmentCard from "./SimpleAppointmentCard";

export default function UpcomingSchedule() {
  const upcomingSchedule = [
    ["Health Checkup Complete", " 💉", "11:00 AM"],
    ["Ophthalmologist", "👁️", "14:00 PM"],
  ];
  const upcomingScheduleNext = [
    ["Cardiologist", "❤️", "12:00 AM"],
    ["Neurologist", "👨‍⚕️", "16:00 PM"],
  ];
  return (
    <section className='upcoming-schedule'>
      <h3>The Upcoming Schedule</h3>
      <div className='schedule-day'>On Thursday</div>
      <div className='schedules'>
        {upcomingSchedule.map((item, idx) => (
          <SimpleAppointmentCard
            key={idx}
            subject={item[0]}
            icon={item[1]}
            time={item[2]}
          />
        ))}
      </div>
      <div className='schedule-day'>On Saturday</div>
      <div className='schedules'>
        {upcomingScheduleNext.map((item, idx) => (
          <SimpleAppointmentCard
            key={idx}
            subject={item[0]}
            icon={item[1]}
            time={item[2]}
          />
        ))}
      </div>
    </section>
  );
}
