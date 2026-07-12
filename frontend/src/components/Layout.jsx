import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const links = [
  { to: '/', label: 'Dashboard', roles: null },
  { to: '/org-setup', label: 'Organization Setup', roles: ['Admin'] },
  { to: '/assets', label: 'Assets', roles: null },
  { to: '/allocations', label: 'Allocation & Transfer', roles: null },
  { to: '/bookings', label: 'Resource Booking', roles: null },
  { to: '/maintenance', label: 'Maintenance', roles: null },
  { to: '/audits', label: 'Asset Audit', roles: null },
  { to: '/reports', label: 'Reports & Analytics', roles: null },
  { to: '/notifications', label: 'Activity & Notifications', roles: null },
];

export default function Layout({ children }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const visibleLinks = links.filter((l) => !l.roles || l.roles.includes(user.role));

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <h2>AssetFlow</h2>
        {visibleLinks.map((l) => (
          <NavLink key={l.to} to={l.to} end={l.to === '/'} className={({ isActive }) => (isActive ? 'active' : '')}>
            {l.label}
          </NavLink>
        ))}
      </aside>
      <div className="main-area">
        <div className="topbar">
          <div>
            <strong>{user.name}</strong> <span className="muted">({user.role})</span>
          </div>
          <button
            className="btn secondary"
            onClick={() => { logout(); navigate('/login'); }}
          >
            Log out
          </button>
        </div>
        <div className="content">{children}</div>
      </div>
    </div>
  );
   }
