import React, { useEffect, useState } from 'react';
import EntryList from './List'
import SpaceSelector from './SpaceSelector'
import EntryPage from './EntryPage'
import NotFound from './NotFound'
import './App.css'
import { HashRouter, Route, Switch } from 'react-router-dom'

function App({storage}) {
  const storageKey = 'food-time-space-id'
  const { read, write } = storage

  const [spaceId, setSpaceId] = useState(read(storageKey))

  useEffect(() => {
    write(storageKey, spaceId)
  }, [spaceId, write])

  return (
    <div className="App">
      <HashRouter>
        <Switch>
          {
            spaceId ?
            <>
              <Route exact path="/" render={() => <EntryList spaceId={spaceId} />} />
              <Route path="/edit/:id" render={props => <EntryPage {...props} spaceId={spaceId}/>} />
            </> :
            <Route exact path="/" render={props => <SpaceSelector {...props} onSelect={selectedSpaceId => setSpaceId(selectedSpaceId)}/>} />
          }
          <Route component={NotFound} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
