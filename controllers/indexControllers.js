const render = require('../lib/render');
const MainPage = require('../views/MainPage');

exports.renderMainPage = async  (req, res) => {
    render(MainPage, {title: 'Welcome to Express - ReactSSR'}, res)
}