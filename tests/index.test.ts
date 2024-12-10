import { createGenerator, presetUno } from 'unocss';
import { describe, expect, it } from 'vitest';
import { presetRyoppippi } from '../src';

it('presetLength', async () => {
	const unoPresetOnly = await createGenerator({
		presets: [presetRyoppippi()],
	});
	const presets = unoPresetOnly.config.presets;
	expect(presets).toHaveLength(1);
});

const uno = await createGenerator({
	presets: [
		presetRyoppippi(),
		presetUno(),
	],
});

describe('shortcuts', () => {
	describe('flex', () => {
		it('fcol', async () => {
			const { css } = await uno.generate('fcol', { preflights: false });
			expect(css).toMatchInlineSnapshot(`
				"/* layer: shortcuts */
				.fcol{display:flex;flex-direction:column;}"
			`);
		});
		it('fxc', async () => {
			const { css } = await uno.generate('fxc', { preflights: false });
			expect(css).toMatchInlineSnapshot(`
				"/* layer: shortcuts */
				.fxc{display:flex;justify-content:center;}"
			`);
		});
		it('fyc', async () => {
			const { css } = await uno.generate('fyc', { preflights: false });
			expect(css).toMatchInlineSnapshot(`
				"/* layer: shortcuts */
				.fyc{display:flex;align-items:center;}"
			`);
		});
		it('fcc', async () => {
			const { css } = await uno.generate('fcc', { preflights: false });
			expect(css).toMatchInlineSnapshot(`
				"/* layer: shortcuts */
				.fcc{display:flex;align-items:center;justify-content:center;}"
			`);
		});
		it('fcol-foo-row', async () => {
			const { css } = await uno.generate('fyc', { preflights: false });
			expect(css).toMatchInlineSnapshot(`
				"/* layer: shortcuts */
				.fyc{display:flex;align-items:center;}"
			`);
		});
	});

	describe('grid', () => {
		it('gcc', async () => {
			const { css } = await uno.generate('gcc', { preflights: false });
			expect(css).toMatchInlineSnapshot(`
				"/* layer: shortcuts */
				.gcc{display:grid;place-content:center;place-items:center;}"
			`);
		});
	});
});

describe('rules', () => {
	it('sliding-animation', async () => {
		const { css } = await uno.generate('sliding-animation', { preflights: false });
		expect(css).toMatchInlineSnapshot(`
			"/* layer: default */

			@keyframes enter {
				0% {
					opacity: 0;
					transform: translateY(10px);
				}

				to {
					opacity: 1;
					transform: none;
				}
			}

			.sliding-animation{opacity:0;animation:enter 0.6s both;animation-iteration-count:1;animation-delay:calc(var(--stagger, 0) * var(--delay, 80ms) + var(--start, 0ms));}
			@media (prefers-reduced-motion: reduce){
			.sliding-animation{animation:none;}
			}"
		`);
	});
});
