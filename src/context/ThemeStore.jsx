import {action, decorate, observable} from "mobx"
import themeBarmenia from "../themes/themeBarmenia"
import themeDPC from "../themes/themeDark"
import themePKM from "../themes/themeDark"
import themeForumFinanz from "../themes/themeDark"
import themeIMPACT from "../themes/themeDark"
import themeFBD from "../themes/themeDark"

class ThemeStore {
	darkState = false;
	themeState = 'Barmenia';

	constructor() {
		this.buildTheme();
	}

	buildTheme() {
		switch (this.themeState) {
			case 'Barmenia':
				this.selectedTheme = themeBarmenia;
				break;
			case 'DPC':
				this.selectedTheme = themeDPC;
				break;
			case 'ForumFinanz':
				this.selectedTheme = themeForumFinanz;
				break;
			case 'FBD':
				this.selectedTheme = themeFBD;
				break;
			case 'PKM':
				this.selectedTheme = themePKM;
				break;
			case 'IMPACT':
				this.selectedTheme = themeIMPACT;
				break;
			default:
				this.selectedTheme = themeBarmenia;
				break;
		}
	}

	handleThemeChange = (e,theme) => {
		this.themeState = theme;
		this.buildTheme();
	};
}

decorate(ThemeStore, {
	themeState: observable,
	selectedTheme: observable,
	handleThemeChange: action,
});
export default ThemeStore;
