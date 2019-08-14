import React, { useEffect, useState } from 'react';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo-hooks'

import EntryList from './components/List'
import SpaceSelector from './components/SpaceSelector'
import SignInForm from './components/SignInForm'
import EntryPage from './components/EntryPage'
import NotFound from './components/NotFound'
import getClient from './client'
import './App.css'

const RememberSpace = ({match, write, children}) => {
  const id = match.params.id

  useEffect(() => {
    write(id)
  }, [write, id])

  return children
}

function App({storage}) {
  const storageKey = 'food-time-space-id'
  const { read, write } = storage

  const lastSpaceId = read(storageKey)

  const [user, setUser] = useState(null)

  return (
    <div className="App">
      <HashRouter>
        <Switch>
          {
            user ?
              <ApolloProvider client={getClient(user.tokenId)}>
                <Switch>

                  <Route exact path='/select' render={props => <SpaceSelector {...props} />} />
                  <Route path='/space/:id' render={
                    props =>
                      <RememberSpace write={id => write(storageKey, id)} match={props.match}>
                        <EntryList {...props} profile={user.profileObj} />
                      </RememberSpace>}
                  />
                  <Route path='/edit/:id' render={props => <EntryPage {...props} />} />

                  <Route exact path='/'>
                    { lastSpaceId
                      ? <Redirect to={`/space/${lastSpaceId}`}/>
                      : <Redirect to='/select'/>
                    }
                  </Route>

                </Switch>
            </ApolloProvider> :
            <Route path='/' render={props => <SignInForm {...props} onLogin={user => setUser(user)}/>} />
          }
          <Route component={NotFound} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
