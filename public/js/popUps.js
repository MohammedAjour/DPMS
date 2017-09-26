var addCustomer = document.getElementById('addCustomer');
var btn = document.getElementById('add-btn');
var span = document.getElementsByClassName('close')[0];
btn.onclick = function () {
  addCustomer.style.display = 'block';
};
span.onclick = function () {
  addCustomer.style.display = 'none';
};
window.onclick = function (event) {
  if (event.target === addCustomer) {
    addCustomer.style.display = 'none';
  }
};
