import type {
  Renderer,
  PartialStoryFn as StoryFunction,
  StoryContext,
} from '@storybook/types';
import { useEffect, useGlobals, useMemo } from '@storybook/preview-api';
import { PALETTE } from './constants';

export const withGlobals = (
  StoryFn: StoryFunction<Renderer>,
  context: StoryContext<Renderer>
) => {
  const [globals] = useGlobals();
  const palette = useMemo(
    () => ({
      ...Object.entries(PALETTE.primary).reduce(
        (result, [key, value]) => ({
          ...result,
          [`primary-${key}`]: {
            value: globals[value.key],
            cssVariable: value.variable,
          },
        }),
        {} as Record<string, { value: string; cssVariable: string }>
      ),
      ...Object.entries(PALETTE.secondary).reduce(
        (result, [key, value]) => ({
          ...result,
          [`secondary-${key}`]: {
            value: globals[value.key],
            cssVariable: value.variable,
          },
        }),
        {} as Record<string, { value: string; cssVariable: string }>
      ),
      ...Object.entries(PALETTE.error).reduce(
        (result, [key, value]) => ({
          ...result,
          [`error-${key}`]: {
            value: globals[value.key],
            cssVariable: value.variable,
          },
        }),
        {} as Record<string, { value: string; cssVariable: string }>
      ),
      ...Object.entries(PALETTE.warning).reduce(
        (result, [key, value]) => ({
          ...result,
          [`warning-${key}`]: {
            value: globals[value.key],
            cssVariable: value.variable,
          },
        }),
        {} as Record<string, { value: string; cssVariable: string }>
      ),
      ...Object.entries(PALETTE.success).reduce(
        (result, [key, value]) => ({
          ...result,
          [`success-${key}`]: {
            value: globals[value.key],
            cssVariable: value.variable,
          },
        }),
        {} as Record<string, { value: string; cssVariable: string }>
      ),
      ...Object.entries(PALETTE.text).reduce(
        (result, [key, value]) => ({
          ...result,
          [`text-${key}`]: {
            value: globals[value.key],
            cssVariable: value.variable,
          },
        }),
        {} as Record<string, { value: string; cssVariable: string }>
      ),
      ...Object.entries(PALETTE.action).reduce(
        (result, [key, value]) => ({
          ...result,
          [`action-${key}`]: {
            value: globals[value.key],
            cssVariable: value.variable,
          },
        }),
        {} as Record<string, { value: string; cssVariable: string }>
      ),
      ...Object.entries(PALETTE.background).reduce(
        (result, [key, value]) => ({
          ...result,
          [`background-${key}`]: {
            value: globals[value.key],
            cssVariable: value.variable,
          },
        }),
        {} as Record<string, { value: string; cssVariable: string }>
      ),
      ...Object.entries(PALETTE.border).reduce(
        (result, [key, value]) => ({
          ...result,
          [`border-${key}`]: {
            value: globals[value.key],
            cssVariable: value.variable,
          },
        }),
        {} as Record<string, { value: string; cssVariable: string }>
      ),
      ...Object.entries(PALETTE.divider).reduce(
        (result, [key, value]) => ({
          ...result,
          [`divider-${key}`]: {
            value: globals[value.key],
            cssVariable: value.variable,
          },
        }),
        {} as Record<string, { value: string; cssVariable: string }>
      ),
      ...Object.entries(PALETTE.overlay).reduce(
        (result, [key, value]) => ({
          ...result,
          [`overlay-${key}`]: {
            value: globals[value.key],
            cssVariable: value.variable,
          },
        }),
        {} as Record<string, { value: string; cssVariable: string }>
      ),
    }),
    [globals]
  );

  useEffect(() => {
    const selector = '#storybook-root';
    const rootElements = document.querySelectorAll(selector);
    const firstRoot = rootElements[0] as HTMLDivElement;

    if (firstRoot) {
      Object.entries(palette).forEach(([_, v]) => {
        firstRoot.style.setProperty(v.cssVariable, v.value);
      });
    }
  }, [palette]);

  return StoryFn();
};
