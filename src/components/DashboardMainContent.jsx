import AnatomySection from "./AnatomySection";
import Header from "./Header";
import HealthStatusCards from "./HealthStatusCards";
import CalendarView from "./CalendarView";
import ActivityFeed from "./ActivityFeed";
import UpcomingSchedule from "./UpcomingSchedule";

export default function DashboardMainContent() {
  return (
    <main className='dashboard-main'>
      <div className='dashboard-left'>
        <Header />
        <div className='anatomy-status-container'>
          <h3 className="dashboard-title">Dashboard</h3>
          <div className='anatomy-status-wrapper'>
            <div className='anatomy-left'>
              <AnatomySection />
            </div>
            <div className='anatomy-right'>
              <HealthStatusCards />
            </div>
          </div>
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
