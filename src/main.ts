import { Plugin } from 'obsidian';
import {WeSearchSettings, DefaultWeSearchSettings, WeSearchTab} from 'src/setting';

export default class WeSearch extends Plugin {
	settings: WeSearchSettings;
	async onload() {
		await this.loadSettings();
		this.addSettingTab(new WeSearchTab(this.app, this));
	}

	async loadSettings() {
		this.settings = Object.assign({}, DefaultWeSearchSettings, await this.loadData());
	}

	async saveSettings() {
		if (this.settings.enableSemantra) {
			this.saveData(this.settings);
		}
		if (this.settings.enableKhoj) {
			this.saveData(this.settings);
		}
		if (this.settings.enableRg) {
			this.saveData(this.settings);
		}
	}
}
