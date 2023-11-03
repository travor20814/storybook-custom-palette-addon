import type { Renderer, PartialStoryFn as StoryFunction, StoryContext } from '@storybook/types';
import { useEffect, useGlobals, useMemo } from '@storybook/preview-api';
import { PRIMARY_COLOR_KEY, SECONDARY_COLOR_KEY } from './constants';

export const withGlobals = (StoryFn: StoryFunction<Renderer>, context: StoryContext<Renderer>) => {
  const [globals] = useGlobals();
  const palette = useMemo(() => ({
    primary: globals[PRIMARY_COLOR_KEY],
    secondary: globals[SECONDARY_COLOR_KEY],
  }), [globals[PRIMARY_COLOR_KEY], globals[SECONDARY_COLOR_KEY]]);

  useEffect(() => {
    const selector = '#storybook-root';
    const rootElements = document.querySelectorAll(selector);
    const firstRoot = rootElements[0] as HTMLDivElement;

    if (firstRoot) {
      firstRoot.style.setProperty(`${PRIMARY_COLOR_KEY}`, palette.primary);
      firstRoot.style.setProperty(`${SECONDARY_COLOR_KEY}`, palette.secondary);
    }
  }, [palette]);

  return StoryFn();
};