# @ryoppippi/unocss-preset

[![npm version](https://img.shields.io/npm/v/@ryoppippi/unocss-preset?color=yellow)](https://npmjs.com/package/@ryoppippi/unocss-preset)
[![npm downloads](https://img.shields.io/npm/dm/@ryoppippi/unocss-preset?color=yellow)](https://npmjs.com/package/@ryoppippi/unocss-preset)

[@ryoppippi](https://ryoppippi.com/gh)'s opinionated [Unocss](https://unocss.com) preset.

## Usage

```shell
pnpm i -D @ryoppippi/unocss-preset unocss
```

```ts
import { presetRyoppippi } from '@ryoppippi/unocss-preset';
// uno.config.ts
import { defineConfig } from 'unocss';

export default defineConfig({
	presets: [
		// ...
		presetRyoppippi(),
	],
});
```

## Acknowledgements

- [unocss-preset-useful](https://github.com/unpreset/unocss-preset-useful) for inspiration
- [UnoCSS](https://unocss.com) for the amazing tool

## License

[MIT](./LICENSE)
