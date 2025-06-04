// Удалено дублирующее объявление переменных и обработчик

// const addTodo = (todo) => {
//   const li = document.createElement('li');
//   li.textContent = todo;
//   li.classList.add('todo-item');
//   todos.appendChild(li);

//   const removeButton = document.createElement('button');
//   removeButton.textContent = 'Delete';
//   removeButton.classList.add('remove-button');
//   removeButton.addEventListener('click', (e) => {
//     e.preventDefault();
//     li.remove();
//     alert(`Todo "${todo}" removed!`);
//   });
//   li.appendChild(removeButton);

//   const editButton = document.createElement('button');
//   editButton.textContent = 'Edit';
//   editButton.classList.add('edit-button');
//   editButton.addEventListener('click', (e) => {
//     e.preventDefault();
//     const newTodo = prompt("Edit your todo", todo);
//     if (newTodo) {
//       li.firstChild.textContent = newTodo;
//       alert(`Todo updated to "${newTodo}"!`);
//     }
//   })
//   li.appendChild(editButton);
// }


// Функция для добавления новой задачи в список дел.
const addTodo = (todo) => {
  // Создаем новый элемент списка
  const li = document.createElement('li');

  // Заполняем элемент содержимым: текст задачи и кнопки для редактирования/удаления
  li.innerHTML = `
    <span class="todo-item">${todo}</span>
    <button id="edit-todo" class="edit-button">Edit</button>
    <button id="remove-todo" class="remove-button">Delete</button>
  `;

  // Добавляем созданный элемент в список дел (todos)
  todos.appendChild(li);

  // Находим кнопку редактирования внутри созданного элемента
  const editButton = li.querySelector('#edit-todo');

  // Добавляем обработчик события клика на кнопку редактирования
  editButton.addEventListener('click', (e) => {
    // Предотвращаем стандартное поведение браузера при клике
    e.preventDefault();

    // Открываем диалог prompt для редактирования задачи
    // Текущий текст задачи отображается в поле ввода
    const newTodo = prompt("Edit your todo", todo);

    // Если пользователь ввел новый текст (не нажал "Отмена")
    if (newTodo) {
      // Обновляем текст задачи в DOM
      li.querySelector('.todo-item').textContent = newTodo;

      // Показываем уведомление об успешном обновлении
      alert(`Todo updated to "${newTodo}"!`);
    }
  })

  // Находим кнопку удаления внутри созданного элемента
  const removeButton = li.querySelector('#remove-todo');

  // Добавляем обработчик события клика на кнопку удаления
  removeButton.addEventListener('click', (e) => {
    // Предотвращаем стандартное поведение браузера при клике
    e.preventDefault();

    // Удаляем элемент списка из DOM
    li.remove();

    // Показываем уведомление об удалении задачи
    alert(`Todo "${todo}" removed!`);
  });
}

const todos = [];
const todosList = document.getElementById('todos');
const addButton = document.getElementById('add-button');

addButton.addEventListener('click', function (e) {
    e.preventDefault();
    const task = prompt('Введите задачу:');
    if (task && task.trim() !== '') {
        todos.push(task.trim());
        renderTodos();
    }
});

function renderTodos() {
    todosList.innerHTML = '';
    todos.forEach((todo, idx) => {
        const li = document.createElement('li');
        li.textContent = todo;
        li.className = 'todo-item';

        // Кнопка удаления
        const delBtn = document.createElement('button');
        delBtn.textContent = 'Удалить';
        delBtn.className = 'delete-btn';
        delBtn.onclick = () => {
            todos.splice(idx, 1);
            renderTodos();
        };

        li.appendChild(delBtn);
        todosList.appendChild(li);
    });
}