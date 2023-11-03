export const ADDON_ID = 'storybook/custom-palette-variables';
export const PANEL_ID = `${ADDON_ID}/panel`;
export const PARAM_KEY = `${ADDON_ID}/params`;

/** @TODO */
function generatePaletteName(scope: 'primary' | 'secondary' | 'error' | 'warning' | 'success') {
  return {
    [scope]: {
      main: { key: `${scope.substring(0, 2)}m`, variable: `--mzn-color-${scope}` },
      light: { key: `${scope.substring(0, 2)}l`, variable: `--mzn-color-${scope}-light` },
      dark: { key: `${scope.substring(0, 2)}d`, variable: `--mzn-color-${scope}-dark` },
    },
  };
}

/** Palette */
/** @TODO */
export const PALETTE = {
  ...generatePaletteName('primary'),
  ...generatePaletteName('secondary'),
  ...generatePaletteName('error'),
  ...generatePaletteName('warning'),
  ...generatePaletteName('success'),
};

export const PRIMARY_COLOR_KEY = '--primary';
export const SECONDARY_COLOR_KEY = '--secondary';