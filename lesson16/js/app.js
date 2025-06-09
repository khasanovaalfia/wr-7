const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let current = '';

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const value = btn.getAttribute('data-value');
    if (btn.id === 'clear') {
      current = '';
      display.value = '';
    } else if (btn.id === 'equals') {
      try {
        current = eval(current).toString();
        display.value = current;
      } catch {
        display.value = 'Ошибка';
        current = '';
      }
    } else if (value) {
      current += value;
      display.value = current;
    }
  });
});