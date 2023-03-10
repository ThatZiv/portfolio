import React from 'react';
import Divider from '@material-ui/core/Divider';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

//icons
import Icon from '@material-ui/core/Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        padding: "10px",
        borderRadius: "5px",
        backgroundColor: theme.palette.background.default,
    },
    bg: {
        backgroundColor: "#151515",
        marginTop: "5px",
        padding: "20px",
        borderRadius: "5px",
        boxShadow: "8px 5px 5px #111111"
    },
    heading: {
        fontSize: theme.typography.pxToRem(25),
        fontWeight: theme.typography.fontWeightRegular,
        fontFamily: "Teko, sans-serif"
    },
}));

/** @param {import("../types/comps/Section").Section} props */
export default function Section(props) {
    const classes = useStyles();
    const panel = "section_1";
    const [expanded, setExpanded] = React.useState(props?.open && panel);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    //https://v4.mui.com/components/accordion/
    return (
        <Accordion className={classes.root} onChange={handleChange(panel)} defaultExpanded={props?.open} expanded={expanded === panel}>
            <AccordionSummary expandIcon={<Icon className="material-icons-outlined">expand_more</Icon>}>
                <Typography className={classes.heading}><div><i className={props.icon} />&nbsp;&nbsp;{props.title}</div></Typography>
            </AccordionSummary>
            <AccordionDetails>
                {props.children}
            </AccordionDetails>
        </Accordion>
    )
}