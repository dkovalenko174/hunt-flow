async function filter(event) {
  event.preventDefault();
  const mainColumnLeftApll = document.querySelector('.main__column-left');
  // Нашли всех детей
  const children = mainColumnLeftApll.childNodes;
  // удаляем их
  while (mainColumnLeftApll.firstChild) {
    mainColumnLeftApll.removeChild(mainColumnLeftApll.firstChild);
  }
  const { id } = event.target;
  // console.log(id);

  try {
    const response = await fetch(`/api/filter/${id}`);
    const result = await response.json();
    // const result = await response.status;
    // console.log(result);
    mainColumnLeftApll.innerHTML = `
      ${result.map((user) => (
    `<div key=${user.id} data-id=${user.id} id="user__preview" class="user__preview d-flex flex-rows align-items-center justify-content-start p-3 gap-3">
          <div class="user__preview-foto"></div>
          <div class="user__preview-ref">
            <div class="preview-ref-fio">
              ${user.applName}
              ${user.applLastName}
            </div>
            <div class="preview-ref-position">Java Developer</div>
            <!-- <div class="preview-ref-company">AllSoft</div> -->
          </div>
        </div>`
  )).join('')}
    `;
  } catch (error) {
    console.log('Не могу отправить запрос на фильтр', error);
  }
}
