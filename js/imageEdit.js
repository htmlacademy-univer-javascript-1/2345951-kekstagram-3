const scale = document.querySelector('.scale__control--value');
let scaleValueNumber = Number(scale.value.replace('%', ''));
const increaseButton = document.querySelector('.scale__control--bigger');
const decreaseButton = document.querySelector('.scale__control--smaller');
const imgUploadPreview = document.querySelector('.img-upload__preview');
imgUploadPreview.style.setProperty('transform','scale(1.0)');
let styleValueNumber = imgUploadPreview.style.getPropertyValue('transform').replace(/\D/g,'');
const chromeLable = document.querySelector('#effect-chrome');
const originalLable = document.querySelector('#effect-none');
const sepiaLabel = document.querySelector('#effect-sepia');
const marvinLabel = document.querySelector('#effect-marvin');
const phobosLabel = document.querySelector('#effect-phobos');
const heatLabel = document.querySelector('#effect-heat');

heatLabel.addEventListener('click', () => {
  setEffect('heat');
});

phobosLabel.addEventListener('click', () => {
  setEffect('phobos');
});

marvinLabel.addEventListener('click', () => {
  setEffect('marvin');
});

sepiaLabel.addEventListener('click', () => {
  setEffect('sepia');
});

chromeLable.addEventListener('click', () => {
  setEffect('chrome');
});

originalLable.addEventListener('click', () => {
  imgUploadPreview.querySelector('img').className = '';
});

function setEffect(effect) {
  imgUploadPreview.querySelector('img').className = '';
  imgUploadPreview.querySelector('img').classList.add(`effects__preview--${effect}`);
}

function increaseScale() {
  if (scaleValueNumber === 100) {
    return;
  }
  styleValueNumber += 0.25;
  scaleValueNumber += 25;
  scale.value = `${scaleValueNumber}%`;
  imgUploadPreview.style.setProperty('transform',`scale(${styleValueNumber})`);
}

function decreaseScale() {
  if (scaleValueNumber === 25) {
    return;
  }
  styleValueNumber -= 0.25;
  scaleValueNumber -= 25;
  scale.value = `${scaleValueNumber}%`;
  imgUploadPreview.style.setProperty('transform',`scale(${styleValueNumber})`);
}

increaseButton.addEventListener('click', increaseScale);
decreaseButton.addEventListener('click', decreaseScale);

