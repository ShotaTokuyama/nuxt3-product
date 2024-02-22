<script setup lang="ts">
const {
  addTodo,
  deleteTodo,
  closeAlert,
  inputTodo,
  todos,
  todoChecked,
  showAlert,
} = useTodo();
</script>

<template>
  <h1 class="text-6xl text-green-400 w-full mb-8">Todo App</h1>
  <div class="flex gap-x-4 mb-8 justify-center">
    <input
      type="text"
      placeholder="Type here"
      class="input input-bordered input-primary w-full max-w-xs"
      v-model="inputTodo"
    />
    <ActionButton name="追加" @click="addTodo" />
    <ActionButton name="削除" @click="deleteTodo" />
  </div>
  <div class="menu bg-base-200 rounded-box">
    <p class="menu-title text-red-400 text-xl" v-if="todos.length > 0">
      TodoList
    </p>
    <p class="menu-title text-red-400 text-xl" v-if="todos.length === 0">
      Todoが登録されていません。
    </p>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <div class="form-control">
          <label class="cursor-pointer label gap-x-4">
            <input
              type="checkbox"
              class="checkbox checkbox-accent"
              v-model="todoChecked"
              :value="todo"
            />
            <span class="label-text">{{ todo }}</span>
          </label>
        </div>
      </li>
    </ul>
  </div>
  <div
    role="alert"
    class="alert alert-error mt-8 cursor-pointer"
    v-show="showAlert"
    @click="closeAlert"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="stroke-current shrink-0 h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <span class="font-bold text-lg">フォームにTodoを入力してください。</span>
  </div>
</template>
