function randomNumber (start, end) {
  if (start > end || start < 0) {
    throw new Error('Неверные входные данные');
  }
  /*
  Math.floor - округление до ближайшего целого числа (<=)
  Math.random - генерация от 0 до 1
  Умножаем для масштабирования на заданный диапазон
  Добавляем начальное значение для включения в диапазон
  */
  return Math.floor(Math.random() * (end - start + 1)) + start;
}

function checkMaxLength (str, maxLength) {
  str.length <= maxLength;
}

