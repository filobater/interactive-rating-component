'use strict';
const submit = document.querySelector('.submit-rate');
const rateInput = Array.from(document.querySelectorAll('.rate-input'));

const selectedRate = document.querySelector('.selected-rate');
const submitted = document.querySelector('.submitted');
const rateUs = document.querySelector('.rate-us');

const submitRate = function () {
  rateInput.forEach((input) => {
    input.addEventListener('click', function (e) {
      const value = e.target.value;
      selectedRate.innerHTML = `you selected ${value} out of 5`;
    });
  });
};

submitRate();

submit.addEventListener('submit', function (e) {
  e.preventDefault();
  submitted.classList.remove('hidden');
  rateUs.classList.add('hidden');
});
