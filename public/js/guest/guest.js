const homeLink = document.getElementById('home');
const signinLink = document.getElementById('signin');
const signupLink = document.getElementById('signup');
const sugnupBtn = document.getElementById('btn_signup');

homeLink.addEventListener('click', goHome);

signinLink.addEventListener('click', signIn);

signupLink.addEventListener('click', signUp);
sugnupBtn.addEventListener('click', signUp);

window.addEventListener('submit', enter);
window.addEventListener('submit', register);
// window.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const btnEl = e.target;
//   // const data = Object.entries(new FormData(btnEl));
//   console.log(btnEl.parentNode);
//   // if (btnEl.classList.contains('formSignIn')) console.log(btnEl);
// });
