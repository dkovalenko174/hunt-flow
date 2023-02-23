async function enter(event) {
  if (event.target.className === 'formSignIn') {
    event.preventDefault();
    const formSignIn = event.target;
    const formData = new FormData(formSignIn);
    const dataFormObj = Object.fromEntries(formData.entries());
    // console.log(dataFormObj);

    try {
      const response = await fetch('/guest/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataFormObj),
      });
      //
      if (response.status === 203) {
        console.log(response.status);
        // TODO: Дописать логику вывода ошибки на форме Входа

        //         const enterEr = document.getElementById('enterError');
        //         if (enterEr) enterEr.remove();
        //
        //         const enterError = document.createElement('p');
        //         enterError.id = 'enterError';
        //         enterError.classList = 'text-danger text-center bg-warning p-2 rounded';
        //         enterError.textContent = 'Неверный email или пароль';
        //
        //         const signInWindow = document.getElementById('signInWindow');
        //         const enterButt = document.getElementById('enter');
        //
        //         signInWindow.insertBefore(enterError, enterButt);
      } else if (response.status === 200) {
        location.assign('/');
      }
    } catch (error) {
      console.log(error);
    }
  }
}
