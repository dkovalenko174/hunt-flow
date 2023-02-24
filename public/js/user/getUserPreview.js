async function getUserPreview(event) {
  event.preventDefault();
  const el = event.target;
  let id;
  if (el.closest('.user__preview') || el.classList.contains('.user__preview')) id = el.closest('.user__preview').dataset.id;
  // console.log(id);
  try {
    const response = await fetch(`/api/user/${id}`);
    const userCard = document.querySelector('.user__card');
    // userCard?.remove();
    const result = await response.json();
    userCard.dataset.userid = result.id;
    // console.log(result);
    userCard.innerHTML = `
      <div class="row">
        <div class="card-ref-title col-9 ms-3">
            <div class="card-ref-fio row mb-2">${result.applLastName} ${result.applName}</div>
            <div class="card-ref-salary row">
                <div class="col-6 text-start">Зарплата:</div>
                <div class="col-6 text-end">120 000 руб</div>
            </div>
            <div class="card-ref-phone row">
                <div class="col-6">Телефон:</div>
                <div class="col-6 text-end">${result.phone}</div>
            </div>
            <div class="card-ref-email row">
                <div class="col-6">Эл.почта:</div>
                <div class="col-6 text-end">${result.applEmail}</div>
            </div>
            <div class="card-ref-city row">
                <div class="col-6">Город:</div>
                <div class="col-6 text-end">Уренгой</div>
            </div>
        </div>
        <div id="card-ref-foto" class="col-3 d-grid card-ref-foto" style="background-image: url(${result.applPhoto}); background-size: cover; background-position: center;">
<!--            <img src="" alt="Аватар" class="person-photo"/>-->
        </div>
      </div>
      </div>
      <div class="row p-2">
        <div class="user__card-events p-4">
          <div class="card-events-stage d-flex align-items-start pb-2">
            <div class="card-events-stage-title col">
                <div class="stage-title">${result.Stage.stageName}</div>
                <div class="stage-department">Отдел продаж</div>
            </div>
            <div class="col-4">    
                <select id="form-select" class="form-select" name="stageId" aria-label="Default select example">
                    <option selected>Сменит этап</option>
                    <option value="1">Новые</option>
                    <option value="2">Видео интервью</option>
                    <option value="3">У заказчика</option>
                    <option value="4">Интервью с заказчиком</option>
                    <option value="5">Звонок скрининг</option>
                    <option value="6">Офер</option>
                    <option value="7">Принял Офер</option>
                    <option value="8">Выход на работу</option>
                    <option value="9">Отказ</option>
                </select>
            </div>      
            <div class="col-3 card-events-stage-btn text-end">
                <div class="btn card-events-stage-btn-1 btn-primary">Комментарий</div>
            </div>
        </div>
      <div class="card-events-message mt-2">
        <div class="events-message">
            <div class="message-text">Классный опыт давайте звать на собеседование</div>
            <div class="message-employe mb-2">
                Игорь,
                <span>вчера</span>
            </div>
        </div>
        <div class="events-message">
            <div class="message-text">У заказчика</div>
        <div class="message-employe mb-2">
            Михаил,
            <span>вчера</span>
        </div>
      </div>
      <div class="events-message">
        <div class="message-text">Новые кандидаты</div>
            <div class="message-employe mb-2">
                Михаил,
                <span>3 июня</span>
            </div>
        </div>
      </div>
`;
    // console.log(result);
  } catch (err) {
    console.log('Не могу отправить запрос', err);
  }
}
