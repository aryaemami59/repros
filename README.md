## Overview

The `experimentalDts` option does not work with TypeScript's [`NodeNext`](https://www.typescriptlang.org/docs/handbook/modules/reference.html#node16-nodenext-1) module resolution.

## Steps to Reproduce

1. Clone this repository by running:

```bash
git clone -b experimentalDts-NodeNext https://github.com/aryaemami59/repros
```

2. Install the dependencies by running:

```bash
yarn install
```

3. Run the following command:

```bash
yarn run build:node-next
```

4. Inspect the output in the `dist` directory.
