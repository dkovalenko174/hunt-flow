const React = require('react');
const Layout = require('./Layout');

function MainPage({title}) {
  return (
    <Layout>
      <div>
        <h2>Главная</h2>
      </div>
    </Layout>
  );
}

module.exports = MainPage;
