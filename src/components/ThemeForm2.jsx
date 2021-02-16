import React from 'react';
import {observer} from "mobx-react";
import {makeStyles} from '@material-ui/core/styles';

import {
	Button, Checkbox,
	FormControl,
	IconButton,
	InputLabel,
	ListItem, ListItemIcon, ListItemText,
	MenuItem, Paper,
	Select,
	Slider,
	Typography
} from "@material-ui/core";
import {Delete, ArrowDownward, Save,} from "@material-ui/icons";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import * as PropTypes from "prop-types";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";



function valuetext(value) {
	return `${value}°C`;
}
const useStyles = makeStyles((theme) => ({
	root: {
		margin: 'auto',
		width:'100%',
	},
	paper: {
		width:'100%',
		height: 230,
		overflow: 'auto',
	},
	button: {
		margin: theme.spacing(0.5, 0),
	},
}));

function not(a, b) {
	return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
	return a.filter((value) => b.indexOf(value) !== -1);
}



const ThemeForm2  = observer(() => {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	const classes = useStyles();
	const [checked, setChecked] = React.useState([]);
	const [left, setLeft] = React.useState([0, 1, 2, 3]);
	const [right, setRight] = React.useState([4, 5, 6, 7]);

	const leftChecked = intersection(checked, left);
	const rightChecked = intersection(checked, right);

	const handleToggle = (value) => () => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		setChecked(newChecked);
	};

	const handleAllRight = () => {
		setRight(right.concat(left));
		setLeft([]);
	};

	const handleCheckedRight = () => {
		setRight(right.concat(leftChecked));
		setLeft(not(left, leftChecked));
		setChecked(not(checked, leftChecked));
	};

	const handleCheckedLeft = () => {
		setLeft(left.concat(rightChecked));
		setRight(not(right, rightChecked));
		setChecked(not(checked, rightChecked));
	};

	const handleAllLeft = () => {
		setLeft(left.concat(right));
		setRight([]);
	};

	const customList = (items) => (
			<Paper className={classes.paper} variant={'outlined'}>
				<List dense component="div" role="list">
					{items.map((value) => {
						const labelId = `transfer-list-item-${value}-label`;

						return (
								<ListItem key={value} role="listitem" button onClick={handleToggle(value)}>
									<ListItemIcon>
										<Checkbox
												checked={checked.indexOf(value) !== -1}
												tabIndex={-1}
												disableRipple
												inputProps={{ 'aria-labelledby': labelId }}
										/>
									</ListItemIcon>
									<ListItemText id={labelId} primary={`List item ${value + 1}`} />
								</ListItem>
						);
					})}
					<ListItem />
				</List>
			</Paper>
	);

	return (
			<React.Fragment>
				<Card>
					<CardHeader style={{}} title={'Slider'}/>
					<CardContent>

						<Box m={3}>
							<Grid container spacing={3} >
								<Grid item xs={12} md={6}>
									<Typography id="continuous-slider" gutterBottom>
										Continuous-Slider
									</Typography>
									<Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
								</Grid>
								<Grid item xs={12} md={6}>

									<Typography id="continuous-slider" gutterBottom>
										Continuous-Slider Disabled
									</Typography>
									<Slider disabled defaultValue={30} aria-labelledby="disabled-slider" />
								</Grid>
								<Grid item xs={12} md={6}>
									<Typography id="discrete-slider" gutterBottom>
										Discrete-Slider
									</Typography>
									<Slider
											defaultValue={30}
											getAriaValueText={valuetext}
											aria-labelledby="discrete-slider"
											valueLabelDisplay="auto"
											step={10}
											marks
											min={10}
											max={110}
									/>
								</Grid>
								<Grid item xs={12} md={6}>

									<Typography id="discrete-slider" gutterBottom>
										Discrete-Slider Disabled
									</Typography>
									<Slider
											defaultValue={30}
											getAriaValueText={valuetext}
											aria-labelledby="discrete-slider"
											valueLabelDisplay="auto"
											step={10}
											marks
											min={10}
											max={110}
											disabled
									/>
								</Grid>

							</Grid>
						</Box>
					</CardContent>
				</Card>
				<Card>
					<CardHeader style={{}} title={'Transferlist - Darstellung Paper-Outlined'}/>
					<CardContent>
						<Box m={3}>
							<Grid container spacing={2} justify="center" alignItems="center" className={classes.root}>
								<Grid item xs={12} sm={12} md={12} lg={4}>{customList(left)}</Grid>
								<Grid item xs={12} sm={12} md={12} lg={4}>
									<Grid container spacing={2} direction="column" alignItems="center">
										<Grid item>
										<Button
												variant="outlined"
												size="small"
												color={'primary'}
												className={classes.button}
												onClick={handleAllRight}
												disabled={left.length === 0}
												aria-label="move all right"
										>
											≫
										</Button>
										</Grid>
										<Grid item>
										<Button
												variant="outlined"
												size="small"
												color={'primary'}
												className={classes.button}
												onClick={handleCheckedRight}
												disabled={leftChecked.length === 0}
												aria-label="move selected right"
										>
											&gt;
										</Button>
										</Grid>
										<Grid item>
										<Button
												variant="outlined"
												size="small"
												color={'primary'}
												className={classes.button}
												onClick={handleCheckedLeft}
												disabled={rightChecked.length === 0}
												aria-label="move selected left"
										>
											&lt;
										</Button>
										</Grid>
										<Grid item>
										<Button
												variant="outlined"
												size="small"
												color={'primary'}
												className={classes.button}
												onClick={handleAllLeft}
												disabled={right.length === 0}
												aria-label="move all left"
										>
											≪
										</Button>
										</Grid>
									</Grid>
								</Grid>
								<Grid item xs={12} sm={12} md={12} lg={4}>{customList(right)}</Grid>
							</Grid>
						</Box>
					</CardContent>
				</Card>




			</React.Fragment>


	);
})

export default ThemeForm2
