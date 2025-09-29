import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Landing from './pages/Landing'
import Audit from './pages/Audit'
import Result from './pages/Result'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <div className="max-w-5xl mx-auto p-6">
        <header className="flex items-center justify-between mb-6">
          <Link to="/" className="text-xl font-bold">SMB Security Audit</Link>
          <nav className="text-sm opacity-70">
            <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/audit" element={<Audit />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(<App />)
