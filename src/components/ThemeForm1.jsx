import 'date-fns';
import React from 'react';
import {observer} from "mobx-react";
import {makeStyles} from '@material-ui/core/styles';
import {Button, Checkbox, FormControl, FormGroup, InputLabel, MenuItem, Select, Switch} from "@material-ui/core";
import {Delete, Save, Cancel, Favorite, FavoriteBorder,} from "@material-ui/icons";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Grid from "@material-ui/core/Grid";
import Radio from "@material-ui/core/Radio";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import DateFnsUtils from '@date-io/date-fns';
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from '@material-ui/pickers';
import Box from "@material-ui/core/Box";
import green from "@material-ui/core/colors/green";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({}));

const GreenCheckbox = withStyles({
	root: {
		color: green[400],
		'&$checked': {
			color: green[600],
		},
	},
	checked: {},
})((props) => <Checkbox color="default" {...props} />);

const GreenRadio = withStyles({
	root: {
		color: green[400],
		'&$checked': {
			color: green[600],
		},
	},
	checked: {},
})((props) => <Radio color="default" {...props} />);


const ThemeForm1 = observer(() => {
	const classes = useStyles();
	const [age, setAge] = React.useState('');

	const [value, setValue] = React.useState('');
	const [error, setError] = React.useState(false);
	const [helperText, setHelperText] = React.useState('Choose wisely');
	const [checked, setChecked] = React.useState(true);
	const [selectedDate, setSelectedDate] = React.useState(new Date('2022-08-18T21:11:54'));
	const [selectedValue, setSelectedValue] = React.useState('a');


	const handleChange = (event) => {
		setAge(event.target.value);
	};
	const handleRadioChange = (event) => {
		setValue(event.target.value);
		setHelperText(' ');
		setError(false);
	};

	const handleDateChange = (date) => {
		setSelectedDate(date);
	};


	const handleChangeRad = (event) => {
		setSelectedValue(event.target.value);
	};

	const handleChangeSel = (event) => {
		setChecked(event.target.checked);
	};
	const [state, setState] = React.useState({
		checkedA: true,
		checkedB: true,
		checkedF: true,
		checkedG: true,
	});

	const handleChangeCheck = (event) => {
		setState({ ...state, [event.target.name]: event.target.checked });
	};
	const [stateSW, setStateSW] = React.useState({
		checkedA: true,
		checkedB: true,
	});

	const handleChangeSW = (event) => {
		setStateSW({ ...stateSW, [event.target.name]: event.target.checked });
	};

	return (
			<>
				<Card>
					<CardHeader style={{}} title={'Standardelemente - Defaulteinstellung (Weite richtet sich nach Grid)'}/>
					<CardContent>

						<Box m={3}>
							<Grid container spacing={3}>
								<Grid item xs={12} md={6}>
									<MuiPickersUtilsProvider utils={DateFnsUtils}>
										<KeyboardDatePicker
												marginTop={0}
												disableToolbar
												className={classes.textField}
												variant="inline"
												format="dd.MM.yyyy"
												margin=""
												id="date-picker-inline"
												label="Datumspicker"
												value={selectedDate}
												onChange={handleDateChange}
												KeyboardButtonProps={{
													'aria-label': 'change date',
												}}
										/>
									</MuiPickersUtilsProvider>
								</Grid>
								<Grid item xs={12} md={6}>
									<TextField id="standard-basic" label="Standard-Input"
												  className={classes.textField}/>
								</Grid>
								<Grid item xs={12} md={6}>
									<FormControl className={classes.formControl}>
										<InputLabel id="demo-simple-select-label">Select</InputLabel>
										<Select
												labelId="demo-simple-select-label"
												id="demo-simple-select"
												value={age}
												onChange={handleChangeSel}
										>
											<MenuItem value={10}>Auswahl 1</MenuItem>
											<MenuItem value={20}>Auswahl 2</MenuItem>
											<MenuItem value={30}>Auswahl 3</MenuItem>
										</Select>
									</FormControl>
								</Grid>
								<Grid item xs={12} md={6}>

									<Typography component="h4" variant="h4">
										Switch - Versch. Farben
									</Typography>
									<FormGroup row>
										<FormControlLabel
												control={<Switch checked={state.checkedA} onChange={handleChangeSW} name="checkedA" />}
												label="Secondary"
										/>
										<FormControlLabel
												control={
													<Switch
															checked={state.checkedB}
															onChange={handleChangeSW}
															name="checkedB"
															color="primary"
													/>
												}
												label="Primary"
										/>
										<FormControlLabel control={<Switch />} label="Uncontrolled" />
										<FormControlLabel disabled control={<Switch />} label="Disabled" />
										<FormControlLabel disabled control={<Switch checked />} label="Disabled" />
									</FormGroup>
								</Grid>
								<Grid item xs={12} md={6}>
									<Typography component="h4" variant="h4">
										Radios Einzeln - Verschiedenen Farben
									</Typography>
									<Radio
											checked={selectedValue === 'a'}
											onChange={handleChangeRad}
											value="a"
											name="radio-button-demo"
											inputProps={{ 'aria-label': 'A' }}
									/>
									<Radio
											checked={selectedValue === 'b'}
											onChange={handleChangeRad}
											value="b"
											name="radio-button-demo"
											inputProps={{ 'aria-label': 'B' }}
									/>
									<GreenRadio
											checked={selectedValue === 'c'}
											onChange={handleChangeRad}
											value="c"
											name="radio-button-demo"
											inputProps={{ 'aria-label': 'C' }}
									/>
									<Radio
											checked={selectedValue === 'd'}
											onChange={handleChangeRad}
											value="d"
											color="default"
											name="radio-button-demo"
											inputProps={{ 'aria-label': 'D' }}
									/>
									<Radio
											checked={selectedValue === 'e'}
											onChange={handleChangeRad}
											value="e"
											color="default"
											name="radio-button-demo"
											inputProps={{ 'aria-label': 'E' }}
											size="small"
									/>

									<Typography component="h4" variant="h4">
										Radiogroup - Default (Secondary)
									</Typography>
									<FormControl component="fieldset" error={error} className={classes.formControl}>
										<RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
											<FormControlLabel value="best" control={<Radio/>} label="Auswahl 1"/>
											<FormControlLabel value="worst" control={<Radio/>} label="Auswahl 2"/>
										</RadioGroup>
										<FormHelperText>{helperText}</FormHelperText>
									</FormControl>
								</Grid>
								<Grid item xs={12} md={6}>
									<Typography component="h4" variant="h4">
										Checkboxen - Verschiedenen Farben
									</Typography>
									<FormGroup row>
										<FormControlLabel
												control={<Checkbox checked={state.checkedA} onChange={handleChangeCheck} name="checkedA" />}
												label="Secondary"
										/>
										<FormControlLabel
												control={
													<Checkbox
															checked={state.checkedB}
															onChange={handleChangeCheck}
															name="checkedB"
															color="primary"
													/>
												}
												label="Primary"
										/>
										<FormControlLabel control={<Checkbox name="checkedC" />} label="Uncontrolled" />
										<FormControlLabel disabled control={<Checkbox name="checkedD" />} label="Disabled" />
										<FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="Disabled" />
										<FormControlLabel
												control={
													<Checkbox
															checked={state.checkedF}
															onChange={handleChangeCheck}
															name="checkedF"
															indeterminate
													/>
												}
												label="Indeterminate"
										/>
										<FormControlLabel
												control={<GreenCheckbox checked={state.checkedG} onChange={handleChangeCheck} name="checkedG" />}
												label="Custom color"
										/>
										<FormControlLabel
												control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
												label="Custom icon"
										/>
										<FormControlLabel
												control={
													<Checkbox
															icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
															checkedIcon={<CheckBoxIcon fontSize="small" />}
															name="checkedI"
													/>
												}
												label="Custom size"
										/>
									</FormGroup>
								</Grid>
							</Grid>
						</Box>
					</CardContent>
				</Card>
				<Card>
					<CardHeader style={{}} title={'Standardelemente - Filled (Weite richtet sich nach Grid)'}/>
					<CardContent>

						<Box m={3}>
							<Grid container spacing={3}>
								<Grid item xs={12} md={6}>
									<MuiPickersUtilsProvider utils={DateFnsUtils}>
										<KeyboardDatePicker
												marginTop={0}
												disableToolbar
												className={classes.textField}
												inputVariant="filled"
												format="dd.MM.yyyy"
												margin=""
												id="date-picker-inline1"
												label="Datumspicker"
												value={selectedDate}
												onChange={handleDateChange}
												KeyboardButtonProps={{
													'aria-label': 'change date',
												}}
										/>
									</MuiPickersUtilsProvider>
								</Grid>
								<Grid item xs={12} md={6}>
									<TextField id="standard-basic" label="Standard-Input" variant={'filled'}
												  className={classes.textField}/>
								</Grid>
								<Grid item xs={12} md={6}>
									<FormControl className={classes.formControl}>
										<InputLabel id="demo-simple-select-label">Select</InputLabel>
										<Select
												labelId="demo-simple-select-label"
												id="demo-simple-select"
												variant={'filled'}
												value={age}
												onChange={handleChange}
										>
											<MenuItem value={10}>Auswahl 1</MenuItem>
											<MenuItem value={20}>Auswahl 2</MenuItem>
											<MenuItem value={30}>Auswahl 3</MenuItem>
										</Select>
									</FormControl>
								</Grid>
								<Grid item xs={12} md={6}>

								</Grid>
							</Grid>
						</Box>
					</CardContent>
				</Card>
			</>


	);
})

export default ThemeForm1
