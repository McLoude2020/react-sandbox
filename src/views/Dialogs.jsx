import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import {blue} from '@material-ui/core/colors';
import {observer} from "mobx-react";
import Grid from "@material-ui/core/Grid";
import {Box, DialogActions, DialogContent, DialogContentText, TextField, useTheme} from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import useMediaQuery from "@material-ui/core/useMediaQuery";


const emails = ['username@gmail.com', 'user02@gmail.com'];
const useStyles = makeStyles((theme) => ({
	avatar: {
		backgroundColor: blue[100],
		color: blue[600],
	},
	appBar: {
		position: 'relative',
	},
	title: {
		marginLeft: theme.spacing(2),
		flex: 1,
	},
}));

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const TransitionSlide = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

function SimpleDialog(props) {
	const classes = useStyles();
	const {onClose, selectedValue, open} = props;

	const handleClose = () => {
		onClose(selectedValue);
	};

	const handleListItemClick = (value) => {
		onClose(value);
	};

	return (
			<Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
				<DialogTitle id="simple-dialog-title">Überschrift</DialogTitle>
				<List>
					{emails.map((email) => (
							<ListItem button onClick={() => handleListItemClick(email)} key={email}>
								<ListItemAvatar>
									<Avatar className={classes.avatar}>
										<PersonIcon/>
									</Avatar>
								</ListItemAvatar>
								<ListItemText primary={email}/>
							</ListItem>
					))}

					<ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>
						<ListItemAvatar>
							<Avatar>
								<AddIcon/>
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary="Add account"/>
					</ListItem>
				</List>
			</Dialog>
	);
}

SimpleDialog.propTypes = {
	onClose: PropTypes.func.isRequired,
	open: PropTypes.bool.isRequired,
	selectedValue: PropTypes.string.isRequired,
};

const Dialogs = observer(() => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const [selectedValue, setSelectedValue] = React.useState(emails[1]);
	const [openFull, setOpenFull] = React.useState(false);

	const [openResponsive, setOpenResponsive] = React.useState(false);
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
	const [openScroll, setOpenScroll] = React.useState(false);
	const [scroll, setScroll] = React.useState('paper');
	const [openSlide, setOpenSlide] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = (value) => {
		setOpen(false);
		setSelectedValue(value);
	};

	const handleClickOpenFull = () => {
		setOpenFull(true);
	};

	const handleCloseFull = () => {
		setOpenFull(false);
	};

	const [openForm, setOpenForm] = React.useState(false);

	const handleClickOpenForm = () => {
		setOpenForm(true);
	};

	const handleCloseForm = () => {
		setOpenForm(false);
	};

	const handleClickOpenScroll = (scrollType) => () => {
		setOpenScroll(true);
		setScroll(scrollType);
	};

	const handleCloseScroll = () => {
		setOpenScroll(false);
	};

	const descriptionElementRef = React.useRef(null);
	React.useEffect(() => {
		if (openScroll) {
			const {current: descriptionElement} = descriptionElementRef;
			if (descriptionElement !== null) {
				descriptionElement.focus();
			}
		}
	}, [openScroll]);

	const handleClickOpenResponsive = () => {
		setOpenResponsive(true);
	};

	const handleCloseResponsive = () => {
		setOpenResponsive(false);
	};


	const handleClickOpenSlide = () => {
		setOpenSlide(true);
	};

	const handleCloseSlide = () => {
		setOpenSlide(false);
	};
	return (

			<React.Fragment>


				<Grid container direction="row">
					<Grid item xs={12}>
						<Box m={3}> <Typography variant={"h4"} component="h2">Dialog - (kleine Auswahl)</Typography></Box>
					</Grid>
					<Grid item xs={6} sm={4} md={4} lg={2}>
						<Box m={3}>
							<Button variant="outlined" color="primary" onClick={handleClickOpen}>
								Simpler Dialog
							</Button>
							<SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose}/>
						</Box>
					</Grid>
					<Grid item xs={6} sm={4} md={4} lg={2}>
						<Box m={3}>
							<Button variant="outlined" color="primary" onClick={handleClickOpenFull}>
								Fullscreen-Dialog
							</Button>
							<Dialog fullScreen open={openFull} onClose={handleCloseFull} TransitionComponent={Transition}>
								<AppBar className={classes.appBar}>
									<Toolbar>
										<IconButton edge="start" color="inherit" onClick={handleCloseFull} aria-label="close">
											<CloseIcon/>
										</IconButton>
										<Typography variant="h6" className={classes.title}>
											Überschrift
										</Typography>
									</Toolbar>
								</AppBar>
								<List>
									<ListItem button onClick={handleCloseFull}>
										<ListItemText primary="Listenitem Eins" secondary="schließen"/>
									</ListItem>
									<Divider/>
									<ListItem button onClick={handleCloseFull}>
										<ListItemText primary="Listenitem Zwei" secondary="schließen"/>
									</ListItem>
								</List>
							</Dialog>
						</Box>
					</Grid>
					<Grid item xs={6} sm={4} md={4} lg={2}>
						<Box m={3}>
							<Button variant="outlined" color="primary" onClick={handleClickOpenForm}>
								Formular-Dialog
							</Button>
							<Dialog open={openForm} onClose={handleCloseForm} aria-labelledby="form-dialog-title"
									  maxWidth={'xs'}>
								<DialogTitle id="form-dialog-title">Überschrift</DialogTitle>
								<DialogContent>
									<Box m={3}>
									<DialogContentText>
											<Typography gutterBottom variant="body2" color={'textPrimary'}> Kurzer Erklärungstext
												zum Dialog. Dialogweite ist 'xs' und kann in maxWidth angepasst werden.</Typography>

									</DialogContentText>
									</Box>

									<Box m={3}>
									<TextField
											autoFocus
											id="name"
											label="E-Mail-Adresse"
											type="email"
											fullWidth
									/></Box>
								</DialogContent>
								<DialogActions>
									<Button onClick={handleCloseForm}>
										Abbrechen
									</Button>
									<Button onClick={handleCloseForm} color="primary">
										Speichern
									</Button>
								</DialogActions>
							</Dialog>
						</Box>
					</Grid>
					<Grid item xs={6} sm={4} md={4} lg={2}>
						<Box m={3}>
							<Button variant="outlined" color="primary" onClick={handleClickOpenScroll('paper')}>Scrollbar
								(Paper)</Button>
							<Dialog
									open={openScroll}
									onClose={handleCloseScroll}
									scroll={scroll}
									aria-labelledby="scroll-dialog-title"
									aria-describedby="scroll-dialog-description"
							>
								<DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
								<DialogContent dividers={scroll === 'paper'}>

									<Box m={3}>
									<DialogContentText
											id="scroll-dialog-description"
											ref={descriptionElementRef}
											tabIndex={-1}
									>
										{[...new Array(50)]
												.map(
														() => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
												)
												.join('\n')}
									</DialogContentText></Box>
								</DialogContent>
								<DialogActions>
									<Button onClick={handleCloseScroll}>
										Abbrechen
									</Button>
									<Button onClick={handleCloseScroll} color="primary">
										Speichern
									</Button>
								</DialogActions>
							</Dialog>
						</Box>
					</Grid>
					<Grid item xs={6} sm={4} md={4} lg={2}>
						<Box m={3}>
							<Button variant="outlined" color="primary" onClick={handleClickOpenResponsive}>
								Responsive Dialog
							</Button>
							<Dialog
									fullScreen={fullScreen}
									open={openResponsive}
									onClose={handleCloseResponsive}
									aria-labelledby="responsive-dialog-title"
							>
								<DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle>
								<DialogContent>
									<Box m={3}>
									<DialogContentText>
										Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans
										Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans
										Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans
										Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans
										Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans
									</DialogContentText>
									</Box>
								</DialogContent>
								<DialogActions>
									<Button autoFocus onClick={handleCloseResponsive}>
										Abbrechen
									</Button>
									<Button onClick={handleCloseResponsive} color="primary" autoFocus>
										Speichern
									</Button>
								</DialogActions>
							</Dialog>
						</Box>
					</Grid>
					<Grid item xs={6} sm={4} md={4} lg={2}>
						<Box m={3}>
							<Button variant="outlined" color="primary" onClick={handleClickOpenSlide}>
								Slide-Dialog
							</Button>
							<Dialog
									open={openSlide}
									TransitionComponent={Transition}
									keepMounted
									onClose={handleCloseSlide}
									aria-labelledby="alert-dialog-slide-title"
									aria-describedby="alert-dialog-slide-description"
							>
								<DialogTitle id="alert-dialog-slide-title">{"Slide-Dialog"}</DialogTitle>
								<DialogContent>
									<Box m={3}>
										<DialogContentText>
											Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans
											Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans
										</DialogContentText>
									</Box>
								</DialogContent>
								<DialogActions>
									<Button onClick={handleCloseSlide}>
										Abbrechen
									</Button>
									<Button onClick={handleCloseSlide} color="primary">
										Speichern
									</Button>
								</DialogActions>
							</Dialog>
						</Box>
					</Grid>
				</Grid>
			</React.Fragment>
	);
})

export default Dialogs;
