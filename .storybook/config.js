import { configure } from '@kadira/storybook';

function loadStories() {
  [
    'issue',
    'issue-list',
    'label',
    'label-list',
    'repo'
  ].forEach(component => require(`../src/components/${component}/stories`));
}

configure(loadStories, module);
