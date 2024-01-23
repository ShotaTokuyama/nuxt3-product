export default defineEventHandler(async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const users = await res.json();
  return users;
})
