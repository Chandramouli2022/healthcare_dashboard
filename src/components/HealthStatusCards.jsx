export default function HealthStatusCard({ organ, date, statusPercent, color }) {
  return (
    <div className='health-status-cards'>
      <div className='health-card-title'>{organ}</div>
      <p className='health-card-date'>Date: {date}</p>
      <div
        className='health-card-bar'
        style={{
          background: `linear-gradient(to right, ${color} ${statusPercent}%, #ddd ${statusPercent}%)`,
        }}
      ></div>
    </div>
  );
}
