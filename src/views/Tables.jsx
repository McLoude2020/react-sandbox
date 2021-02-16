import React, {useEffect} from 'react';
import {observer} from "mobx-react";
import {useHistory} from "react-router";
import {useStores} from "../hooks/useStores";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {Box} from "@material-ui/core";
import ThemeTablePaginator from "../components/TablePaginator";
import ThemeTableCollapsible from "../components/TableCollapsible";


const Tables = observer(() => {
	const history = useHistory();
	const {toolbarHandler} =  useStores();

	useEffect(() => {
		toolbarHandler.changeToolbar({title: "Start", showMenu: true});
	})

	return (

			<React.Fragment>
				<Container>

					<Grid container direction="row">
						<Grid item xs={12} sm={12} md={6} lg={6}>
							<Box m={3}>
								<ThemeTablePaginator/>
							</Box>
						</Grid>

						<Grid item xs={12} sm={12} md={6} lg={6}>

							<Box m={3}>
								<ThemeTableCollapsible/>
							</Box>
						</Grid>
					</Grid>
				</Container>

			</React.Fragment>
	);
})

export default Tables;
