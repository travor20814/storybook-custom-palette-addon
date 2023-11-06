/**
 * A decorator is a way to wrap a story in extra “rendering” functionality. Many addons define decorators
 * in order to augment stories:
 * - with extra rendering
 * - gather details about how a story is rendered
 *
 * When writing stories, decorators are typically used to wrap stories with extra markup or context mocking.
 *
 * https://storybook.js.org/docs/react/writing-stories/decorators
 */
import type { Renderer, ProjectAnnotations } from '@storybook/types';
import { PARAM_KEY, PALETTE, rytassLightTheme } from './constants';
import { withGlobals } from './withGlobals';
import { hex6ToHex8 } from './utils';

const preview: ProjectAnnotations<Renderer> = {
  decorators: [withGlobals],
  globals: {
    [PARAM_KEY]: false,
    /** primary */
    [PALETTE.primary.main.key]: rytassLightTheme.primary.main,
    [PALETTE.primary.light.key]: rytassLightTheme.primary.light,
    [PALETTE.primary.dark.key]: rytassLightTheme.primary.dark,
    [PALETTE.primary.on.key]: rytassLightTheme.primary.on,
    [PALETTE.primary.hover.key]: hex6ToHex8(
      rytassLightTheme.primary.light,
      0.15
    ),
    [PALETTE.primary.active.key]: hex6ToHex8(
      rytassLightTheme.primary.main,
      0.2
    ),
    /** secondary */
    [PALETTE.secondary.main.key]: rytassLightTheme.secondary.main,
    [PALETTE.secondary.light.key]: rytassLightTheme.secondary.light,
    [PALETTE.secondary.dark.key]: rytassLightTheme.secondary.dark,
    [PALETTE.secondary.on.key]: rytassLightTheme.secondary.on,
    [PALETTE.secondary.hover.key]: hex6ToHex8(
      rytassLightTheme.secondary.light,
      0.15
    ),
    [PALETTE.secondary.active.key]: hex6ToHex8(
      rytassLightTheme.secondary.main,
      0.2
    ),
    /** error */
    [PALETTE.error.main.key]: rytassLightTheme.error.main,
    [PALETTE.error.light.key]: rytassLightTheme.error.light,
    [PALETTE.error.dark.key]: rytassLightTheme.error.dark,
    [PALETTE.error.on.key]: rytassLightTheme.error.on,
    [PALETTE.error.hover.key]: hex6ToHex8(rytassLightTheme.error.light, 0.15),
    [PALETTE.error.active.key]: hex6ToHex8(rytassLightTheme.error.main, 0.2),
    /** warning */
    [PALETTE.warning.main.key]: rytassLightTheme.warning.main,
    [PALETTE.warning.light.key]: rytassLightTheme.warning.light,
    [PALETTE.warning.dark.key]: rytassLightTheme.warning.dark,
    [PALETTE.warning.on.key]: rytassLightTheme.warning.on,
    [PALETTE.warning.hover.key]: hex6ToHex8(
      rytassLightTheme.warning.light,
      0.15
    ),
    [PALETTE.warning.active.key]: hex6ToHex8(
      rytassLightTheme.warning.main,
      0.2
    ),
    /** success */
    [PALETTE.success.main.key]: rytassLightTheme.success.main,
    [PALETTE.success.light.key]: rytassLightTheme.success.light,
    [PALETTE.success.dark.key]: rytassLightTheme.success.dark,
    [PALETTE.success.on.key]: rytassLightTheme.success.on,
    [PALETTE.success.hover.key]: hex6ToHex8(
      rytassLightTheme.success.light,
      0.15
    ),
    [PALETTE.success.active.key]: hex6ToHex8(
      rytassLightTheme.success.main,
      0.2
    ),
    /** Typography */
    [PALETTE.text.primary.key]: rytassLightTheme.text.primary,
    [PALETTE.text.secondary.key]: rytassLightTheme.text.secondary,
    [PALETTE.text.disabled.key]: rytassLightTheme.text.disabled,
    /** Action */
    [PALETTE.action.active.key]: rytassLightTheme.action.active,
    [PALETTE.action.inactive.key]: rytassLightTheme.action.inactive,
    [PALETTE.action.disabled.key]: rytassLightTheme.action.disabled,
    [PALETTE.action.disabledBackground.key]:
      rytassLightTheme.action.disabledBackground,
    /** Background */
    [PALETTE.background.background.key]: rytassLightTheme.background,
    [PALETTE.background.surface.key]: rytassLightTheme.surface,
    /** Border */
    [PALETTE.border.border.key]: rytassLightTheme.border,
    /** Divider */
    [PALETTE.divider.divider.key]: rytassLightTheme.divider,
    /** Overlay */
    [PALETTE.overlay.background.key]: hex6ToHex8(
      rytassLightTheme.action.active,
      0.5
    ),
    [PALETTE.overlay.surface.key]: hex6ToHex8(rytassLightTheme.surface, 0.9),
  },
};

export default preview;
