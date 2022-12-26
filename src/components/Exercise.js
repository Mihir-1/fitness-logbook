import React, { useState } from 'react'
import ExerciseTable from './ExerciseTable';
import { Fab, Paper, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import AddSet from './AddSet';

const Exercise = ({ exercise }) => {
  const [showAddSet, setShowAddSet] = useState(false)

  return (
    <Stack
      spacing={1}
      marginBottom={1}
    >
      <h3 style={{ marginBlockEnd: 0 }}>{exercise.name}</h3>
      <Paper>
        <Stack>
          <ExerciseTable sets={exercise.sets} />
          {showAddSet &&
            <AddSet />
          }
          <Fab
            size="small"
            variant="extended"
            color={showAddSet ? "secondary" : "primary"}
            onClick={ () => {setShowAddSet(!showAddSet)} }
            sx={{ marginBottom: 1, marginTop: 1 }}
          >
            {showAddSet ?
              <CloseIcon sx={{ mr: 1 }} /> :
              <AddIcon sx={{ mr: 1 }} />
            }
            {showAddSet ? "Close" : "Add Set"}
          </Fab>
        </Stack>
      </Paper>
    </Stack>
  )
}

export default Exercise