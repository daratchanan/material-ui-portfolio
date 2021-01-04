import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core"
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyle = makeStyles({
   root: {
      "& .MuiButtomNavigationAction-root": {
         minWidth: 0,
         maxWidth: 250,
      },
      "& .MuiSvgIcon-root": {
         fill: "tan",
         "&:hover": {
            fill: "tomato",
            fontSize: "1.8rem"
         }
      }
   },
})

function Footer() {

   const classes = useStyle();

   return (
      <BottomNavigation width="auto" style={{background: "#222"}}>
         <BottomNavigationAction
            className={classes.root}
            style={{ padding: 0 }}
            icon={<FacebookIcon />}
         />
         <BottomNavigationAction
            className={classes.root}
            style={{ padding: 0 }}
            icon={<TwitterIcon />}
         />
         <BottomNavigationAction
            className={classes.root}
            style={{ padding: 0 }}
            icon={<InstagramIcon />}
         />
      </BottomNavigation>
   )
};

export default Footer;

