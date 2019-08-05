import React, { useState } from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

function SpaceSelector({onSelect}) {
  const [value, setValue] = useState('')

  return (
    <>
      <header className="App-header">
      </header>

      <form onSubmit={() => onSelect(value)}>
        <Grid container spacing={5} direction="column">
          <Grid item>
            <TextField
              label="Space name"
              value={value}
              onChange={event => setValue(event.target.value)}
              margin="normal"
            />
          </Grid>

          <Grid item>
            <Button type='submit' variant="contained" color="primary" >
              Proceed
            </Button>
          </Grid>
        </Grid>
      </form>
    </>

  )
}

export default SpaceSelector
