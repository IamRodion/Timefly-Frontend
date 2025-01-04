import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/Index';
import Home from './pages/Home';
import About from './pages/About';
import DashboardOverview from './pages/DashboardOverview';
import DashboardSettings from './pages/DashboardSettings';
import DashboardProfile from './pages/DashboardProfile';
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './layouts/Dashboard';


function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="dashboard/overview" element={<DashboardOverview />} />
        <Route path="dashboard/settings" element={<DashboardSettings />} />
        <Route path="dashboard/profile" element={<DashboardProfile />} />
      </Route>
    </Routes>
  );
}

export default App;
