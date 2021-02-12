import React, {useEffect} from 'react';
import {observer} from "mobx-react";
import {makeStyles} from '@material-ui/core/styles';
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
import {ContactlessTwoTone} from "@material-ui/icons";
import Container from "@material-ui/core/Container";


const Start = observer(() => {
	const history = useHistory();
	const {toolbarHandler} = useStores();

	useEffect(() => {
		toolbarHandler.changeToolbar({title: "Typografie", showMenu: true});
	})

	return (

			<Container>
				<Typography variant={"h1"} m={3}>Überschrift 1 (h1-Element)</Typography>
				<Divider/>
				<Typography variant={"h2"} m={3}>Überschrift 2 (h2-Element)</Typography>
				<Divider/>
				<Typography variant={"h3"} m={3}>Überschrift 3 (h3-Element)</Typography>
				<Divider/>
				<Typography variant={"h4"} m={3}>Überschrift 4 (h4-Element)</Typography>
				<Divider/>
				<Typography variant={"h5"} m={3}>Überschrift 5 (h5-Element)</Typography>
				<Divider/>
				<Typography variant={"h6"} m={3}>Überschrift 6 (h6-Element)</Typography>
				<Divider/>
				<Typography variant={"subtitle1"} m={3}>Subtitle 1 (wird zu h6-Element)</Typography>
				<Divider/>
				<Typography variant={"subtitle2"} m={3}>Subtitle 2 (wird zu h6-Element)</Typography>
				<Divider/>
					<b>Defaulttext ohne Typoangabe (ohne Element)</b><br />
					Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans.

				<Divider/>
				<Typography variant={"body1"} m={3}>
					<b>Body 1 (wird zu Absatz-Element)</b><br />
					Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans.
				</Typography>
				<Divider/>
				<Typography variant={"body2"} m={3}>
					<b>Body 2 (wird zu Absatz-Element)</b><br />
					Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans.
				</Typography>
				<Divider/>
				<Typography variant={"caption"} m={3}>
					<b>Caption (wird zu span-Element)</b><br />
					Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans.
				</Typography>
				<Divider/>
				<Typography variant={"overline"} m={3}>Overline (wird zu h6-Element)</Typography>
				<Divider/>
				<Typography variant={"button"} m={3}>Button (wird zu span-Element)</Typography>
				<Divider/>

			</Container>
	);
})

export default Start;
