async function selectStageApp() {
  const userCard = document.querySelector('.user__card');
  const getIdApplicant = userCard?.dataset.userid;

  const stageSelect = document.querySelector('select.form-select');
  const stageSelectId = stageSelect?.value;
  const selectedOption = stageSelect.selectedOptions[0];
  const selectedText = selectedOption.textContent;

  const getStageTitle = document.querySelector('.stage-title');
  // console.log(stageSelectId, selectedText, userCard, getIdApplicant, getStageTitle.textContent);

  try {
    const response = await fetch('/api/user/', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: getIdApplicant, stageId: stageSelectId }),
    });
    const result = await response.status;
    console.log(result);
    if (result === 200) {
      getStageTitle.textContent = selectedText;
    }
  } catch (error) {
    console.log('Не могу отправит запрос на сервер изменить этап', error);
  }
}
