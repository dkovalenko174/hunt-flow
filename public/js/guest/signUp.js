// TODO: Добавить чтоб на любой клик по документу удалялась форма с регистрацией

function signUp() {
  const resultWindow = document.getElementById('resultWindow');

  if (resultWindow) resultWindow.remove();

  const guestColumnRight = document.querySelector('.guest__column-right');
  guestColumnRight.style.display = 'block';
  createFormSignUp(guestColumnRight);

  // const mainChildren = main.children;
  // for (let i = 0; i < mainChildren.length; i += 1) {
  //   if (mainChildren[i].id !== 'resultWindow') mainChildren[i].remove();
  // }
  //
  // resultWindow.classList.add('d-none');
  //
  // const signUpWindow = document.createElement('form');
  // signUpWindow.id = 'signUpWindow';
  // signUpWindow.classList = 'd-flex flex-column align-items-center p-2 text-center white-bg-opacity rounded my-5';
  // signUpWindow.innerHTML = `
  // <h2 class="mb-3">Регистрация</h2>
  // <div class="mb-2 w-50">
  //   <label for="name" class="form-label text-shadow">Ваше имя:</label>
  //   <input type="text" class="form-control py-0" name="name" id="name" required>
  // </div>
  // <div class="mb-2 w-50">
  //   <label for="exampleInputEmail1" class="form-label text-shadow">Ваш адрес электронной почты:</label>
  //   <input type="email" class="form-control py-0" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" required>
  // </div>
  // <div class="mb-2 w-50">
  //   <label for="exampleInputPassword1" class="form-label text-shadow">Ваш пароль:</label>
  //   <input type="password" name="password" class="form-control py-0" id="exampleInputPassword1" required>
  // </div>
  // <button id="register" type="submit" class="btn btn-dark py-2">Зарегистрироваться</button>
  // `;
  //
  // main.appendChild(signUpWindow);
}

function createFormSignUp(guestColumnRight) {
  const resultWindow = document.createElement('div');
  // resultWindow.classList.add('resultWindow');
  resultWindow.id = 'resultWindow';
  // const resultWindow = document.getElementById('resultWindow');
  resultWindow.insertAdjacentHTML('beforeend', `<form class="formSignUp">
                  <div class="mb-3">
                    <label htmlFor="exampleInputName"class="form-label">Ведите Ваше имя</label>
                    <input
                      type="text"
                       name="userName" 
                      class="form-control"
                      id="exampleInputText"
                      aria-describedby="textHelp"
                    />
                  </div>
                  <div class="mb-3">
                    <label htmlFor="exampleInputEmail" class="form-label">Эл. почта</label>
                    <input
                      type="email"
                      name="userEmail" 
                      class="form-control"
                      id="exampleInputEmail"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div class="mb-3">
                    <label htmlFor="exampleInputPassword" class="form-label">Пароль</label>
                    <input type="password" name="userPassword"  class="form-control" id="exampleInputPassword1" />
                  </div>
                  <button type="submit" class="btn btn-primary signUp">Зарегистрироваться</button>
                  </form>
   `);
  guestColumnRight.appendChild(resultWindow);
}
