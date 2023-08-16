import { Plugin } from 'obsidian';
import {WeSearchSettings, DefaultWeSearchSettings} from 'src/setting';

export default class WeSearch extends Plugin {
	settings: WeSearchSettings;
	async onload() {
		await this.loadSettings();
	}

	async loadSettings() {
		this.settings = Object.assign({}, DefaultWeSearchSettings, await this.loadData());
	}
}
