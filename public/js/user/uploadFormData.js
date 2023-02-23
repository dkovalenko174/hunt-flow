async function uploadFormData(event) {
  if (event.target.className === 'formAddApplicant') {
    event.preventDefault();
    const formAddApplicant = event.target;
    // const formData = new FormData(formAddApplicant);
    // const dataFormObj = Object.fromEntries(formData.entries());
    // console.log(dataFormObj);
    const formData = new FormData();
    formData.append('applLastName', formAddApplicant.applLastName.value);
    formData.append('appName', formAddApplicant.appName.value);
    formData.append('phone', formAddApplicant.phone.value);
    formData.append('applEmail', formAddApplicant.applEmail.value);
    formData.append('about', formAddApplicant.about.value);

    // TODO: FRONT Загрузка данных с формы соискателя
    try {
      const response = await fetch('/upload', {
        method: 'POST',
        body: formData,
      });
      if (response.status === 200) {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
