import React, { useEffect, useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo-hooks'

import EntryList from './components/List'
import SpaceSelector from './components/SpaceSelector'
import SignInForm from './components/SignInForm'
import EntryPage from './components/EntryPage'
import NotFound from './components/NotFound'
import getClient from './client'
import './App.css'

function App({storage}) {
  const storageKey = 'food-time-space-id'
  const { read, write } = storage

  const [spaceId, setSpaceId] = useState(read(storageKey))
  const [user, setUser] = useState(null)

  useEffect(() => {
    write(storageKey, spaceId)
  }, [spaceId, write])

  return (
    <div className="App">
      <HashRouter>
        <Switch>
          {
            user ?
            <ApolloProvider client={getClient(user.tokenId)}>
              {spaceId
                ? <>
                 <Route exact path="/" render={() => <EntryList spaceId={spaceId} />}/>
                 <Route path = "/edit/:id" render={props => <EntryPage {...props} spaceId={spaceId}/>} />
                </>
                : <Route exact path="/" render={props => <SpaceSelector {...props} onSelect={selectedSpaceId => setSpaceId(selectedSpaceId)}/>} />

              }
            </ApolloProvider> :
            <Route exact path="/" render={props => <SignInForm {...props} onLogin={user => setUser(user)}/>} />
          }
          <Route component={NotFound} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
