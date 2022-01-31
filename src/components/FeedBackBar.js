import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      light: '#424242',
      main: '#212121',
      dark: '#000',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#d80711',
      dark: '#f44336',
      contrastText: '#fff',
    },
  },
});

const useStyles = makeStyles({
  field: {
    backgroundColor: "#fff",
    color: "#000",
    borderRadius: "5px",
  },
  btn: {
    height: "48px",
  }
})


const FeedBackBar = () => {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
    <AppBar position="static" >
      <Container maxWidth="xl" color="primary">
        <Toolbar disableGutters >
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
                variant="filled"
                size="small"
                className={classes.field}
              />
          </div>
          </Box>
          <Button variant="contained" color="secondary">Submit</Button>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
};

export default FeedBackBar
