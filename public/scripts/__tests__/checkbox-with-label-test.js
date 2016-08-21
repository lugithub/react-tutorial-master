jest.unmock('../CheckboxWithLabel');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import CheckboxWithLabel from '../CheckboxWithLabel';

describe('CheckboxWithLabel', () => {
  it('changes the text after click', () => {
    const checkbox = TestUtils.renderIntoDocument(
      <CheckboxWithLabel labelOn="On" labelOff="Off" />
    );

    const checkboxNode = ReactDOM.findDOMNode(checkbox);

    expect(checkboxNode.textContent).toEqual('Off');

    var inputNode = TestUtils.findRenderedDOMComponentWithTag(checkbox, 'input');

    TestUtils.Simulate.change(inputNode);

    expect(checkboxNode.textContent).toEqual('On');
  });
});
