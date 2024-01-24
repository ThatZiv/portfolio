import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Typography } from '@mui/material'
const MarkdownConfig = {
  // eslint-disable-next-line no-unused-vars
  h1: ({ node, children }) => (
    <Typography variant="h1" style={{ fontFamily: 'Blinker, sans-serif' }}>
      {children}
    </Typography>
  ),
  img: ({ node }) => (
    <img
      src={node.properties.src}
      alt={node.properties.alt}
      className="Media"
      title={node.properties.title}
    />
  ),
  code: ({ children }) => (
    <pre style={{ backgroundColor: '#000', color: 'white', padding: 10 }}>
      <code style={{ whiteSpace: 'pre-line' }}>{children}</code>
    </pre>
  ),
  blockquote: ({ children }) => (
    <blockquote
      style={{
        padding: 10,
        paddingTop: 25,
        marginLeft: 0,
        borderLeft: '5px solid #ccc'
      }}
    >
      {children}
    </blockquote>
  )
}

function Markdown({ children }) {
  return (
    <ReactMarkdown linkTarget="_blank" components={MarkdownConfig}>
      {children}
    </ReactMarkdown>
  )
}

export default Markdown
