import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {

    static propTypes = {
      'id': PropTypes.string
    };

    static defaultProps = {
      'id': '1'
    };

    method2spy() {

    }

    render() {
      return (
          <div>My App</div>
      )
    };

}

export {
    App
};
