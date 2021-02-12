import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroup,
	FormHelperText,
	FormLabel, Radio, RadioGroup, Typography,
} from "@material-ui/core";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({

	root: {
		'& > *': {
			margin: theme.spacing(1),
		},
	}
}));

export default function ThemeCheckboxesRadios() {
	const classes = useStyles();

	const [state, setState] = React.useState({
		gilad: true,
		jason: false,
		antoine: false,
	});

	const handleChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.checked });
	};
	const { gilad, jason, antoine } = state;
	const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

	return (

			<Container>
				<div className={classes.root}>
					<Typography variant={"h4"}>Checkboxen & Radios</Typography>
					<FormControl component="fieldset" className={classes.formControl}>
						<FormLabel component="legend">Assign responsibility</FormLabel>
						<FormGroup>
							<FormControlLabel
									control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />}
									label="Gilad Gray"
							/>
							<FormControlLabel
									control={<Checkbox checked={jason} onChange={handleChange} name="jason" />}
									label="Jason Killian"
							/>
							<FormControlLabel
									control={<Checkbox checked={antoine} onChange={handleChange} name="antoine" />}
									label="Antoine Llorca"
							/>
						</FormGroup>
						<FormHelperText>Be careful</FormHelperText>
					</FormControl>
					<FormControl required error={error} component="fieldset" className={classes.formControl}>
						<FormLabel component="legend">Pick two</FormLabel>
						<FormGroup>
							<FormControlLabel
									control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />}
									label="Gilad Gray"
							/>
							<FormControlLabel
									control={<Checkbox checked={jason} onChange={handleChange} name="jason" />}
									label="Jason Killian"
							/>
							<FormControlLabel
									control={<Checkbox checked={antoine} onChange={handleChange} name="antoine" />}
									label="Antoine Llorca"
							/>
						</FormGroup>
						<FormHelperText>You can display an error</FormHelperText>
					</FormControl>
					<FormControl component="fieldset">
						<FormLabel component="legend">Gender</FormLabel>
						<RadioGroup aria-label="gender" name="gender1" value={''} onChange={handleChange}>
							<FormControlLabel value="female" control={<Radio />} label="Female" checked={true} />
							<FormControlLabel value="male" control={<Radio />} label="Male" />
							<FormControlLabel value="other" control={<Radio />} label="Other" />
							<FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
						</RadioGroup>
					</FormControl>
				</div>
			</Container>


	);
}
