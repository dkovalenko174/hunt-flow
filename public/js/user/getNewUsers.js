function getNewUsers() {
  const mainColumnLeftApll = document.querySelector('.main__column-left');
  // Нашли всех детей
  const children = mainColumnLeftApll.childNodes;
  // удаляем их
  while (mainColumnLeftApll.firstChild) {
    mainColumnLeftApll.removeChild(mainColumnLeftApll.firstChild);
  }
  console.log(children);
}
