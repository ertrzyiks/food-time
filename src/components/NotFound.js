import React from 'react'

import { Container, Typography, Link } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Link as RouterLink } from 'react-router-dom'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: theme.spacing(5, 2),
    },
  }),
)

const NotFound = () => {
  const classes = useStyles()

  return (
    <>
      <header className="App-header">
        ERROR 404
      </header>

      <Container className={classes.root} maxWidth="sm">
        <Typography variant='h5' paragraph>
          NOT FOUND
        </Typography>

        <Typography variant='body'>
          Go back to the <Link to='/' component={RouterLink}>homepage</Link>
        </Typography>
      </Container>
    </>
  )
}

export default NotFound
