import * as React from 'react'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Box from '@mui/material/Box'
import { useState } from 'react'
import Typography from '@mui/material/Typography'
// import { indigo } from '@material-ui/core/colors/'
// https://mui.com/components/steppers/

/** @param {import("../types/comps/Timeline").Timeline} props */
export default function Timeline(props) {
  const [activeStep] = useState(0) // all steps will be active
  return (
    <div style={{ color: 'whitesmoke' }}>
      <Box sx={{ width: '100%' }}>
        {/* <Grid direction="" alignItems="baseline" container xs> */}
        <Stepper activeStep={activeStep} orientation="vertical">
          {props.steps.map((key, index) => {
            let [date, event] = key
            return (
              <Step active={true} key={index}>
                <StepLabel
                  optional={
                    <Typography style={{ color: 'gray' }} variant="caption">
                      {date}
                    </Typography>
                  }
                >
                  <Typography style={{ color: 'whitesmoke' }} variant="body2">
                    {event}
                  </Typography>
                </StepLabel>
              </Step>
            )
          })}
        </Stepper>
        {/* </Grid> */}
      </Box>
    </div>
  )
}
