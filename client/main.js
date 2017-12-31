import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'
import { renderRouter } from '../imports/startup/client/router'

Meteor.startup(() => {
  render(renderRouter(), document.getElementById('app'));
});
