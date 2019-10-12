import React from 'react'
import { generatePath } from 'react-router-dom'
import EntryList from './List'
import Stats from './Stats'
import AggregatedStats from './AggregatedStats'
import {
  Tabs,
  Tab,
} from '@material-ui/core'

import Layout from './Layout'

const SpacePage = (props) => {
  const { match, history } = props

  const tab = match.params.tab || 'list'

  const navigateToTab = (e, value) => {
    history.push(generatePath(match.path, { ...match.params, tab: value === 'list' ? undefined : value}))
  }

  return <Layout>
    <Tabs value={tab} onChange={navigateToTab}>
      <Tab value='list' label="List" />
      <Tab value='stats' label="Stats"  />
      <Tab value='aggregated' label="Aggregated"  />
    </Tabs>

    {tab === 'list' &&
      <EntryList {...props} />
    }
    {tab === 'stats' &&
      <Stats spaceId={match.params.id} />
    }
    {tab === 'aggregated' &&
      <AggregatedStats spaceId={match.params.id}/>
    }
  </Layout>
}

export default SpacePage
