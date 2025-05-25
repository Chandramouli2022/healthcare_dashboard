export default function SimpleAppointmentCard({subject, icon, time, docName}) {
  return (
    <div className='appointment-card'>
      <div className='appointment-header'>
        <div className='appointment-subject'>{subject}</div>
        <span className='appointment-icon'>{icon}</span>
      </div>
      <div className='appointment-time'>{time}</div>
      <div className='appointment-doc-name'>{docName}</div>
    </div>
  );
}
