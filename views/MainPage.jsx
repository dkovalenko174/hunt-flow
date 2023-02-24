const React = require('react');
const Layout = require('./Layout');

function MainPage({ appl, name }) {
  return (
    <Layout>
      <div className="d-flex flex-column mb-3">
        <div className="container">
          <nav className="navbar d-flex flex-wrap">
            <div className="logo d-flex align-items-center">
              <a id="home" className="navbar-brand">
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135788.png" alt="Logo" height="40" className="d-inline-block align-text-center me-2" />
                ЦЛ
              </a>
              <div className="nameUser me-2">
                Хорошо поработать -
                {' '}
                {name}
              </div>

            </div>
            <div className="d-flex align-items-center">
              <div className="d-flex flex-wrap align-items-center">
                <a id="getFormApplicant" className="nav-link me-2">Добавить соискателя</a>
              </div>
              <div className="d-flex flex-wrap align-items-center">
                <a id="logout" className="nav-link me-2">Выйти</a>
              </div>
            </div>
          </nav>
        </div>
        <div className="my__main-background">
          <div className="container d-flex flex-column">
            <ul id="menuStage" className="d-flex flex-wrap justify-content-between align-items-center">
              <li><a id="allUsers" className="nav-link">Все</a></li>
              <li><a id="1" className="nav-link">Новые</a></li>
              <li><a id="2" className="nav-link">Видео интервью</a></li>
              <li><a id="3" className="nav-link">У заказчика</a></li>
              <li><a id="4" className="nav-link">Интервью с заказчиком</a></li>
              <li><a id="5" className="nav-link">Звонок скрининг</a></li>
              <li><a id="6" className="nav-link">Оффер</a></li>
              <li><a id="7" className="nav-link">Принял Оффер</a></li>
              <li><a id="8" className="nav-link">Выход на работу</a></li>
              <li><a id="9" className="nav-link">Отказ</a></li>
            </ul>
            <div className="fix-1 d-flex flex-row">
              <div className="main__column-left" id="main__column-left">
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

                {appl.map((user) => (
                  <div key={user.id} data-id={user.id} id="user__preview" className="user__preview d-flex flex-rows align-items-center justify-content-start p-3 gap-3">
                    <div
                      className="user__preview-foto"
                      style={
                      {
                        backgroundImage: `url(${user.applPhoto})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }
                    }
                    />
                    <div className="user__preview-ref">
                      <div className="preview-ref-fio">
                        {user.applName}
                        {' '}
                        {user.applLastName}
                      </div>
                      <div className="preview-ref-position">Java Developer</div>
                      {/* <div className="preview-ref-company">AllSoft</div> */}
                    </div>
                  </div>
                ))}
              </div>
              <div className="main__column-right me-auto p-3">
                <div className="user__card d-flex flex-column gap-3 p-3">
                  {/*   <div className="user__card-ref d-flex flex-row justify-content-between"> */}
                  {/*     <div className="card-ref-title"> */}
                  {/*       <div className="card-ref-fio mb-2">Платонов Андрей</div> */}
                  {/*       <div className="card-ref-salary d-flex justify-content-between"> */}
                  {/*         Зарплата: */}
                  {/*         {' '} */}
                  {/*         {' '} */}
                  {/*         <span>120 000 руб</span> */}
                  {/*       </div> */}
                  {/*       <div className="card-ref-phone d-flex justify-content-between"> */}
                  {/*         Телефон: */}
                  {/*         {' '} */}
                  {/*         {' '} */}
                  {/*         <span>+7(495)222-11-18</span> */}
                  {/*       </div> */}
                  {/*       <div className="card-ref-email d-flex justify-content-between"> */}
                  {/*         Эл.почта: */}
                  {/*         {' '} */}
                  {/*         {' '} */}
                  {/*         <span>ppp@ppp.ru</span> */}
                  {/*       </div> */}
                  {/*       <div className="card-ref-city d-flex justify-content-between"> */}
                  {/*         Город: */}
                  {/*         {' '} */}
                  {/*         {' '} */}
                  {/*         <span>Уренгой</span> */}
                  {/*       </div> */}
                  {/*     </div> */}
                  {/*     <div className="card-ref-foto" /> */}
                  {/*   </div> */}
                  {/*   <div className="user__card-events p-4"> */}
                  {/*     <div className="card-events-stage d-flex flex-row justify-content-between align-items-start pb-2"> */}
                  {/*       <div className="card-events-stage-title"> */}
                  {/*         <div className="stage-title">У заказчика</div> */}
                  {/*         <div className="stage-department">Отдел продаж</div> */}
                  {/*       </div> */}
                  {/*       <div className="btn card-events-stage-btn btn-success">Сменить этап</div> */}
                  {/*     </div> */}
                  {/*     <div className="card-events-message mt-2"> */}
                  {/*       <div className="events-message"> */}
                  {/*         <div className="message-text">Классный опыт давайте звать на собеседование</div> */}
                  {/*         <div className="message-employe mb-2"> */}
                  {/*           Игорь, */}
                  {/*           {' '} */}
                  {/*           {' '} */}
                  {/*           <span>вчера</span> */}
                  {/*         </div> */}
                  {/*       </div> */}
                  {/*       <div className="events-message"> */}
                  {/*         <div className="message-text">У заказчика</div> */}
                  {/*         <div className="message-employe mb-2"> */}
                  {/*           Михаил, */}
                  {/*           {' '} */}
                  {/*           {' '} */}
                  {/*           <span>вчера</span> */}
                  {/*         </div> */}
                  {/*       </div> */}
                  {/*       <div className="events-message"> */}
                  {/*         <div className="message-text">Новые кандидаты</div> */}
                  {/*         <div className="message-employe mb-2"> */}
                  {/*           Михаил, */}
                  {/*           {' '} */}
                  {/*           {' '} */}
                  {/*           <span>3 июня</span> */}
                  {/*         </div> */}
                  {/*       </div> */}
                  {/*     </div> */}
                  {/*   </div> */}
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

      <script src="/js/goHome.js" />
      <script src="/js/user/logOut.js" />
      <script src="/js/user/getAllUsers.js" />
      <script src="/js/user/filter.js" />
      <script src="/js/user/getUserPreview.js" />
      <script src="/js/user/getFormApplicant.js" />
      <script src="/js/user/uploadFormData.js" />
      <script src="/js/user/selectStageApp.js" />
      <script src="/js/user/user.js" />
    </Layout>
  );
}

module.exports = MainPage;
