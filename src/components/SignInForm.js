import React from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login'

const SignInForm = ({onLogin}) => {
  const responseGoogle = (response) => {
    console.log(response)
    onLogin(response)
  }

  const logout = () => {

  }

  return  <>
    <header className="App-header">
    </header>

    <GoogleLogin
      clientId="299114443733-g59vv11262camtp97hiv99sjh0qr3b9i.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      isSignedIn={true}
      cookiePolicy={'single_host_origin'}
    />

    {/*<GoogleLogout*/}
    {/*clientId="299114443733-g59vv11262camtp97hiv99sjh0qr3b9i.apps.googleusercontent.com"*/}
    {/*buttonText="Logout"*/}
    {/*onLogoutSuccess={logout}*/}
    {/*>*/}
    {/*</GoogleLogout>*/}
  </>
}

export default SignInForm
