import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Button, ButtonGroup, Card, Typography,} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({


	margin: theme.spacing(1),


}));

export default function ThemeButtonGroups() {
	const classes = useStyles();
	return (

			<>
				<Card>
					<CardHeader style={{}} title={'Buttongroup'} subheader={'test'}/>
					<CardContent>

						<Box m={3}>
							<ButtonGroup color="primary" aria-label="outlined primary button group">
								<Button>One</Button>
								<Button>Two</Button>
								<Button>Three</Button>
							</ButtonGroup>
							<ButtonGroup variant="contained" color="primary" aria-label="contained primary button group"
											 orientation={'vertical'}>
								<Button>One</Button>
								<Button>Two</Button>
								<Button>Three</Button>
							</ButtonGroup>
							<ButtonGroup variant="text" color="primary" aria-label="text primary button group">
								<Button>One</Button>
								<Button>Two</Button>
								<Button>Three</Button>
							</ButtonGroup>
						</Box>
					</CardContent>
				</Card>
			</>


	);
}
