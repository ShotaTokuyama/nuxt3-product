export function useCounter(initialValue: number) {
  const count = ref(initialValue);
  const inc = () => count.value++;
  const dec = () => count.value--;
  const res = () => count.value = 0;
  return {
    count,
    inc,
    dec,
    res,
  };
}