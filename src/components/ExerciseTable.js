import React from 'react'
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';

import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from '@mui/material'


const ExerciseTable = ({ sets, onDeleteSet, onDeleteExercise, id }) => {
  return (
    <div>
      <TableContainer /*component={Paper}*/>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Set</TableCell>
              <TableCell align="right">Weight&nbsp;(lbs)</TableCell>
              <TableCell align="right">Reps</TableCell>
              <TableCell align="right">
                <Button
                  style={{color: "red"}}
                  onClick={() => onDeleteExercise(id)}
                >
                  <DeleteForeverTwoToneIcon />
                </Button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sets.map((set, index) => (
              <TableRow
                key={set.number}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>{index + 1}</TableCell>
                <TableCell align="right">{set.weight}</TableCell>
                <TableCell align="right">{set.reps}</TableCell>
                <TableCell align="right">
                  <Button
                    style={{color: "grey"}}
                    onClick={() => onDeleteSet(set.number)}
                  >
                    <DeleteForeverTwoToneIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default ExerciseTable