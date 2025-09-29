import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing(){
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold mb-3">Free SMB Security Audit</h1>
        <p className="text-lg opacity-80 mb-6">Quick self‑assessment with a score and actionable fixes.</p>
        <Link to="/audit" className="inline-block px-6 py-3 rounded-2xl shadow bg-black text-white hover:opacity-90">Start Free Audit</Link>
      </div>
    </div>
  )
}
