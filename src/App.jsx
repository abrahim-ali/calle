import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import CallManagement from './pages/CallManagement'
import Agents from './pages/Agents'
import Reports from './pages/Reports'
import Settings from './pages/Settings'
import './App.css'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [currentUser] = useState({
    name: 'أحمد محمد',
    role: 'مدير النظام',
    avatar: '/api/placeholder/40/40'
  })

  return (
    <div className="app">
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      <div className={`main-content ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <Header user={currentUser} onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
        <main className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/calls" element={<CallManagement />} />
            <Route path="/agents" element={<Agents />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
