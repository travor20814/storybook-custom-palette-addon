import type { Renderer, PartialStoryFn as StoryFunction, StoryContext } from '@storybook/types';
import { useEffect, useGlobals, useMemo } from '@storybook/preview-api';
import { PALETTE } from './constants';

export const withGlobals = (StoryFn: StoryFunction<Renderer>, context: StoryContext<Renderer>) => {
  const [globals] = useGlobals();
  const palette = useMemo(() => ({
    ...Object.entries(PALETTE.primary).reduce((result, [key, value]) => ({
      ...result,
      [`primary-${key}`]: { value: globals[value.key], cssVariable: value.variable }
    }), {} as Record<string, { value: string; cssVariable: string }>),
  }), [globals]);

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