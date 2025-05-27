import Sidebar from "./components/Sidebar";
import DashboardMainContent from "./components/DashboardMainContent";
import "./App.css";
import { useState } from "react";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <div className='app-layout'>
      <Sidebar mobileMenuOpen={mobileMenuOpen} toggleMobileMenu={toggleMobileMenu}/>
      <DashboardMainContent toggleMobileMenu={toggleMobileMenu} />
    </div>
  );
}

export default App;
