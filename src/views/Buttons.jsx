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
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import {Box, Checkbox, FormControlLabel} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import AccordionActions from "@material-ui/core/AccordionActions";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import ThemeButtons from "../components/Button";
import ThemeButtonGroups from "../components/ButtonGroup";
import ThemeFab from "../components/Fab";
import ThemeButtonIconsBadges from "../components/ButtonIconsBadgets";


const Buttons = observer(() => {
	const history = useHistory();
	const {toolbarHandler} =  useStores();

	useEffect(() => {
		toolbarHandler.changeToolbar({title: "Buttons/Icons und Avatare", showMenu: true});
	})

	return (

			<React.Fragment>
				<Grid container direction="row">
					<Grid item xs={12} sm={12} md={6} lg={6}>
						<Box m={3}>
						<ThemeButtons/>
						</Box>
					</Grid>

					<Grid item xs={12} sm={12} md={6} lg={6}>
						<Box m={3}>
						<ThemeButtonGroups/>
						<ThemeFab/>
						<ThemeButtonIconsBadges/>
						</Box>
					</Grid>
				</Grid>

			</React.Fragment>
	);
})

export default Buttons;
