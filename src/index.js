import reactElementToString from 'react-element-to-jsx-string';
import collapse from 'collapse-white-space';

export default function jsxIncludes (actual, expected, message) {
  this.true(collapse(reactElementToString(expected)).includes(collapse(reactElementToString(actual))), message);
};
