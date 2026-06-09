import React from 'react'
import TestRenderer from 'react-test-renderer'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../Theme'

/**
 * Traverses a `TestRenderer` json tree to its constituents
 * @param {*} tree
 * @param {function} cb
 * @void
 */
export const traverseTree = (tree, cb) => {
  if (tree && typeof tree === 'string') {
    cb(tree)
    return
  }
  if (tree.children) {
    for (let child of tree.children) {
      traverseTree(child, cb)
    }
  }
}

export const collectText = (tree) => {
  const values = []
  traverseTree(tree, (value) => {
    values.push(value)
  })
  return values
}

export const collectTrimmedText = (tree) =>
  collectText(tree)
    .map((value) => value.trim())
    .filter((value) => value.length > 0)

export const getAnchorHrefs = (renderer) =>
  renderer.root.findAllByType('a').map((node) => node.props.href)

export const getFirstIconClassName = (renderer) =>
  renderer.root.findByType('i').props.className

export const getTextContent = (renderer) =>
  collectTrimmedText(renderer.toJSON())

export const stablePropsAllowlist = new Set([
  'href',
  'src',
  'alt',
  'title',
  'target',
  'rel',
  'role',
  'type',
  'value',
  'aria-label',
  'aria-labelledby',
  'data-testid'
])

export const normalizeTextNode = (value) => {
  if (typeof value !== 'string') return value
  const collapsed = value.replace(/\s+/g, ' ').trim()
  return collapsed.length > 0 ? collapsed : null
}

export const sanitizeTree = (node) => {
  if (node == null) return null
  if (Array.isArray(node)) {
    const sanitized = node.map(sanitizeTree).filter((child) => child != null)
    return sanitized.length > 0 ? sanitized : null
  }
  if (typeof node === 'string' || typeof node === 'number') {
    return normalizeTextNode(String(node))
  }
  if (node.type === 'style') return null
  const props = {}
  if (node.props) {
    Object.keys(node.props).forEach((key) => {
      if (stablePropsAllowlist.has(key)) {
        props[key] = node.props[key]
      }
    })
  }
  const children = (node.children || [])
    .map(sanitizeTree)
    .filter((child) => child != null)
  if (children.length > 0) {
    node.children = children
  }
  return node
}

export const getStableSnapshot = (renderer) => sanitizeTree(renderer.toJSON())

export const renderWithTheme = (ui) =>
  TestRenderer.create(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)
