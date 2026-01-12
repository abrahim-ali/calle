import React, { useState } from 'react'
import { Users, UserPlus, Search, Filter, MoreVertical, Phone, Clock, Award } from 'lucide-react'
import './Agents.css'

const Agents = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState('all')
  
  const [agents] = useState([
    {
      id: 1,
      name: 'سارة أحمد محمد',
      email: 'sara.ahmed@company.com',
      phone: '+966501234567',
      department: 'خدمة العملاء',
      status: 'online',
      totalCalls: 1247,
      avgCallTime: '4:23',
      rating: 4.8,
      joinDate: '2023-01-15',
      avatar: '/api/placeholder/60/60'
    },
    {
      id: 2,
      name: 'محمد علي حسن',
      email: 'mohamed.ali@company.com',
      phone: '+966507654321',
      department: 'الدعم التقني',
      status: 'in-call',
      totalCalls: 892,
      avgCallTime: '6:15',
      rating: 4.6,
      joinDate: '2023-03-20',
      avatar: '/api/placeholder/60/60'
    },
    {
      id: 3,
      name: 'فاطمة حسن علي',
      email: 'fatima.hassan@company.com',
      phone: '+966509876543',
      department: 'المبيعات',
      status: 'busy',
      totalCalls: 1456,
      avgCallTime: '3:45',
      rating: 4.9,
      joinDate: '2022-11-10',
      avatar: '/api/placeholder/60/60'
    },
    {
      id: 4,
      name: 'أحمد محمود سالم',
      email: 'ahmed.mahmoud@company.com',
      phone: '+966502468135',
      department: 'خدمة العملاء',
      status: 'online',
      totalCalls: 734,
      avgCallTime: '5:12',
      rating: 4.4,
      joinDate: '2023-06-05',
      avatar: '/api/placeholder/60/60'
    },
    {
      id: 5,
      name: 'نور الدين أحمد',
      email: 'nour.ahmed@company.com',
      phone: '+966505555555',
      department: 'الدعم التقني',
      status: 'offline',
      totalCalls: 567,
      avgCallTime: '7:30',
      rating: 4.2,
      joinDate: '2023-08-12',
      avatar: '/api/placeholder/60/60'
    }
  ])

  const departments = ['all', 'خدمة العملاء', 'الدعم التقني', 'المبيعات']

  const getStatusColor = (status) => {
    switch (status) {
      case 'online': return 'success'
      case 'in-call': return 'info'
      case 'busy': return 'warning'
      case 'offline': return 'offline'
      default: return 'offline'
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'online': return 'متاح'
      case 'in-call': return 'في مكالمة'
      case 'busy': return 'مشغول'
      case 'offline': return 'غير متصل'
      default: return 'غير معروف'
    }
  }

  const filteredAgents = agents.filter(agent => {
    const matchesSearch = agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         agent.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDepartment = selectedDepartment === 'all' || agent.department === selectedDepartment
    return matchesSearch && matchesDepartment
  })

  return (
    <div className="agents-page fade-in">
      <div className="page-header">
        <div className="header-content">
          <h1>إدارة الموظفين</h1>
          <p>إدارة ومراقبة فريق خدمة العملاء</p>
        </div>
        <div className="header-actions">
          <button className="btn btn-secondary">
            <Filter />
            تصفية متقدمة
          </button>
          <button className="btn btn-primary">
            <UserPlus />
            إضافة موظف جديد
          </button>
        </div>
      </div>

      <div className="agents-controls">
        <div className="search-section">
          <div className="search-box">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="البحث عن موظف..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className="department-filter"
          >
            <option value="all">جميع الأقسام</option>
            {departments.slice(1).map(dept => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
        </div>

        <div className="agents-stats">
          <div className="stat-item">
            <Users className="stat-icon" />
            <div className="stat-content">
              <span className="stat-value">{agents.length}</span>
              <span className="stat-label">إجمالي الموظفين</span>
            </div>
          </div>
          <div className="stat-item">
            <div className="status-indicator online"></div>
            <div className="stat-content">
              <span className="stat-value">{agents.filter(a => a.status === 'online').length}</span>
              <span className="stat-label">متاح</span>
            </div>
          </div>
          <div className="stat-item">
            <div className="status-indicator busy"></div>
            <div className="stat-content">
              <span className="stat-value">{agents.filter(a => a.status === 'in-call' || a.status === 'busy').length}</span>
              <span className="stat-label">مشغول</span>
            </div>
          </div>
        </div>
      </div>

      <div className="agents-grid">
        {filteredAgents.map((agent) => (
          <div key={agent.id} className="agent-card card slide-in">
            <div className="agent-header">
              <div className="agent-avatar">
                <img src={agent.avatar} alt={agent.name} />
                <div className={`status-dot ${getStatusColor(agent.status)}`}></div>
              </div>
              <div className="agent-actions">
                <button className="action-btn">
                  <MoreVertical />
                </button>
              </div>
            </div>

            <div className="agent-info">
              <h3 className="agent-name">{agent.name}</h3>
              <p className="agent-email">{agent.email}</p>
              <p className="agent-phone">{agent.phone}</p>
              <div className="agent-department">{agent.department}</div>
              <span className={`status-badge status-${getStatusColor(agent.status)}`}>
                {getStatusText(agent.status)}
              </span>
            </div>

            <div className="agent-stats">
              <div className="stat-row">
                <div className="stat-item">
                  <Phone className="stat-icon" />
                  <div className="stat-details">
                    <span className="stat-value">{agent.totalCalls}</span>
                    <span className="stat-label">مكالمة</span>
                  </div>
                </div>
                <div className="stat-item">
                  <Clock className="stat-icon" />
                  <div className="stat-details">
                    <span className="stat-value">{agent.avgCallTime}</span>
                    <span className="stat-label">متوسط المدة</span>
                  </div>
                </div>
              </div>
              <div className="rating-section">
                <Award className="rating-icon" />
                <div className="rating-details">
                  <span className="rating-value">{agent.rating}</span>
                  <div className="rating-stars">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`star ${i < Math.floor(agent.rating) ? 'filled' : ''}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="agent-footer">
              <span className="join-date">انضم في {agent.joinDate}</span>
              <div className="agent-actions-footer">
                <button className="btn btn-secondary btn-sm">عرض التفاصيل</button>
                <button className="btn btn-primary btn-sm">تعديل</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Agents
