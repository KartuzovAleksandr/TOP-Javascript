function fibo(number) {
  let fib= [];
  for (let i = 0; i < number; i++) {
    fib[i] = fibonacchi(i);
  }
  return fib;
}

function fibonacchi(x) {
    if (x === 0 || x === 1 || x === 2)
        return 1
    else
        return fibonacchi(x - 1) + fibonacchi(x - 2);
}

function checkValidData(number) {
  if (number === null || number.trim() === "") {
    alert("Поле не может быть пустым.");
    return false;
  }
  const num = Number(number);
  if (isNaN(num)) {
    alert("Введите целое число");
    return false;
  }

  if (!Number.isInteger(num)) {
    alert("Введите целое число");
    return false;
  }

  if (num < 2 || num > 20) {
    alert("Введите число больше 2 и меньше 20");
    return false;
  }
  return true;
}