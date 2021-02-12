import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

import {Button, Card, IconButton, Paper, Typography} from "@material-ui/core";
import {PhotoCamera, Delete,  Save, Cancel,} from "@material-ui/icons";
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({

	margin: {
		margin: theme.spacing(2),
	},
	input: {
		display: 'none',
	},
}));

export default function ThemeButtons() {
	const classes = useStyles();
	return (
			<React.Fragment>
				<Card>
					<CardHeader style={{}} title={'Button-Contained'}/>
					<CardContent>
						<Box m={3}>
								<Button variant="contained"
										  size="medium"
										  className={classes.margin}
										  startIcon={<Cancel />}>Default</Button>
								<Button variant="contained" className={classes.margin} color="primary"
										  size="medium"
										  startIcon={<Save />}>
									Primary
								</Button>
								<Button variant="contained" className={classes.margin} color="secondary"
										  size="medium"
										  startIcon={<Delete />}>
									Secondary
								</Button>
								<Button variant="contained" className={classes.margin} disabled>
									Disabled
								</Button>
								<Button variant="contained" className={classes.margin} color="primary" href="#contained-buttons">
									Link  Primary
								</Button>
						</Box>
					</CardContent>
				</Card>
				<Card>
					<CardHeader style={{}} title={'Button-Text'}/>
					<CardContent>

						<Box m={3}>
						<Button className={classes.margin}>Default</Button>
						<Button className={classes.margin} color="primary">Primary</Button>
						<Button className={classes.margin} color="secondary">Secondary</Button>
						<Button className={classes.margin} disabled>Disabled</Button>
						<Button href="#text-buttons" className={classes.margin} color="primary">
							Link
						</Button>
						</Box>
					</CardContent>
				</Card>
				<Card>
					<CardHeader style={{}} title={'Button-Outlined'}/>
					<CardContent>

						<Box m={3}>
						<Button variant="outlined" className={classes.margin}>Default</Button>
						<Button variant="outlined" className={classes.margin} color="primary">
							Primary
						</Button>
						<Button variant="outlined" className={classes.margin} color="secondary">
							Secondary
						</Button>
						<Button variant="outlined" className={classes.margin} disabled>
							Disabled
						</Button>
						<Button variant="outlined" className={classes.margin} color="primary" href="#outlined-buttons">
							Link
						</Button>
						</Box>
					</CardContent>
				</Card>
				<Card>
					<CardHeader style={{}} title={'Button-Upload'}/>
					<CardContent>


						<Box m={3}>

							<input
									accept="image/*"
									className={classes.input}
									id="contained-button-file"
									multiple
									type="file"
							/>
							<label htmlFor="contained-button-file">
								<Button variant="contained" color="primary" component="span">
									Upload
								</Button>
							</label>
							<input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
							<label htmlFor="icon-button-file">
								<IconButton color="primary" aria-label="upload picture" component="span">
									<PhotoCamera />
								</IconButton>
							</label>
						</Box>
					</CardContent>
				</Card>
				<Card>
					<CardHeader style={{}} title={'Button-Sizing'} />
					<CardContent>

						<Box m={3}>
							<Button size="small" className={classes.margin}>
								Small
							</Button>
							<Button size="medium" className={classes.margin}>
								Medium
							</Button>
							<Button size="large" className={classes.margin}>
								Large
							</Button>
						</Box>

						<Box m={3}>
							<Button variant="outlined" size="small" color="primary" className={classes.margin}>
								Small
							</Button>
							<Button variant="outlined" size="medium" color="primary" className={classes.margin}>
								Medium
							</Button>
							<Button variant="outlined" size="large" color="primary" className={classes.margin}>
								Large
							</Button>
						</Box>

						<Box m={3}>
							<Button variant="contained" size="small" color="primary" className={classes.margin}>
								Small
							</Button>
							<Button variant="contained" size="medium" color="primary" className={classes.margin}>
								Medium
							</Button>
							<Button variant="contained" size="large" color="primary" className={classes.margin}>
								Large
							</Button>
						</Box>

						<Box m={3}>
							<IconButton aria-label="delete" className={classes.margin} size="small">
								<ArrowDownwardIcon fontSize="inherit" />
							</IconButton>
							<IconButton aria-label="delete" className={classes.margin}>
								<DeleteIcon fontSize="small" />
							</IconButton>
							<IconButton aria-label="delete" className={classes.margin}>
								<DeleteIcon />
							</IconButton>
							<IconButton aria-label="delete" className={classes.margin}>
								<DeleteIcon fontSize="large" />
							</IconButton>
						</Box>

					</CardContent>
				</Card>





			</React.Fragment>


	);
}
