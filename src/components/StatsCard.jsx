import React from 'react'
import { TrendingUp, TrendingDown } from 'lucide-react'
import './StatsCard.css'

const StatsCard = ({ title, value, icon: Icon, trend, color = 'primary' }) => {
  return (
    <div className={`stats-card card ${color}`}>
      <div className="stats-content">
        <div className="stats-header">
          <div className="stats-icon">
            <Icon />
          </div>
          {trend && (
            <div className={`trend ${trend.isPositive ? 'positive' : 'negative'}`}>
              {trend.isPositive ? <TrendingUp /> : <TrendingDown />}
              <span>{trend.value}%</span>
            </div>
          )}
        </div>
        <div className="stats-body">
          <h3 className="stats-value">{value}</h3>
          <p className="stats-title">{title}</p>
        </div>
      </div>
    </div>
  )
}

export default StatsCard
