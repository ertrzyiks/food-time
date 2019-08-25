import React, { useContext } from 'react'

import {
  AppBar,
  Avatar,
  Toolbar,
  Typography,
  Box
} from '@material-ui/core'

import {makeStyles} from '@material-ui/core/styles'
import ProfileContext from '../ProfileContext'

const useStyles = makeStyles({
  appBar: {
    backgroundColor: '#3e4451',
  },
  avatar: {
    margin: 15,
    width: 40,
    height: 40,
    marginLeft: 'auto'
  },
  toolbar: {
    height: 70,
    paddingLeft: 15
  },
})

const Layout = ({toolbarIcon, children}) => {
  const classes = useStyles()
  const profile = useContext(ProfileContext)

  return <>
    <AppBar className={classes.appBar}>
      <Toolbar disableGutters={true} className={classes.toolbar}>
        {toolbarIcon}

        <Typography variant='h5'>
          Food time
        </Typography>

        {profile &&
        <Avatar alt="Profile picture" src={profile.imageUrl} className={classes.avatar}/>
        }
      </Toolbar>
    </AppBar>

    <Toolbar className={classes.toolbar}/>

    <Box m={2}>
    {children}
    </Box>
  </>
}

export default Layout
