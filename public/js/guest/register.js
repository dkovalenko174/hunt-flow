async function register(event) {
  if (event.target.className === 'formSignUp') {
    event.preventDefault();
    const formSignUp = event.target;
    const formData = new FormData(formSignUp);
    const dataFormObj = Object.fromEntries(formData.entries());
    // console.log(dataFormObj);

    try {
      const response = await fetch('/guest/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataFormObj),
      });

      if (response.status === 203) {
        console.log(response.status);
        // TODO: Дописать логику вывода ошибки на форме Регистрации

        //         const registerEr = document.getElementById('registerError');
        //         if (registerEr) registerEr.remove();
        //
        //         const registerError = document.createElement('p');
        //         registerError.id = 'registerError';
        //         registerError.classList = 'text-danger text-center bg-warning p-2 rounded';
        //         registerError.textContent = 'Пользователь с таким именем или email уже существует';
        //
        //         const signUpWindow = document.getElementById('signUpWindow');
        //         const regButt = document.getElementById('register');
        //
        //         signUpWindow.insertBefore(registerError, regButt);
      } else if (response.status === 200) {
        location.assign('/');
      }
    } catch (error) {
      console.log(error);
    }
  }
}
