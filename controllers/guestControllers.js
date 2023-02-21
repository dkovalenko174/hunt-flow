const render = require('../lib/render');
const GuestPage = require('../views/GuestPage');

exports.renderGuestPage = (req, res) => {
  render(GuestPage, {}, res);
};
