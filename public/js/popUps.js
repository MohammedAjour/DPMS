var addCustomer = document.getElementById('addCustomer');
var btn = document.getElementById('add-btn');
var span = document.getElementsByClassName('close')[0];

function hideNewCustomerForm () {
  addCustomer.classList.remove('newCustomerForm--open');
}

btn.onclick = function () {
  addCustomer.classList.add('newCustomerForm--open');
};
span.onclick = hideNewCustomerForm;
window.onclick = function (event) {
  if (event.target === addCustomer) {
    hideNewCustomerForm();
  }
};
