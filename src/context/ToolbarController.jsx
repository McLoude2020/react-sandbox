import {decorate, observable} from "mobx";

export class ToolbarController {
	title = "Appname "
	showMenu = true
	changeToolbar(params) {
		Object.assign(this, params);
	}
}

decorate(ToolbarController, {
	title: observable,
	showMenu: observable,
})
