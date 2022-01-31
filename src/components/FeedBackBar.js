import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';

const FeedBackBar = () => {

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 0 }}>
            <Avatar alt="Remy Sharp" src="https://stripe-images.s3.us-west-1.amazonaws.com/works-with/0bf92fa8419e3237a6fb6eac9b1c225099f96741" />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default FeedBackBar
