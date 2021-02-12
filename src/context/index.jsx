import React from 'react'
import {useLocalStore} from "mobx-react";
import ThemeStore from "./ThemeStore";
import {ToolbarController} from "./ToolbarController";

function createNewStore() {
	return {
		//global
		toolbarHandler: new ToolbarController(),
		themeStore: new ThemeStore(),
	}
}
//global and default store
export const storesContext = React.createContext(createNewStore())

//provider for local stores
export const StoresProvider = ({ children }) => {
	const store = useLocalStore(createNewStore);
	return <storesContext.Provider value={store}>{children}</storesContext.Provider>

}
