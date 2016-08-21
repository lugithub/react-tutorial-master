import React from 'react';

const PageLink = React.createClass({
  render: function() {
    return (
      <a href={'https://www.facebook.com/' + this.props.pagename}>
        {this.props.pagename}
      </a>
    );
  },
  foo: function() {
    console.log('foo');
  }
});

export default PageLink;
