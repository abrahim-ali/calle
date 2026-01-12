import React from 'react'
import { Phone, Clock, User, CheckCircle, XCircle, AlertCircle } from 'lucide-react'
import './RecentCalls.css'

const RecentCalls = ({ calls }) => {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return CheckCircle
      case 'in-progress': return Phone
      case 'missed': return XCircle
      default: return AlertCircle
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'completed': return 'مكتملة'
      case 'in-progress': return 'جارية'
      case 'missed': return 'فائتة'
      default: return 'غير معروف'
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'success'
      case 'in-progress': return 'info'
      case 'missed': return 'danger'
      default: return 'secondary'
    }
  }

  return (
    <div className="recent-calls-table">
      <div className="table-header">
        <div className="header-cell">العميل</div>
        <div className="header-cell">الموظف</div>
        <div className="header-cell">المدة</div>
        <div className="header-cell">الحالة</div>
        <div className="header-cell">الوقت</div>
      </div>
      <div className="table-body">
        {calls.map((call) => {
          const StatusIcon = getStatusIcon(call.status)
          return (
            <div key={call.id} className="table-row slide-in">
              <div className="table-cell">
                <div className="customer-info">
                  <User className="customer-icon" />
                  <span>{call.customer}</span>
                </div>
              </div>
              <div className="table-cell">
                <span className="agent-name">{call.agent}</span>
              </div>
              <div className="table-cell">
                <div className="duration-info">
                  <Clock className="duration-icon" />
                  <span>{call.duration}</span>
                </div>
              </div>
              <div className="table-cell">
                <span className={`status-badge status-${getStatusColor(call.status)}`}>
                  <StatusIcon className="status-icon" />
                  {getStatusText(call.status)}
                </span>
              </div>
              <div className="table-cell">
                <span className="call-time">{call.time}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default RecentCalls
