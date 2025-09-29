import React, { useEffect, useMemo, useState } from 'react'
import QuestionGroup from '../components/QuestionGroup'
import ScoreBadge from '../components/ScoreBadge'

export default function Audit(){
  const [data,setData] = useState(null)
  const [answers,setAnswers] = useState({})
  const [score,setScore] = useState(0)

  useEffect(()=>{
    fetch('/api/questions').then(r=>r.json()).then(setData)
  },[])

  useEffect(()=>{
    if(!data) return
    fetch('/api/score',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({answers})})
      .then(r=>r.json()).then(res=>setScore(res.score))
  },[answers,data])

  if(!data) return <div className="p-6">Loading...</div>

  const grouped = useMemo(()=>{
    const map = {}
    data.questions.forEach((q)=>{ (map[q.category] ||= []).push(q) })
    return map
  },[data])

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Audit</h1>
        <ScoreBadge score={score}/>
      </div>
      {data.categories.map((c)=> (
        <QuestionGroup key={c.key} title={c.title} items={grouped[c.key]}
          value={answers} onChange={(id,val)=> setAnswers(a=>({...a,[id]:val}))} />
      ))}
      <div className="flex justify-end">
        <a href={`/result?data=${encodeURIComponent(JSON.stringify(answers))}`} className="px-6 py-3 rounded-2xl bg-black text-white">See Results</a>
      </div>
    </div>
  )
}
