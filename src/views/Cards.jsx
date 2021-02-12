import React, {useEffect} from 'react';
import {observer} from "mobx-react";
import Typography from '@material-ui/core/Typography';
import {useHistory} from "react-router";
import {useStores} from "../hooks/useStores";
import Grid from "@material-ui/core/Grid";
import {Box, Card, CardActions, CardMedia, Checkbox, FormControlLabel, Paper, useTheme} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import makeStyles from "@material-ui/core/styles/makeStyles";
import clsx from "clsx";
import Collapse from '@material-ui/core/Collapse';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';


const useStyles = makeStyles((theme) => ({

	root: {
		display: 'flex',
	},
	details: {
		display: 'flex',
		flexDirection: 'row',

	},
	content: {
		display: 'flex',
		flexDirection: 'column',
		flex: '1 0 auto',
	},
	cover: {
		width: 200,
	},
	controls: {
		display: 'flex',
		alignItems: 'center',
		paddingLeft: theme.spacing(1),
		paddingBottom: theme.spacing(1),
	},
	playIcon: {
		height: 38,
		width: 38,
	},



	media: {
		height: 0,
		paddingTop: '56.25%', // 16:9
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
}));

const Cards = observer(() => {
	const history = useHistory();
	const {toolbarHandler} =  useStores();

	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	useEffect(() => {
		toolbarHandler.changeToolbar({title: "Cards/Papes", showMenu: true});
	})
	const classes = useStyles();
	const theme = useTheme();

	function createData(name, calories, fat, carbs, protein) {
		return { name, calories, fat, carbs, protein };
	}

	const rows = [
		createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
		createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
		createData('Eclair', 262, 16.0, 24, 6.0),
		createData('Cupcake', 305, 3.7, 67, 4.3),
		createData('Gingerbread', 356, 16.0, 49, 3.9),
	];


	return (


			<React.Fragment>
				<Grid container direction="row">
					<Grid item xs={12} sm={12} md={6} lg={6}>
						<Box m={3}>
							<Typography gutterBottom variant="h4" component="h4">Paper mit Text in einer Box (Outline)</Typography>
						<Paper variant={"outlined"}>
							<Box m={3}>
							Hallo. Ich bin ein kleiner Blindtext. Und zwar schon so lange ich denken kann. Es war nicht leicht zu verstehen, was es bedeutet, ein blinder Text zu sein: Man macht keinen Sinn. Wirklich keinen Sinn. Man wird zusammenhangslos eingeschoben und rumgedreht – und oftmals gar nicht erst gelesen. Aber bin ich allein deshalb ein schlechterer Text als andere? Na gut, ich werde nie in den Bestsellerlisten stehen. Aber andere Texte schaffen das auch nicht. Und darum stört es mich nicht besonders blind zu sein. Und sollten Sie diese Zeilen noch immer lesen, so habe ich als kleiner Blindtext etwas geschafft, wovon all die richtigen und wichtigen Texte meist nur träumen.
							</Box>
						</Paper>
						</Box>
						<Box m={3}>
							<Typography gutterBottom variant="h4" component="h4">Paper mit Text in einer Box (ohne Angaben)</Typography>
						<Paper>
							<Box m={3}>
							Hallo. Ich bin ein kleiner Blindtext. Und zwar schon so lange ich denken kann. Es war nicht leicht zu verstehen, was es bedeutet, ein blinder Text zu sein: Man macht keinen Sinn. Wirklich keinen Sinn. Man wird zusammenhangslos eingeschoben und rumgedreht – und oftmals gar nicht erst gelesen. Aber bin ich allein deshalb ein schlechterer Text als andere? Na gut, ich werde nie in den Bestsellerlisten stehen. Aber andere Texte schaffen das auch nicht. Und darum stört es mich nicht besonders blind zu sein. Und sollten Sie diese Zeilen noch immer lesen, so habe ich als kleiner Blindtext etwas geschafft, wovon all die richtigen und wichtigen Texte meist nur träumen.
							</Box>
						</Paper>
						</Box>
						<Box m={3}>
							<Typography gutterBottom variant="h4" component="h4">Simples Card mit Actionbereich und Text ohne Header</Typography>
							<Card>
								<CardContent>
									<Box m={3}>
										<Typography gutterBottom variant="body2">Hallo. Ich bin ein kleiner Blindtext. Und zwar schon so lange ich denken kann. Es war nicht leicht zu verstehen, was es bedeutet, ein blinder Text zu sein: Man macht keinen Sinn. Wirklich keinen Sinn. Man wird zusammenhangslos eingeschoben und rumgedreht – und oftmals gar nicht erst gelesen. Aber bin ich allein deshalb ein schlechterer Text als andere? Na gut, ich werde nie in den Bestsellerlisten stehen. Aber andere Texte schaffen das auch nicht. Und darum stört es mich nicht besonders blind zu sein. Und sollten Sie diese Zeilen noch immer lesen, so habe ich als kleiner Blindtext etwas geschafft, wovon all die richtigen und wichtigen Texte meist nur träumen.</Typography>
									</Box>
								</CardContent>
								<CardActions>
									<Button size="small" variant={"outlined"} color={"primary"}>Outline-Buttom</Button>
									<Button size="small" color={"primary"}>Textbutton?</Button>
								</CardActions>
							</Card>

						</Box>
						<Box m={3}>
							<Typography gutterBottom variant="h4" component="h4">Card als kleiner Mediaplayer</Typography>
							<Grid container direction="row" spacing={3}>
								<Grid item xs={12} sm={12} md={6} lg={6}>
									<Card className={classes.root}>


											<div className={classes.details}>
												<CardMedia
														className={classes.cover}
														image="http://www.bv-schmellwitz.de/wp-content/uploads/2019/09/DSC_2674.jpg"
														title="Live from space album cover"
												/>
												<CardContent className={classes.content}>
													<Box m={3}>
													<Typography component="h5" variant="h5">
														Live From Space
													</Typography>
													<Typography variant="subtitle1" color="textSecondary">
														Mac Miller
													</Typography>
													<div className={classes.controls}>
														<IconButton aria-label="previous">
															{theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
														</IconButton>
														<IconButton aria-label="play/pause">
															<PlayArrowIcon className={classes.playIcon} />
														</IconButton>
														<IconButton aria-label="next">
															{theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
														</IconButton>
													</div>
													</Box>
												</CardContent>
											</div>
									</Card>
								</Grid>
								<Grid item xs={12} sm={12} md={6} lg={6}>
									<Card className={classes.root}>


										<div className={classes.details}>
											<CardMedia
													className={classes.cover}
													image="http://www.bv-schmellwitz.de/wp-content/uploads/2019/09/DSC_2630.jpg"
													title="Live from space album cover"
											/>
											<CardContent className={classes.content}>
												<Box m={3}>
													<Typography component="h5" variant="h5">
														Live From Space
													</Typography>
													<Typography variant="subtitle1" color="textSecondary">
														Mac Miller
													</Typography>
													<div className={classes.controls}>
														<IconButton aria-label="previous">
															{theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
														</IconButton>
														<IconButton aria-label="play/pause">
															<PlayArrowIcon className={classes.playIcon} />
														</IconButton>
														<IconButton aria-label="next">
															{theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
														</IconButton>
													</div>
												</Box>
											</CardContent>
										</div>
									</Card>
								</Grid>
							</Grid>

						</Box>
					</Grid>


					<Grid item xs={12} sm={12} md={6} lg={6}>

						<Box m={3}>
							<Card>
								<CardHeader
										title="Card mit Header und Tabelle"
								/>
								<CardContent>

									<TableContainer>
										<Table aria-label="simple table">
											<TableHead>
												<TableRow>
													<TableCell>Dessert</TableCell>
													<TableCell align="right">Calories</TableCell>
													<TableCell align="right">Fat&nbsp;(g)</TableCell>
													<TableCell align="right">Carbs&nbsp;(g)</TableCell>
													<TableCell align="right">Protein&nbsp;(g)</TableCell>
												</TableRow>
											</TableHead>
											<TableBody>
												{rows.map((row) => (
														<TableRow key={row.name}>
															<TableCell component="th" scope="row">
																{row.name}
															</TableCell>
															<TableCell align="right">{row.calories}</TableCell>
															<TableCell align="right">{row.fat}</TableCell>
															<TableCell align="right">{row.carbs}</TableCell>
															<TableCell align="right">{row.protein}</TableCell>
														</TableRow>
												))}
											</TableBody>
										</Table>
									</TableContainer>
								</CardContent>

							</Card>

						<Card>
							<CardHeader
									avatar={
										<Avatar aria-label="recipe" src="/img/profil.jpg">

										</Avatar>
									}
									action={
										<IconButton aria-label="settings">
											<MoreVertIcon />
										</IconButton>
									}
									title="Card mit Avatar, Header und aufklappbarer Fußnote sowei Menü-Icon"
									subheader="Subheader: September 14, 2016"
							/>
							<CardMedia
									className={classes.media}
									image="http://michael.tietz.bz/wp-content/uploads/2020/11/118691086_3581448598553917_5414464800607721660_o-750x410.jpg"
									title="Open-Air-Kinonächte"
							/>
							<CardContent>
								<Box m={3}>
									<Typography gutterBottom variant="h5" component="h2">
										Hinweis
									</Typography>
									<Typography gutterBottom variant="body2" color={'textPrimary'}> Ich bin ein kleiner Blindtext. Und zwar schon so lange ich denken kann. Es war nicht leicht zu verstehen, was es bedeutet, ein blinder Text zu sein: Man macht keinen Sinn. Wirklich keinen Sinn. Man wird zusammenhangslos eingeschoben und rumgedreht – und oftmals gar nicht erst gelesen. Aber bin ich allein deshalb ein schlechterer Text als andere? Na gut, ich werde nie in den Bestsellerlisten stehen. Aber andere Texte schaffen das auch nicht. Und darum stört es mich nicht besonders blind zu sein. Und sollten Sie diese Zeilen noch immer lesen, so habe ich als kleiner Blindtext etwas geschafft, wovon all die richtigen und wichtigen Texte meist nur träumen.</Typography>
								</Box>
							</CardContent>
							<CardActions disableSpacing>
								<IconButton aria-label="add to favorites">
									<FavoriteIcon />
								</IconButton>
								<IconButton aria-label="share">
									<ShareIcon />
								</IconButton>
								<IconButton
										className={clsx(classes.expand, {
											[classes.expandOpen]: expanded,
										})}
										onClick={handleExpandClick}
										aria-expanded={expanded}
										aria-label="show more"
								>
									<ExpandMoreIcon />
								</IconButton>
							</CardActions>
							<Collapse in={expanded} timeout="auto" unmountOnExit>
								<CardContent>

									<Box m={3}>
										<Typography gutterBottom variant="caption" color={'textPrimary'}><b>Beschreibung oder Fußnote</b></Typography><br/>
										<Typography gutterBottom variant="caption" color={'textPrimary'}>Ich bin ein kleiner Blindtext. Und zwar schon so lange ich denken kann. Es war nicht leicht zu verstehen, was es bedeutet, ein blinder Text zu sein: Man macht keinen Sinn. Wirklich keinen Sinn. Man wird zusammenhangslos eingeschoben und rumgedreht – und oftmals gar nicht erst gelesen. Aber bin ich allein deshalb ein schlechterer Text als andere? Na gut, ich werde nie in den Bestsellerlisten stehen. Aber andere Texte schaffen das auch nicht. Und darum stört es mich nicht besonders blind zu sein. Und sollten Sie diese Zeilen noch immer lesen, so habe ich als kleiner Blindtext etwas geschafft, wovon all die richtigen und wichtigen Texte meist nur träumen.</Typography>
									</Box>
								</CardContent>
							</Collapse>
						</Card>
						</Box>
					</Grid>
				</Grid>

			</React.Fragment>
	);
})

export default Cards;
