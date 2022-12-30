import React, { useState } from 'react'
import { Button, TextField } from '@mui/material'
import { Container } from '@mui/system'

const AddExercise = ({ onAdd }) => {
  const [name, setName] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    if (name.length === 0) {
      alert('Please Add a Name')
      return
    }
    onAdd(name)
    setName('')
  }

  return (
    <form onSubmit={onSubmit}>
      <Container style={{padding: 5}}>
        <TextField
          size="small"
          label="Name"
          variant="filled"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{width: 250, height: 50}}
        />
        <Button
          color="primary"
          variant="outlined"
          type="submit"
          sx={{float: "right", height: 50}}
        >
          Add
        </Button>
      </Container>
    </form>
  )
}

export default AddExercise