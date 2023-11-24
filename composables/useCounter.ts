export function useCounter(initialValue: number) {
  const count = ref(initialValue);
  const inc = () => count.value++;
  const dec = () => {
    if (count.value > 0) {
      count.value--;
    }
  }
  const res = () => count.value = 0;
  return {
    count,
    inc,
    dec,
    res,
  };
}