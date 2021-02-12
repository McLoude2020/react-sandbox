import {createMuiTheme} from "@material-ui/core/styles";

const palletType = "dark";

const mainPrimaryColor = '#064063';
const mainSecondaryColor = '#4DC9FF';
const mainErrorColor = '#E31738';


const textPrimaryColor = '#f1f0f0';
const textSecondaryColor = '#dedede';

const primaryContrastColor = '#064063';
const secondaryContrastColor = '#064063';
const errorContrastColor = '#f1f0f0';

const paperBackground = '#0e3e5a';
const palletBackground = '#05182f';
const headerBackground = '#042c45';


const mainBorderColor = '#213a56';

const headerText = '#4DC9FF';

const primaryTextButtonColor = '#4DC9FF';
const secondaryTextButtonColor = '#fff';
const primaryTextButtonColorOver = '#36a2d2';
const secondaryTextButtonColorOver = '#cecece';

const primaryBackgroundButtonColor = '#4DC9FF';
const secondaryBackgroundButtonColor = '#fff';
const primaryBackgroundButtonColorOver = '#36a2d2';
const secondaryBackgroundButtonColorOver = '#cecece';

const tabIndicatorColor = '#4DC9FF'

const minHeightForTabsAndBars = 64;
const inputColor = 'secondary';



const themeDark = createMuiTheme( {
	shape:{
		borderRadius: 3,
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
			contrastText: primaryContrastColor,
		},
		secondary: {
			main: mainSecondaryColor,
			contrastText: secondaryContrastColor,
		},

		error: {
			main: mainErrorColor,
			contrastText: errorContrastColor,
		},

		text: {
			primary: textPrimaryColor,
			secondary: textSecondaryColor,
			header: headerText,
		},
	},
	typography: {

		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		h6: {
			fontSize: '1rem',
			textTransform: 'uppercase',
		},
		h5: {
			fontSize: '1.5rem',
		},
		h4: {
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
			color: "primary"
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
			color: 'secondary'
		},
		MuiTable: {
			size: 'medium',
		},
		MuiInputBase:{
			color: inputColor
		},
		MuiInputLabel:{
			color: inputColor
		}
	},
	overrides: {


		MuiListItemIcon:{
			root: {
				color: mainSecondaryColor
			}
		},
		MuiTabs: {
			indicator:{
				borderBottom: '2px solid ' + tabIndicatorColor,
				color: tabIndicatorColor

			},
			root:{
				minHeight: minHeightForTabsAndBars,
			}
		},
		MuiTab: {
			root:{
				minHeight: minHeightForTabsAndBars
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
				backgroundColor: headerBackground,
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
/*
		MuiTableRow: {
			root: {
				'&:nth-of-type(odd)': {
					backgroundColor: headerBackground,
				},
			},
		},
		MuiTablePagination:{

			root: {
				backgroundColor: headerBackground,
			},
		},
		MuiTableCell:{
			root: {
				borderBottom: '1px solid ' + mainBorderColor,
			},
			head: {
				color:headerText,
				background: headerBackground,
				minHeight: minHeightForTabsAndBars,
			},
			stickyHeader: {
				color:headerText,
				background: headerBackground,
				minHeight: minHeightForTabsAndBars,
			}
		},
		MuiTabs: {
			indicator:{
				borderBottom: '2px solid ' + tabIndicatorColor,
				color: tabIndicatorColor

			},
			root:{
				minHeight: minHeightForTabsAndBars,
			}
		},
		MuiTab: {
			root:{
				minHeight: minHeightForTabsAndBars
			}

		},

		MuiCard: {
			root:{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
			},
		},

		MuiCardActions: {
			root:{
				boxSizing: 'border-box',
				padding: 16,
				width: '100%',
			}
		},
		MuiCardHeader: {
			root:{
				boxSizing: 'border-box',
				padding: 16,
				width: '100%',
				backgroundColor: headerBackground,
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

		MuiButton:{
			textPrimary: {
				color: primaryTextButtonColor,
				'&:hover': {
					color: primaryTextButtonColorOver,
				},
				'&:focus': {
					color: primaryTextButtonColorOver,
				},
			},
			textSecondary: {
				color: secondaryTextButtonColor,
				'&:hover': {
					color: secondaryTextButtonColorOver,
				},
				'&:focus': {
					color: secondaryTextButtonColorOver,
				},
			},
			containedPrimary:{
				backgroundColor: primaryBackgroundButtonColor,
				color: primaryContrastColor,
				'&:hover': {
					backgroundColor: primaryBackgroundButtonColorOver,
				},
				'&:focus': {
					backgroundColor: primaryBackgroundButtonColorOver,
				},
			},
			containedSecondary:{
				backgroundColor: secondaryBackgroundButtonColor,
				color: secondaryContrastColor,
				'&:hover': {
					backgroundColor: secondaryBackgroundButtonColorOver,
				},
				'&:focus': {
					backgroundColor: secondaryBackgroundButtonColorOver,
				},

			},
			outlinedPrimary:{
				borderColor: primaryBackgroundButtonColor,
				color: primaryTextButtonColor,
				'&:hover': {
					borderColor: primaryBackgroundButtonColorOver,
					color: primaryTextButtonColorOver,
				},
				'&:focus': {
					borderColor: primaryBackgroundButtonColorOver,
					color: primaryTextButtonColorOver,
				},
			},
			outlinedSecondary:{
				borderColor: secondaryBackgroundButtonColor,
				color: secondaryTextButtonColor,

				'&:hover': {
					borderColor: secondaryBackgroundButtonColorOver,
					color: secondaryTextButtonColorOver,
				},
				'&:focus': {
					borderColor: secondaryBackgroundButtonColorOver,
					color: secondaryTextButtonColorOver,
				},
			}

		},
		MuiIconButton:{
			colorPrimary: {
				color: primaryTextButtonColor,
			},
			colorSecondary: {
				color: secondaryTextButtonColor,
			}
		},
		*/

	},
});

export default themeDark;