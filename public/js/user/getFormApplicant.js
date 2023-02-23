const mainColumnRight = document.querySelector('.main__column-right');
function getFormApplicant() {
  const userCard = document.querySelector('.user__card');
  userCard.remove();
  const addUserEl = document.createElement('div');
  addUserEl.innerHTML = `
  <form class="formAddApplicant">
  <div class="row mb-3">
    <div class="col">
      <input type="text" name="applLastName" class="form-control" placeholder="Фамилия" />
    </div>
    <div class="col">
      <input type="text" name="appName" class="form-control" placeholder="Имя" />
    </div>
  </div>
  <div class="row mb-3">
    <div class="col">
        <input type="tel" name="phone" class="form-control" placeholder="Телефон" />
    </div>
    <div class="col">
        <input type="email" name="applEmail" class="form-control" placeholder="Эл.почта" />
    </div>
  </div>
  <div class="mb-3">
    <textarea class="form-control" name="about" rows="3" placeholder="О себе"></textarea>
  </div>
  <div class="mb-3">
      <input class="form-control" name="pdf" type="file" id="formFile">
  </div>
  <button id="btn-addApplicant" type="submit" class="btn btn-primary btn-addApplicant">Добавить</button>
</form>
  `;
  mainColumnRight.appendChild(addUserEl);
}
