'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('calc');
  const button = document.getElementById('run');
  const result = document.getElementById('output');

  const calculate = () => {
    const exp = input.value.trim();
    let answer;

    if (exp.includes('+')) {
      const [x, y] = exp.split('+').map(Number);
      answer = x + y;
    } else if (exp.includes('-')) {
      const [x, y] = exp.split('-').map(Number);
      answer = x - y;
    } else if (exp.includes('*')) {
      const [x, y] = exp.split('*').map(Number);
      answer = x * y;
    } else if (exp.includes('/')) {
      const [x, y] = exp.split('/').map(Number);
      if (y === 0) {
        result.textContent = 'Error: division by zero';
        return;
      }
      answer = x / y;
    } else {
      result.textContent = 'Invalid input! Use +, -, * or /.';
      return;
    }

    result.textContent = `Result: ${answer}`;
  };

  button.addEventListener('click', calculate);
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') calculate();
  });
});
