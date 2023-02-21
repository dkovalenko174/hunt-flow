const homeLink = document.getElementById('home');
const signinLink = document.getElementById('signin');
const signupLink = document.getElementById('signup');

homeLink.addEventListener('click', goHome);

signinLink.addEventListener('click', signIn);

signupLink.addEventListener('click', signUp);

window.addEventListener('submit', enter);

window.addEventListener('submit', register);
