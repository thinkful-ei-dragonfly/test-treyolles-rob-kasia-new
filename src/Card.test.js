import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
// import App from './App';
import Card from './Card'

describe('<Card />', () => {

  // smoke test
  it('renders without crashing', () => {
      const div = document.createElement('div');

      // Pass required props in the usual way
      ReactDOM.render(<Card title="Amazing title" content="What!" />, div);

      ReactDOM.unmountComponentAtNode(div);
  });
 

    it('renders without crashing snapshot', () => {
        // Render the component, as JSON
        const tree = renderer.create(<Card title="Amazing title" content="What!" />).toJSON();  // title="Amazing title" content="What!"
        // Check whether it matches the previous snapshot
        // Stored in __snapshots__/App.test.js.snap
        expect(tree).toMatchSnapshot(); 
    });

    
});