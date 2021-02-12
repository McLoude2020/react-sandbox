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
import {Box} from "@material-ui/core";
import ThemeButtons from "../components/Button";
import ThemeButtonGroups from "../components/ButtonGroup";
import ThemeFab from "../components/Fab";
import ThemeButtonIconsBadges from "../components/ButtonIconsBadgets";
import ThemeForm1 from "../components/ThemeForm1";
import ThemeForm2 from "../components/ThemeForm2";


const Forms = observer(() => {
	const history = useHistory();
	const {toolbarHandler} =  useStores();

	useEffect(() => {
		toolbarHandler.changeToolbar({title: "Formularelemente", showMenu: true});
	})

	return (

			<React.Fragment>
				<Grid container direction="row">
					<Grid item xs={12} sm={12} md={6} lg={6}>
						<Box m={3}>
							<ThemeForm1/>
						</Box>
					</Grid>

					<Grid item xs={12} sm={12} md={6} lg={6}>
						<Box m={3}>
							<ThemeForm2/>
						</Box>
					</Grid>
				</Grid>

			</React.Fragment>
	);
})

export default Forms;
