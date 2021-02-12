import React, {useEffect} from 'react';
import { ThemeProvider, useTheme, makeStyles } from '@material-ui/core/styles';
import {
	MenuItem,
	Typography, fade, Box,
} from "@material-ui/core";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AppBar from "@material-ui/core/AppBar";
import {
	ArrowBack,
	Brightness4,
	Brightness7, CheckBox, Dashboard, Launch,
	Layers, ListAlt,
	Lock,
	More,
	Notifications, PictureInPictureAlt, QuestionAnswer,
	Search,
	Settings, Tab, TableChart, TextFields, TextFormat, ViewList
} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MailIcon from "@material-ui/icons/Mail";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import InboxIcon from "@material-ui/icons/Inbox";
import Badge from "@material-ui/core/Badge";
import Toolbar from "@material-ui/core/Toolbar";
import Menu from "@material-ui/core/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import logo from './img/logoBar.png';
import logoLight from './img/logoBarLight.png';
import Tooltip from "@material-ui/core/Tooltip";
import {useStores} from "./hooks/useStores";
import {useHistory} from "react-router";
import {observer} from "mobx-react";
import InputBase from "@material-ui/core/InputBase";
import Switch from "@material-ui/core/Switch";


const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({



	grow: {
		flexGrow: 1,
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),

		color: theme.palette.primary.contrastText + ' !important',
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: theme.spacing(3),
	},
	title: {
		marginLeft: theme.spacing(2),
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.black, 0.12),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.black, 0.25),
		},
		marginRight: theme.spacing(1),
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(3),
			width: 'auto',
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'left',
		justifyContent: 'center',
		cursor: 'pointer',
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
		color: theme.palette.common.white,
	},
	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		},
	},
	sectionMobile: {
		display: 'flex',
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},

	sectionFilterDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		},
	},
	sectionFilterMobile: {
		display: 'flex',
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},

	hide: {
		display: 'none',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: 'nowrap',
		backgroundColor: theme.palette.primary.dark + ' !important',
		color: theme.palette.primary.contrastText + ' !important',
	},
	drawerOpen: {
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerClose: {
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		overflowX: 'hidden',
		width: theme.spacing(0),
		[theme.breakpoints.up('md')]: {
			width: 0,
		},
	},
	toolbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: theme.spacing(3, 1),
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},

	appToolbar: {
		minHeight: 64,
	},

	logoBar: {
		width: '100%',
		height: 80,
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'block',
		},
		borderBottomWidth: 1,
		borderBottomStyle: 'solid',
		borderBottomColor: theme.palette.primary.dark,
	},
	logoBarImg: {
		marginLeft: theme.spacing(2),
	},
	logoBarInDrawer: {
		width: '100%',
		height: 0,
		[theme.breakpoints.up('md')]: {
			height: 80,
		},
		borderBottomWidth: 1,
		borderBottomStyle: 'solid',
		borderBottomColor: 'transparent',
	},
}));

const ThemeAppBar = observer(({darktheme}) => {
	const classes = useStyles();



	const [anchorEl, setAnchorEl] = React.useState(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);


	const isMenuOpen = Boolean(anchorEl);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const handleProfileMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};

	const handleMobileMenuOpen = (event) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	const {toolbarHandler, themeStore} = useStores();

	const menuId = 'primary-search-account-menu';
	const renderMenu = (
			<Menu
					anchorEl={anchorEl}
					anchorOrigin={{vertical: 'top', horizontal: 'right'}}
					id={menuId}
					keepMounted
					transformOrigin={{vertical: 'top', horizontal: 'right'}}
					open={isMenuOpen}
					onClose={handleMenuClose}
			>
				<MenuItem onClick={(e) => themeStore.handleThemeChange(e,'Barmenia')}>Barmenia</MenuItem>
				<MenuItem onClick={(e) => themeStore.handleThemeChange(e,'DPC')}>DPC</MenuItem>
				<MenuItem onClick={(e) => themeStore.handleThemeChange(e,'IMPACT')}>IMPACT</MenuItem>
				<MenuItem onClick={(e) => themeStore.handleThemeChange(e,'ForumFinanz')}>ForumFinanz</MenuItem>
				<MenuItem onClick={(e) => themeStore.handleThemeChange(e,'PKM')}>PKM</MenuItem>
				<MenuItem onClick={(e) => themeStore.handleThemeChange(e,'FBD')}>FBD</MenuItem>
			</Menu>
	);

	const mobileMenuId = 'primary-search-account-menu-mobile';
	const renderMobileMenu = (
			<Menu
					anchorEl={mobileMoreAnchorEl}
					anchorOrigin={{vertical: 'top', horizontal: 'right'}}
					id={mobileMenuId}
					keepMounted
					transformOrigin={{vertical: 'top', horizontal: 'right'}}
					open={isMobileMenuOpen}
					onClose={handleMobileMenuClose}
			>

				<MenuItem onClick={handleProfileMenuOpen}>
					<IconButton
							aria-label="account of current user"
							aria-controls="primary-search-account-menu"
							aria-haspopup="true"
							color="inherit"
					>
						<Settings/>
					</IconButton>
					<p>Einstellungen</p>
				</MenuItem>
			</Menu>
	);

	const [open, setOpen] = React.useState(false);
	const [openOnClick, setOpenOnClick] = React.useState(null);
	const themes = useTheme();
	const matchesBreakpoint = useMediaQuery(themes.breakpoints.down('sm'));

	useEffect(() => {
		if(matchesBreakpoint == true){
			if (openOnClick == null) {
				setOpen(false);
			}
			else if (openOnClick == false) {
				setOpen(false);
			}
			else if (openOnClick == true) {
				setOpen(true);
			}
		}
		if(matchesBreakpoint == false){
			if (openOnClick == null) {
				setOpen(true);
			}
			else if (openOnClick == false) {
				setOpen(false);
			}
			else if (openOnClick == true) {
				setOpen(true);
			}
		}
	})

	const handleDrawerOpen = () => {
		setOpenOnClick(true);
	};

	const handleDrawerClose = () => {
		setOpenOnClick(false);
	};


	const theme = useTheme





	const history = useHistory();
	return (
			<React.Fragment>
				<AppBar
						position="fixed"
						className={clsx(classes.appBar, {
							[classes.appBarShift]: open,
						})}>
					<div className={classes.logoBar}><img src={themeStore.darkState ? logo : logoLight} alt={'Logo'} className={classes.logoBarImg}/></div>
					<Toolbar className={classes.appToolbar}>
						{toolbarHandler.showMenu &&
						 <IconButton
								 edge="start"
								 color="inherit"
								 aria-label="open drawer"
								 onClick={handleDrawerOpen}
								 className={clsx(classes.menuButton, {
									 [classes.hide]: open,
								 })}
						 >
							 <MenuIcon />
						 </IconButton>
						}
						{!toolbarHandler.showMenu &&
						 <IconButton
								 edge="start"
								 color="inherit"
								 onClick={() => history.push("/")}
								 className={clsx(classes.menuButton, {
									 [classes.hide]: open,
								 })}
						 >
							 <ArrowBack />
						 </IconButton>
						 }
						<Typography className={classes.title} variant="h6"  noWrap>
							{toolbarHandler.title}
						</Typography>
						<div className={classes.search}>
							<div className={classes.searchIcon}>
								<Search />
							</div>
							<InputBase
									placeholder="Suche…"
									classes={{
										input: classes.inputInput,
									}}
									inputProps={{'aria-label': 'search'}}
							/>
						</div>
						<div className={classes.grow}/>
						<div className={classes.sectionDesktop}>
							<Tooltip title={'Themewechsel'}>
									<IconButton
											edge="end"
											aria-label="account of current user"
											aria-controls={menuId}
											aria-haspopup="true"
											onClick={handleProfileMenuOpen}
											color="inherit"
									>
								<Settings />
							</IconButton>
							</Tooltip>
							<Tooltip title={'logout'}>
							<IconButton color="inherit">
								<Lock />
							</IconButton>
							</Tooltip>
						</div>
						<div className={classes.sectionMobile}>
							<IconButton
									aria-label="show more"
									aria-controls={mobileMenuId}
									aria-haspopup="true"
									onClick={handleMobileMenuOpen}
									color="inherit"
							>
								<More />
							</IconButton>
						</div>
					</Toolbar>
				</AppBar>
				<Drawer
						variant="permanent"
						className={clsx(classes.drawer, {
							[classes.drawerOpen]: open,
							[classes.drawerClose]: !open,
						})}
						classes={{
							paper: clsx(classes.drawer,{
								[classes.drawerOpen]: open,
								[classes.drawerClose]: !open,
							}),
						}}
				>
					<div className={classes.logoBarInDrawer} />
					<div className={classes.toolbar}>
						<IconButton onClick={handleDrawerClose} color="inherit">
							{theme.direction === 'rtl' ? <ChevronRightIcon  /> : <ChevronLeftIcon  />}
						</IconButton>
					</div>
					<Divider />

					<Box m={3}><Typography variant={"h5"}>Componenten</Typography></Box>

					<List>
						<ListItem button onClick={() => history.push("/Accordion/")}>
							<ListItemIcon ><ViewList /></ListItemIcon>
							<ListItemText primary={'Accordion'}  />
						</ListItem>
						<ListItem button onClick={() => history.push("/Buttons/")}>
							<ListItemIcon ><PictureInPictureAlt /></ListItemIcon>
							<ListItemText primary={'Buttons/Icons'}  />
						</ListItem>
						<ListItem button onClick={() => history.push("/Cards/")}>
							<ListItemIcon ><Dashboard /></ListItemIcon>
							<ListItemText primary={'Cards/Papers'}  />
						</ListItem>
						<ListItem button onClick={() => history.push("/Forms/")}>
							<ListItemIcon ><CheckBox /></ListItemIcon>
							<ListItemText primary={'Formularelemente'}  />
						</ListItem>
						<ListItem button onClick={() => history.push("/Dialogs/")}>
							<ListItemIcon ><Launch /></ListItemIcon>
							<ListItemText primary={'Dialoge'}  />
						</ListItem>
						<ListItem button onClick={() => history.push("/List/")}>
							<ListItemIcon ><ListAlt /></ListItemIcon>
							<ListItemText primary={'Listen'}  />
						</ListItem>
						<ListItem button onClick={() => history.push("/Navi/")}>
							<ListItemIcon ><MenuIcon /></ListItemIcon>
							<ListItemText primary={'Navigation/Menüs'}  />
						</ListItem>
						<ListItem button onClick={() => history.push("/Tabs/")}>
							<ListItemIcon ><Tab /></ListItemIcon>
							<ListItemText primary={'Tabs'}  />
						</ListItem>
						<ListItem button onClick={() => history.push("/Tables/")}>
							<ListItemIcon ><TableChart /></ListItemIcon>
							<ListItemText primary={'Tabellen'}  />
						</ListItem>
						<ListItem button onClick={() => history.push("/Typo/")}>
							<ListItemIcon ><TextFields /></ListItemIcon>
							<ListItemText primary={'Typografie'}  />
						</ListItem>

					</List>
					<Divider />
					<Box m={3}><Typography variant={"h5"}>Beispielseiten</Typography></Box>
					<List>
						<ListItem button onClick={() => history.push("/")}>
							<ListItemIcon ><QuestionAnswer /></ListItemIcon>
							<ListItemText primary={'- Später -'}  />
						</ListItem>
					</List>
				</Drawer>

				{renderMobileMenu}
				{renderMenu}
			</React.Fragment>


	);

})

export default ThemeAppBar;
