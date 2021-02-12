import React from 'react';
import {fade, IconButton} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import themeBarmenia from "../context/theme";
import ThemeItemsList from "./list";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import themeBarmeniaDark from "../themes/theme-dark";
import { Search} from "@material-ui/icons";
import FilterListIcon from '@material-ui/icons/FilterList';
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		height: '100%',
		width: '100%',
		/* backgroundColor: theme.palette.background.paper,*/
		boxSizing: 'border-box',
	},
	bar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		width: '100%',
		flexDirection:'row'
	},
	input: {
		borderRadius: themeBarmenia.shape.borderRadius,

		width: '100%',
		[themeBarmenia.breakpoints.up('md')]: {
			width:'40%',
		},
		padding: '0 10px',
		marginLeft: theme.spacing(1),
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
	},
	iconButton: {
		padding: 10,

	},
	searchResults: {
		flexGrow: 1,
		width: '100%',
		height:'calc(100% - '+ themeBarmeniaDark.overrides.MuiAppBar.root.minHeight +'px)',
		overflow: 'auto',
	},
}));

export default function ThemeLeftPage() {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};



	return (
			<Box className={classes.root} >
				<ThemeProvider theme={themeBarmeniaDark}>
					<AppBar component="form" position="static" color="default" elevation={0} className={classes.bar}>


						<InputBase
								className={classes.input}
								placeholder="In App suchen ..."
								inputProps={{ 'aria-label': 'search google maps' }}
						/>
						<IconButton className={classes.iconButton} aria-label="menu">
							<Search  />
						</IconButton>
						<IconButton className={classes.iconButton} aria-label="directions">
							<FilterListIcon />
						</IconButton>

					</AppBar>
				</ThemeProvider>
				<Box className={classes.searchResults}>
					<ThemeItemsList/>
				</Box>
			</Box>


	);
}
