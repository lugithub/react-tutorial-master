import React from 'react';

const LikeButton = React.createClass({
  getInitialState: function() {
    return {liked: false};
  },
  render: function() {
    const text = this.state.liked ? 'liked' : 'haven\'t liked';
    return (
      <div onClick={this.handleClick}>
        You {text} this. Click to toggle.
      </div>
    );
  },
  handleClick: function() {
    this.setState({liked: !this.state.liked});
  }
});

export default LikeButton;
