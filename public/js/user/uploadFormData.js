async function uploadFormData(event) {
  if (event.target.className === 'formAddApplicant') {
    event.preventDefault();
    const formAddApplicant = event.target;

    const formData = new FormData(formAddApplicant);
    // TODO: FRONT Загрузка данных с формы соискателя
    try {
      const response = await fetch('/upload', {
        method: 'POST',
        body: formData,
      });

      formAddApplicant.parentNode.remove();
      if (response.status === 200) {
        location.assign('/');
        // console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
