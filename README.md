# @ryoppippi/unocss-preset

[@ryoppippi](https://ryoppippi.com/gh)'s opinionated [Unocss](https://unocss.com) preset.

## Features

- 🔥 Description of the preset

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
