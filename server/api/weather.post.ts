export default defineEventHandler(async () => {
  const res = await fetch('http://api.openweathermap.org/data/2.5/weather?q={Tokyo,JP}&appid={3633d343d6a40cc6e70f21a0b3bc40ec}&lang=ja&units=metric');
  const weather = await res.json();
  console.log(weather);
  return weather;
})
