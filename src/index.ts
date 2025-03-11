import type { Preset } from 'unocss';
import { definePreset } from 'unocss';

export function presetRyoppippi(): Preset {
	return definePreset({
		name: 'unocss-preset-starter',

		shortcuts: [
			{
				frow: 'flex flex-row',
				fcol: 'flex flex-col',
				...{
					fxc: 'flex justify-center',
					fxs: 'flex justify-start',
					fxe: 'flex justify-end',
					fxb: 'flex justify-between',
					fxa: 'flex justify-around',
				},
				...{
					fyc: 'flex items-center',
					fys: 'flex items-start',
					fye: 'flex items-end',
					fyb: 'flex items-baseline',
				},
				fcc: 'flex justify-center items-center',
				...{
					fw: 'flex flex-wrap',
					fwr: 'flex flex-wrap-reverse',
				},
			},
			{
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
	});
}
