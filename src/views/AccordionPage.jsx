import React, {useEffect} from 'react';
import {observer} from "mobx-react";

import Typography from '@material-ui/core/Typography';
import {useHistory} from "react-router";
import {useStores} from "../hooks/useStores";
import ThemeAccordion from "../components/Accordion";
import {Container} from "@material-ui/core";
import Box from "@material-ui/core/Box";


const Start = observer(() => {
	const history = useHistory();
	const {toolbarHandler} =  useStores();

	useEffect(() => {
		toolbarHandler.changeToolbar({title: "Accordion", showMenu: true});
	})

	return (

			<React.Fragment>
				<Box m={3}><ThemeAccordion /></Box>

			</React.Fragment>
	);
})

export default Start;
