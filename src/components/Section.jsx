import React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import { makeStyles } from '@mui/styles'
import Typography from '@mui/material/Typography'
//icons
import Icon from '@mui/material/Icon'
import { useSearchParams } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px'
  },
  bg: {
    backgroundColor: '#151515',
    marginTop: '5px',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '8px 5px 5px #111111'
  },
  heading: {
    fontSize: theme.typography.pxToRem(25),
    fontWeight: theme.typography.fontWeightRegular,
    fontFamily: 'Teko, sans-serif'
  }
}))

/** @param {import("../types/comps/Section").Section} props */
function Section(props) {
  const classes = useStyles()
  const panel = 'section_1' //we need this for some reason
  const [expanded, setExpanded] = React.useState(props?.open && panel)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
    setExpandedParam((params) => {
      isExpanded ? params.set(props.title, true) : params.delete(props.title)
      return params
    })
  }
  // add other expand here
  let [expandedParam, setExpandedParam] = useSearchParams()
  React.useEffect(() => {
    if (
      expandedParam.has(props.title) &&
      expandedParam.get(props.title) == 'true'
    ) {
      setExpanded(panel)
    }
  }, [])
  //https://v4.mui.com/components/accordion/
  return (
    <Accordion
      className={classes.root}
      onChange={handleChange(panel)}
      defaultExpanded={props?.open}
      expanded={expanded === panel}
    >
      <AccordionSummary
        expandIcon={
          <Icon className="material-icons-outlined">expand_more</Icon>
        }
      >
        <Typography className={classes.heading}>
          <div>
            <i className={props.icon} />
            &nbsp;&nbsp;{props.title}
          </div>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>{props.children}</AccordionDetails>
    </Accordion>
  )
}

export default React.memo(Section)
