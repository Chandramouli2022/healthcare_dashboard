import Sidebar from "./components/Sidebar";
import DashboardMainContent from "./components/DashboardMainContent";
import "./App.css";

function App() {
  return (
    <div className='app-layout'>
      <Sidebar />
      <DashboardMainContent />
    </div>
  );
}

export default App;
