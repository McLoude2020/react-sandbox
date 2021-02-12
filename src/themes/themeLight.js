import {createMuiTheme} from "@material-ui/core/styles";
import AvenirWoff2 from './../fonts/Avenir-Next-LTW04-Light.woff2';
import RobotoWoff2 from './../fonts/Avenir-Next-LTW04-Light.woff2';

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

const mainPrimaryColor = '#018fcd';
const mainPrimaryColorLight = '#009ce0';
const mainSecondaryColor = '#cdff00';
const mainErrorColor = '#E31738';

const textPrimaryColor = '#021a26';
const textSecondaryColor = '#0d3245';

const primaryContrastColor = '#FFF';
const secondaryContrastColor = '#0074a5';
const errorContrastColor = '#FFF';

const paperBackground = '#FFF';
const palletBackground = '#ecedee';
const headerBackground = '#f6f7f8';

const mainBorderColor = '#e0e0e0';

const headerText = '#009fe3';


const tabIndicatorColor = '#009fe3'

const minHeightForTabsAndBars = 64;
const inputColor = 'primary';

const themeLight = createMuiTheme({
	shape:{
		borderRadius: 0,
	},
	palette: {

		type: palletType,
		background: {
			default:palletBackground,
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
		h6: {
			fontSize: '1.3rem',
			fontFamily: '"Avenir Next LT W04 Light", "Helvetica", "Arial", sans-serif',
		},
		h5: {
			fontSize: '1.5rem',
			fontFamily: '"Avenir Next LT W04 Light", "Helvetica", "Arial", sans-serif',
		},
		h4: {
			fontFamily: '"Avenir Next LT W04 Light", "Helvetica", "Arial", sans-serif',
			fontSize: '1.5rem',
			padding: 16,
		},
	},
	spacing: [0, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096],
	props: {
		MuiButton: {
			size: 'medium',
		},
		MuiListItem: {
			dense: true,
		},
		MuiIconButton: {
			size: 'small',
		},
		MuiTypography: {
			variantMapping: {
				h1: 'h2',
				h2: 'h2',
				h3: 'h2',
				h4: 'h2',
				h5: 'h2',
				h6: 'h2',
				subtitle1: 'h2',
				subtitle2: 'h2',
				body1: 'span',
				body2: 'span',
			},
		},
		MuiFab: {
			size: 'small',
			color: 'primary'
		},
		MuiTable: {
			size: 'medium',
		},
	},
	overrides: {
		MuiCssBaseline: {
			'@global': {
				'@font-face': [AvenirFont,RobotoFont],
			},
		},
		MuiListItemIcon:{
			root: {
				color: 'inherit'
			}
		},
		MuiTabs: {
			root:{
				minHeight: minHeightForTabsAndBars,
				backgroundColor: mainPrimaryColorLight,
				color:primaryContrastColor,
			}
		},
		MuiTab: {
			root:{
				minHeight: minHeightForTabsAndBars,
				backgroundColor: mainPrimaryColorLight,
				fontSize: '1.2rem',
				fontFamily: '"Avenir Next LT W04 Light", "Helvetica", "Arial", sans-serif',
				textTransform:"none",
				fontWeight:"light"
			}

		},
		MuiCardActions: {
			root:{
				padding: 16,
				width: '100%',
			}
		},
		MuiCardHeader: {
			root:{
				padding: 16,
				color: headerText,
			}
		},
		MuiCardContent: {
			root:{
				height: '100%'
			},
		},
		MuiAppBar: {
			root:{
				minHeight: minHeightForTabsAndBars,
			},
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
					backgroundColor: headerBackground,
				},
			},
		},
	},
});

export default themeLight;
