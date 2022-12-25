import { AppBar, Toolbar, Button } from '@mui/material'
import React from 'react'

const Navbar = () => {

  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-around" }}>
          <Button href="/" color="inherit" size="large">
            Logbook
          </Button>
          <Button href="/stats" color="inherit" size="large">
            Stats
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar