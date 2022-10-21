import { Backdrop, CircularProgress, Grid } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import Skeleton from "@mui/material/Skeleton"
const BackdropProgress = () => {

    return (<div style={{ display: 'flex', justifyContent: 'center', marginTop: 30 }}>
        <CircularProgress color="inherit" />
    </div>)
}


export default BackdropProgress