import { CircularProgress } from '@material-ui/core'
import React from 'react'
const BackdropProgress = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 30 }}>
      <CircularProgress color="inherit" />
    </div>
  )
}

export default BackdropProgress
