import React from 'react'

export default function ScoreBadge({score=0}){
  const color = score>=80?'bg-green-600':score>=50?'bg-yellow-500':'bg-red-600'
  const label = score>=80?'Low risk':score>=50?'Medium risk':'High risk'
  return (
    <div className={`inline-flex items-center gap-2 text-white px-3 py-1 rounded-full ${color}`}>
      <span className="font-bold">{score}</span>
      <span>{label}</span>
    </div>
  )
}
