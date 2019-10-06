import React, { useEffect, useState } from 'react';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks'

import Space from './components/SpacePage'
import SpaceSelector from './components/SpaceSelector'
import SignInForm from './components/SignInForm'
import EntryPage from './components/EntryPage'
import NotFound from './components/NotFound'
import ScrollToTop from './components/ScrollToTop'
import ProfileContext from './ProfileContext'
import getClient from './client'
import './App.css'
import {HomePage, SelectPage, EditPage, SpacePage} from './routing'

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
    <ProfileContext.Provider value={user && user.profileObj}>
      <div className='App'>
        <HashRouter>
          <ScrollToTop />

          <Switch>
            {
              user ?
                <ApolloProvider client={getClient(user)}>
                  <Switch>

                    <Route exact path={SelectPage.pattern} render={props => <SpaceSelector {...props} />} />
                    <Route path={SpacePage.pattern} render={
                      props =>
                        <RememberSpace write={id => write(storageKey, id)} match={props.match}>
                          <Space {...props} />
                        </RememberSpace>}
                    />
                    <Route path={EditPage.pattern} render={props => <EntryPage {...props} />} />

                    <Route exact path={HomePage.pattern}>
                      { lastSpaceId
                        ? <Redirect to={SpacePage.path({id: lastSpaceId})}/>
                        : <Redirect to={SelectPage.path()}/>
                      }
                    </Route>

                  </Switch>
              </ApolloProvider> :
              <Route path={HomePage.pattern} render={props => <SignInForm {...props} onLogin={user => {
                setUser(user)
              }}/>} />
            }
            <Route component={NotFound} />
          </Switch>
        </HashRouter>
      </div>
    </ProfileContext.Provider>
  );
}

export default App;
