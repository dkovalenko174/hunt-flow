const React = require('react');
const Layout = require('./Layout');

function GuestPage({ title }) {
  return (
    <Layout>
      <nav className="navbar bg-warning-subtle rounded-bottom">
        <div className="d-flex align-items-center">
          <a id="home" className="navbar-brand ms-2">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135815.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
            HuntFlow
          </a>
          <div className="d-flex">
            <a id="signin" className="nav-link me-3">Войти</a>
            <a id="signup" className="nav-link">Зарегистрироваться</a>
          </div>
        </div>
      </nav>

      <main>
        привет
      </main>
      <script src="/js/guest/goHome.js" />
      <script src="/js/guest/signIn.js" />
      <script src="/js/guest/signUp.js" />
      <script src="/js/guest/guest.js" />
    </Layout>
  );
}

module.exports = GuestPage;
