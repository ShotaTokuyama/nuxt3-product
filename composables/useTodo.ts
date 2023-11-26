export function useTodo() {
  const inputTodo = ref("");
  const todos = ref<String[]>([]);
  const todoChecked = ref<String[]>([]);
  const showAlert = ref(false);

  const addTodo = () => {
    if (inputTodo.value) {
      todos.value.push(inputTodo.value);
      inputTodo.value = '';
    } else {
      showAlert.value = true;
    }
  }

  const deleteTodo = () => {
    todos.value = todos.value.filter(todo => !todoChecked.value.includes(todo));
    todoChecked.value = [];
  }

  const closeAlert = () => {
    showAlert.value = false;
  }

  return {
    inputTodo,
    todos,
    todoChecked,
    showAlert,
    addTodo,
    deleteTodo,
    closeAlert,
  };
}