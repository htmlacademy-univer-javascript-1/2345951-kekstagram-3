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

const photos = [];

for (let i = 1; i < 26; i++) {
  const photo = {
    id: i,
    url: `photos/${i}.jpg`,
    description: `Фото под номером ${i}!`,
    likes: randomNumber(15, 200),
    comments: randomNumber(0, 200)
  };
  photos.push(photo);
}

