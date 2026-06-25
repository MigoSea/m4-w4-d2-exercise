window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js');
  }
};

function showName() {
  const input = document.getElementById("nameInput").value;
  document.getElementById("output").innerText = input;
}
