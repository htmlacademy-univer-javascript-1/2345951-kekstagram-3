import { photos } from './data.js';

const template = document.querySelectorAll('#picture');
const fragment = document.createDocumentFragment();
const pictures = document.querySelector('.pictures');


for (let i = 0; i <= photos.length; i++) {
  const picture = photos[i];
  const newElement = template.cloneNode(true);

  newElement.querySelector('.picture__img').src = picture.url;
  newElement.querySelector('.picture__comments').textContent = picture.comments;
  newElement.querySelector('.picture__likes').textContent = picture.likes;

  fragment.appendChild(newElement);
}

pictures.appendChild(fragment);

