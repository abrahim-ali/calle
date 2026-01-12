import React, { useState } from 'react'
import { Phone, PhoneCall, PhoneOff, Search, Filter, Download } from 'lucide-react'
import './CallManagement.css'

const CallManagement = () => {
  const [activeTab, setActiveTab] = useState('active')
  const [searchTerm, setSearchTerm] = useState('')
  
  const [activeCalls] = useState([
    { id: 1, customer: '+966501234567', agent: 'سارة أحمد', duration: '05:23', type: 'incoming', priority: 'high' },
    { id: 2, customer: '+966507654321', agent: 'محمد علي', duration: '03:45', type: 'outgoing', priority: 'medium' },
    { id: 3, customer: '+966509876543', agent: 'فاطمة حسن', duration: '07:12', type: 'incoming', priority: 'low' },
    { id: 4, customer: '+966502468135', agent: 'أحمد محمود', duration: '02:18', type: 'incoming', priority: 'high' }
  ])

  const [callHistory] = useState([
    { id: 1, customer: '+966501234567', agent: 'سارة أحمد', duration: '08:45', type: 'incoming', status: 'completed', date: '2025-01-15', time: '14:30' },
    { id: 2, customer: '+966507654321', agent: 'محمد علي', duration: '05:23', type: 'outgoing', status: 'completed', date: '2025-01-15', time: '14:25' },
    { id: 3, customer: '+966509876543', agent: 'فاطمة حسن', duration: '00:00', type: 'incoming', status: 'missed', date: '2025-01-15', time: '14:20' },
    { id: 4, customer: '+966502468135', agent: 'أحمد محمود', duration: '12:34', type: 'incoming', status: 'completed', date: '2025-01-15', time: '14:15' }
  ])

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'danger'
      case 'medium': return 'warning'
      case 'low': return 'success'
      default: return 'secondary'
    }
  }

  const getPriorityText = (priority) => {
    switch (priority) {
      case 'high': return 'عالية'
      case 'medium': return 'متوسطة'
      case 'low': return 'منخفضة'
      default: return 'عادية'
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'success'
      case 'missed': return 'danger'
      case 'cancelled': return 'warning'
      default: return 'secondary'
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'completed': return 'مكتملة'
      case 'missed': return 'فائتة'
      case 'cancelled': return 'ملغية'
      default: return 'غير معروف'
    }
  }

  return (
    <div className="call-management fade-in">
      <div className="page-header">
        <div className="header-content">
          <h1>إدارة المكالمات</h1>
          <p>مراقبة وإدارة جميع المكالمات الواردة والصادرة</p>
        </div>
        <div className="header-actions">
          <button className="btn btn-secondary">
            <Download />
            تصدير التقرير
          </button>
          <button className="btn btn-primary">
            <PhoneCall />
            مكالمة جديدة
          </button>
        </div>
      </div>

      <div className="call-controls">
        <div className="search-filters">
          <div className="search-box">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="البحث في المكالمات..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="btn btn-secondary">
            <Filter />
            تصفية
          </button>
        </div>

        <div className="tab-navigation">
          <button
            className={`tab-btn ${activeTab === 'active' ? 'active' : ''}`}
            onClick={() => setActiveTab('active')}
          >
            المكالمات النشطة ({activeCalls.length})
          </button>
          <button
            className={`tab-btn ${activeTab === 'history' ? 'active' : ''}`}
            onClick={() => setActiveTab('history')}
          >
            سجل المكالمات
          </button>
        </div>
      </div>

      <div className="calls-content">
        {activeTab === 'active' && (
          <div className="active-calls">
            <div className="calls-grid">
              {activeCalls.map((call) => (
                <div key={call.id} className="call-card card slide-in">
                  <div className="call-header">
                    <div className="call-type">
                      {call.type === 'incoming' ? (
                        <Phone className="call-icon incoming" />
                      ) : (
                        <PhoneCall className="call-icon outgoing" />
                      )}
                      <span>{call.type === 'incoming' ? 'واردة' : 'صادرة'}</span>
                    </div>
                    <span className={`priority-badge status-${getPriorityColor(call.priority)}`}>
                      {getPriorityText(call.priority)}
                    </span>
                  </div>
                  <div className="call-body">
                    <div className="customer-number">{call.customer}</div>
                    <div className="agent-info">الموظف: {call.agent}</div>
                    <div className="call-duration pulse">المدة: {call.duration}</div>
                  </div>
                  <div className="call-actions">
                    <button className="btn btn-success">انضمام</button>
                    <button className="btn btn-danger">إنهاء</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'history' && (
          <div className="call-history">
            <div className="history-table">
              <div className="table-header">
                <div className="header-cell">رقم العميل</div>
                <div className="header-cell">الموظف</div>
                <div className="header-cell">النوع</div>
                <div className="header-cell">المدة</div>
                <div className="header-cell">الحالة</div>
                <div className="header-cell">التاريخ</div>
                <div className="header-cell">الوقت</div>
              </div>
              <div className="table-body">
                {callHistory.map((call) => (
                  <div key={call.id} className="table-row slide-in">
                    <div className="table-cell">{call.customer}</div>
                    <div className="table-cell">{call.agent}</div>
                    <div className="table-cell">
                      <span className={`type-badge ${call.type}`}>
                        {call.type === 'incoming' ? 'واردة' : 'صادرة'}
                      </span>
                    </div>
                    <div className="table-cell">{call.duration}</div>
                    <div className="table-cell">
                      <span className={`status-badge status-${getStatusColor(call.status)}`}>
                        {getStatusText(call.status)}
                      </span>
                    </div>
                    <div className="table-cell">{call.date}</div>
                    <div className="table-cell">{call.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CallManagement
