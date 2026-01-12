import React, { useState } from 'react'
import { BarChart3, Download, Calendar, TrendingUp, Phone, Clock, Users, Award } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts'
import './Reports.css'

const Reports = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('week')
  const [selectedReport, setSelectedReport] = useState('overview')

  const callVolumeData = [
    { day: 'السبت', incoming: 145, outgoing: 89, completed: 198 },
    { day: 'الأحد', incoming: 167, outgoing: 102, completed: 234 },
    { day: 'الاثنين', incoming: 189, outgoing: 134, completed: 267 },
    { day: 'الثلاثاء', incoming: 156, outgoing: 98, completed: 201 },
    { day: 'الأربعاء', incoming: 178, outgoing: 123, completed: 245 },
    { day: 'الخميس', incoming: 134, outgoing: 87, completed: 189 },
    { day: 'الجمعة', incoming: 98, outgoing: 56, completed: 134 }
  ]

  const performanceData = [
    { agent: 'سارة أحمد', calls: 89, avgTime: '4:23', rating: 4.8 },
    { agent: 'محمد علي', calls: 76, avgTime: '5:12', rating: 4.6 },
    { agent: 'فاطمة حسن', calls: 92, avgTime: '3:45', rating: 4.9 },
    { agent: 'أحمد محمود', calls: 67, avgTime: '6:18', rating: 4.4 },
    { agent: 'نور الدين', calls: 54, avgTime: '7:30', rating: 4.2 }
  ]

  const departmentData = [
    { name: 'خدمة العملاء', value: 45, color: '#3182ce' },
    { name: 'الدعم التقني', value: 30, color: '#38a169' },
    { name: 'المبيعات', value: 25, color: '#d69e2e' }
  ]

  const satisfactionData = [
    { period: 'يناير', satisfaction: 4.2 },
    { period: 'فبراير', satisfaction: 4.4 },
    { period: 'مارس', satisfaction: 4.3 },
    { period: 'أبريل', satisfaction: 4.6 },
    { period: 'مايو', satisfaction: 4.5 },
    { period: 'يونيو', satisfaction: 4.7 }
  ]

  const kpiData = [
    { title: 'إجمالي المكالمات', value: '12,847', change: '+12%', icon: Phone, color: 'primary' },
    { title: 'متوسط وقت الانتظار', value: '2:34', change: '-8%', icon: Clock, color: 'success' },
    { title: 'معدل الرضا', value: '4.7/5', change: '+5%', icon: Award, color: 'warning' },
    { title: 'الموظفين النشطين', value: '45', change: '+2', icon: Users, color: 'info' }
  ]

  return (
    <div className="reports-page fade-in">
      <div className="page-header">
        <div className="header-content">
          <h1>التقارير والإحصائيات</h1>
          <p>تحليل شامل لأداء كول سنتر والموظفين</p>
        </div>
        <div className="header-actions">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="period-selector"
          >
            <option value="day">اليوم</option>
            <option value="week">هذا الأسبوع</option>
            <option value="month">هذا الشهر</option>
            <option value="quarter">هذا الربع</option>
            <option value="year">هذا العام</option>
          </select>
          <button className="btn btn-primary">
            <Download />
            تصدير التقرير
          </button>
        </div>
      </div>

      <div className="report-tabs">
        <button
          className={`tab-btn ${selectedReport === 'overview' ? 'active' : ''}`}
          onClick={() => setSelectedReport('overview')}
        >
          نظرة عامة
        </button>
        <button
          className={`tab-btn ${selectedReport === 'performance' ? 'active' : ''}`}
          onClick={() => setSelectedReport('performance')}
        >
          أداء الموظفين
        </button>
        <button
          className={`tab-btn ${selectedReport === 'satisfaction' ? 'active' : ''}`}
          onClick={() => setSelectedReport('satisfaction')}
        >
          رضا العملاء
        </button>
        <button
          className={`tab-btn ${selectedReport === 'departments' ? 'active' : ''}`}
          onClick={() => setSelectedReport('departments')}
        >
          الأقسام
        </button>
      </div>

      {selectedReport === 'overview' && (
        <div className="overview-section">
          <div className="kpi-grid grid grid-4">
            {kpiData.map((kpi, index) => {
              const Icon = kpi.icon
              return (
                <div key={index} className={`kpi-card card ${kpi.color}`}>
                  <div className="kpi-header">
                    <div className="kpi-icon">
                      <Icon />
                    </div>
                    <div className={`kpi-change ${kpi.change.startsWith('+') ? 'positive' : 'negative'}`}>
                      {kpi.change}
                    </div>
                  </div>
                  <div className="kpi-body">
                    <h3 className="kpi-value">{kpi.value}</h3>
                    <p className="kpi-title">{kpi.title}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="charts-grid grid grid-2">
            <div className="chart-card card">
              <div className="card-header">
                <h3>حجم المكالمات الأسبوعية</h3>
              </div>
              <div className="card-body">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={callVolumeData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="day" stroke="#718096" fontSize={12} />
                    <YAxis stroke="#718096" fontSize={12} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'white',
                        border: '1px solid #e2e8f0',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                      }}
                    />
                    <Bar dataKey="incoming" fill="#3182ce" name="واردة" />
                    <Bar dataKey="outgoing" fill="#38a169" name="صادرة" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="chart-card card">
              <div className="card-header">
                <h3>توزيع المكالمات حسب القسم</h3>
              </div>
              <div className="card-body">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={departmentData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {departmentData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedReport === 'performance' && (
        <div className="performance-section">
          <div className="performance-table card">
            <div className="card-header">
              <h3>أداء الموظفين - هذا الأسبوع</h3>
            </div>
            <div className="card-body">
              <div className="table-container">
                <table className="performance-table-content">
                  <thead>
                    <tr>
                      <th>الموظف</th>
                      <th>عدد المكالمات</th>
                      <th>متوسط المدة</th>
                      <th>التقييم</th>
                      <th>الأداء</th>
                    </tr>
                  </thead>
                  <tbody>
                    {performanceData.map((agent, index) => (
                      <tr key={index} className="slide-in">
                        <td>
                          <div className="agent-cell">
                            <div className="agent-avatar">
                              {agent.agent.charAt(0)}
                            </div>
                            <span>{agent.agent}</span>
                          </div>
                        </td>
                        <td>
                          <span className="calls-count">{agent.calls}</span>
                        </td>
                        <td>
                          <span className="avg-time">{agent.avgTime}</span>
                        </td>
                        <td>
                          <div className="rating-cell">
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
                        </td>
                        <td>
                          <div className="performance-bar">
                            <div
                              className="performance-fill"
                              style={{ width: `${(agent.rating / 5) * 100}%` }}
                            ></div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedReport === 'satisfaction' && (
        <div className="satisfaction-section">
          <div className="chart-card card">
            <div className="card-header">
              <h3>تطور معدل رضا العملاء</h3>
            </div>
            <div className="card-body">
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={satisfactionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="period" stroke="#718096" fontSize={12} />
                  <YAxis domain={[0, 5]} stroke="#718096" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="satisfaction"
                    stroke="#d69e2e"
                    strokeWidth={3}
                    dot={{ fill: '#d69e2e', strokeWidth: 2, r: 6 }}
                    activeDot={{ r: 8, stroke: '#d69e2e', strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}

      {selectedReport === 'departments' && (
        <div className="departments-section">
          <div className="departments-grid grid grid-3">
            {departmentData.map((dept, index) => (
              <div key={index} className="department-card card">
                <div className="card-header">
                  <h3>{dept.name}</h3>
                  <div
                    className="department-indicator"
                    style={{ backgroundColor: dept.color }}
                  ></div>
                </div>
                <div className="card-body">
                  <div className="department-stats">
                    <div className="stat-item">
                      <span className="stat-value">{dept.value}%</span>
                      <span className="stat-label">من إجمالي المكالمات</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-value">
                        {Math.round((dept.value / 100) * 12847)}
                      </span>
                      <span className="stat-label">مكالمة هذا الشهر</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Reports
