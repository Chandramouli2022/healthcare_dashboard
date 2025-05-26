export default function HealthStatusCard({
  icon,
  organ,
  date,
  statusPercent,
  color,
}) {
  return (
    <div className='health-status-cards'>
      <div className='health-card-title'>
        <span>{icon}</span>
        {organ}
      </div>
      <p className='health-card-date'>Date: {date}</p>
      <div className='health-card-bar'>
        <div
          className='health-card-fill'
          style={{
            width: `${statusPercent}%`,
            backgroundColor: color,
          }}
        ></div>
      </div>
    </div>
  );
}
