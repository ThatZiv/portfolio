import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import theme from "../Theme"
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@mui/material';
import { UserContext } from "../contexts";
import { Grid } from '@material-ui/core';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#1c1c1c !important", // mui paper root?
        color: "white !important",
    },
    disabled: {
        backgroundColor: "#fff !important"
    }
}));

/** @param {import("../types/comps/Gallery").Gallery} props */
function SwipeableTextMobileStepper(props) {
    const [state, dispatch] = React.useContext(UserContext);
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = props.images.length;
    const classes = useStyles()
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };
    return (
        <Grid item md={7}>
            <Box sx={{ flexGrow: 1 }} className={[classes.root, "Media"].join(" ")}>
                <Paper
                    square
                    elevation={0}
                    className={classes.root}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        height: 50,
                        maxHeight: "100%",
                        maxWidth: "100%",
                        pl: 2,
                        bgcolor: theme.palette.background.default
                    }}
                >
                    <Typography variant="body1">
                        <Link href={props.images[activeStep].imgPath} target="_blank">{props.images[activeStep].label}
                        </Link>
                    </Typography>
                </Paper>
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    sx={{
                        maxHeight: "100%",
                        maxWidth: "100%",
                    }}
                    interval={props.timeout || 7500}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    {props.images.map((step, index) => (
                        <div onClick={() => {
                            dispatch({
                                type: "UI_dialog",
                                dialog: {
                                    open: true,
                                    title: `Open File`,
                                    content: `Would you like to open the image: ${step.imgPath.split("/").pop()}?`,
                                    callback: () => {
                                        window.open(step.imgPath, "_blank")
                                    }
                                }
                            })
                        }}>
                            <div key={step.label}>
                                {Math.abs(activeStep - index) <= 2 ? (
                                    <Box
                                        component="img"
                                        sx={{
                                            maxHeight: 400,
                                            display: "block",
                                            //maxWidth: "auto",
                                            overflow: 'hidden',
                                            width: '100%',
                                            height: "100%",
                                            cursor: "zoom-in"
                                        }}
                                        src={step.imgPath}
                                        alt={step.label}
                                    />
                                ) : null}
                            </div>
                        </div>
                    ))}
                </AutoPlaySwipeableViews>
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    className={classes.root}
                    activeStep={activeStep}
                    nextButton={
                        <Button
                            size="small"
                            onClick={handleNext}
                            disabled={activeStep === maxSteps - 1}
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
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowRight />
                            ) : (
                                <KeyboardArrowLeft />
                            )}
                            Back
                        </Button>
                    }
                />
                <Typography sx={{ textAlign: "center", marginTop: 1.5 }} variant="subtitle2" color="gray">Click picture to enlarge</Typography>
            </Box>
        </Grid>
    );
}

export default SwipeableTextMobileStepper;