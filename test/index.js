import React from 'react';
import {createRenderer} from 'react-addons-test-utils';
import tape from 'tape';
import addAssertions from 'extend-tape';
import jsxIncludes from '../src';

const test = addAssertions(tape, {jsxIncludes});
const renderer = createRenderer();

const MyComponent = ({color}) => {
  const className = `box-color-${color}`;
  return (
    <div className={className}></div>
  );
};

test('asserts one jsx string is included in another', (t) => {
  renderer.render(<MyComponent color='red' />);
  const actual = renderer.getRenderOutput();

  t.jsxIncludes(actual, <div><div><div className='box-color-red'></div></div></div>, 'MyComponent is included');
  t.end();
});
