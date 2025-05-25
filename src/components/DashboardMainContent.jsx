import AnatomySection from "./AnatomySection";
import Header from "./Header";
import HealthStatusCards from "./HealthStatusCards";
import CalendarView from "./CalendarView";
import ActivityFeed from "./ActivityFeed";
import UpcomingSchedule from "./UpcomingSchedule";

export default function DashboardMainContent() {
  const healthStatus = [
    { organ: "Lungs", date: "26 Oct 2021", statusPercent: 75, color: "red" },
    { organ: "Teeth", date: "26 Oct 2021", statusPercent: 85, color: "green" },
    { organ: "Bone", date: "26 Oct 2021", statusPercent: 90, color: "blue" },
  ];
  return (
    <main className='dashboard-main'>
      <div className='dashboard-left'>
        <Header />
        <div className='anatomy-status-container'>
          <h3 className='dashboard-title'>Dashboard</h3>
          <div className='anatomy-status-wrapper'>
            <div className='anatomy-left'>
              <AnatomySection />
            </div>
            <div className='anatomy-right'>
              {healthStatus.map((status, index) => (
                <HealthStatusCards
                  key={index}
                  organ={status.organ}
                  date={status.date}
                  statusPercent={status.statusPercent}
                  color={status.color}
                />
              ))}
            </div>
          </div>
          <div className='healthcard-details'>Details</div>
        </div>
        <ActivityFeed />
      </div>
      <div className='dashboard-right'>
        <CalendarView />
        <UpcomingSchedule />
      </div>
    </main>
  );
}
