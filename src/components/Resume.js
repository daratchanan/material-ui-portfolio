import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
   mainContainer: {
      background: "#233",
   },
   timeLine: {
      position: "relative",
      padding: "1rem",
      margin: "0 auto",
      "&:before": {
         content: "''",
         position: "absolute",
         height: "100%",
         border: "1px solid tan",
         right: "40px",
         top: 0,
      },
      "&:after": {
         content: "''",
         display: "table",
         clear: "both",
      },
      [theme.breakpoints.up("md")]: {
         padding: "2rem",
         "&:before": {
            left: "calc(50% - 1px)",
            right: "auto",
         },
      },
   },
   timeLineItem: {
      padding: "1rem",
      borderBottom: "2px solid tan",
      position: "relative",
      margin: "1rem 3rem 1rem 1rem",
      clear: "both",
      "&:after": {
         content: "''",
         position: "absolute",
      },
      "&:before": {
         content: "''",
         position: "absolute",
         right: "-0.625rem",
         top: "calc(50% - 5px)",
         borderStyle: "solid",
         borderColor: "tomato tomato transparent transparent",
         borderWidth: "0.625rem",
         transform: "rotate(45deg)",
      },
      [theme.breakpoints.up("md")]: {
         width: "44%",
         margin: "1rem",
         "&:nth-of-type(2n)": {
            float: "right",
            margin: "1rem",
            borderColor: "tan",
         },
         "&:nth-of-type(2n):before": {
            right: "auto",
            left: "-0.625rem",
            borderColor: "transparent transparent tomato tomato",
         },
      },
   },
   timeLineYear: {
      textAlign: "center",
      maxWidth: "9.375rem",
      margin: "0 3rem 0 auto",
      fontSize: "1.8rem",
      color: "#fff",
      background: "tomato",
      lineHeight: 1,
      padding: "0.5rem 1rem",
      "&:before": {
         display: "none",
      },
      [theme.breakpoints.up("md")]: {
         textAlign: "center",
         margin: "0 auto",
         "&:nth-of-type(2n)": {
            float: "none",
            margin: "0 auto",
         },
         "&:nth-of-type(2n):before": {
            display: "none",
         },
      },
   },
   heading: {
      color: "tomato",
      padding: "3rem 0",
      textTransform: "uppercase",
   },
   subHeading: {
      color: "#fff",
      padding: 0,
      textTransform: "uppercase",
   },
   body1: {
      color: "tomato",
   },
   subtitle1: {
      color: "tan",
   },
}));

const expData = [
   {
      year: "2010 - 2020",
      position: "Procurement Engineer",
      company: "Somboon Advance Technology Public Company Limited. (SAT)",
      detail: "Sourcing new supplier to develop and improvement manufacturing cost"
   },
   {
      year: "2008 - 2010",
      position: "Production Engineer",
      company: "Thai Agri Food Public Company Limited. (TAF)",
      detail: "Production method develop and improvement, Manhour and production planning"
   },
   {
      year: "2005 - 2008",
      position: "Engineering Document Control",
      company: "Muramoto Electron (Thailand) PCL. (METCO)",
      detail: "Document control in quality control systems"
   },
]

const Resume = () => {

   const classes = useStyles();

   return (
      <Box component="header" className={classes.mainContainer}>
         <Typography variant="h4" align="center" className={classes.heading}>
            Working Experience
         </Typography>
         <Box component="div" className={classes.timeLine}>
            {expData.map((exp, idx) => (
               <>
                  <Typography
                     key={idx}
                     variant="h2"
                     className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                  >
                     {exp.year}
                  </Typography>
                  <Box component="div" className={classes.timeLineItem}>
                     <Typography
                        variant="h5"
                        align="center"
                        className={classes.subHeading}
                     >
                        {exp.position}
                     </Typography>
                     <Typography variant="body1" align="center" className={classes.body1}>
                        {exp.company}
                     </Typography>
                     <Typography
                        variant="subtitle1"
                        align="center"
                        className={classes.subtitle1}
                     >
                        {exp.detail}
                     </Typography>
                  </Box>
               </>
            ))}
         </Box>
      </Box>
   );
};

export default Resume;
