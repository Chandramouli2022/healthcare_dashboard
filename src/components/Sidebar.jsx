import dashboardIcon from "../assets/dashboard.svg";
import historyIcon from "../assets/history.svg";
import calenderIcon from "../assets/calendar.svg";
import appointmentIcon from "../assets/appointment.svg";
import statisticsIcon from "../assets/statistics.svg";
import chatIcon from "../assets/message.svg";
import supportIcon from "../assets/call.svg";
import settingsIcon from "../assets/settings.svg";

export default function Sidebar() {
  return (
    <aside className='sidebar'>
      <div className='sidebar-main'>
        <h2 className='sidebar-title'>
          <span>Health</span>care.
        </h2>
        <div className='sidebar-groups'>
          <p className='sidebar-group-title'>General</p>
          <div className='sidebar-item selected'>
            <img src={dashboardIcon} alt='Dashboard' />
            <span>Dashboard</span>
          </div>
          <div className='sidebar-item'>
            <img src={historyIcon} alt='History' />
            <span>History</span>
          </div>
          <div className='sidebar-item'>
            <img src={calenderIcon} alt='Calendar' />
            <span>Calendar</span>
          </div>
          <div className='sidebar-item'>
            <img src={appointmentIcon} alt='Appointments' />
            <span>Appointments</span>
          </div>
          <div className='sidebar-item'>
            <img src={statisticsIcon} alt='Statistics' />
            <span>Statistics</span>
          </div>
        </div>
        <div>
          <p className='sidebar-group-title'>Tools</p>
          <div className='sidebar-item'>
            <img src={chatIcon} alt='Chat' />
            <span>Chat</span>
          </div>
          <div className='sidebar-item'>
            <img src={supportIcon} alt='Support' />
            <span>Support</span>
          </div>
        </div>
      </div>
      <div className='sidebar-footer'>
        <div className='sidebar-item'>
          <img src={settingsIcon} alt='Settings' />
          <span>Settings</span>
        </div>
      </div>
    </aside>
  );
}
