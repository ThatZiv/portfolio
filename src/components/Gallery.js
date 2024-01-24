import * as React from 'react'
import Box from '@mui/material/Box'
import MobileStepper from '@mui/material/MobileStepper'
import Paper from '@mui/material/Paper'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import { makeStyles } from '@material-ui/core/styles'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
import theme from '../Theme'
import { UserContext } from '../contexts'
import { useViewport } from '../contexts/viewport'

const useStyles = makeStyles((/*theme*/) => ({
  root: {
    backgroundColor: '#1c1c1c !important', // mui paper root?
    color: 'white !important'
  },
  disabled: {
    backgroundColor: '#fff !important'
  }
}))

/** @param {import("../types/comps/Gallery").Gallery} props */
function SwipeableTextMobileStepper(props) {
  const Context = React.useContext(UserContext)
  const { width } = useViewport()
  const dispatch = Context[1]
  const [activeStep, setActiveStep] = React.useState(0)
  const maxSteps = props.images.length
  const classes = useStyles()
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleStepChange = (step) => {
    setActiveStep(step)
  }
  const AutoPlaySwipeableViews = React.useMemo(() => {
    if (typeof window !== 'undefined') {
      return autoPlay(SwipeableViews)
    }
    return null
  }, [])

  const imageComps = React.useMemo(() => {
    return props.images.map((step, index) => (
      <div
        key={`gallery:${index}:${step.label}`}
        onClick={() => {
          dispatch({
            type: 'UI_dialog',
            dialog: {
              open: true,
              title: `Open File`,
              content: `Would you like to open the image: ${step.imgPath
                .split('/')
                .pop()}?`,
              callback: () => {
                window.open(step.imgPath, '_blank')
              }
            }
          })
        }}
      >
        <div key={step.label}>
          {Math.abs(activeStep - index) <= 2 ? (
            <Box
              component="img"
              sx={{
                maxHeight: 500,
                display: 'block',
                backgroundImage: 'url(/bg.svg)',
                backgroundRepeat: 'repeat',
                //maxWidth: "auto",
                objectFit: 'contain',
                overflow: 'hidden',
                width: '100%',
                height: '100%',
                cursor: 'zoom-in'
              }}
              src={step.imgPath}
              alt={step.label}
            />
          ) : null}
        </div>
      </div>
    ))
  }, [props.images, dispatch, activeStep])
  return (
    <Grid item sx={{ width: '100%' }}>
      <Box sx={{ flexGrow: 1 }} className={[classes.root, 'Media'].join(' ')}>
        <Paper
          square
          elevation={0}
          className={classes.root}
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: 50,
            maxHeight: '100%',
            maxWidth: '100%',
            pl: 2,
            bgcolor: theme.palette.background.default
          }}
        >
          <Typography variant="body1">
            <Link href={props.images[activeStep].imgPath} target="_blank">
              {props.images[activeStep].label}
            </Link>
          </Typography>
        </Paper>
        {!AutoPlaySwipeableViews ? (
          // this is for snapshot testing
          <Box>{imageComps}</Box>
        ) : (
          <AutoPlaySwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            sx={{
              maxHeight: '100%',
              maxWidth: '100%'
            }}
            interval={props.timeout || 7500}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {imageComps}
          </AutoPlaySwipeableViews>
        )}
        <MobileStepper
          steps={maxSteps}
          variant={width > 600 ? 'dots' : 'progress'}
          position="static"
          className={classes.root}
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
              sx={{ fontSize: '0.8rem', padding: '6px' }}
            >
              Next
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
              sx={{ fontSize: '0.8rem', padding: '6px' }}
            >
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
        <Typography
          sx={{ textAlign: 'center', marginTop: 1.5 }}
          variant="subtitle2"
          color="gray"
        >
          Click image to enlarge
        </Typography>
      </Box>
    </Grid>
  )
}

export default SwipeableTextMobileStepper
