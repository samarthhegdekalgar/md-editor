import { FC } from 'react'
import '../styles/editor.css'

export interface EditorProps {
  onInput: (value: string | null) => unknown
}

const Editor: FC<EditorProps> = ({ onInput }: EditorProps) => {
  return (
    <textarea className="container" onChange={(e) => onInput(e.target.value)} />
  )
}

export default Editor
