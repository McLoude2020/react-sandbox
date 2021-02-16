import {Box, Card} from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import React from "react";
import TextField from "@material-ui/core/TextField";
import ThemeForm2 from "./ThemeForm2";

function PersonalInformation({
	firstName,
	lastName,
	setFirstName,
	setLastName
}) {
	return (

			<Grid container direction="row">
				<Grid item xs={12} sm={12} md={6} lg={6}>
					<Box m={3}>
						<Card>
							<CardHeader
									title="Eingaben"
							/>
							<CardContent>
								<Grid container direction="row">
									<Grid item xs={12} sm={12} md={6} lg={6}>
										<Box m={3}>
										<TextField label="Vorname"
													 onChange={e => setFirstName(e.target.value)}/>

										</Box>
									</Grid>
									<Grid item xs={12} sm={12} md={6} lg={6}>
										<Box m={3}>

											<TextField label="Nachname"
														  onChange={e => setLastName(e.target.value)}/>

										</Box>
									</Grid>
								</Grid>
							</CardContent>

						</Card>
					</Box>
				</Grid>
				<Grid item xs={12} sm={12} md={6} lg={6}>
					<Box m={3}>
						<Card>
							<CardHeader
									title="Eingabeergebnis"
							/>
							<CardContent>

								<Grid container direction="row">
									<Grid item xs={12} sm={12} md={6} lg={6}>
										<Box m={3}>
										<p><b>Vorname:</b> {firstName} </p>
										</Box>
									</Grid>
									<Grid item xs={12} sm={12} md={6} lg={6}>
										<Box m={3}>
										<p><b>Nachname:</b> {lastName} </p>
										</Box>
									</Grid>
								</Grid>
							</CardContent>
						</Card>
					</Box>
				</Grid>
			</Grid>
	);
}
export default PersonalInformation
