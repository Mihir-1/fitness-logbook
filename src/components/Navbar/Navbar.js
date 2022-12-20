import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [selected, setSelected] = useState("Logbook")

  const handleNavigation = (event, newPage) => {
    if (newPage !== null) {
      setSelected(newPage)
    }
    console.log(newPage)
  }

  return (
    <div>
      <ToggleButtonGroup
        value={selected}
        exclusive
        onChange={handleNavigation}
      >
        <ToggleButton
          value="Logbook"
          component={Link}
          to={'/'}
        >
          Logbook
        </ToggleButton>
        <ToggleButton
          value="Stats"
          component={Link}
          to={'/stats'}
        >
          Stats
        </ToggleButton>
        <ToggleButton
          value="Tres"
        >
          {selected}
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}

export default Navbar