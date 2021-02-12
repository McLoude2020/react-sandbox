import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Box, Checkbox, Fab, FormControlLabel} from "@material-ui/core";
import {Edit, TableChart} from "@material-ui/icons";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionActions from "@material-ui/core/AccordionActions";
import Button from "@material-ui/core/Button";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ThemeForm1 from "./ThemeForm1";
import ThemeForm2 from "./ThemeForm2";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({


}));

export default function ThemeAccordion() {
	const classes = useStyles();
	function createData(name, calories, fat, carbs, protein) {
		return { name, calories, fat, carbs, protein };
	}

	const rows = [
		createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
		createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
		createData('Eclair', 262, 16.0, 24, 6.0),
		createData('Cupcake', 305, 3.7, 67, 4.3),
		createData('Gingerbread', 356, 16.0, 49, 3.9),
	];

	const [expanded, setExpanded] = React.useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};
	return (
			<>
				<Grid container spacing={3} direction="row">
					<Grid item xs={12} sm={12} md={6} lg={6}>
						<Typography gutterBottom variant="h4" component="h4">Normal</Typography>
						<Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >
							<AccordionSummary expandIcon={<ExpandMoreIcon/>} >
								<Typography gutterBottom variant="h5" component="h4">Tabelle</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<TableContainer>
									<Table aria-label="simple table">
										<TableHead>
											<TableRow>
												<TableCell>Dessert</TableCell>
												<TableCell align="right">Calories</TableCell>
												<TableCell align="right">Fat&nbsp;(g)</TableCell>
												<TableCell align="right">Carbs&nbsp;(g)</TableCell>
												<TableCell align="right">Protein&nbsp;(g)</TableCell>
											</TableRow>
										</TableHead>
										<TableBody>
											{rows.map((row) => (
													<TableRow key={row.name}>
														<TableCell component="th" scope="row">
															{row.name}
														</TableCell>
														<TableCell align="right">{row.calories}</TableCell>
														<TableCell align="right">{row.fat}</TableCell>
														<TableCell align="right">{row.carbs}</TableCell>
														<TableCell align="right">{row.protein}</TableCell>
													</TableRow>
											))}
										</TableBody>
									</Table>
								</TableContainer>
							</AccordionDetails>
						</Accordion>
						<Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} >
							<AccordionSummary expandIcon={<ExpandMoreIcon />}>
								<Typography gutterBottom variant="h5" component="h2">Text</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Box m={3}>
									Hallo. Ich bin ein kleiner Blindtext. Und zwar schon so lange ich denken kann. Es war nicht leicht zu verstehen, was es bedeutet, ein blinder Text zu sein: Man macht keinen Sinn. Wirklich keinen Sinn. Man wird zusammenhangslos eingeschoben und rumgedreht – und oftmals gar nicht erst gelesen. Aber bin ich allein deshalb ein schlechterer Text als andere? Na gut, ich werde nie in den Bestsellerlisten stehen. Aber andere Texte schaffen das auch nicht. Und darum stört es mich nicht besonders blind zu sein. Und sollten Sie diese Zeilen noch immer lesen, so habe ich als kleiner Blindtext etwas geschafft, wovon all die richtigen und wichtigen Texte meist nur träumen.
								</Box>
							</AccordionDetails>
						</Accordion>
						<Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} >
							<AccordionSummary expandIcon={<ExpandMoreIcon />}>
								<Typography gutterBottom variant="h5" component="h2">Kleines Form</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Box m={3}>
								<Grid container spacing={3}>
									<Grid item xs={12} md={6}>
										<TextField id="standard-basic" label="Standard"
													  className={classes.textField}/>
									</Grid>
									<Grid item xs={12} md={6}>
										<TextField id="standard-basic24" label="Straße"
													  className={classes.textField}/>
									</Grid>
								</Grid>
								</Box>
							</AccordionDetails>
							<AccordionActions>
								<Button color="primary" variant={'contained'} startIcon={<SaveIcon/>} className={classes.btn}>Speichern</Button>
								<Button color="secondary" variant={'contained'} startIcon={<DeleteIcon/>} className={classes.btn} >Löschen</Button>
							</AccordionActions>
						</Accordion>
					</Grid>

					<Grid item xs={12} sm={12} md={6} lg={6}>

						<Typography gutterBottom variant="h4" component="h4">Mit Auswahlbox</Typography>
						<Accordion>
							<AccordionSummary
									expandIcon={<ExpandMoreIcon />}
									aria-label="Expand"
									aria-controls="additional-actions1-content"
									id="additional-actions1-header"
							>
								<FormControlLabel
										aria-label="Acknowledge"
										onClick={(event) => event.stopPropagation()}
										onFocus={(event) => event.stopPropagation()}
										control={<Checkbox />}
										label="Erste Auswahl"
								/>
							</AccordionSummary>
							<AccordionDetails>

								<Box m={3}>
									<Typography color="textSecondary">
									Hallo. Ich bin ein kleiner Blindtext. Und zwar schon so lange ich denken kann. Es war nicht leicht zu verstehen, was es bedeutet, ein blinder Text zu sein: Man macht keinen Sinn. Wirklich keinen Sinn. Man wird zusammenhangslos eingeschoben und rumgedreht – und oftmals gar nicht erst gelesen. Aber bin ich allein deshalb ein schlechterer Text als andere? Na gut, ich werde nie in den Bestsellerlisten stehen. Aber andere Texte schaffen das auch nicht. Und darum stört es mich nicht besonders blind zu sein. Und sollten Sie diese Zeilen noch immer lesen, so habe ich als kleiner Blindtext etwas geschafft, wovon all die richtigen und wichtigen Texte meist nur träumen.
									</Typography>
								</Box>
							</AccordionDetails>
						</Accordion>
						<Accordion>
							<AccordionSummary
									expandIcon={<ExpandMoreIcon />}
									aria-label="Expand"
									aria-controls="additional-actions2-content"
									id="additional-actions2-header"
							>
								<FormControlLabel
										aria-label="Acknowledge"
										onClick={(event) => event.stopPropagation()}
										onFocus={(event) => event.stopPropagation()}
										control={<Checkbox />}
										label="Zweite Auswahl"
								/>
							</AccordionSummary>
							<AccordionDetails>

								<Box m={3}>
									Hallo. Ich bin ein kleiner Blindtext. Und zwar schon so lange ich denken kann. Es war nicht leicht zu verstehen, was es bedeutet, ein blinder Text zu sein: Man macht keinen Sinn. Wirklich keinen Sinn. Man wird zusammenhangslos eingeschoben und rumgedreht – und oftmals gar nicht erst gelesen. Aber bin ich allein deshalb ein schlechterer Text als andere? Na gut, ich werde nie in den Bestsellerlisten stehen. Aber andere Texte schaffen das auch nicht. Und darum stört es mich nicht besonders blind zu sein. Und sollten Sie diese Zeilen noch immer lesen, so habe ich als kleiner Blindtext etwas geschafft, wovon all die richtigen und wichtigen Texte meist nur träumen.
								</Box>
							</AccordionDetails>
						</Accordion>
						<Accordion>
							<AccordionSummary
									expandIcon={<ExpandMoreIcon />}
									aria-label="Expand"
									aria-controls="additional-actions3-content"
									id="additional-actions3-header"
							>
								<FormControlLabel
										aria-label="Acknowledge"
										onClick={(event) => event.stopPropagation()}
										onFocus={(event) => event.stopPropagation()}
										control={<Checkbox />}
										label="Dritte Auswahl"
								/>
							</AccordionSummary>
							<AccordionDetails>
								<Box m={3}>
									Hallo. Ich bin ein kleiner Blindtext. Und zwar schon so lange ich denken kann. Es war nicht leicht zu verstehen, was es bedeutet, ein blinder Text zu sein: Man macht keinen Sinn. Wirklich keinen Sinn. Man wird zusammenhangslos eingeschoben und rumgedreht – und oftmals gar nicht erst gelesen. Aber bin ich allein deshalb ein schlechterer Text als andere? Na gut, ich werde nie in den Bestsellerlisten stehen. Aber andere Texte schaffen das auch nicht. Und darum stört es mich nicht besonders blind zu sein. Und sollten Sie diese Zeilen noch immer lesen, so habe ich als kleiner Blindtext etwas geschafft, wovon all die richtigen und wichtigen Texte meist nur träumen.
								</Box>
							</AccordionDetails>
						</Accordion>
					</Grid>
				</Grid>
			</>


	);
}
