function randomNumber (start, end) {
  if (start > end || start < 0) {
    return console.log('Неверные входные данные');
  }
  /*
  Math.floor - округление до ближайшего целого числа (<=)
  Math.random - генерация от 0 до 1
  Умножаем для масштабирования на заданный диапазон
  Добавляем начальное значение для включения в диапазон
  */
  return console.log(Math.floor(Math.random() * (end - start + 1)) + start);
}

function maxLength (string, length) {
  console.log(string.length <= length);
}

