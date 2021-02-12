import React from 'react';
import {useStores} from "./hooks/useStores";
import { Switch, Route } from 'react-router-dom';
import {observer} from "mobx-react";
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import ThemeAppBarWithDrawer from "./AppBarWithDrawer";
import ThemeAdd from "./components/Add";
import {fade} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import ViewStart from "./views/Start";
import ViewButtons from "./views/Buttons";
import ViewListExample1 from "./views/ListViewExample1";
import ViewTabPage1 from "./views/TabViewExample1";
import ViewAccordionPage from "./views/AccordionPage";
import ViewCards from "./views/Cards";
import ViewForms from "./views/Forms";
import ViewDialogs from "./views/Dialogs";
import ViewNavi from "./views/Navi";
import ViewTables from "./views/Tables";
import ViewTypo from "./views/Typo";


const useStyles = makeStyles(theme => ({

	root: {
		display: 'flex',
		width: '100%',
	},
	leftside:{
		borderRightWidth:1,
		borderRightColor:fade(theme.palette.common.black, 0.05),
		borderRightStyle:'solid',
		height: '100%',
	},
	toolbar: {
		display: 'block',
		flex: 'unset',
		width: '100%',
		boxSizing:'border-box',
		padding: 0,
		height:'100vh'
	},
	box: {
		height: '100%',
		paddingTop: 64,
		[theme.breakpoints.up('md')]: {
			paddingTop: 144
		},
	},
}))

const App = observer(() => {
	const classes = useStyles();
	const {themeStore} = useStores();
	return (

			<ThemeProvider theme={themeStore.selectedTheme}>
				<div className={classes.root}>
					<CssBaseline  />

						<ThemeAppBarWithDrawer/>

					<main className={classes.toolbar}>
						<Box className={classes.box}>
							<Switch>
								<Route exact path='/'><ViewStart/></Route>
								<Route exact path='/Accordion'><ViewAccordionPage/></Route>
								<Route exact path='/Buttons'><ViewButtons/></Route>
								<Route exact path='/Cards'><ViewCards/></Route>
								<Route exact path='/Forms'><ViewForms/></Route>
								<Route exact path='/List'><ViewListExample1/></Route>
								<Route exact path='/Dialogs'><ViewDialogs/></Route>
								<Route exact path='/Navi'><ViewNavi/></Route>
								<Route exact path='/Tabs'><ViewTabPage1/></Route>
								<Route exact path='/Tables'><ViewTables/></Route>
								<Route exact path='/Typo'><ViewTypo/></Route>
							</Switch>
						</Box>
					</main>
					<ThemeAdd/>
				</div>
			</ThemeProvider>


	);
});

export default App;
