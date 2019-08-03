import React, { useEffect, useState } from 'react';
import EntryList from './List'
import SpaceSelector from './SpaceSelector'
import './App.css';



function App({storage}) {
  const storageKey = 'food-time-space-id'
  const { read, write } = storage

  const [spaceId, setSpaceId] = useState(read(storageKey))

  useEffect(() => {
    write(storageKey, spaceId)
  }, [spaceId, write])

  return (
    <div className="App">
      {
        spaceId ? <EntryList spaceId={spaceId} /> : <SpaceSelector onSelect={selectedSpaceId => setSpaceId(selectedSpaceId)}/>
      }
    </div>
  );
}

export default App;
