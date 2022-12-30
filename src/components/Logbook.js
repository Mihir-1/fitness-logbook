import React, { useState } from 'react';
import Exercise from './Exercise';
import { Fab, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import AddExercise from './AddExercise';

const Logbook = () => {
  const [workout, setWorkout] = useState([
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

  const [id, setId] = useState(3)

  const [showAddExercise, setShowAddExercise] = useState(false)


  const addSet = async (data) => {
    const id = data.id
    const weight = parseFloat(data.weight)
    const reps = parseFloat(data.reps)
    const exercise = workout.filter((e) => e.id === id)[0]
    const exerciseData = exercise.sets
    const number = exerciseData.length > 0 ?
                    exerciseData[exerciseData.length - 1].number + 1 : 1
    const sets = [...exerciseData, {weight, reps, number}]
    const name = exercise.name
    const newExercise = {name, id, sets}
    const newWorkout = workout.map((e) => e.id === id ? newExercise : e)
    setWorkout(newWorkout)
  }

  const deleteSet = async (data) => {
    // const res = await fetch('http://localhost:5000/workouts')
    // const resData = await res.json()
    // console.log(resData)

    const id = data.id
    const setNumber = data.setNumber
    const exercise = workout.filter((e) => e.id === id)[0]
    const exerciseData = exercise.sets
    const sets = exerciseData.filter((s) => s.number !== setNumber)
    const name = exercise.name
    const newExercise = {name, id, sets}
    const newWorkout = workout.map((e) => e.id === id ? newExercise : e)
    setWorkout(newWorkout)
  }

  const addExercise = async (name) => {
    const sets = []
    setWorkout([...workout, {name, id, sets}])
    setShowAddExercise(false)
    setId(id + 1)
  }

  const deleteExercise = async (id) => {
    const newWorkout = workout.filter((e) => e.id !== id)
    setWorkout(newWorkout)
  }

  return (
    <div>
      <Stack>
        {workout.map((exercise) => (
          <Exercise
            exercise={exercise}
            key={exercise.id}
            id={exercise.id}
            onAdd={addSet}
            onDeleteSet={deleteSet}
            onDeleteExercise={deleteExercise}
          />
        ))}
        {showAddExercise && <AddExercise onAdd={addExercise} />}
        <Fab
          size="small"
          variant="extended"
          color={showAddExercise ? "error" : "primary"}
          onClick={ () => {setShowAddExercise(!showAddExercise)} }
          sx={{ marginBottom: 1, marginTop: 1 }}
        >
          {showAddExercise ?
            <CloseIcon sx={{ mr: 1 }} /> :
            <AddIcon sx={{ mr: 1 }} />
          }
          {showAddExercise ? "Close" : "Add Exercise"}
        </Fab>
      </Stack>
    </div>
  )
}

export default Logbook