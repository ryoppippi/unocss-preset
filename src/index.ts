import type { PresetFactory } from '@unocss/core';
import { definePreset } from '@unocss/core';

export type Options = {
	[kew: string]: unknown;
};

export const presetRyoppippi: PresetFactory<object, Options> = definePreset((_options: Options = {}) => {
	return {
		name: 'unocss-preset-starter',

		shortcuts: [
			{
				fcol: 'flex flex-col',
				fw: 'flex flex-wrap',
				fxc: 'flex justify-center',
				fyc: 'flex items-center',
				fcc: 'fxc fyc',
				gc: 'grid place-content-center',
				gcc: 'gc place-items-center',
			},
			[/^fcol-(\w+)-row$/, ([_, size]) => `fcol ${size}:flex-row`],
			[/^gcc-(\w+)$/, ([_, flowDirection]) => `gcc grid-flow-${flowDirection}`],
		],

		rules: [
			[/^sliding-animation$/, function* ([,], { symbols }) {
				yield `
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
`;

				yield {
					'opacity': 0,
					'animation': `enter 0.6s both`,
					'animation-iteration-count': 1,
					'animation-delay': `calc(var(--stagger, 0) * var(--delay, 80ms) + var(--start, 0ms))`,
				};

				yield {
					[symbols.parent]: `@media (prefers-reduced-motion: reduce)`,
					animation: 'none',
				};
			}],
		],
	};
});
