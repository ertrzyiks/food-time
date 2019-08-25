import React, { useState, useEffect } from 'react'
import { GoogleLogin } from 'react-google-login'
import { CircularProgress } from '@material-ui/core'

import Layout from './Layout'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    position: 'relative',
    minHeight: 40
  },
  loader: {
    position: 'absolute',
    backgroundColor: 'white',
    top: -3,
    bottom: -5,
    left: 0,
    right: 0,
    zIndex: 1
  }
})

const SignInForm = ({ onLogin }) => {
  const classes = useStyles()

  const responseGoogle = (response) => {
    onLogin(response)
  }

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let timeout = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timeout)
  })

  return  <Layout>
    <div className={classes.root}>
      { loading && <div className={classes.loader}><CircularProgress /></div> }
      <GoogleLogin
        clientId='299114443733-g59vv11262camtp97hiv99sjh0qr3b9i.apps.googleusercontent.com'
        buttonText='Login'
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        isSignedIn={true}
        cookiePolicy='single_host_origin'
      />
    </div>
  </Layout>
}

export default SignInForm
