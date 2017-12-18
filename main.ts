function helloWorld() {
  let pElement = document.getElementById('greet');

  if (pElement) {
    pElement.innerText = 'Hello World!';
  }
}
