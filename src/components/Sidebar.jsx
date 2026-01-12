import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  LayoutDashboard, 
  Phone, 
  Users, 
  BarChart3, 
  Settings,
  ChevronLeft,
  Headphones
} from 'lucide-react'
import './Sidebar.css'

const Sidebar = ({ isOpen, onToggle }) => {
  const location = useLocation()

  const menuItems = [
    { path: '/', icon: LayoutDashboard, label: 'لوحة التحكم' },
    { path: '/calls', icon: Phone, label: 'إدارة المكالمات' },
    { path: '/agents', icon: Users, label: 'الموظفين' },
    { path: '/reports', icon: BarChart3, label: 'التقارير' },
    { path: '/settings', icon: Settings, label: 'الإعدادات' }
  ]

  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <div className="logo">
          <Headphones className="logo-icon" />
          {isOpen && <span className="logo-text">نظام كول سنتر</span>}
        </div>
        <button className="toggle-btn" onClick={onToggle}>
          <ChevronLeft className={`toggle-icon ${isOpen ? 'rotated' : ''}`} />
        </button>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = location.pathname === item.path
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-item ${isActive ? 'active' : ''}`}
              title={!isOpen ? item.label : ''}
            >
              <Icon className="nav-icon" />
              {isOpen && <span className="nav-label">{item.label}</span>}
            </Link>
          )
        })}
      </nav>

      <div className="sidebar-footer">
        <div className="system-status">
          <div className="status-indicator online"></div>
          {isOpen && <span className="status-text">النظام متصل</span>}
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
