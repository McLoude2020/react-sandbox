import React, {useEffect} from 'react';
import {observer} from "mobx-react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import blue from "@material-ui/core/colors/blue";
import green from "@material-ui/core/colors/green";
import cyan from "@material-ui/core/colors/cyan";
import deepOrange from "@material-ui/core/colors/deepOrange";
import deepPurple from "@material-ui/core/colors/deepPurple";
import {useHistory} from "react-router";
import {useStores} from "../hooks/useStores";
import Grid from "@material-ui/core/Grid";
import {
	Box,
	Card,
	CardActions,
	Collapse,
	ListItemIcon,
	ListItemSecondaryAction,
	ListSubheader,
	Paper
} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import SendIcon from "@material-ui/icons/Send";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import {ExpandLess, ExpandMore, StarBorder} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";


const useStyles = makeStyles((theme) => ({
	rootItemlist: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
	},
	rootList: {
		width: '100%',
	},
	rootNested: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
	},
	nested: {
		paddingLeft: theme.spacing(4),
	},
	inline: {
		display: 'inline',
	},

	orange: {
		color: theme.palette.getContrastText(deepOrange[500]),
		backgroundColor: deepOrange[500],
	},
	blue: {
		color: theme.palette.getContrastText(blue[500]),
		backgroundColor: blue[500],
	},
	green: {
		color: theme.palette.getContrastText(green[500]),
		backgroundColor: green[500],
	},
	cyan: {
		color: theme.palette.getContrastText(cyan[500]),
		backgroundColor: cyan[500],
	},
	purple: {
		color: theme.palette.getContrastText(deepPurple[500]),
		backgroundColor: deepPurple[500],
	},
}));


function generate(element) {
	return [0, 1, 2].map((value) =>
			React.cloneElement(element, {
				key: value,
			}),
	);
}
const ListViewExample1 = observer(() => {
	const classes = useStyles();
	const history = useHistory();
	const {toolbarHandler} =  useStores();
	const [selectedIndex, setSelectedIndex] = React.useState(1);
	const [open, setOpen] = React.useState(true);

	const handleListItemClick = (event, index) => {
		setSelectedIndex(index);
	};

	useEffect(() => {
		toolbarHandler.changeToolbar({title: "Start", showMenu: true});
	})

	const handleClick = () => {
		setOpen(!open);
	};

	return (

			<React.Fragment>
				<Grid container direction="row">
					<Grid item xs={12} sm={6} md={6} lg={4}>
						<Box m={3}>
							<Card>
								<CardHeader
										title="Liste mit Avataren in einer Card"
								/>
								<CardContent>
									<List className={classes.rootList}>
										<ListItem alignItems="flex-start" button onClick={() => history.push("/TabPage1/")}>
											<ListItemAvatar>
												<Avatar alt="Lisa Marschall" src="https://material-ui.com/static/images/avatar/3.jpg"/>
											</ListItemAvatar>
											<ListItemText
													primary="Kundennummer: 123463"
													secondary={
														<React.Fragment>
															<Typography
																	component="span"
																	variant="body2"
																	className={classes.inline}
															>
																Lisa Marschall<br />
															</Typography>
															{"Testallee 30, 03044 Cottbus"}
														</React.Fragment>
													}
											/>
										</ListItem>
										<Divider variant="inset" component="li" />
										<ListItem alignItems="flex-start" button onClick={() => history.push("/TabPage1/")}>
											<ListItemAvatar>
												<Avatar alt="Hannes Neubauer"/>
											</ListItemAvatar>
											<ListItemText
													primary="Kundennummer: 123464"
													secondary={
														<React.Fragment>
															<Typography
																	component="span"
																	variant="body2"
																	className={classes.inline}
															>
																Hannes Neubauer<br />
															</Typography>
															{"Hornauer Platz 456, 33589 Berlin"}
														</React.Fragment>
													}
											/>
										</ListItem>
										<Divider variant="inset" component="li" />
										<ListItem alignItems="flex-start" button onClick={() => history.push("/TabPage1/")}>
											<ListItemAvatar>
												<Avatar alt="Alwin Larson" src="https://material-ui.com/static/images/avatar/2.jpg"/>
											</ListItemAvatar>
											<ListItemText
													primary="Kundennummer: 123465"
													secondary={
														<React.Fragment>
															<Typography
																	component="span"
																	variant="body2"
																	className={classes.inline}
															>
																Alwin Larson<br />
															</Typography>
															{"Cottbuser Tor 4, 33589 Berlin"}
														</React.Fragment>
													}
											/>
										</ListItem>
										<Divider variant="inset" component="li" />
										<ListItem alignItems="flex-start" button onClick={() => history.push("/TabPage1/")}>
											<ListItemAvatar>
												<Avatar alt="Alwin Larson" className={classes.orange}>MS</Avatar>
											</ListItemAvatar>
											<ListItemText
													primary="Kundennummer: 123466"
													secondary={
														<React.Fragment>
															<Typography
																	component="span"
																	variant="body2"
																	className={classes.inline}
															>
																Maria Schulze<br />
															</Typography>
															{"Brandenburger Allee 2, 03315 Potsdam"}
														</React.Fragment>
													}
											/>
										</ListItem>
										<Divider variant="inset" component="li" />
										<ListItem alignItems="flex-start" button onClick={() => history.push("/TabPage1/")}>
											<ListItemAvatar>
												<Avatar alt="Otto Walkes" className={classes.blue}/>
											</ListItemAvatar>
											<ListItemText
													primary="Kundennummer: 123464"
													secondary={
														<React.Fragment>
															<Typography
																	component="span"
																	variant="body2"
																	className={classes.inline}
															>
																Otto Walkes<br />
															</Typography>
															{"Vetschauer Straße, 12456 Lübben"}
														</React.Fragment>
													}
											/>
										</ListItem>
										<Divider variant="inset" component="li" />
										<ListItem alignItems="flex-start" button onClick={() => history.push("/TabPage1/")}>
											<ListItemAvatar>
												<Avatar alt="Carrie Fischer" src="https://material-ui.com/static/images/avatar/4.jpg"/>
											</ListItemAvatar>
											<ListItemText
													primary="Kundennummer: 123465"
													secondary={
														<React.Fragment>
															<Typography
																	component="span"
																	variant="body2"
																	className={classes.inline}
															>
																Carrie Fischer<br />
															</Typography>
															{"StarWars Straße 4, 33589 Berlin"}
														</React.Fragment>
													}
											/>
										</ListItem>
									</List>
								</CardContent>
							</Card>
						</Box>

					</Grid>
					<Grid item xs={12} sm={6} md={6} lg={4}>
						<Box m={3}>
							<Card>
								<CardHeader
										title="Selected ListItem"
								/>
								<CardContent>
									<List component="nav" aria-label="main mailbox folders">
										<ListItem
												button
												selected={selectedIndex === 0}
												onClick={(event) => handleListItemClick(event, 0)}
										>
											<ListItemIcon>
												<InboxIcon />
											</ListItemIcon>
											<ListItemText primary="Inbox" />
										</ListItem>
										<ListItem
												button
												selected={selectedIndex === 1}
												onClick={(event) => handleListItemClick(event, 1)}
										>
											<ListItemIcon>
												<DraftsIcon />
											</ListItemIcon>
											<ListItemText primary="Drafts" />
										</ListItem>
									</List>
									<Divider />
									<List component="nav" aria-label="secondary mailbox folder">
										<ListItem
												button
												selected={selectedIndex === 2}
												onClick={(event) => handleListItemClick(event, 2)}
										>
											<ListItemText primary="Trash" />
										</ListItem>
										<ListItem
												button
												selected={selectedIndex === 3}
												onClick={(event) => handleListItemClick(event, 3)}
										>
											<ListItemText primary="Spam" />
										</ListItem>
									</List>
								</CardContent>
							</Card>
							<Card>
								<CardHeader
										title="Folder-List"
								/>
								<CardContent>
									<List className={classes.root}>
										<ListItem>
											<ListItemAvatar>
												<Avatar>
													<ImageIcon />
												</Avatar>
											</ListItemAvatar>
											<ListItemText primary="Photos" secondary="Jan 9, 2014" />
										</ListItem>
										<ListItem>
											<ListItemAvatar>
												<Avatar>
													<WorkIcon />
												</Avatar>
											</ListItemAvatar>
											<ListItemText primary="Work" secondary="Jan 7, 2014" />
										</ListItem>
										<ListItem>
											<ListItemAvatar>
												<Avatar>
													<BeachAccessIcon />
												</Avatar>
											</ListItemAvatar>
											<ListItemText primary="Vacation" secondary="July 20, 2014" />
										</ListItem>
									</List>
								</CardContent>
							</Card>
						</Box>

					</Grid>
					<Grid item xs={12} sm={6} md={6} lg={4}>
						<Box m={3}>
							<Card>
								<CardHeader
										title="Nested List in einer Card"
								/>
								<CardContent>
									<List
											component="nav"
											aria-labelledby="nested-list-subheader"
											subheader={
												<ListSubheader component="div" id="nested-list-subheader">
													List-Subheader
												</ListSubheader>
											}
											className={classes.rootNested}
									>
										<ListItem button>
											<ListItemIcon>
												<SendIcon />
											</ListItemIcon>
											<ListItemText primary="Sent mail" />
										</ListItem>
										<ListItem button>
											<ListItemIcon>
												<DraftsIcon />
											</ListItemIcon>
											<ListItemText primary="Drafts" />
										</ListItem>
										<ListItem button onClick={handleClick}>
											<ListItemIcon>
												<InboxIcon />
											</ListItemIcon>
											<ListItemText primary="Inbox" />
											{open ? <ExpandLess /> : <ExpandMore />}
										</ListItem>
										<Collapse in={open} timeout="auto" unmountOnExit>
											<List component="div" disablePadding>
												<ListItem button className={classes.nested}>
													<ListItemIcon>
														<StarBorder />
													</ListItemIcon>
													<ListItemText primary="Starred" />
												</ListItem>
											</List>
										</Collapse>
									</List>

								</CardContent>
							</Card>
							<Card>
								<CardHeader
										title="List mit Avatar und Button in einer Card"
								/>
								<CardContent>
									<List>
										{generate(
												<ListItem>
													<ListItemAvatar>
														<Avatar>
															<FolderIcon />
														</Avatar>
													</ListItemAvatar>
													<ListItemText
															primary="Single-line item"
													/>
													<ListItemSecondaryAction>
														<IconButton edge="end" aria-label="delete">
															<DeleteIcon />
														</IconButton>
													</ListItemSecondaryAction>
												</ListItem>,
										)}
									</List>

								</CardContent>
							</Card>
						</Box>

					</Grid>
				</Grid>

			</React.Fragment>
	);
})

export default ListViewExample1;
