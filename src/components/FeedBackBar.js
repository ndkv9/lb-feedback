import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const FeedBackBar = () => {

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <Avatar alt="Remy Sharp" src="https://stripe-images.s3.us-west-1.amazonaws.com/works-with/0bf92fa8419e3237a6fb6eac9b1c225099f96741" />
          </Box>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            marginRight="50px"
          >
            <div>
              <TextField
                id="standard-textarea"
                label="Feedback"
                placeholder="Placeholder"
                multiline
                variant="standard"
              />
            </div>
          </Box>
          <Button variant="contained">Submit</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default FeedBackBar
