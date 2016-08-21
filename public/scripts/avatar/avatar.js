import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Avatar = React.createClass({
  propTypes: {
    imageSrc: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      <div>
        <ReactCSSTransitionGroup transitionName="example"
        transitionAppear={true}
        transitionEnterTimeout={3000} transitionLeaveTimeout={3000}>
          <img src={this.props.imageSrc} key={this.props.imageSrc} />
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});

export default Avatar;
