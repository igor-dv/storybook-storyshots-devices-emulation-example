import { storiesOf } from '@storybook/html';

import './style.css';

storiesOf('Example', module)
  .add('Div', () => {
    return '<div>Here is a first story in div</div>';
  })
  .add('Button', () => {
    return '<button>Button</button>';
  })
  .add('Table', () => {
    return '<table><tr><td>td</td><td>td</td></tr><tr><td>td</td><td>td</td></tr></table>';
  });
