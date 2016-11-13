import React from 'react';
import { shallow } from 'enzyme';

const test = (path) => {
  const file = path.split('/').pop();
  const name = file.charAt(0).toUpperCase() + file.slice(1);
  const component = require(path); // eslint-disable-line global-require, import/no-dynamic-require
  describe(`'<${name} />`, () =>
    it('renders without exploding', () =>
      expect(shallow(<component />).length).toBe(1)));
};

test('../app');

// todo: switch to snapshot testing
