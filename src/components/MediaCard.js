import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Collapse from '@material-ui/core/Collapse'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { Divider, Grow, CircularProgress } from '@material-ui/core'
import ReactGA from 'react-ga'

import Markdown from './Markdown'
import Tags from './Tags'
import Objectives from './Objectives'
import Section from './Section'
import Timeline from './Timeline'
import DateRange from './DateRange'
import Modal from './Modal'
// import { StringParam, useQueryParam } from 'use-query-params'
import { useSearchParams } from 'react-router-dom'
// import MainDialog from './MainDialog'

const useStyles = makeStyles((theme) => ({
  media: {
    height: 140
  },
  cardcontent: {
    '&:last-child': {
      paddingBottom: 0
    }
  },
  paper: {
    padding: theme.spacing(2)
  },
  tags: {
    overflow: 'visible',
    float: 'right',
    maxHeight: '34px',
    minWidth: '90%'
  },
  title: {
    fontFamily: 'Blinker',
    fontWeight: 'bold',
    color: '#d6d6d6',
    fontSize: '2.9rem',
    // make fontsize smaller for mobile
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.5rem'
    }
  }
}))

export default function MediaCard(props) {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)
  const [imgLoaded, setImgLoaded] = React.useState(false)
  const [cardSize] = React.useState(props.size || 6)
  const cardRef = React.useRef(null)
  const _expand = 'expand'
  const [cardParam, setCardParam] = useSearchParams()
  React.useEffect(() => {
    if (cardParam.has(_expand) && cardParam.get('expand') == props.title) {
      executeScroll()
      setExpanded(true)
    }
  }, [])

  //let cardWidth = 6
  const executeScroll = () =>
    cardRef.current.scrollIntoView({ behavior: 'smooth' })
  const handleExpandClick = () => {
    //setCardSize(6) //makes cards expand to full width for desktop-sized screens
    //setCardSize(expanded ? props.size || 6 : 12); // Removed this for the modal update
    setExpanded(!expanded)
    if (!expanded) {
      setCardParam((params) => {
        params.set(_expand, props.title)
        return params
      })
      executeScroll() // scroll to focused card
    } else {
      setCardParam(new URLSearchParams())
    }
  }
  const gaCardExpandHandle = (cardName = 'none') => {
    ReactGA.event({
      category: 'z_ui-card-expand',
      label: cardName,
      action: cardName
    }) // TODO: see if this works on prod
  }
  return (
    /* <Grid item xs={12} sm> */ // FOR ONLY ROWS
    <>
      <Grow in timeout={700}>
        {/* selection border logic below */}
        <Grid
          item
          xs={12}
          md={cardSize || props.size}
          lg={cardSize || props.size}
        >
          <Card
            ref={cardRef}
            style={
              expanded ? { border: '2px solid #3f51b5' } : { border: null }
            }
            elevation={3}
          >
            <CardActionArea
              onClick={() => {
                handleExpandClick()
                gaCardExpandHandle(props.title)
              }}
            >
              <CardMedia
                className={classes.media}
                style={{ filter: imgLoaded ? 'none' : 'blur(0.75rem)' }}
                image={props.banner}
                component="img"
                alt={props.title}
                onLoad={() => setImgLoaded(true)}
                title={props.title}
              />
              {!imgLoaded && (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 10,
                    marginTop: 10
                  }}
                >
                  <CircularProgress color="secondary" />
                </div>
              )}
              <CardContent className={classes.cardcontent}>
                <Grid justifyContent="space-between" container>
                  <Grid item xs={10}>
                    <Typography
                      gutterBottom
                      variant="h3"
                      className={classes.title}
                      component="h2"
                    >
                      {props.title}
                    </Typography>
                  </Grid>
                  <Grid item sm>
                    <DateRange {...props} />
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="body2" color="textSecondary">
                    <Markdown>{props.description}</Markdown>
                  </Typography>
                </Grid>
              </CardContent>
            </CardActionArea>
            {/* (OLD) card content */}
            <Collapse in={false} timeout="auto" unmountOnExit>
              <Divider style={{ marginRight: '18px', marginLeft: '18px' }} />
              <CardContent>
                {/* <Typography variant="body2" color="textSecondary" component="p">
                  {props.prechildren}
                  {props.objectives && (
                    <Section icon={"fa-solid fa-list"} title="Deliverables">
                      <Objectives list={props.objectives} />
                    </Section>
                  )}
                  {props.timeline && (
                    <Section icon={"fa-solid fa-timeline"} title="Timeline">
                      <Timeline steps={props.timeline} />
                    </Section>
                  )}
                  {props.children}
                </Typography> */}
              </CardContent>
            </Collapse>
            <CardActions>
              {typeof props.tags == 'string' && (
                <Grid
                  style={{ overflowY: 'scroll', maxHeight: '20vh' }}
                  alignItems="baseline"
                  container
                  spacing={1}
                >
                  {props.tags.split(',').map((tag) => {
                    return (
                      <Grid key={`tag:${tag}`} item>
                        <Tags>{tag}</Tags>
                      </Grid>
                    )
                  })}
                </Grid>
              )}
            </CardActions>
            <Button
              onClick={() => {
                handleExpandClick()
                gaCardExpandHandle(props.title)
              }}
              style={{ paddingBottom: 20, paddingTop: 20 }}
              size="small"
              color="primary"
            >
              {expanded ? 'Less' : 'More'}
            </Button>
          </Card>
        </Grid>
      </Grow>
      {/* Inner-content (NEW) - used to be card expand content */}
      <Modal open={expanded} onClose={handleExpandClick}>
        <Grid
          justifyContent="space-between"
          // style={{
          //   height: "100%",
          //   backgroundImage: `url(${props.banner})`,
          //   backgroundSize: "cover",
          //   backgroundPosition: "center",
          // }}
          container
        >
          <Grid item xs={10}>
            <Typography
              gutterBottom
              variant="h3"
              className={classes.title}
              component="h2"
            >
              {props.title}
            </Typography>
          </Grid>
          <Grid item sm>
            <DateRange {...props} />
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="body2" color="textSecondary">
            <Markdown>{props.description}</Markdown>
          </Typography>
        </Grid>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.prechildren}
          {props.objectives && (
            <Section icon={'fa-solid fa-list'} title="Deliverables">
              <Objectives list={props.objectives} />
            </Section>
          )}
          {props.timeline && (
            <Section icon={'fa-solid fa-timeline'} title="Timeline">
              <Timeline steps={props.timeline} />
            </Section>
          )}
          {props.children}
          {typeof props.tags == 'string' && (
            <Grid
              alignItems="baseline"
              container
              style={{ marginTop: 10 }}
              spacing={1}
            >
              {props.tags.split(',').map((tag) => {
                return (
                  <Grid key={`inner:${tag}`} item>
                    <Tags>{tag}</Tags>
                  </Grid>
                )
              })}
            </Grid>
          )}
        </Typography>
      </Modal>
    </>
  )
}
