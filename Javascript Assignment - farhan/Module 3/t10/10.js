'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('source');
  const output = document.getElementById('target');

  form.addEventListener('submit', e => {
    e.preventDefault();
    const first = document.querySelector('input[name="firstname"]').value.trim();
    const last = document.querySelector('input[name="lastname"]').value.trim();
    output.textContent = `Your name is ${first} ${last}`;
  });
});
