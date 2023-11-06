# Storybook Addon storybook-rytass-palette

Customizing storybook global css variables

### Development scripts

- `yarn start` runs babel in watch mode and starts Storybook
- `yarn build` build and package your addon code
- `yarn release` release packages

### Installation

Required `storybook v7` or above

```shell
yarn add -D storybook-rytass-palette
```

### Usage

`.storybook/main.ts`

```javascript
const config = {
  addons: [
    // addons
    'storybook-rytass-palette',
  ],
};
```
