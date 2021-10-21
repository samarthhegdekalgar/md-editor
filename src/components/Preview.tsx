import { FC } from "react";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import '../styles/preview.css'

interface PreviewProps {
    text: string | null | undefined
}

const Preview: FC<PreviewProps> = ({text}: PreviewProps) => {
    return <ReactMarkdown children={text ?? ''} className="preview" remarkPlugins={[remarkGfm]}/>
}
export default Preview