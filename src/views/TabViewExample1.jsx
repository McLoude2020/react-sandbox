import React, {useEffect} from 'react';
import {observer} from "mobx-react";
import {AppBar, Divider, Typography} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import * as PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import {Container } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import {useStores} from "../hooks/useStores";
import ErrorBoundary from "./ErrorBoundary";
import Grid from "@material-ui/core/Grid";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
			<div
					role="tabpanel"
					hidden={value !== index}
					id={`scrollable-auto-tabpanel-${index}`}
					aria-labelledby={`scrollable-auto-tab-${index}`}
					{...other}
			>
				{value === index && (
						<Box p={3}>
							<Typography>{children}</Typography>
						</Box>
				)}
			</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `scrollable-auto-tab-${index}`,
		'aria-controls': `scrollable-auto-tabpanel-${index}`,
	};
}


function TabPanelVert(props) {
	const { children, value, index, ...other } = props;

	return (
			<div
					role="tabpanel"
					hidden={value !== index}
					id={`vertical-tabpanel-${index}`}
					aria-labelledby={`vertical-tab-${index}`}
					{...other}
			>
				{value === index && (
						<Box p={3}>
							<Typography>{children}</Typography>
						</Box>
				)}
			</div>
	);
}

TabPanelVert.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yPropsVert(index) {
	return {
		id: `vertical-tab-${index}`,
		'aria-controls': `vertical-tabpanel-${index}`,
	};
}


const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		height: '100%',
		width: '100%',
		boxSizing: 'border-box',
	},
	rootVert: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
		display: 'flex',
		height: 224,
	},
	paper: {
		width: '100%',
	},
	tabPanel: {
		flexGrow: 1,
		width: '100%',
		height:'calc(100% - '+ (theme.overrides.MuiTabs.root.minHeight + 1) +'px)', // Höhe - Tabs und Divider
		overflow: 'auto',
	},

	bar: {
		display: 'flex',
		alignItems: 'center',
		width: '100%',
		flexDirection:'row',
	},
	tabs: {
		borderRight: `1px solid ${theme.palette.divider}`,
	},

}));


const TabViewExample1 = observer(() => {
	const {toolbarHandler} =  useStores();
	const classes = useStyles();
	const [value, setValue] = React.useState(0);
	const [value2, setValue2] = React.useState(0);
	const [value3, setValue3] = React.useState(0);
	const [value4, setValue4] = React.useState(0);
	const [value5, setValue5] = React.useState(0);
	const [value6, setValue6] = React.useState(0);
	const [value7, setValue7] = React.useState(0);
	const [value8, setValue8] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	const handleChange2 = (event, newValue) => {
		setValue2(newValue);
	};
	const handleChange3 = (event, newValue) => {
		setValue3(newValue);
	};
	const handleChange4 = (event, newValue) => {
		setValue4(newValue);
	};
	const handleChange5 = (event, newValue) => {
		setValue5(newValue);
	};
	const handleChange6 = (event, newValue) => {
		setValue6(newValue);
	};
	const handleChange7 = (event, newValue) => {
		setValue7(newValue);
	};
	const handleChange8 = (event, newValue) => {
		setValue8(newValue);
	};
	useEffect(() => {
		toolbarHandler.changeToolbar({title: "Tabseite", showMenu: true});
	})


	return (

			<ErrorBoundary>
				<Box className={classes.root}>

						<Tabs
								value={value}
								onChange={handleChange}
								variant="scrollable"
								indicatorColor={'primary'}
								scrollButtons="auto"
						>
							<Tab label="Tabbeispiele" {...a11yProps(0)} />
							<Tab label="Leerer Tab 1" {...a11yProps(1)} />
							<Tab label="Leerer Tab 2" {...a11yProps(2)} />
						</Tabs>
				<TabPanel value={value} index={0} className={classes.tabPanel}>
					<Grid container direction="row">
						<Grid item xs={12} sm={6} md={4} lg={4}>
							<Box m={3}>
								<Typography gutterBottom variant="h4" component="h4">Tab in Paper (alles Default mit Divider unter Tabs)</Typography>
								<Paper >
									<Tabs
											value={value2}
											onChange={handleChange2}
											variant="scrollable"

											scrollButtons="auto"
									>
										<Tab label="Content 1" {...a11yProps(0)} />
										<Tab label="Content 2" {...a11yProps(1)} />
										<Tab label="Content 3" {...a11yProps(2)} />
									</Tabs>
									<Divider/>
									<TabPanel value={value2} index={0}>
										<Box p={3}>
											Content 1
										</Box>
									</TabPanel>
									<TabPanel value={value2} index={1}>
										<Box p={3}>
											Content 2
										</Box>
									</TabPanel>
									<TabPanel value={value2} index={2}>
										<Box p={3}>
											Content 3
										</Box>
									</TabPanel>
								</Paper>
							</Box>
							<Box m={3}>
								<Typography gutterBottom variant="h4" component="h4">Tab in Paper (Text: Default, Indicator: Primary))</Typography>
								<Paper >
									<Tabs
											value={value5}
											onChange={handleChange5}
											variant="scrollable"
											indicatorColor={'primary'}

											scrollButtons="auto"
									>
										<Tab label="Content 1" {...a11yProps(0)} />
										<Tab label="Content 2" {...a11yProps(1)} />
										<Tab label="Content 3" {...a11yProps(2)} />
									</Tabs>
									<TabPanel value={value5} index={0}>
										<Box p={3}>
											Content 1
										</Box>
									</TabPanel>
									<TabPanel value={value5} index={1}>
										<Box p={3}>
											Content 2
										</Box>
									</TabPanel>
									<TabPanel value={value5} index={2}>
										<Box p={3}>
											Content 3
										</Box>
									</TabPanel>
								</Paper>
							</Box>

							<Box m={3}>
								<Typography gutterBottom variant="h4" component="h4">Tab in Paper VERTIKAL (Textund Indicator Primary)</Typography>
								<Paper >
									<div className={classes.rootVert}>
									<Tabs
											value={value8}
											orientation="vertical"
											textColor="primary"
											indicatorColor={'primary'}
											onChange={handleChange8}
											variant="scrollable"
											className={classes.tabs}
									>
										<Tab label="Content 1" {...a11yPropsVert(0)} />
										<Tab label="Content 2" {...a11yPropsVert(1)} />
										<Tab label="Content 3" {...a11yPropsVert(2)} />
										<Tab label="Content 4" {...a11yPropsVert(2)} />
										<Tab label="Content 5" {...a11yPropsVert(2)} />
										<Tab label="Content 6" {...a11yPropsVert(2)} />
										<Tab label="Content 7" {...a11yPropsVert(2)} />
										<Tab label="Content 8" {...a11yPropsVert(2)} />
									</Tabs>
									<Divider/>
									<TabPanel value={value8} index={0}>
										<Box p={3}>
											Content 1
										</Box>
									</TabPanel>
									<TabPanel value={value8} index={1}>
										<Box p={3}>
											Content 2
										</Box>
									</TabPanel>
									<TabPanel value={value8} index={2}>
										<Box p={3}>
											Content 3
										</Box>
									</TabPanel>
									</div>
								</Paper>
							</Box>
						</Grid>
						<Grid item xs={12} sm={6} md={4} lg={4}>
							<Box m={3}>
								<Typography gutterBottom variant="h4" component="h4">Tab in Paper (Text und Indicator: Primary)</Typography>
								<Paper >
									<Tabs
											value={value3}
											onChange={handleChange3}
											variant="scrollable"
											textColor="primary"
											indicatorColor={'primary'}

											scrollButtons="auto"
									>
										<Tab label="Content 1" {...a11yProps(0)} />
										<Tab label="Content 2" {...a11yProps(1)} />
										<Tab label="Content 3" {...a11yProps(2)} />
									</Tabs>
									<TabPanel value={value3} index={0}>
										<Box p={3}>
											Content 1
										</Box>
									</TabPanel>
									<TabPanel value={value3} index={1}>
										<Box p={3}>
											Content 2
										</Box>
									</TabPanel>
									<TabPanel value={value3} index={2}>
										<Box p={3}>
											Content 3
										</Box>
									</TabPanel>
								</Paper>
							</Box>
							<Box m={3}>
								<Typography gutterBottom variant="h4" component="h4">Tab in Paper (Text und Indicator: Secondary)</Typography>
								<Paper >
									<Tabs
											value={value4}
											onChange={handleChange4}
											variant="scrollable"
											textColor="secondary"
											indicatorColor={'secondary'}

											scrollButtons="auto"
									>
										<Tab label="Content 1" {...a11yProps(0)} />
										<Tab label="Content 2" {...a11yProps(1)} />
										<Tab label="Content 3" {...a11yProps(2)} />
									</Tabs>
									<TabPanel value={value4} index={0}>
										<Box p={3}>
											Content 1
										</Box>
									</TabPanel>
									<TabPanel value={value4} index={1}>
										<Box p={3}>
											Content 2
										</Box>
									</TabPanel>
									<TabPanel value={value4} index={2}>
										<Box p={3}>
											Content 3
										</Box>
									</TabPanel>
								</Paper>
							</Box>
						</Grid>
						<Grid item xs={12} sm={6} md={4} lg={4}>
							<Box m={3}>
								<Typography gutterBottom variant="h4" component="h4">Tab in Paper und mit AppBar (alles Default)</Typography>
								<Paper >
									<AppBar position="static">
									<Tabs
											value={value6}
											onChange={handleChange6}
											variant="scrollable"
											scrollButtons="auto"
									>
										<Tab label="Content 1" {...a11yProps(0)} />
										<Tab label="Content 2" {...a11yProps(1)} />
										<Tab label="Content 3" {...a11yProps(2)} />
									</Tabs>
									</AppBar>
									<TabPanel value={value6} index={0}>
										<Box p={3}>
											Content 1
										</Box>
									</TabPanel>
									<TabPanel value={value6} index={1}>
										<Box p={3}>
											Content 2
										</Box>
									</TabPanel>
									<TabPanel value={value6} index={2}>
										<Box p={3}>
											Content 3
										</Box>
									</TabPanel>
								</Paper>
							</Box>
							<Box m={3}>
								<Typography gutterBottom variant="h4" component="h4">Tab in Paper und mit Icons (alles Primary)</Typography>
								<Paper >

									<Tabs
											value={value7}
											onChange={handleChange7}
											variant="scrollable"
											scrollButtons="off"
											indicatorColor={'primary'}
											textColor={'primary'}
											aria-label="scrollable prevent tabs example"
									>
										<Tab icon={<PhoneIcon />} {...a11yProps(0)} />
										<Tab icon={<FavoriteIcon />} {...a11yProps(1)} />
										<Tab icon={<PersonPinIcon />} {...a11yProps(2)} />
									</Tabs>
									<TabPanel value={value7} index={0}>
										<Box p={3}>
											Content 1
										</Box>
									</TabPanel>
									<TabPanel value={value7} index={1}>
										<Box p={3}>
											Content 2
										</Box>
									</TabPanel>
									<TabPanel value={value7} index={2}>
										<Box p={3}>
											Content 3
										</Box>
									</TabPanel>
								</Paper>
							</Box>
						</Grid>
					</Grid>
				</TabPanel>
				<TabPanel value={value} index={1} className={classes.tabPanel}>
					<Box p={3}>
						Leerer Tab 1
					</Box>
				</TabPanel>
				<TabPanel value={value} index={2} className={classes.tabPanel}>
					<Box p={3}>
						Leerer Tab 2
					</Box>
				</TabPanel>
			</Box>
			</ErrorBoundary>
	);
})

export default TabViewExample1;
