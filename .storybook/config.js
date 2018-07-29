import { configure } from '@storybook/html';

function loadStories() {
  require('../src/story');
}

configure(loadStories, module);
