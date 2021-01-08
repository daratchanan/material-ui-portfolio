import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import project1 from "../images/e-commerce.png";
import project2 from "../images/restaurant.jpg";
import project3 from "../images/blog.jpg";
import { IconButton, Link } from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';


const useStyles = makeStyles((theme) => ({
   mainContainer: {
      background: "#233",
      height: "100vh",
   },
   cardContainer: {
      maxWidth: 345,
      margin: "3rem auto",
   },
}));

const projects = [
   {
      name: "E-commerce",
      description: "React, Material ui, Express, mySql, Sequelize",
      image: project1,
      link: "https://github.com/daratchanan/shopshop_front"
   },
   {
      name: "Restaurant reserve",
      description: "React, Styled components, Express, mySql, Sequelize",
      image: project2,
      link: "https://github.com/chanthong/chanthong-cc7"
   },
   {
      name: "Blog",
      description: "React, Material ui",
      image: project3,
      link: "https://github.com/daratchanan/material-ui-Blog"
   },
];

const Portfolio = () => {

   const classes = useStyles();

   return (
      <Box component="div" className={classes.mainContainer}>
         <Grid container justify="center">
            {projects.map((project, i) => (
               <Grid item xs={12} sm={8} md={4} key={i}>
                  <Card className={classes.cardContainer}>
                     <CardActionArea>
                        <CardMedia
                           component="img"
                           alt="Project 1"
                           height="140"
                           image={project.image}
                        />
                        <CardContent >
                           <Typography variant="h5" gutterBottom>
                              {project.name}
                           </Typography>
                           <Typography style={{ height: "50px" }} variant="body2" color="textSecondary">
                              {project.description}
                           </Typography>
                        </CardContent>
                     </CardActionArea>
                     <CardActions>
                        <IconButton aria-label="github">
                           <Link href={project.link} target="_blank" style={{ color: "gray" }}>
                              <GitHubIcon fontSize="large" />
                           </Link>
                        </IconButton>
                     </CardActions>
                  </Card>
               </Grid>
            ))}
         </Grid>
      </Box>
   );
};

export default Portfolio;
