export default function Sidebar() {
  return (
    <aside className='sidebar'>
      <div className='sidebar-main'>
        <h2 className='sidebar-title'>Healthcare.</h2>
        <div className='sidebar-groups'>
          <p className='sidebar-group-title'>General</p>
          <div className='sidebar-item'>Dashboard</div>
          <div className='sidebar-item'>History</div>
          <div className='sidebar-item'>Calender</div>
          <div className='sidebar-item'>Appointments</div>
          <div className='sidebar-item'>Statistics</div>
        </div>
        <div>
          <p className='sidebar-group-title'>Tools</p>
          <div className='sidebar-item'>Chat</div>
          <div className='sidebar-item'>Support</div>
        </div>
      </div>
      <div className='sidebar-footer'>
        <div className='sidebar-item'>Setting</div>
      </div>
    </aside>
  );
}
