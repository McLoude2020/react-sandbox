import React from 'react';
import {observer} from "mobx-react";
import {makeStyles} from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import ThemeForm1 from "./ThemeForm1";
import ThemeForm2 from "./ThemeForm2";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles((theme) => ({
	paper: {
		width: '100%',
		height: '100%',
	},
}));


const ThemeGridPage = observer(() => {

	const classes = useStyles();

	return (
			<React.Fragment>
			<Grid container spacing={3} direction="row">
				<Grid item xs={12} sm={12} md={6} lg={6} >
					<ThemeForm1/>
				</Grid>
				<Grid item xs={12} sm={12} md={6} lg={6}>
					<ThemeForm2/>
				</Grid>
			</Grid>
			<Grid container spacing={3} direction="row">
				<Grid item xs={12} sm={12} md={6} lg={4}>
					<Paper className={classes.paper}>
					</Paper>
				</Grid>
				<Grid item xs={12} sm={12} md={6} lg={4}>
					<Paper className={classes.paper}>
					</Paper>
				</Grid>
				<Grid item xs={12} sm={12} md={6} lg={4}>
					<Paper className={classes.paper}>
					</Paper>
				</Grid>
			</Grid>
			</React.Fragment>


	);
})
export default ThemeGridPage
