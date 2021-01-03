import React from 'react';
import SendIcon from "@material-ui/icons/Send"
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme=>({
   form: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
   },
}))

const InputField = withStyles({
   root: {
      "& label.Mui-focused": {
         color: "tomato",
      },
      "& label": {
         color: "tan",
      },
      "& .MuiOutlinedInput-root": {
         "& fieldset": {
            borderColor: "tan",
         },
         "&:hover fieldset": {
            borderColor: "tan",
         },
         "&.Mui-focused fieldset": {
            borderColor: "tan"
         },
      },
   },
})(TextField);

function Contact() {

   const classes = useStyles();

   return (
      <Box component="div">
         <Grid container justify="center">
            <Box component="form" className={classes.form}>
               <Typography variant="h5">hire or contact me...</Typography>
               <InputField
                  fullWidth={true}
                  label="Name"
                  variant="outlined"
                  inputProps={{ style: { color: "white" } }}
                  margin="dense"
                  size="medium"
               />
               <br />

               <InputField
                  fullWidth={true}
                  label="Email"
                  variant="outlined"
                  inputProps={{ style: { color: "white" } }}
                  margin="dense"
                  size="medium"
               />
               <br />

               <InputField
                  fullWidth={true}
                  label="company name"
                  variant="outlined"
                  inputProps={{ style: { color: "white" } }}
                  margin="dense"
                  size="medium"
               />
               <br />
               <Button variant="outlined" fullWidth={true} endIcon={<SendIcon />}>
                  contact me
               </Button>
            </Box>
         </Grid>
      </Box>
   )
}

export default Contact;
