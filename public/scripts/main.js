import React from 'react';
import ReactDOM from 'react-dom';
import Avatar from './avatar/avatar.js';

var mycomponentinstance = ReactDOM.render(
  <Avatar imageSrc="https://www.google.com/logos/doodles/2016/2016-doodle-fruit-games-day-13-5751002868219904-scta.png">
  </Avatar>,
  document.getElementById('example')
);

var mynode = ReactDOM.findDOMNode(mycomponentinstance);
