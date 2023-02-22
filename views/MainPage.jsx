const React = require('react');
const Layout = require('./Layout');

function MainPage({ applicants }) {
  return (
    <Layout>
      <div className="d-flex flex-column mb-3">
        <div className="container">
          <nav className="navbar d-flex flex-wrap">
            <a id="home" className="navbar-brand">
              <img src="https://cdn-icons-png.flaticon.com/512/3135/3135788.png" alt="Logo" height="40" className="d-inline-block align-text-center me-2" />
              ЦЛ
            </a>
            <div className="d-flex align-items-center">
              <div className="d-flex flex-wrap align-items-center">
                <a id="logout" className="nav-link me-2">Выйти</a>
              </div>
            </div>
          </nav>
        </div>
        <div className="my__main-background">
          <div className="container d-flex flex-column">
            <ul className="d-flex flex-wrap justify-content-between align-items-center">
              <li><a id="first" className="nav-link">Все</a></li>
              <li><a id="second" className="nav-link">Новые</a></li>
              <li><a id="third" className="nav-link">Видео интервью</a></li>
              <li><a id="thourth" className="nav-link">У заказчика</a></li>
              <li><a id="fifth" className="nav-link">Интервью с заказчиком</a></li>
              <li><a id="sisth" className="nav-link">Звонок скрининг</a></li>
              <li><a id="seventh" className="nav-link">Офер</a></li>
              <li><a id="eighth" className="nav-link">Принял Офер</a></li>
              <li><a id="nine" className="nav-link">Выход на работу</a></li>
              <li><a id="ten" className="nav-link">Отказ</a></li>
            </ul>
            <div className="fix-1 d-flex flex-row">
              <div className="main__column-left">
                <div className="user__preview d-flex flex-rows align-items-center justify-content-start p-3 gap-3">
                  <div className="user__preview-foto" />
                  <div className="user__preview-ref">
                    <div className="preview-ref-fio">Платонов Андрей</div>
                    <div className="preview-ref-position">Java Developer</div>
                    <div className="preview-ref-company">AllSoft</div>
                  </div>
                </div>
                <div className="user__preview d-flex flex-rows align-items-center justify-content-start p-3 gap-3">
                  <div className="user__preview-foto" />
                  <div className="user__preview-ref">
                    <div className="preview-ref-fio">Кленова Ольга</div>
                    <div className="preview-ref-position">Директор</div>
                    <div className="preview-ref-company">Digital Pro</div>
                  </div>
                </div>
                <div className="user__preview d-flex flex-rows align-items-center justify-content-start p-3 gap-3">
                  <div className="user__preview-foto" />
                  <div className="user__preview-ref">
                    <div className="preview-ref-fio">Идов Василий</div>
                    <div className="preview-ref-position">Маркетолог</div>
                    <div className="preview-ref-company">DMLR</div>
                  </div>
                </div>
                <div className="user__preview d-flex flex-rows align-items-center justify-content-start p-3 gap-3">
                  <div className="user__preview-foto" />
                  <div className="user__preview-ref">
                    <div className="preview-ref-fio">Серов Иван</div>
                    <div className="preview-ref-position">Менеджер</div>
                    <div className="preview-ref-company">FoxFinance</div>
                  </div>
                </div>
                <div className="user__preview d-flex flex-rows align-items-center justify-content-start p-3 gap-3">
                  <div className="user__preview-foto" />
                  <div className="user__preview-ref">
                    <div className="preview-ref-fio">Федорова Анна</div>
                    <div className="preview-ref-position">Senior Frontend</div>
                    <div className="preview-ref-company">Google</div>
                  </div>
                </div>
                <div className="user__preview d-flex flex-rows align-items-center justify-content-start p-3 gap-3">
                  <div className="user__preview-foto" />
                  <div className="user__preview-ref">
                    <div className="preview-ref-fio">Федорова Анна</div>
                    <div className="preview-ref-position">Senior Frontend</div>
                    <div className="preview-ref-company">Google</div>
                  </div>
                </div>
                <div className="user__preview d-flex flex-rows align-items-center justify-content-start p-3 gap-3">
                  <div className="user__preview-foto" />
                  <div className="user__preview-ref">
                    <div className="preview-ref-fio">Идов Василий</div>
                    <div className="preview-ref-position">Маркетолог</div>
                    <div className="preview-ref-company">DMLR</div>
                  </div>
                </div>
                <div className="user__preview d-flex flex-rows align-items-center justify-content-start p-3 gap-3">
                  <div className="user__preview-foto" />
                  <div className="user__preview-ref">
                    <div className="preview-ref-fio">Идов Василий</div>
                    <div className="preview-ref-position">Маркетолог</div>
                    <div className="preview-ref-company">DMLR</div>
                  </div>
                </div>
                <div className="user__preview d-flex flex-rows align-items-center justify-content-start p-3 gap-3">
                  <div className="user__preview-foto" />
                  <div className="user__preview-ref">
                    <div className="preview-ref-fio">Идов Василий</div>
                    <div className="preview-ref-position">Маркетолог</div>
                    <div className="preview-ref-company">DMLR</div>
                  </div>
                </div>
              </div>
              <div className="main__column-right me-auto p-3">
                <div className="user__card d-flex flex-column gap-3 p-3">
                  <div className="user__card-ref d-flex flex-row justify-content-between">
                    <div className="card-ref-title">
                      <div className="card-ref-fio mb-2">Платонов Андрей</div>
                      <div className="card-ref-salary d-flex justify-content-between">
                        Зарплата:
                        {' '}
                        {' '}
                        <span>120 000 руб</span>
                      </div>
                      <div className="card-ref-phone d-flex justify-content-between">
                        Телефон:
                        {' '}
                        {' '}
                        <span>+7(495)222-11-18</span>
                      </div>
                      <div className="card-ref-email d-flex justify-content-between">
                        Эл.почта:
                        {' '}
                        {' '}
                        <span>ppp@ppp.ru</span>
                      </div>
                      <div className="card-ref-city d-flex justify-content-between">
                        Город:
                        {' '}
                        {' '}
                        <span>Уренгой</span>
                      </div>
                    </div>
                    <div className="card-ref-foto" />
                  </div>
                  <div className="user__card-events p-4">
                    <div className="card-events-stage d-flex flex-row justify-content-between align-items-start pb-2">
                      <div className="card-events-stage-title">
                        <div className="stage-title">У заказчика</div>
                        <div className="stage-department">Отдел продаж</div>
                      </div>
                      <div className="btn card-events-stage-btn btn-success">Сменить этап</div>
                    </div>
                    <div className="card-events-message mt-2">
                      <div className="events-message">
                        <div className="message-text">Классный опыт давайте звать на собеседование</div>
                        <div className="message-employe mb-2">
                          Игорь,
                          {' '}
                          {' '}
                          <span>вчера</span>
                        </div>
                      </div>
                      <div className="events-message">
                        <div className="message-text">У заказчика</div>
                        <div className="message-employe mb-2">
                          Михаил,
                          {' '}
                          {' '}
                          <span>вчера</span>
                        </div>
                      </div>
                      <div className="events-message">
                        <div className="message-text">Новые кандидаты</div>
                        <div className="message-employe mb-2">
                          Михаил,
                          {' '}
                          {' '}
                          <span>3 июня</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container d-flex justify-content-end">
          <footer className="d-flex align-items-center">
            ©
            <span className="p-2">2023</span>
            Команда Песцы
          </footer>
        </div>
      </div>

      {/* <main> */}
      {/*  <div id="stages" className="my-4 d-flex justify-content-evenly text-shadow fs-3 fw-bold"> */}
      {/*    <a id="first" className="nav-link active"><img className="ico" src="https://cdn-icons-png.flaticon.com/512/5110/5110796.png" alt="стрелка" /></a> */}
      {/*    <a id="first" className="nav-link me-1"> */}
      {/*      1 */}
      {/*      {' '} */}
      {/*      <img className="ico" src="https://cdn-icons-png.flaticon.com/512/1634/1634158.png" alt="стрелка" /> */}
      {/*    </a> */}
      {/*    <a id="second" className="nav-link me-1"> */}
      {/*      2 */}
      {/*      {' '} */}
      {/*      <img className="ico" src="https://cdn-icons-png.flaticon.com/512/1634/1634158.png" alt="стрелка" /> */}
      {/*    </a> */}
      {/*    <a id="third" className="nav-link me-1"> */}
      {/*      3 */}
      {/*      {' '} */}
      {/*      <img className="ico" src="https://cdn-icons-png.flaticon.com/512/1634/1634158.png" alt="стрелка" /> */}
      {/*    </a> */}
      {/*    <a id="thourth" className="nav-link me-1"> */}
      {/*      4 */}
      {/*      {' '} */}
      {/*      <img className="ico" src="https://cdn-icons-png.flaticon.com/512/1634/1634158.png" alt="стрелка" /> */}
      {/*    </a> */}
      {/*    <a id="fifth" className="nav-link me-1"> */}
      {/*      5 */}
      {/*      {' '} */}
      {/*      <img className="ico" src="https://cdn-icons-png.flaticon.com/512/1634/1634158.png" alt="стрелка" /> */}
      {/*    </a> */}
      {/*    <a id="sisth" className="nav-link me-1"> */}
      {/*      6 */}
      {/*      {' '} */}
      {/*      <img className="ico" src="https://cdn-icons-png.flaticon.com/512/1634/1634158.png" alt="стрелка" /> */}
      {/*    </a> */}
      {/*    <a id="seventh" className="nav-link me-1"> */}
      {/*      7 */}
      {/*      {' '} */}
      {/*      <img className="ico" src="https://cdn-icons-png.flaticon.com/512/1634/1634158.png" alt="стрелка" /> */}
      {/*    </a> */}
      {/*    <a id="eighth" className="nav-link me-1"> */}
      {/*      8 */}
      {/*      {' '} */}
      {/*      <img className="ico" src="https://cdn-icons-png.flaticon.com/512/1634/1634158.png" alt="стрелка" /> */}
      {/*    </a> */}
      {/*    <a id="nine" className="nav-link me-1"> */}
      {/*      9 */}
      {/*      {' '} */}
      {/*      <img className="ico" src="https://cdn-icons-png.flaticon.com/512/1634/1634158.png" alt="стрелка" /> */}
      {/*    </a> */}
      {/*  </div> */}
      {/*  <div id="resultWindow" className="my-3 d-flex justify-content-evenly"> */}
      {/*    <div id="persons" className="w-25 me-3 persons"> */}
      {/*      {applicants.map((el) => ( */}
      {/*        <div key={el.id} data-function="person" className="d-flex align-items-center p-2 mb-2 white-bg-opacity rounded"> */}
      {/*          <img src={el.applPhoto} alt="кандидат" className="person-photo" /> */}
      {/*          <p className="mb-0 ms-2"> */}
      {/*            {el.applName} */}
      {/*            {' '} */}
      {/*            {el.applLastName} */}
      {/*          </p> */}
      {/*        </div> */}
      {/*      ))} */}
      {/*    </div> */}

      {/*    <div id="person-info" className="w-75 d-flex p-2 white-bg-opacity rounded"> */}
      {/*      <img src={applicants[0].applPhoto} alt="кандидат" className="person-photo-big" /> */}
      {/*      <p className="mb-0 ms-2"> */}
      {/*            {applicants[0].applName} */}
      {/*            {' '} */}
      {/*            {applicants[0].applLastName} */}
      {/*          </p> */}
      {/*    </div> */}

      {/*  </div> */}
      {/* </main> */}
      <script src="/js/goHome.js" />
      <script src="/js/user/logOut.js" />
      <script src="/js/user/user.js" />
    </Layout>
  );
}

module.exports = MainPage;
