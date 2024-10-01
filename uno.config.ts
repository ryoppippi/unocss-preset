import { defineConfig, presetUno } from 'unocss';
import { presetRyoppippi } from './src';

// Just for Vscode Extension

export default defineConfig({
	presets: [
		presetUno(),
		presetRyoppippi({
			span: 24,
		}),
	],
});
