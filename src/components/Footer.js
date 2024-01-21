import { Typography, Link, Tooltip } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import my from '../sections'

const useStyles = makeStyles({
  root: {
    textAlign: 'right',
    color: '#575757',
    // fontStyle: "italic",
    fontWeight: '300'
  }
})

export default function Footer() {
  const classes = useStyles()
  const gh = 'https://github.com/thatziv'
  return (
    <Typography variant="subtitle1" className={classes.root}>
      &copy; {new Date().getFullYear()}{' '}
      <Tooltip title={gh}>
        <Link target="_blank" href={gh}>
          {my.name}
        </Link>
      </Tooltip>
    </Typography>
  )
}
