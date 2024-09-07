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
    // TODO: make overflow scrollable to width of parent container
    <pre style={{ backgroundColor: '#000', color: 'white', padding: 10 }}>
      <code style={{ whiteSpace: 'pre-line', wordBreak: 'break-word' }}>
        {children}
      </code>
    </pre>
  ),
  hr: () => <hr style={{ border: '1.5px solid #737373', borderRadius: 5 }} />,
  blockquote: ({ children }) => (
    <blockquote
      style={{
        padding: 10,
        paddingTop: 11,
        marginLeft: 0,
        borderLeft: '5px solid #ccc'
      }}
    >
      {children}
    </blockquote>
  )
}

function Markdown({ children, overrideConfig: overrideConfig = {} }) {
  return (
    <ReactMarkdown
      linkTarget="_blank"
      components={{ ...MarkdownConfig, ...overrideConfig }}
    >
      {children}
    </ReactMarkdown>
  )
}

export default Markdown
