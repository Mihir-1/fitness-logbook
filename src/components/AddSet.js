import { Button, TextField, Container } from '@mui/material'
import React, { useState } from 'react'

const AddSet = ({ onAdd, id }) => {
  const [weight, setWeight] = useState('')
  const [reps, setReps] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    if (weight.length === 0) {
      alert('Please Add Weight')
      return
    } else if (reps.length === 0) {
      alert('Please Add Reps')
      return
    }
    onAdd({ id, weight, reps })
    setWeight('')
    setReps('')
  }

  return (
    <form onSubmit={onSubmit}>
      <Container>
        <TextField
          size="small"
          type="number"
          label="Weight"
          value={weight}
          sx={{ width: 100, marginRight: 1 }}
          onChange={(e) => setWeight(e.target.value)}
        />
        <TextField
          size="small"
          type="number"
          label="Reps"
          value={reps}
          sx={{ width:100 }}
          onChange={(e) => setReps(e.target.value)}
        />
        <Button
          color="primary"
          variant="outlined"
          type="submit"
          sx={{float: "right"}}
        >Add</Button>
      </Container>
    </form>
  )
}

export default AddSet