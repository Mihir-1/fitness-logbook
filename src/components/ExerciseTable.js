import React from 'react'
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper
} from '@mui/material'

const ExerciseTable = ({ sets }) => {
  return (
    <div>
      <TableContainer sx={{ maxWidth: 500 }} component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Set</TableCell>
              <TableCell align="right">Weight&nbsp;(lbs)</TableCell>
              <TableCell align="right">Reps</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sets.map((set) => (
              <TableRow
                key={set.number}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>{set.number}</TableCell>
                <TableCell align="right">{set.weight}</TableCell>
                <TableCell align="right">{set.reps}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default ExerciseTable