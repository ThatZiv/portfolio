import React from 'react'
import ReactMarkdown from 'react-markdown'
import Typography from '@mui/material/Typography'
import remarkGfm from 'remark-gfm'
const MarkdownConfig = {
  // eslint-disable-next-line no-unused-vars
  h1: ({ node, children }) => (
    <Typography variant="h2" style={{ fontFamily: 'Blinker, sans-serif' }}>
      {children}
    </Typography>
  ),
  h2: ({ children }) => (
    <Typography
      variant="h5"
      color="secondary"
      style={{
        fontFamily: 'Blinker, sans-serif',
        wordSpacing: '1.2px'
      }}
    >
      {children}
    </Typography>
  ),
  h3: ({ children }) => (
    <Typography
      variant="subtitle1"
      color="secondary"
      style={{
        fontFamily: 'Blinker, sans-serif'
      }}
    >
      {children}
    </Typography>
  ),
  p: ({ children }) => (
    <Typography variant="body2" color="secondary">
      {children}
    </Typography>
  ),
  img: ({ node }) => (
    <img
      src={node.properties.src}
      alt={node.properties.alt}
      loading="lazy"
      decoding="async"
      className="Media"
      title={node.properties.title}
    />
  ),
  code: ({ inline, children }) =>
    inline ? (
      <code
        style={{
          backgroundColor: '#1e1e1e',
          color: '#d4d4d4',
          padding: '2px 6px',
          borderRadius: 4,
          fontFamily: 'monospace',
          fontSize: '0.9em'
        }}
      >
        {children}
      </code>
    ) : (
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
      remarkPlugins={[remarkGfm]}
      components={{ ...MarkdownConfig, ...overrideConfig }}
    >
      {children}
    </ReactMarkdown>
  )
}

export default Markdown
