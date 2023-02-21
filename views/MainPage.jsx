const React = require('react');
const Layout = require('./Layout');

function MainPage({ applicants }) {
  return (
    <Layout>
      <nav className="navbar d-flex flex-wrap bg-dark rounded-bottom px-2 text-white">
        <div className="d-flex align-items-center">
          <a id="home" className="navbar-brand text-warning">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135815.png" alt="Logo" height="40" className="d-inline-block align-text-center me-1" />
            Центр Лидеров
          </a>
          <div className="d-flex flex-wrap ">
            <a id="logout" className="nav-link me-3">Выйти</a>
          </div>
        </div>
      </nav>

      <main>
        <div id="stages" className="my-4 d-flex justify-content-evenly text-shadow fs-3 fw-bold">
          <a id="first" className="nav-link active"><img className="ico" src="https://cdn-icons-png.flaticon.com/512/5110/5110796.png" alt="стрелка" /></a>
          <a id="first" className="nav-link me-1">
            1
            {' '}
            <img className="ico" src="https://cdn-icons-png.flaticon.com/512/1634/1634158.png" alt="стрелка" />
          </a>
          <a id="second" className="nav-link me-1">
            2
            {' '}
            <img className="ico" src="https://cdn-icons-png.flaticon.com/512/1634/1634158.png" alt="стрелка" />
          </a>
          <a id="third" className="nav-link me-1">
            3
            {' '}
            <img className="ico" src="https://cdn-icons-png.flaticon.com/512/1634/1634158.png" alt="стрелка" />
          </a>
          <a id="thourth" className="nav-link me-1">
            4
            {' '}
            <img className="ico" src="https://cdn-icons-png.flaticon.com/512/1634/1634158.png" alt="стрелка" />
          </a>
          <a id="fifth" className="nav-link me-1">
            5
            {' '}
            <img className="ico" src="https://cdn-icons-png.flaticon.com/512/1634/1634158.png" alt="стрелка" />
          </a>
          <a id="sisth" className="nav-link me-1">
            6
            {' '}
            <img className="ico" src="https://cdn-icons-png.flaticon.com/512/1634/1634158.png" alt="стрелка" />
          </a>
          <a id="seventh" className="nav-link me-1">
            7
            {' '}
            <img className="ico" src="https://cdn-icons-png.flaticon.com/512/1634/1634158.png" alt="стрелка" />
          </a>
          <a id="eighth" className="nav-link me-1">
            8
            {' '}
            <img className="ico" src="https://cdn-icons-png.flaticon.com/512/1634/1634158.png" alt="стрелка" />
          </a>
          <a id="nine" className="nav-link me-1">
            9
            {' '}
            <img className="ico" src="https://cdn-icons-png.flaticon.com/512/1634/1634158.png" alt="стрелка" />
          </a>
        </div>
        <div id="resultWindow" className="my-3 d-flex justify-content-evenly">
          <div id="persons" className="w-25 me-3 persons">
            {applicants.map((el) => (
              <div key={el.id} data-function="person" className="d-flex align-items-center p-2 mb-2 white-bg-opacity rounded">
                <img src={el.applPhoto} alt="кандидат" className="person-photo" />
                <p className="mb-0 ms-2">
                  {el.applName}
                  {' '}
                  {el.applLastName}
                </p>
              </div>
            ))}
          </div>

          <div id="person-info" className="w-75 d-flex p-2 white-bg-opacity rounded">
            <img src={applicants[0].applPhoto} alt="кандидат" className="person-photo-big" />
            <p className="mb-0 ms-2">
                  {applicants[0].applName}
                  {' '}
                  {applicants[0].applLastName}
                </p>
          </div>

        </div>
      </main>
      <script src="/js/goHome.js" />
      <script src="/js/user/logOut.js" />
      <script src="/js/user/user.js" />
    </Layout>
  );
}

module.exports = MainPage;
