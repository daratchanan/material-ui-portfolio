import React from 'react';
import { ListItem, Box, ListItemText, Grid, List, ListItemIcon, makeStyles, Typography } from '@material-ui/core'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import nat from "../images/nat2.jpg"


const useStyle = makeStyles({
   chevron: {
      minWidth: '1.5rem',
      color: "tomato"
   },
   mainContainer: {
      background: "none",
      // height: "100vh"
   },
   container: {
      width: "80%",
      margin: "0 auto",
   },
   title: {
      color: "tomato",
      paddingTop: "1rem"
   },
   titleText: {
      color: "white",
      paddingTop: "1rem"
   },
   middleText: {
      color: "white"
   },
   picture: {
      textAlign: "center",
      width: "100px",
      height: "350px",
      // border: "2px solid red",
      overflow: "hidden"
   },
   boxIcons: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: "3rem",
      color: "tan"
   }
});

const menuItemsLeft = [
   {
      listText: "Birthday",
      listDetail: "28 Apr 1983"
   },
   {
      listText: "Email",
      listDetail: "Daratchanan.p@gmail.com"
   },
   {
      listText: "Education",
      listDetail: "Faculty of Engineering "
   },
];

const menuItemsRight = [
   {
      listText: "Phone",
      listDetail: "(+66)8 6528 3940"
   },
   {
      listText: "Address",
      listDetail: "Muang Samutprakarn"
   },
   {
      listText: "Interests",
      listDetail: "Programing, Shopping online"
   },
];


function About() {

   const classes = useStyle();

   return (
      <Box component="div" className={classes.mainContainer}>
         <Box className={classes.container}>
            <Box component="header" >
               <Typography variant="h4" className={classes.title}>
                  About
               </Typography>
               <Typography variant="body1" className={classes.titleText}>
                  In the past ten years, I was working
                  as a procurement engineer.
                  However, it didn't fulfill my interest
                  that I wanted to be a Web
                  Developer. Consequently, I decided
                  to change my career and take a
                  programming course at Software
                  Park Thailand as a Fullstack
                  Developer.
               </Typography>
            </Box>
            <Grid container justify="center" spacing={4} style={{paddingTop: "2rem"}}>
               <Grid item xs={12} sm={12} md={12} lg={3} className={classes.picture}>
                  <img src={nat} alt="nat">
                  </img>
               </Grid>
               <Grid item xs={12} sm={12} md={12} lg={9}>
                  <Typography variant="h4" style={{ color: "tomato" }}>
                     Web Developer
                  </Typography>
                  <Grid container >
                     <Grid item md={6} >
                        <List component="ul">
                           {menuItemsLeft.map((menu, idx) => (
                              <ListItem key={idx}>
                                 <ListItemIcon className={classes.chevron}>
                                    <ChevronRightIcon />
                                 </ListItemIcon>
                                 <ListItemText className={classes.middleText}
                                    primary={<span style={{ fontWeight: 700 }}> {menu.listText}:
                           <span style={{ fontWeight: 1, paddingLeft: "5px" }}>{menu.listDetail}</span></span>}
                                 />
                              </ListItem>
                           ))}
                        </List>
                     </Grid>
                     <Grid item md={6}>
                        <List component="ul" >
                           {menuItemsRight.map((item, idx) => (
                              <ListItem>
                                 <ListItemIcon className={classes.chevron}>
                                    <ChevronRightIcon />
                                 </ListItemIcon>
                                 <ListItemText className={classes.middleText}
                                 primary={<span style={{ fontWeight: 700 }}>{item.listText}:
                           <span style={{ fontWeight: 1, padding: '5px' }}>{item.listDetail}</span></span>} />
                              </ListItem>
                           ))}
                        </List>
                     </Grid>
                  </Grid>
                  <Typography variant="h4" style={{ color: "tomato" }}>
                     Skills
                  </Typography>
                  <Box className={classes.boxIcons}>
                     <Box >
                        <i class="fab fa-react"></i>
                     </Box>
                     <Box >
                        <i class="fab fa-node"></i>
                     </Box>
                     <Box >
                        <i class="fas fa-database"></i>
                     </Box>
                     <Box >
                        <i class="fab fa-html5"></i>
                     </Box>
                     <Box >
                        <i class="fab fa-css3-alt"></i>
                     </Box>
                     <Box >
                        <i class="fab fa-js-square"></i>
                     </Box>
                     <Box >
                        <i class="fab fa-windows"></i>
                     </Box>
                  </Box>

               </Grid>
            </Grid>
         </Box>
      </Box>
   )
}

export default About;
