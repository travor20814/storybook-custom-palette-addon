import type { Renderer, PartialStoryFn as StoryFunction, StoryContext } from '@storybook/types';
import { useEffect } from '@storybook/preview-api';

export const withGlobals = (StoryFn: StoryFunction<Renderer>, context: StoryContext<Renderer>) => {
  useEffect(() => {
    const selector = '.sb-show-main';
    const ele = document.getElementsByClassName(selector);

    console.log(ele);

  }, []);

  return StoryFn();
};