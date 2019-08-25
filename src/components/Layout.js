import React from 'react'

import {
  AppBar,
  Avatar,
  Toolbar,
  Typography
} from '@material-ui/core'

import {makeStyles} from '@material-ui/core/styles'

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

const Layout = ({profile, toolbarIcon, children}) => {
  const classes = useStyles()

  return <>
    <AppBar className={classes.appBar}>
      <Toolbar disableGutters={true} className={classes.toolbar}>
        {toolbarIcon}

        <Typography variant='h5'>
          Food time
        </Typography>

        <Avatar alt="Profile picture" src={profile.imageUrl} className={classes.avatar} />
      </Toolbar>
    </AppBar>

    <Toolbar className={classes.toolbar}/>

    {children}
  </>
}

export default Layout
