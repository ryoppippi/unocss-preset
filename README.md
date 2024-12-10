# @ryoppippi/unocss-preset

[![JSR](https://jsr.io/badges/@ryoppippi/unocss-preset)](https://jsr.io/@ryoppippi/unocss-preset)

[@ryoppippi](https://ryoppippi.com/gh)'s opinionated [Unocss](https://unocss.com) preset.

## Usage

```shell
pnpm i -D unocss-preset-starter unocss
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
