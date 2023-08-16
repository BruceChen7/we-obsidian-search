import { PluginSettingTab, App} from "obsidian";
import WeSearch from "src/main";

export interface WeSearchSettings {
	enableRg: boolean;
	enableKhoj: boolean;
	enableSemantra: boolean;
}

export const DefaultWeSearchSettings: WeSearchSettings = {
	enableRg: true,
	enableKhoj: true,
	enableSemantra:true, 
}


export class WeSearchTab extends PluginSettingTab {
	plugin: WeSearch;
	constructor(app: App, plugin: WeSearch) {
		super(app, plugin);
		this.plugin = plugin;
	}
	display() {
		const {containerEl} = this;
		containerEl.empty();
	}

}
