import React from 'react';
import Navbar from './Navbar';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import project1 from "../images/html-css-javascript-lg.jpg"
import project2 from "../images/javascript-fullstack.jpg"
import project3 from "../images/mern-stack.jpg"
import project4 from "../images/react-redux.jpg"


const useStyles = makeStyles({
   mainContainer: {
      background: "#233",
      height: "100%"
   },
   cardContainer: {
      maxWidth: 345,
      margin: "5rem auto"
   }
});

const portData = [
   {
      image: project1,
      projectName: "Project 1",
      projectDetail: "Lorem ispus dolor sit amet conssectur Lorem ispus dolor sit amet conssectur Lorem ispus dolor sit amet conssectur Lorem ispus dolor sit amet conssectur"
   },
   {
      image: project2,
      projectName: "Project 2",
      projectDetail: "Lorem ispus dolor sit amet conssectur Lorem ispus dolor sit amet conssectur Lorem ispus dolor sit amet conssectur Lorem ispus dolor sit amet conssectur"
   },
   {
      image: project3,
      projectName: "Project 3",
      projectDetail: "Lorem ispus dolor sit amet conssectur Lorem ispus dolor sit amet conssectur Lorem ispus dolor sit amet conssectur Lorem ispus dolor sit amet conssectur"
   },
   {
      image: project4,
      projectName: "Project 4",
      projectDetail: "Lorem ispus dolor sit amet conssectur Lorem ispus dolor sit amet conssectur Lorem ispus dolor sit amet conssectur Lorem ispus dolor sit amet conssectur"
   },

];

function Portfolio() {

   const classes = useStyles();

   return (
      <Box component="div" className={classes.mainContainer}>
         <Navbar />
         <Grid container justify="center" spacing={3}>
            {portData.map((data, idx) => 
               <Grid item xs={12} sm={8} md={6} key={idx}>
               <Card className={classes.cardContainer}>
                  <CardActionArea>
                     <CardMedia
                        component="img"
                        alt="Project 1"
                        height="140"
                        image={data.image}
                     />
                     <CardContent>
                        <Typography gutterBottom variant="h5">
                           {data.projectName}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                           {data.projectDetail}
                        </Typography>
                     </CardContent>
                  </CardActionArea>
                     <CardActions>
                        <Button size="small" color="primary">
                           Share
                        </Button>
                        <Button size="small" color="primary">
                           Live Demo
                        </Button>
                     </CardActions>
               </Card>
            </Grid>
            )}
            
         </Grid>
      </Box>
   )
}

export default Portfolio;
