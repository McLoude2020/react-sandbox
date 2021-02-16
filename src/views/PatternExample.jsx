import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react";
import Typography from '@material-ui/core/Typography';
import {useStores} from "../hooks/useStores";
import Container from "@material-ui/core/Container";
import PersonalInformation from "../components/PersonalInformation";


const PatternExample = observer(() => {
	const {toolbarHandler} =  useStores();

	useEffect(() => {
		toolbarHandler.changeToolbar({title: "Pattern Example", showMenu: true});
	})
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");

	return (

			<Container>
				<Typography variant={"h4"} m={3}>Pattern-Example</Typography>
				<PersonalInformation
						firstName={firstName}
						lastName={lastName}
						setFirstName={setFirstName}
						setLastName={setLastName}
				/>

			</Container>
	);
})

export default PatternExample;
