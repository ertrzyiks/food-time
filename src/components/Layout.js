import React, { useContext } from 'react'

import {
  AppBar,
  Avatar,
  Toolbar,
  Typography,
  Box,
  Menu,
  MenuItem
} from '@material-ui/core'

import { Link as RouterLink } from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'
import ProfileContext from '../ProfileContext'

import { SelectPage } from '../routing'

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

  const [anchorEl, setAnchorEl] = React.useState(null)

  function handleClick(event) {
    setAnchorEl(event.currentTarget)
  }

  function handleClose() {
    setAnchorEl(null)
  }

  return <>
    <AppBar className={classes.appBar}>
      <Toolbar disableGutters={true} className={classes.toolbar}>
        {toolbarIcon}

        <Typography variant='h5'>
          Food time
        </Typography>

        {profile &&
          <>
            <Avatar alt="Profile picture"
                    src={profile.imageUrl}
                    aria-controls='user-menu'
                    aria-haspopup='true'
                    className={classes.avatar}
                    onClick={handleClick}/>
            <Menu
              id='user-menu'
              anchorEl={anchorEl}
              anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
              getContentAnchorEl={null}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem component={RouterLink} to={SelectPage.path()} onClick={handleClose}>Spaces</MenuItem>
            </Menu>
          </>
        }
      </Toolbar>
    </AppBar>

    <Toolbar className={classes.toolbar}/>

    <Box my={2}>
    {children}
    </Box>
  </>
}

export default Layout
