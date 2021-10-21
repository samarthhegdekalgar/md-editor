import { FC } from "react"
import '../styles/editor.css'

export interface EditorProps {
    onInput: (value: string | null) => unknown
}

const Editor: FC<EditorProps> = ({onInput}: EditorProps) => {
    return <div contentEditable className="container" onInput={(e) => onInput(e.currentTarget.textContent)}></div>
}

export default Editor