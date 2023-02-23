async function logOut() {
  try {
    const response = await fetch('/loguot');
    if (response.status === 200) location.assign('/');
  } catch (error) {
    console.log(error);
  }
}
