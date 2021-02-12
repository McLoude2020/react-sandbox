import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Card, Fab, Typography} from "@material-ui/core";
import {Add, Navigation} from "@material-ui/icons";
import Container from "@material-ui/core/Container";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({

	margin: {
		margin: theme.spacing(2),
	}
}));

export default function ThemeFab() {
	const classes = useStyles();
	return (

			<Card>
				<CardHeader style={{}} title={'Button-FAB'} />
				<CardContent>

					<Box m={3}>
					<div>
						<Fab size="small" color="primary" aria-label="add" className={classes.margin}>
							<Add />
						</Fab>
						<Fab size="medium" color="secondary" aria-label="add" className={classes.margin}>
							<Add />
						</Fab>
						<Fab color="secondary" aria-label="add" className={classes.margin}>
							<Add />
						</Fab>
					</div>
					<div>
						<Fab
								variant="extended"
								size="small"
								color="primary"
								aria-label="add"
								className={classes.margin}
						>
							<Navigation className={classes.extendedIcon} />
							Extended
						</Fab>
						<Fab
								variant="extended"
								size="medium"
								color="primary"
								aria-label="add"
								className={classes.margin}
						>
							<Navigation className={classes.extendedIcon} />
							Extended
						</Fab>
						<Fab variant="extended" color="primary" aria-label="add" className={classes.margin}>
							<Navigation className={classes.extendedIcon} />
							Extended
						</Fab>
					</div>
					</Box>
				</CardContent>
			</Card>


	);
}
