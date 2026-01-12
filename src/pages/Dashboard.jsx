import React, { useState, useEffect } from 'react'
import { 
  Phone, 
  PhoneCall, 
  Users, 
  Clock, 
  TrendingUp, 
  TrendingDown,
  Activity,
  AlertCircle
} from 'lucide-react'
import StatsCard from '../components/StatsCard'
import CallChart from '../components/CallChart'
import AgentStatus from '../components/AgentStatus'
import RecentCalls from '../components/RecentCalls'
import './Dashboard.css'

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalCalls: 1247,
    activeCalls: 23,
    totalAgents: 45,
    averageWaitTime: '2:34'
  })

  const [callData] = useState([
    { time: '09:00', incoming: 45, outgoing: 23 },
    { time: '10:00', incoming: 67, outgoing: 34 },
    { time: '11:00', incoming: 89, outgoing: 45 },
    { time: '12:00', incoming: 78, outgoing: 56 },
    { time: '13:00', incoming: 56, outgoing: 43 },
    { time: '14:00', incoming: 92, outgoing: 67 },
    { time: '15:00', incoming: 84, outgoing: 52 }
  ])

  const [agents] = useState([
    { id: 1, name: 'سارة أحمد', status: 'online', calls: 12, duration: '4:23:45' },
    { id: 2, name: 'محمد علي', status: 'in-call', calls: 8, duration: '3:15:22' },
    { id: 3, name: 'فاطمة حسن', status: 'busy', calls: 15, duration: '5:12:18' },
    { id: 4, name: 'أحمد محمود', status: 'online', calls: 9, duration: '2:45:33' },
    { id: 5, name: 'نور الدين', status: 'offline', calls: 0, duration: '0:00:00' }
  ])

  const [recentCalls] = useState([
    { id: 1, customer: 'عميل رقم 1001', agent: 'سارة أحمد', duration: '5:23', status: 'completed', time: '14:30' },
    { id: 2, customer: 'عميل رقم 1002', agent: 'محمد علي', duration: '3:45', status: 'in-progress', time: '14:25' },
    { id: 3, customer: 'عميل رقم 1003', agent: 'فاطمة حسن', duration: '7:12', status: 'completed', time: '14:20' },
    { id: 4, customer: 'عميل رقم 1004', agent: 'أحمد محمود', duration: '2:18', status: 'missed', time: '14:15' }
  ])

  return (
    <div className="dashboard fade-in">
      <div className="dashboard-header">
        <h1>لوحة التحكم الرئيسية</h1>
        <p>نظرة عامة على أداء كول سنتر اليوم</p>
      </div>

      <div className="stats-grid grid grid-4">
        <StatsCard
          title="إجمالي المكالمات"
          value={stats.totalCalls}
          icon={Phone}
          trend={{ value: 12, isPositive: true }}
          color="primary"
        />
        <StatsCard
          title="المكالمات النشطة"
          value={stats.activeCalls}
          icon={PhoneCall}
          trend={{ value: 5, isPositive: true }}
          color="success"
        />
        <StatsCard
          title="الموظفين المتاحين"
          value={stats.totalAgents}
          icon={Users}
          trend={{ value: 2, isPositive: false }}
          color="info"
        />
        <StatsCard
          title="متوسط وقت الانتظار"
          value={stats.averageWaitTime}
          icon={Clock}
          trend={{ value: 8, isPositive: false }}
          color="warning"
        />
      </div>

      <div className="dashboard-content grid grid-2">
        <div className="chart-section">
          <div className="card">
            <div className="card-header">
              <h3>إحصائيات المكالمات اليومية</h3>
              <div className="chart-legend">
                <span className="legend-item incoming">واردة</span>
                <span className="legend-item outgoing">صادرة</span>
              </div>
            </div>
            <div className="card-body">
              <CallChart data={callData} />
            </div>
          </div>
        </div>

        <div className="agents-section">
          <div className="card">
            <div className="card-header">
              <h3>حالة الموظفين</h3>
              <button className="btn btn-secondary">عرض الكل</button>
            </div>
            <div className="card-body">
              <AgentStatus agents={agents} />
            </div>
          </div>
        </div>
      </div>

      <div className="recent-calls-section">
        <div className="card">
          <div className="card-header">
            <h3>المكالمات الأخيرة</h3>
            <button className="btn btn-primary">عرض جميع المكالمات</button>
          </div>
          <div className="card-body">
            <RecentCalls calls={recentCalls} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
