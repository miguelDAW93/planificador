const cells = document.querySelectorAll('td');
cells.forEach(cell => {
  cell.addEventListener('touchstart', () => {
    const task = prompt('Ingrese su tarea');
    if (task) {
      cell.textContent = task;
      cell.classList.add('task');
    } else {
      cell.textContent = '';
      cell.classList.remove('task');
    }
  });
});
