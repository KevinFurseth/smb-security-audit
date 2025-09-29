import React, { useEffect, useState } from 'react'
import ScoreBadge from '../components/ScoreBadge'

export default function Result(){
  const [res,setRes] = useState(null)
  useEffect(()=>{
    const params = new URLSearchParams(window.location.search)
    const data = params.get('data')
    const answers = data? JSON.parse(data) : {}
    fetch('/api/score',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({answers})})
      .then(r=>r.json()).then(setRes)
  },[])

  if(!res) return <div className="p-6">Calculating...</div>

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Your Results</h1>
        <ScoreBadge score={res.score}/>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Category Breakdown</h2>
        <ul className="grid grid-cols-2 gap-2">
          {Object.entries(res.categoryBreakdown).map(([k,v])=> (
            <li key={k} className="p-3 rounded-xl border flex justify-between"><span>{k}</span><span>{v}</span></li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Top Recommendations</h2>
        <ul className="space-y-2">
          {res.recommendations.map((r)=> (
            <li key={r.id} className="p-3 rounded-xl border">{r.text}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
