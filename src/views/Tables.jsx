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
import Container from "@material-ui/core/Container";


const Tables = observer(() => {
	const history = useHistory();
	const {toolbarHandler} =  useStores();

	useEffect(() => {
		toolbarHandler.changeToolbar({title: "Start", showMenu: true});
	})

	return (

			<React.Fragment>
				<Container>
					<Typography variant={"h4"} m={3}>Startseite - Comming Soon</Typography>
				</Container>

			</React.Fragment>
	);
})

export default Tables;
