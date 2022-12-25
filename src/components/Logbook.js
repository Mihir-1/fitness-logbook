import React, { useState } from 'react'
import Exercise from './Exercise'

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
        <Exercise
          key={exercise.id}
          name={exercise.name}
          sets={exercise.sets}
        />
      ))}
    </div>
  )
}

export default Logbook