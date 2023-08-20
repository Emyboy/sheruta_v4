import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

type Props = {
	text: string
}

export default function STextToMarkdown({ text }: Props) {
	return <ReactMarkdown children={text} remarkPlugins={[remarkGfm]} />
}
