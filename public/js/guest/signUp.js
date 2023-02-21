function signUp() {
  const resultWindow = document.getElementById('resultWindow');
  const main = document.querySelector('main');

  const mainChildren = main.children;
  for (let i = 0; i < mainChildren.length; i += 1) {
    if (mainChildren[i].id !== 'resultWindow') mainChildren[i].remove();
  }

  resultWindow.classList.add('d-none');

  const signUpWindow = document.createElement('form');
  signUpWindow.id = 'signUpWindow';
  signUpWindow.classList = 'd-flex flex-column align-items-center p-2 text-center white-bg-opacity rounded my-5';
  signUpWindow.innerHTML = `
  <h2 class="mb-3">Регистрация</h2>
  <div class="mb-2 w-50">
    <label for="name" class="form-label text-shadow">Ваше имя:</label>
    <input type="text" class="form-control py-0" name="name" id="name" required>
  </div>
  <div class="mb-2 w-50">
    <label for="exampleInputEmail1" class="form-label text-shadow">Ваш адрес электронной почты:</label>
    <input type="email" class="form-control py-0" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" required>
  </div>
  <div class="mb-2 w-50">
    <label for="exampleInputPassword1" class="form-label text-shadow">Ваш пароль:</label>
    <input type="password" name="password" class="form-control py-0" id="exampleInputPassword1" required>
  </div>
  <button id="register" type="submit" class="btn btn-dark py-2">Зарегистрироваться</button>
  `;

  main.appendChild(signUpWindow);
}
