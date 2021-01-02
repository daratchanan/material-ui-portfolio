import React from 'react';
import { Typography, Grid, Box, Avatar } from "@material-ui/core";
import avatar from "../images/avatar.png"
import Typed from 'react-typed';
import { makeStyles } from '@material-ui/core/styles';


// CSS STYLES
const useStyles = makeStyles(theme => ({
   avatar: {
      width: theme.spacing(15),
      height: theme.spacing(15),
      margin: theme.spacing(1),
   },
   title: {
      color: "tomato"
   },
   Subtitle: {
      color: "tan",
      marginBottom: "3rem"
   },
   typedContainer: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "100vw",
      textAlign: "center",
      zIndex: 1
   }
})); 


function Header() {
   const classes = useStyles()

   return (
      <Box className={classes.typedContainer}>
         <Grid container justify="center">
            <Avatar className={classes.avatar} src={avatar} alt="Russel Crowe" />
         </Grid>
         <Typography className={classes.title} variant="h4">
            <Typed
               strings={["Daratchanan Philachai"]}
               typeSpeed={40}
            />
         </Typography>
         <br />
         <Typography className={classes.Subtitle} variant="h5">
            <Typed
               strings={["Web Design", "Web Development", "MERN Stack"]}
               typeSpeed={40}
               backSpeed={50}
               loop
            />
         </Typography>
      </Box>
   )
}

export default Header;
