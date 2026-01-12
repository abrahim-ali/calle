import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const CallChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis 
          dataKey="time" 
          stroke="#718096"
          fontSize={12}
        />
        <YAxis 
          stroke="#718096"
          fontSize={12}
        />
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
          dataKey="incoming" 
          stroke="#3182ce" 
          strokeWidth={3}
          dot={{ fill: '#3182ce', strokeWidth: 2, r: 4 }}
          activeDot={{ r: 6, stroke: '#3182ce', strokeWidth: 2 }}
        />
        <Line 
          type="monotone" 
          dataKey="outgoing" 
          stroke="#38a169" 
          strokeWidth={3}
          dot={{ fill: '#38a169', strokeWidth: 2, r: 4 }}
          activeDot={{ r: 6, stroke: '#38a169', strokeWidth: 2 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default CallChart
