const React = require('react');
const Layout = require('./Layout');

function GuestPage({}) {
  return (
    <Layout>
      <nav className="navbar d-flex flex-wrap bg-dark rounded-bottom px-2 text-white">
        <div className="d-flex align-items-center">
          <a id="home" className="navbar-brand text-warning">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135815.png" alt="Logo" height="40" className="d-inline-block align-text-center me-1" />
            Центр Лидеров
          </a>
          <div className="d-flex flex-wrap ">
            <a id="signin" className="nav-link me-3">Войти</a>
            <a id="signup" className="nav-link">Зарегистрироваться</a>
          </div>
        </div>
      </nav>

      <main>
        <div id="resultWindow" className="white-bg-opacity rounded my-5 text-center">
          <h1 className="mb-3">Система автоматизации рекрутмента</h1>
          <h4 className="mb-3">Центр Лидеров — рекрутинговая система, которая помогает закрывать больше вакансий за меньшее время</h4>
          <p className="fst-italic">*Чтобы использовать функционал сайта - необходимо войти или зарегистрироваться</p>
        </div>
      </main>
      <script src="/js/goHome.js" />
      <script src="/js/guest/signUp.js" />
      <script src="/js/guest/signIn.js" />
      <script src="/js/guest/enter.js" />
      <script src="/js/guest/register.js" />
      <script src="/js/guest/guest.js" />
    </Layout>
  );
}

module.exports = GuestPage;
