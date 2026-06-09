import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { useEffect, useState } from 'react'
import { green, red, grey } from '@mui/material/colors'
import Cancel from '@mui/icons-material/Cancel'
import CheckCircle from '@mui/icons-material/CheckCircle'
import { styled } from '@mui/material/styles'
import Badge from '@mui/material/Badge'

const StyledBadge = styled(Badge, {
  shouldForwardProp: (prop) => prop !== 'color' && prop !== 'status'
  // eslint-disable-next-line no-unused-vars
})(({ theme, status }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: status ? green[500] : grey[500],
    color: status ? green[500] : grey[500],
    boxShadow: `0 0 0 2px ${grey[800]}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: `ripple ${status ? '1.2' : '0'}s infinite ease-in-out`,
      border: '1px solid currentColor',
      content: '""'
    }
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0
    }
  }
}))

const parsePattern = (pattern) => {
  if (!pattern) {
    return null
  }
  if (pattern instanceof RegExp) {
    return pattern
  }
  if (typeof pattern !== 'string') {
    throw new Error('Invalid pattern type.')
  }
  const match = pattern.match(/^\/(.*)\/([a-z]*)$/i)
  if (match) {
    return new RegExp(match[1], match[2])
  }
  return new RegExp(pattern)
}

/**
 * @param {import("../types/comps/Status").Status} props
 */
const Status = (props) => {
  const [, setWebData] = useState(null)
  const [error, setError] = useState(null)
  const patternKey =
    typeof props.pattern === 'string'
      ? props.pattern
      : props.pattern?.toString() || ''
  const getHostname = (url) => {
    var _url = new URL(url)
    return _url.hostname
  }
  useEffect(() => {
    const controller = new AbortController()
    let isActive = true
    setError(null)
    setWebData(null)
    let regex = null
    try {
      regex = parsePattern(props.pattern)
    } catch (err) {
      setError(err.message)
      return () => {
        isActive = false
        controller.abort()
      }
    }
    fetch(props.url, { signal: controller.signal })
      .then((response) => response.text())
      .then((text) => {
        if (!isActive) {
          return
        }
        if (regex && !regex.test(text)) {
          throw new Error('Regular expression pattern mismatch.')
        }
        setWebData(text)
      })
      .catch((err) => {
        if (!isActive || err.name === 'AbortError') {
          return
        }
        setError(err.message)
      })
    return () => {
      isActive = false
      controller.abort()
    }
  }, [props.url, patternKey])
  return (
    <div className="Media">
      {props.paper ? (
        <Paper elevation={4} style={{ padding: 25, borderRadius: 5 }}>
          <Typography
            gutterBottom
            variant="h5"
            style={{ textDecoration: null }}
            component="div"
          >
            <Grid container alignContent="flex-start">
              <Grid item>
                <div style={{ color: error ? red[600] : green[600] }}>
                  {error ? <Cancel /> : <CheckCircle />}
                </div>
              </Grid>
              <Grid item>&nbsp;{error ? 'Offline' : 'Online'}</Grid>
            </Grid>
          </Typography>
          <Typography variant="subtitle1" style={{ color: '#979797' }}>
            This service is currently {error ? 'offline' : 'online'} at{' '}
            <Link href={props.url} target="_blank">
              {getHostname(props.url)}
            </Link>
          </Typography>
        </Paper>
      ) : !props.dot ? (
        <Chip
          label={
            'This service is currently ' + (error ? 'offline' : 'online') + '.'
          }
          icon={error ? <Cancel /> : <CheckCircle />}
          style={{ backgroundColor: error ? red[600] : green[600] }}
        />
      ) : (
        <StyledBadge
          overlap="circular"
          status={!error}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
        >
          {props.children}
        </StyledBadge>
      )}
    </div>
  )
}

export default Status
