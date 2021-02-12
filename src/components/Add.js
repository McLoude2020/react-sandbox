import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Fab} from "@material-ui/core";
import {Edit} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({

	add: {
		position: 'fixed',
		bottom: 20,
		right: 20,
	}
}));

export default function ThemeAdd() {
	const classes = useStyles();
	return (

			<Fab size="large" aria-label="add" className={classes.add} color={'secondary'}>
				<Edit />
			</Fab>


	);
}
