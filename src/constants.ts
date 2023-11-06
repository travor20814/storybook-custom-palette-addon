export const ADDON_ID = 'storybook/custom-palette-variables';
export const PANEL_ID = `${ADDON_ID}/panel`;
export const PARAM_KEY = `${ADDON_ID}/params`;

export type MainScope =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'success';
export type MainScopeCategory =
  | 'main'
  | 'light'
  | 'dark'
  | 'on'
  | 'hover'
  | 'active';

type Schema = Record<
  MainScope,
  Record<
    MainScopeCategory,
    {
      key: string;
      variable: string;
      note?: string;
      effect?: { key: string; alpha: number };
    }
  >
>;

function generatePaletteName(scope: MainScope) {
  const mainKey = `${scope.substring(0, 1)}m`;
  const lightKey = `${scope.substring(0, 1)}l`;
  const darkKey = `${scope.substring(0, 1)}d`;
  const onKey = `${scope.substring(0, 1)}o`;
  const hoverKey = `${scope.substring(0, 1)}h`;
  const activeKey = `${scope.substring(0, 1)}a`;

  return {
    [scope]: {
      main: {
        key: mainKey,
        variable: `--mzn-color-${scope}`,
        effect: { key: activeKey, alpha: 0.2 },
      },
      light: {
        key: lightKey,
        variable: `--mzn-color-${scope}-light`,
        effect: { key: hoverKey, alpha: 0.15 },
      },
      dark: {
        key: darkKey,
        variable: `--mzn-color-${scope}-dark`,
      },
      on: {
        key: onKey,
        variable: `--mzn-color-on-${scope}`,
      },
      hover: {
        key: hoverKey,
        variable: `--mzn-color-${scope}-hover-bg`,
        note: `(${scope}.light, 0.15)`,
      },
      active: {
        key: activeKey,
        variable: `--mzn-color-${scope}-active-bg`,
        note: `(${scope}.main, 0.2)`,
      },
    },
  } as Schema;
}

/** Palette */
export const PALETTE = {
  ...generatePaletteName('primary'),
  ...generatePaletteName('secondary'),
  ...generatePaletteName('error'),
  ...generatePaletteName('warning'),
  ...generatePaletteName('success'),
  text: {
    primary: {
      key: 'tp',
      variable: '--mzn-color-text-primary',
    },
    secondary: {
      key: 'ts',
      variable: '--mzn-color-text-secondary',
    },
    disabled: {
      key: 'td',
      variable: '--mzn-color-text-disabled',
    },
  },
  action: {
    active: {
      key: 'aa',
      variable: '--mzn-color-action-active',
      effect: { key: 'ob', alpha: 0.5 }, // overlay background
    },
    inactive: {
      key: 'ai',
      variable: '--mzn-color-action-inactive',
    },
    disabled: {
      key: 'ad',
      variable: '--mzn-color-action-disabled',
    },
    disabledBackground: {
      key: 'adb',
      variable: '--mzn-color-action-disabled-bg',
    },
  },
  background: {
    background: {
      key: 'bb',
      variable: '--mzn-color-bg',
    },
    surface: {
      key: 'bs',
      variable: '--mzn-color-surface',
      effect: { key: 'os', alpha: 0.9 }, // overlay surface
    },
  },
  border: {
    border: {
      key: 'bor',
      variable: '--mzn-color-border',
    },
  },
  divider: {
    divider: {
      key: 'dd',
      variable: '--mzn-color-divider',
    },
  },
  overlay: {
    background: {
      key: 'ob',
      variable: '--mzn-color-overlay-bg',
      note: '(action.active, 0.5)',
    },
    surface: {
      key: 'os',
      variable: '--mzn-color-overlay-surface-bg',
      note: '(surface, 0.9)',
    },
  },
};

/** Rytass Theme */
export const rytassLightTheme = {
  primary: {
    main: '#465BC7',
    light: '#778DE8',
    dark: '#2D2D9E',
    on: '#FFFFFF',
  },
  secondary: {
    main: '#383838',
    light: '#6A6A6A',
    dark: '#161616',
    on: '#FFFFFF',
  },
  error: {
    main: '#DB2B1D',
    light: '#F75142',
    dark: '#C00F03',
    on: '#FFFFFF',
  },
  warning: {
    main: '#F7AC38',
    light: '#FDD948',
    dark: '#F1842B',
    on: '#FFFFFF',
  },
  success: {
    main: '#2E8D36',
    light: '#42AE4A',
    dark: '#0C5D19',
    on: '#FFFFFF',
  },
  text: {
    primary: '#161616',
    secondary: '#8F8F8F',
    disabled: '#BCBCBC',
  },
  action: {
    active: '#161616',
    inactive: '#8F8F8F',
    disabled: '#BCBCBC',
    disabledBackground: '#E5E5E5',
  },
  background: '#F4F4F4',
  surface: '#FFFFFF',
  border: '#D9D9D9',
  divider: '#F2F2F2',
};

export const rytassDarkTheme = {
  primary: {
    main: '#667cd8',
    light: '#92a7ff',
    dark: '#3e60d0',
    on: '#ffffff',
  },
  secondary: {
    main: '#6a6a6a',
    light: '#b2b2b2',
    dark: '#4a4a4a',
    on: '#ffffff',
  },
  error: {
    main: '#db2b1d',
    light: '#f75142',
    dark: '#c00f03',
    on: '#ffffff',
  },
  warning: {
    main: '#f7ac38',
    light: '#fdd948',
    dark: '#f1842b',
    on: '#ffffff',
  },
  success: {
    main: '#2e8d36',
    light: '#42ae4a',
    dark: '#0c5d19',
    on: '#ffffff',
  },
  text: {
    primary: '#ffffff',
    secondary: '#a8a8a8',
    disabled: '#595959',
  },
  action: {
    active: '#ffffff',
    inactive: '#a8a8a8',
    disabled: '#595959',
    disabledBackground: '#393939',
  },
  background: '#161616',
  surface: '#242424',
  border: '#7c7c7c',
  divider: '#494949',
};
