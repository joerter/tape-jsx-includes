import reactElementToString from 'react-element-to-jsx-string';

export default function jsxIncludes (actual, expected, message) {
  this.true(reactElementToString(expected).includes(reactElementToString(actual)), message);
};
