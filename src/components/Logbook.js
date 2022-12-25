import React, { useState } from 'react';
import ExerciseTable from './ExerciseTable';
import { Fab, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';


const Logbook = () => {
  const [workout] = useState([
    {
      name: "Bench Press",
      id: 1,
      sets: [
        {
          weight: 200,
          reps: 5,
          number: 1,
        },
        {
          weight: 190,
          reps: 5,
          number: 2,
        },
        {
          weight: 180,
          reps: 7,
          number: 3,
        },
      ],
    },
    {
      name: "Incline Dumbell Press",
      id: 2,
      sets: [
        {
          weight: 90,
          reps: 6,
          number: 1,
        },
        {
          weight: 90,
          reps: 8,
          number: 2,
        },
      ],
    }
  ])

  return (
    <div>
      {workout.map((exercise) => (
        <Stack key={exercise.id} spacing={1} >
          <h3 style={{ marginBlockEnd: 0 }}>{exercise.name}</h3>
          <ExerciseTable
            sets={exercise.sets}
          />
          <Fab size="small" variant="extended" color="primary">
            <AddIcon sx={{ mr: 1 }} />
            Add Set
          </Fab>
        </Stack>
      ))}
    </div>
  )
}

export default Logbook