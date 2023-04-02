const imageForm = document.querySelector('.img-upload__form');
const comment = imageForm.querySelector('.text__description');
const pristine = new Pristine(imageForm, {
  classTo: 'img-upload__text',
  successClass: 'img-upload__text--valid',
  errorClass: 'img-upload__text--invalid',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'form__error',
  errorTextTag: 'span'
});

comment.addEventListener('change', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});

imageForm.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});

