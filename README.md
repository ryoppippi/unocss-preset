# @ryoppippi/unocss-preset

[![JSR](https://jsr.io/badges/@ryoppippi/unocss-preset)](https://jsr.io/@ryoppippi/unocss-preset)

[@ryoppippi](https://ryoppippi.com/gh)'s opinionated [Unocss](https://unocss.com) preset.

## Usage

```shell
pnpm i -D unocss-preset-starter unocss
```

```ts
// uno.config.ts
import { defineConfig } from 'unocss';
import { presetRyoppippi } from '@ryoppippi/unocss-preset';

export default defineConfig({
	presets: [
		// ...
		presetRyoppippi(),
	],
});
```

## License

[MIT](./LICENSE)
