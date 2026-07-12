import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import OrgSetup from './pages/OrgSetup';
import Assets from './pages/Assets';
import Allocations from './pages/Allocations';
import Bookings from './pages/Bookings';
import Maintenance from './pages/Maintenance';
import Audits from './pages/Audits';
import Reports from './pages/Reports';
import Notifications from './pages/Notifications';

function withLayout(element, roles) {
  return (
    <ProtectedRoute roles={roles}>
      <Layout>{element}</Layout>
    </ProtectedRoute>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/" element={withLayout(<Dashboard />)} />
      <Route path="/org-setup" element={withLayout(<OrgSetup />, ['Admin'])} />
      <Route path="/assets" element={withLayout(<Assets />)} />
      <Route path="/allocations" element={withLayout(<Allocations />)} />
      <Route path="/bookings" element={withLayout(<Bookings />)} />
      <Route path="/maintenance" element={withLayout(<Maintenance />)} />
      <Route path="/audits" element={withLayout(<Audits />)} />
      <Route path="/reports" element={withLayout(<Reports />)} />
      <Route path="/notifications" element={withLayout(<Notifications />)} />

      <Route path="*" element={<div style={{ padding: 40 }}>Page not found</div>} />
    </Routes>
  );
}