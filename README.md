# tape-jsx-includes
Tape extension to assert one jsx string includes another

[![npm](https://img.shields.io/npm/v/tape-jsx-includes.svg)](https://www.npmjs.com/package/tape-jsx-includes)
[![npm](https://img.shields.io/npm/l/tape-jsx-includes.svg)](https://www.npmjs.com/package/tape-jsx-includes)

[Tape](https://github.com/substack/tape) [extension](https://github.com/atabel/extend-tape) to assert one jsx string includes another.

`tape-jsx-includes` uses [`react-element-to-jsx-string`](https://github.com/algolia/react-element-to-jsx-string) to compare two components'
rendered output.

## Install
```
$ npm install --save-dev extend-tape
$ npm install --save-dev tape-jsx-includes
```
## How to use

Testing React components is very easy with `tape` + `tape-jsx-includes`:

```javascript
const MyComponent = function ({color}) {
    const className = `box color-${color}`;
    return (
        <div className={className}></div>
    );
};
```

```javascript
import {createRenderer} from 'react-addons-test-utils';
import tape from 'tape';
import addAssertions from 'extend-tape';
import jsxIncludes from 'tape-jsx-includes';
import MyComponent from '../MyComponent';

// extend tape with jsxIncludes assertion:
const test = addAssertions(tape, {jsxIncludes});

test('MyComponent is included', (t) => {
  const renderer = createRenderer();
  renderer.render(<MyComponent color="red" />);
  const result = renderer.getRenderOutput();

  t.jsxIncludes(result, <div><div><div className="box color-red"></div></div></div>);
  t.end();
});
```

## Run tests
```
$ npm install
$ npm test
