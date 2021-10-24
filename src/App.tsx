import React, { useState } from 'react'
import './styles/app.css'
import Editor from './components/Editor'
import Preview from './components/Preview'

function App() {
  const [text, setText] = useState<string | null | undefined>()
  return (
    <div className="app">
      <Editor onInput={setText} />
      <Preview text={text} />
    </div>
  )
}

export default App
