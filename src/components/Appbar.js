
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import App from '../App'

export default function Appbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Button color="inherit" 
        onClick={() => {
          App.ShowProducts = false;
          App.forceUpdate1();
          alert('clicked');
        }}
        >Add Product</Button>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Warranty Tracker
        </Typography>
        <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}