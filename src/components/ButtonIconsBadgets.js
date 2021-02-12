import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Button, Card} from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import MailIcon from "@material-ui/icons/Mail";
import Badge from "@material-ui/core/Badge";

const useStyles = makeStyles((theme) => ({
	margin: {
		margin: theme.spacing(2),
	},

}));

export default function ThemeButtonIconsBadges() {
	const classes = useStyles();
	return (

			<>
				<Card>
					<CardHeader style={{}} title={'Icons with Badges (Message-Info)'}/>
					<CardContent>

						<Box m={3}>
							<Badge badgeContent={4} cclassName={classes.margin} color="primary">
								<MailIcon />
							</Badge>
							<Badge badgeContent={4} className={classes.margin} color="secondary">
								<MailIcon />
							</Badge>
							<Badge badgeContent={4} className={classes.margin} color="error">
								<MailIcon />
							</Badge>
						</Box>
					</CardContent>
				</Card>
			</>


	);
}
