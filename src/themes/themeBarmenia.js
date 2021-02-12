import {createMuiTheme} from "@material-ui/core/styles";
import AvenirWoff2 from './../fonts/Avenir-Next-LTW04-Light.woff2';
import RobotoWoff2 from './../fonts/Avenir-Next-LTW04-Light.woff2';
import {$mobx} from "mobx";

const AvenirFont = {
	fontFamily: 'Avenir Next LT W04 Light',
	fontStyle: 'normal',
	fontDisplay: 'swap',
	fontWeight: 400,
	src: `
    local('Avenir'),
    local('Avenir-Regular'),
    url(${AvenirWoff2}) format('woff2')
  `,
	unicodeRange:
			'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};
const RobotoFont = {
	fontFamily: 'Roboto Regular',
	fontStyle: 'normal',
	fontDisplay: 'swap',
	fontWeight: 400,
	src: `
    local('Roboto'),
    local('Roboto-Regular'),
    url(${RobotoWoff2}) format('woff2')
  `,
	unicodeRange:
			'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};
const palletType = "light";

const mainPrimaryColor = '#009fe3';
const mainSecondaryColor = '#cdff00';
const mainErrorColor = '#E31738';

const textPrimaryColor = '#495057';
const textSecondaryColor = '#009fe3';

const primaryContrastColor = '#FFF';
const secondaryContrastColor = '#0074a5';
const errorContrastColor = '#ffffff';

const paperBackground = '#FFF';
const palletBackground = '#f6f7f8';
const pageBackground = '#fbfbfb';
const headerBackground = '#ecedee';

const mainBorderColor = '#eee';

const headerText = '#009fe3';


const tabIndicatorColor = '#009fe3'

const minHeightForTabsAndBars = 64;
const inputColor = 'primary';

const themeBarmenia= createMuiTheme({
	shape:{
		borderRadius: 0,
	},
	palette: {

		type: palletType,
		background: {
			default:pageBackground,
			paper:paperBackground,
			header: headerBackground,
		},
		primary: {
			main: mainPrimaryColor,
			contrastText:primaryContrastColor

		},
		secondary: {
			main: mainSecondaryColor,
			contrastText:secondaryContrastColor
		},

		error: {
			main: mainErrorColor,
		},

		text: {
			primary: textPrimaryColor,
			secondary: textSecondaryColor,
			header: headerText,
		},
	},
	typography: {
		fontFamily: '"RobotoFont", "Helvetica", "Arial", sans-serif',
		h1: {
			fontSize: '2.2rem',
			fontFamily: '"Avenir Next LT W04 Light", "Helvetica", "Arial", sans-serif',
			paddingBottom: 16,
		},
		h2: {
			fontSize: '2rem',
			fontFamily: '"Avenir Next LT W04 Light", "Helvetica", "Arial", sans-serif',
			paddingBottom: 16
		},
		h3: {
			fontSize: '1.8rem',
			fontFamily: '"Avenir Next LT W04 Light", "Helvetica", "Arial", sans-serif',
			paddingBottom: 16,
		},
		h4: {
			fontFamily: '"Avenir Next LT W04 Light", "Helvetica", "Arial", sans-serif',
			fontSize: '1.5rem',
			paddingBottom: 16,
		},
		h5: {
			fontSize: '1.4rem',
			fontFamily: '"Avenir Next LT W04 Light", "Helvetica", "Arial", sans-serif',
			paddingBottom: 10,
		},
		h6: {
			fontSize: '1.3rem',
			fontFamily: '"Avenir Next LT W04 Light", "Helvetica", "Arial", sans-serif',
			paddingBottom: 10,
		},
	},
	spacing: [0, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096],
	props: {

		MuiAccordion: {
			elevation: 0,
		},
		MuiAppBar: {
			elevation:0
		},
		MuiButton: {
			size: 'medium',
		},
		MuiCard:{
			elevation: 0,
		},
		MuiListItem: {
			dense: true,
		},
		MuiIconButton: {
			size: 'small',
		},
		MuiTypography: {
		},
		MuiFab: {
			size: 'small',
			color: 'primary'
		},

		MuiPaper: {
			elevation:0
		},
		MuiTable: {
			size: 'medium',
		},
	},
	overrides: {

		MuiAccordion: {
			root: {
				boxShadow:0,
				"&:before": {
					backgroundColor: 'transparent',
				},
				borderTop: 0,
				borderLeft: 0,
				borderRight: 0,
			},

		},
		MuiAccordionSummary: {
			root: {
				backgroundColor: mainPrimaryColor,
				color: primaryContrastColor+ '!important',
				padding: '1px 5px'
			},
		},
		MuiAccordionDetails: {
			root: {
				backgroundColor: paperBackground,
				color: textPrimaryColor,
				borderTop: '1px solid' + mainBorderColor,
				borderLeft: '1px solid' + mainBorderColor,
				borderRight: '1px solid' + mainBorderColor,
				marginTop:	'2px',
				padding:	'0'
			},
		},
		MuiAccordionActions: {
			root: {
				backgroundColor: palletBackground,
				borderRight: '1px solid' + mainBorderColor,
				borderLeft: '1px solid' + mainBorderColor,
				color: textPrimaryColor,
			},
		},
		MuiAppBar: {
			root:{
				minHeight: minHeightForTabsAndBars,
				border: '0',
			},
		},

		MuiButton: {
			disabled:{
				boxShadow:0
			},
			contained:{
				boxShadow:0,
				MuiButtonGroup: {
					elevation:0
				},
				"&:hover": {
					boxShadow:0,
				},
				"&:focus": {
					boxShadow:0,
				},

			},
			outlined:{
				boxShadow:0
			},
			text:{
				boxShadow:0
			},
			focusVisible:{
				boxShadow:0
			}
		},

		MuiButtonGroup: {
			contained:{
				boxShadow:0
			}
		},

		MuiContainer:{
			root: {
				boxSizing: 'border-box',
				width: '100%',
				paddingLeft: '16px',
				paddingTop: '16px',
				paddingRight: '16px',
				paddingBottom: '16px',
			},
			maxWidthLg:{
				maxWidth:'100% !important'
			},
			maxWidthXL:{
				maxWidth:'100% !important'
			},
			maxWidthXS:{
				maxWidth:'100% !important'
			},
			maxWidthMd:{
				maxWidth:'100% !important'
			},
			maxWidthSm:{
				maxWidth:'100% !important'
			},
		},
		MuiCard:{
			root: {
				border: '1px solid' + mainBorderColor,
				marginBottom: '10px'
			},
		},
		MuiCardActions: {
			root:{
				padding: 16,
				width: '100%',
			}
		},
		MuiCardContent: {
			root: {
				height: '100%',
				padding: 0
			},
		},
		MuiCardHeader:{
			root: {
				backgroundColor: paperBackground,
				padding: 16,
				color: headerText,
			},
			content: {
				"&:after": {
					content: "' '",
					background: mainPrimaryColor,
					width: '7.5rem',
					maxWidth: '150px',
					height: '2px',
					display: 'block',
					marginTop: '16px',
				},
			},

		},
		MuiCheckbox:{
			root: {
				color: 'inherit'
			},
		},
		MuiDrawer: {
			paper:{
				border: '0',
			},
		},
		MuiFab: {
			root:{
				boxShadow:0
			}
		},
		MuiFormControl: {
			root:{
				width: '100%'
			}
		},
		MuiGrid: {
			root:{
				boxSizing:'border-box'
			}
		},
		MuiDialogContent: {
			root:{
				margin:'0',
				padding:'0',
			}
		},
		MuiDialogContentText: {
			root:{
				color: textPrimaryColor
			}
		},
		MuiDialogTitle: {
			root:{
				color: mainPrimaryColor
			}
		},

		MuiCssBaseline: {
			'@global': {
				'@font-face': [AvenirFont,RobotoFont],
			},
		},
		MuiListItemIcon:{
			root: {
				color: 'inherit !important'
			}
		},
		MuiIconButton:{
			root: {
				color: 'inherit'
			},
			label: {
				color: 'inherit'
			}
		},
		MuiStepper:{
			root: {
				border: 0,
			},
		},
		MuiMobileStepper:{
			root: {
				border: 0,
			},
		},
		MuiTextField: {
			root:{
				width: '100%'
			}
		},
		MuiPaper: {
			root:{
				border: '1px solid ' + mainBorderColor,
				borderRadius: 0
			},
			outlined:{
				border: '1px solid ' + mainPrimaryColor,
			},
		},
		MuiTabs: {
			root:{
				minHeight: minHeightForTabsAndBars,
				margin: '0px !important',
			}
		},
		MuiTab: {
			root:{
				minHeight: minHeightForTabsAndBars,
				fontSize: '1.2rem',
				fontFamily: '"Avenir Next LT W04 Light", "Helvetica", "Arial", sans-serif',
				textTransform:"none",
				fontWeight:"light"
			},
			textColorPrimary:{
				color: textPrimaryColor,
			},
			textColorSecondary:{
				color: textPrimaryColor,
			},


		},
		MuiTypography: {
			root:{
				marginBottom: '0px !important'
			},
			h1: {
				color: mainPrimaryColor,
			},
			h2: {
				color: mainPrimaryColor,
			},
			h3:{
				color: mainPrimaryColor,
			},
			h4:{
				color: mainPrimaryColor,
			}
		},

		MuiTableCell:{
			root: {
				borderBottom: '1px solid ' + mainBorderColor,
			},
			head: {
				minHeight: minHeightForTabsAndBars,
				backgroundColor: headerBackground,
			},
			stickyHeader: {
				minHeight: minHeightForTabsAndBars,
				backgroundColor: headerBackground,
			}
		},
		MuiTableRow: {
			root: {
				'&:nth-of-type(odd)': {
					backgroundColor: paperBackground,
				},
				'&:nth-of-type(even)': {
					backgroundColor: palletBackground,
				},
			},
		},
	},
});

export default themeBarmenia;
