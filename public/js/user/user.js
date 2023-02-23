const homeLink = document.getElementById('home');
const logoutLink = document.getElementById('logout');
const allUsers = document.getElementById('allUsers');
const newUsers = document.getElementById('newUsers');
const usersToInterview = document.getElementById('usersToInterview');
const usersIntresting = document.getElementById('usersIntresting');
const usersToInterviewCustomer = document.getElementById('usersToInterviewCustomer');
const usersToCall = document.getElementById('usersToCall');
const usersSentOffer = document.getElementById('usersSentOffer');
const usersAcceptedOffer = document.getElementById('usersAcceptedOffer');
const usersGoToWork = document.getElementById('usersGoToWork');
const usersRefusal = document.getElementById('usersRefusal');
const FormApplicant = document.getElementById('getFormApplicant');

homeLink.addEventListener('click', goHome);

logoutLink.addEventListener('click', logOut);

allUsers.addEventListener('click', getAllUsers);

newUsers.addEventListener('click', getNewUsers);

usersToInterview.addEventListener('click', getUsersToInterview);

usersIntresting.addEventListener('click', getUsersIntresting);

usersToInterviewCustomer.addEventListener('click', getUsersToInterviewCustomer);

usersToCall.addEventListener('click', getUsersToCall);

usersSentOffer.addEventListener('click', getUsersSentOffer);

usersAcceptedOffer.addEventListener('click', getUsersAcceptedOffer);

usersGoToWork.addEventListener('click', getUsersGoToWork);

usersRefusal.addEventListener('click', getUsersRefusal);

FormApplicant.addEventListener('click', getFormApplicant);

window.addEventListener('submit', uploadFormData);
