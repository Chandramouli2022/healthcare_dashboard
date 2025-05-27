import AnatomySection from "./AnatomySection";
import Header from "./Header";
import HealthStatusCards from "./HealthStatusCards";
import CalendarView from "./CalendarView";
import ActivityFeed from "./ActivityFeed";
import UpcomingSchedule from "./UpcomingSchedule";

export default function DashboardMainContent({ toggleMobileMenu }) {
  const healthStatus = [
    {
      icon: "🫁",
      organ: "Lungs",
      date: "26 Oct 2021",
      statusPercent: 75,
      color: "rgb(183 77 78)",
    },
    {
      icon: "🦷",
      organ: "Teeth",
      date: "26 Oct 2021",
      statusPercent: 75,
      color: "rgba(0, 200, 200)",
    },
    {
      icon: "🦴",
      organ: "Bone",
      date: "26 Oct 2021",
      statusPercent: 75,
      color: "rgb(255 126 97)",
    },
  ];
  return (
    <main className='dashboard-main'>
      <div className='dashboard-left'>
        <Header toggleMobileMenu={toggleMobileMenu}/>
        <div className='anatomy-status-container'>
          <div className='dashboard-title-wrapper'>
            <h3 className='dashboard-title'>Dashboard</h3>
            <span>
              This Week <span className='down-tip'>▼</span>
            </span>
          </div>

          <div className='anatomy-status-wrapper'>
            <div className='anatomy-left'>
              <AnatomySection />
            </div>
            <div className='anatomy-right'>
              {healthStatus.map((status, index) => (
                <HealthStatusCards
                  key={index}
                  icon={status.icon}
                  organ={status.organ}
                  date={status.date}
                  statusPercent={status.statusPercent}
                  color={status.color}
                />
              ))}
              <div className='nav-details'>
                Details <span className='right-arrow-d'>→</span>
              </div>
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
