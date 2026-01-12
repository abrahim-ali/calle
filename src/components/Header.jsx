import React from 'react'
import { Bell, Search, Menu, User } from 'lucide-react'
import './Header.css'

const Header = ({ user, onMenuToggle }) => {
  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-btn" onClick={onMenuToggle}>
          <Menu />
        </button>
        <div className="search-container">
          <Search className="search-icon" />
          <input 
            type="text" 
            placeholder="البحث في النظام..." 
            className="search-input"
          />
        </div>
      </div>

      <div className="header-right">
        <button className="notification-btn">
          <Bell />
          <span className="notification-badge">3</span>
        </button>
        
        <div className="user-menu">
          <div className="user-info">
            <span className="user-name">{user.name}</span>
            <span className="user-role">{user.role}</span>
          </div>
          <div className="user-avatar">
            <User />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
