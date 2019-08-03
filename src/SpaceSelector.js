import React, { useState } from 'react'

import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'

function SpaceSelector({onSelect}) {
  const [value, setValue] = useState('')

  return (
    <>
      <header className="App-header">
      </header>

      <Container>
        <TextField
          label="Space name"
          value={value}
          onChange={event => setValue(event.target.value)}
          margin="normal"
        />

        <Button variant="contained" color="primary" onClick={() => onSelect(value)}>
          Primary
        </Button>
      </Container>
    </>

  )
}

export default SpaceSelector
