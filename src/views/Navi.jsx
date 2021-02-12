import React, {useEffect} from 'react';
import {observer} from "mobx-react";
import {emphasize, makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import {useStores} from "../hooks/useStores";
import Grid from "@material-ui/core/Grid";
import {Box, Breadcrumbs, Card, Chip, Link, MobileStepper, useTheme} from "@material-ui/core";
import {ExpandMore, Grain, Home, KeyboardArrowLeft, KeyboardArrowRight, Whatshot} from "@material-ui/icons";
import withStyles from "@material-ui/core/styles/withStyles";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from "@material-ui/core/Button";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import StepButton from '@material-ui/core/StepButton';
import Paper from '@material-ui/core/Paper';


function getSteps() {
	return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
}


function getStepContent(step) {
	switch (step) {
		case 0:
			return 'Step 1: Select campaign settings...';
		case 1:
			return 'Step 2: What is an ad group anyways?';
		case 2:
			return 'Step 3: This is the bit I really care about!';
		default:
			return 'Unknown step';
	}
}

function handleClick(event) {
	event.preventDefault();
	console.info('You clicked a breadcrumb.');
}
const useStyles = makeStyles((theme) => ({

	root: {
		'& > * + *': {
			marginTop: theme.spacing(2),
		},
	},
	link: {
		display: 'flex',
	},
	icon: {
		marginRight: theme.spacing(1),
		width: 20,
		height: 20,
	},
	rootStepper: {
		width: '100%',
	},
	button: {
		marginRight: theme.spacing(1),
	},
	backButton: {
		marginRight: theme.spacing(1),
	},
	completed: {
		display: 'inline-block',
	},
	instructions: {
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3),
		fontSize:'small'
	},
}));

const StyledBreadcrumb = withStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.grey[300],
		height: theme.spacing(4),
		color: theme.palette.grey[800],
		fontWeight: theme.typography.fontWeightRegular,
		'&:hover, &:focus': {
			backgroundColor: theme.palette.grey[300],
		},
		'&:active': {
			boxShadow: theme.shadows[1],
			backgroundColor: emphasize(theme.palette.grey[300], 0.12),
		},
	},
}))(Chip); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591



const options = [
	'None',
	'Atria',
	'Callisto',
	'Dione',
	'Ganymede',
	'Hangouts Call',
	'Luna',
	'Oberon',
	'Phobos',
	'Pyxis',
	'Sedna',
	'Titania',
	'Triton',
	'Umbriel',
];

const ITEM_HEIGHT = 48;



const StyledMenu = withStyles({
	paper: {
		border: '1px solid #d3d4d5',
	},
})((props) => (
		<Menu
				elevation={0}
				getContentAnchorEl={null}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center',
				}}
				{...props}
		/>
));

const StyledMenuItem = withStyles((theme) => ({
	root: {
		'&:focus': {
			backgroundColor: theme.palette.primary.main,
			'& .MuiListItemIcon-root, & .MuiListItemText-primary': {
				color: theme.palette.common.white,
			},
		},
	},
}))(MenuItem);

const initialState = {
	mouseX: null,
	mouseY: null,
};


const Navi = observer(() => {
	const {toolbarHandler} =  useStores();
	const classes = useStyles();
	const theme = useTheme();

	useEffect(() => {
		toolbarHandler.changeToolbar({title: "Navigation/Menüs", showMenu: true});
	})
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [anchorEl2, setAnchorEl2] = React.useState(null);

	const handleClick2 = (event) => {
		setAnchorEl2(event.currentTarget);
	};

	const handleClose2 = () => {
		setAnchorEl2(null);
	};

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	const [anchorEl3, setAnchorEl3] = React.useState(null);

	const handleClick3 = (event) => {
		setAnchorEl3(event.currentTarget);
	};

	const handleClose3 = () => {
		setAnchorEl3(null);
	};
	const [state, setState] = React.useState(initialState);

	const handleClick4 = (event) => {
		event.preventDefault();
		setState({
			mouseX: event.clientX - 2,
			mouseY: event.clientY - 4,
		});
	};

	const handleClose4 = () => {
		setState(initialState);
	};




	const [activeStep, setActiveStep] = React.useState(0);
	const [completed, setCompleted] = React.useState(new Set());
	const [skipped, setSkipped] = React.useState(new Set());
	const steps = getSteps();

	const totalSteps = () => {
		return getSteps().length;
	};

	const isStepOptional = (step) => {
		return step === 1;
	};

	const handleSkip = () => {
		if (!isStepOptional(activeStep)) {
			// You probably want to guard against something like this
			// it should never occur unless someone's actively trying to break something.
			throw new Error("You can't skip a step that isn't optional.");
		}

		setActiveStep((prevActiveStep) => prevActiveStep + 1);
		setSkipped((prevSkipped) => {
			const newSkipped = new Set(prevSkipped.values());
			newSkipped.add(activeStep);
			return newSkipped;
		});
	};

	const skippedSteps = () => {
		return skipped.size;
	};

	const completedSteps = () => {
		return completed.size;
	};

	const allStepsCompleted = () => {
		return completedSteps() === totalSteps() - skippedSteps();
	};

	const isLastStep = () => {
		return activeStep === totalSteps() - 1;
	};

	const handleNext = () => {
		const newActiveStep =
				isLastStep() && !allStepsCompleted()
						? // It's the last step, but not all steps have been completed
						  // find the first step that has been completed
						steps.findIndex((step, i) => !completed.has(i))
						: activeStep + 1;

		setActiveStep(newActiveStep);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleStep = (step) => () => {
		setActiveStep(step);
	};

	const handleComplete = () => {
		const newCompleted = new Set(completed);
		newCompleted.add(activeStep);
		setCompleted(newCompleted);

		/**
		 * Sigh... it would be much nicer to replace the following if conditional with
		 * `if (!this.allStepsComplete())` however state is not set when we do this,
		 * thus we have to resort to not being very DRY.
		 */
		if (completed.size !== totalSteps() - skippedSteps()) {
			handleNext();
		}
	};

	const handleReset = () => {
		setActiveStep(0);
		setCompleted(new Set());
		setSkipped(new Set());
	};

	const isStepSkipped = (step) => {
		return skipped.has(step);
	};

	function isStepComplete(step) {
		return completed.has(step);
	}

	return (

			<React.Fragment>
				<Grid container direction="row">
					<Grid item xs={12} sm={12} md={4} lg={4}>
						<Box m={3}>
							<Card>
								<CardHeader
										title="Breadcrumps"
								/>
								<CardContent>

									<Box m={3} className={classes.root}>
										<Typography variant={"h5"} component="h3">eigener Seperator</Typography>
										<Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
											<Link color="inherit" href="#">
												Home
											</Link>
											<Link color="inherit" href="#">
												App
											</Link>
											<Typography color="textPrimary">Unterpunkt</Typography>
										</Breadcrumbs>
									</Box>
									<Box m={3} className={classes.root}>
										<Typography variant={"h5"} component="h3">mit Icons</Typography>
										<Breadcrumbs aria-label="breadcrumb">
											<Link color="inherit" href="#" className={classes.link}>
												<Home className={classes.icon} />
												Material-UI
											</Link>
											<Link
													color="inherit"
													href="#"
													className={classes.link}
											>
												<Whatshot className={classes.icon} />
												Core
											</Link>
											<Typography color="textPrimary" className={classes.link}>
												<Grain className={classes.icon} />
												Breadcrumb
											</Typography>
										</Breadcrumbs>
									</Box>

									<Box m={3} className={classes.root}>
										<Typography variant={"h5"} component="h3">Collapsed</Typography>
										<Breadcrumbs maxItems={2} aria-label="breadcrumb">
											<Link color="inherit" href="#" onClick={handleClick}>
												Home
											</Link>
											<Link color="inherit" href="#" onClick={handleClick}>
												Catalog
											</Link>
											<Link color="inherit" href="#" onClick={handleClick}>
												Accessories
											</Link>
											<Link color="inherit" href="#" onClick={handleClick}>
												New Collection
											</Link>
											<Typography color="textPrimary">Belts</Typography>
										</Breadcrumbs>
									</Box>

									<Box m={3} className={classes.root}>
										<Typography variant={"h5"} component="h3">Customized</Typography>
										<Breadcrumbs aria-label="breadcrumb">
											<StyledBreadcrumb
													component="a"
													href="#"
													label="Home"
													icon={<Home fontSize="small" />}
													onClick={handleClick}
											/>
											<StyledBreadcrumb component="a" href="#" label="Catalog" onClick={handleClick} />
											<StyledBreadcrumb
													label="Accessories"
													deleteIcon={<ExpandMore />}
													onClick={handleClick}
													onDelete={handleClick}
											/>
										</Breadcrumbs>
									</Box>

								</CardContent>

							</Card>
						</Box>
					</Grid>
					<Grid item xs={12} sm={12} md={4} lg={4}>
						<Box m={3}>
							<Card>
								<CardHeader
										title="Menüs"
								/>
								<CardContent>

									<Box m={3} >

										<Button aria-controls="simple-menu"
												  aria-haspopup="true"
												  onClick={handleClick2}
												  variant="contained"
												  color="primary">
											Open Menu
										</Button>
										<Menu
												id="simple-menu"
												anchorEl={anchorEl2}
												keepMounted
												open={Boolean(anchorEl2)}
										>
											<MenuItem onClick={handleClose2}>Profile</MenuItem>
											<MenuItem onClick={handleClose2}>My account</MenuItem>
											<MenuItem onClick={handleClose2}>Logout</MenuItem>
										</Menu>
									</Box>
									<Box m={3} >
										<Button
												aria-controls="long-menu"
												aria-haspopup="true"
												variant="contained"
												color="primary"
												onClick={handleClick}
										>
											Menü mit Fester Höhe
										</Button>
										<Menu
												id="long-menu"
												anchorEl={anchorEl}
												keepMounted
												open={Boolean(anchorEl)}
												onClose={handleClose}
												PaperProps={{
													style: {
														maxHeight: ITEM_HEIGHT * 4.5,
														width: '20ch',
													},
												}}
										>
											{options.map((option) => (
													<MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
														{option}
													</MenuItem>
											))}
										</Menu>
									</Box>
									<Box m={3} >
										<Button
												aria-controls="customized-menu"
												aria-haspopup="true"
												variant="contained"
												color="primary"
												onClick={handleClick3}
										>
											Customized Menü
										</Button>
										<StyledMenu
												id="customized-menu"
												anchorEl={anchorEl3}
												keepMounted
												open={Boolean(anchorEl3)}
												onClose={handleClose3}
										>
											<StyledMenuItem>
												<ListItemIcon>
													<SendIcon fontSize="small" />
												</ListItemIcon>
												<ListItemText primary="Sent mail" />
											</StyledMenuItem>
											<StyledMenuItem>
												<ListItemIcon>
													<DraftsIcon fontSize="small" />
												</ListItemIcon>
												<ListItemText primary="Drafts" />
											</StyledMenuItem>
											<StyledMenuItem>
												<ListItemIcon>
													<InboxIcon fontSize="small" />
												</ListItemIcon>
												<ListItemText primary="Inbox" />
											</StyledMenuItem>
										</StyledMenu>
									</Box>

									<Box m={3} onContextMenu={handleClick4} style={{ cursor: 'context-menu' }}>

										<Typography variant={"h5"} component="h3">Kontextmenü (bitte mit rechter Maustaste klicken)</Typography>
										<Typography>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ipsum purus, bibendum sit
											amet vulputate eget, porta semper ligula. Donec bibendum vulputate erat, ac fringilla mi
											finibus nec. Donec ac dolor sed dolor porttitor blandit vel vel purus. Fusce vel malesuada
											ligula. Nam quis vehicula ante, eu finibus est. Proin ullamcorper fermentum orci, quis
											finibus massa. Nunc lobortis, massa ut rutrum ultrices, metus metus finibus ex, sit amet
											facilisis neque enim sed neque. Quisque accumsan metus vel maximus consequat. Suspendisse
											lacinia tellus a libero volutpat maximus.
										</Typography>
										<Menu
												keepMounted
												open={state.mouseY !== null}
												onClose={handleClose4}
												anchorReference="anchorPosition"
												anchorPosition={
													state.mouseY !== null && state.mouseX !== null
															? { top: state.mouseY, left: state.mouseX }
															: undefined
												}
										>
											<MenuItem onClick={handleClose4}>Copy</MenuItem>
											<MenuItem onClick={handleClose4}>Print</MenuItem>
											<MenuItem onClick={handleClose4}>Highlight</MenuItem>
											<MenuItem onClick={handleClose4}>Email</MenuItem>
										</Menu>
									</Box>

								</CardContent>

							</Card>
						</Box>
					</Grid>
					<Grid item xs={12} sm={12} md={4} lg={4}>
						<Box m={3}>
							<Card>
								<CardHeader
										title="Stepper"
								/>
								<CardContent>

									<Box m={3} >
										<Typography variant={"h5"} component="h3">Horizontal (nicht linear)</Typography>
										<Stepper alternativeLabel nonLinear activeStep={activeStep}>
											{steps.map((label, index) => {
												const stepProps = {};
												const buttonProps = {};
												if (isStepOptional(index)) {
													buttonProps.optional = <Typography variant="caption">Optional</Typography>;
												}
												if (isStepSkipped(index)) {
													stepProps.completed = false;
												}
												return (
														<Step key={label} {...stepProps}>
															<StepButton
																	onClick={handleStep(index)}
																	completed={isStepComplete(index)}
																	{...buttonProps}
															>
																{label}
															</StepButton>
														</Step>
												);
											})}
										</Stepper>
										<Box m={3}>
											{allStepsCompleted() ? (
													<div>
														<Typography className={classes.instructions}>
															All steps completed - you&apos;re finished
														</Typography>
														<Button onClick={handleReset}>Reset</Button>
													</div>
											) : (
													<div>
														<div>
															<Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
																Back
															</Button>
															<Button
																	variant="contained"
																	color="primary"
																	onClick={handleNext}
																	className={classes.button}
															>
																Next
															</Button>
															{isStepOptional(activeStep) && !completed.has(activeStep) && (
																	<Button
																			variant="contained"
																			color="primary"
																			onClick={handleSkip}
																			className={classes.button}
																	>
																		Skip
																	</Button>
															)}

															{activeStep !== steps.length &&
															 (completed.has(activeStep) ? (
																	 <Typography variant="caption" className={classes.completed}>
																		 Step {activeStep + 1} already completed
																	 </Typography>
															 ) : (
																	 <Button variant="contained" color="primary" onClick={handleComplete}>
																		 {completedSteps() === totalSteps() - 1 ? 'Finish' : 'Complete Step'}
																	 </Button>
															 ))}
														</div>
													</div>
											)}
										</Box>

									</Box>
									<Box m={3} >
										<Typography variant={"h5"} component="h3">Vertikal (linear)</Typography>
										<Stepper activeStep={activeStep} orientation="vertical">
											{steps.map((label, index) => (
													<Step key={label}>
														<StepLabel>{label}</StepLabel>
														<StepContent>
															<Typography>{getStepContent(index)}</Typography>
															<div className={classes.actionsContainer}>
																<div>
																	<Button
																			disabled={activeStep === 0}
																			onClick={handleBack}
																			className={classes.button}
																	>
																		Back
																	</Button>
																	<Button
																			variant="contained"
																			color="primary"
																			onClick={handleNext}
																			className={classes.button}
																	>
																		{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
																	</Button>
																</div>
															</div>
														</StepContent>
													</Step>
											))}
										</Stepper>
										{activeStep === steps.length && (
												<Paper square elevation={0} className={classes.resetContainer}>
													<Typography>All steps completed - you&apos;re finished</Typography>
													<Button onClick={handleReset} className={classes.button}>
														Reset
													</Button>
												</Paper>
										)}
									</Box>
									<Box m={3} >
										<Typography variant={"h5"} component="h3">Mobil - Dot (linear)</Typography>
										<MobileStepper
												variant="dots"
												steps={3}
												position="static"
												activeStep={activeStep}
												className={classes.root}
												nextButton={
													<Button size="small" onClick={handleNext} disabled={activeStep === 2}>
														Next
														{theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
													</Button>
												}
												backButton={
													<Button size="small" onClick={handleBack} disabled={activeStep === 0}>
														{theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
														Back
													</Button>
												}
										/>
									</Box>
									<Box m={3} >
										<Typography variant={"h5"} component="h3">Mobil - Progress (linear)</Typography>
										<MobileStepper
												variant="progress"
												steps={3}
												position="static"
												activeStep={activeStep}
												className={classes.root}
												nextButton={
													<Button size="small" onClick={handleNext} disabled={activeStep === 2}>
														Next
														{theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
													</Button>
												}
												backButton={
													<Button size="small" onClick={handleBack} disabled={activeStep === 0}>
														{theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
														Back
													</Button>
												}
										/>
									</Box>

								</CardContent>

							</Card>
						</Box>
					</Grid>

				</Grid>
			</React.Fragment>
	);
})

export default Navi;
