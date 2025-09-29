import React from 'react'

export default function QuestionGroup({ title, items, value, onChange }){
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <div className="space-y-4">
        {items.map(q => (
          <div key={q.id} className="p-4 rounded-2xl border">
            <div className="font-medium mb-2">{q.text}</div>
            <div className="flex flex-wrap gap-2">
              {q.options.map(opt => (
                <button key={opt}
                  onClick={()=>onChange(q.id,opt)}
                  className={`px-3 py-1 rounded-full border ${value[q.id]===opt? 'bg-black text-white':''}`}>
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
