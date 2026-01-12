import React from 'react'
import { Phone, Clock } from 'lucide-react'
import './AgentStatus.css'

const AgentStatus = ({ agents }) => {
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

  return (
    <div className="agent-status-list">
      {agents.map((agent) => (
        <div key={agent.id} className="agent-item slide-in">
          <div className="agent-info">
            <div className="agent-avatar">
              {agent.name.charAt(0)}
            </div>
            <div className="agent-details">
              <h4 className="agent-name">{agent.name}</h4>
              <span className={`status-badge status-${getStatusColor(agent.status)}`}>
                {getStatusText(agent.status)}
              </span>
            </div>
          </div>
          <div className="agent-stats">
            <div className="stat-item">
              <Phone className="stat-icon" />
              <span>{agent.calls}</span>
            </div>
            <div className="stat-item">
              <Clock className="stat-icon" />
              <span>{agent.duration}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AgentStatus
