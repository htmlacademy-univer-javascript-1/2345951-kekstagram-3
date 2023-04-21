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
const sliderElement = document.querySelector('.effect-level__slider');
const sliderElementValue = document.querySelector('.effect-level__value');
let sliderValue;
let currentEffect = 'original';
const filters = {
  'chrome': {
    min: 0,
    max: 1,
    name: 'grayscale',
    step: 0.1,
    measure: ''
  },
  'sepia' : {
    min: 0,
    max: 1,
    name: 'sepia',
    step: 0.1,
    measure: ''
  },
  'marvin': {
    min: 0,
    max: 100,
    name: 'invert',
    step: 1,
    measure: '%'
  },
  'phobos': {
    min: 0,
    max: 3,
    name: 'blur',
    step: 0.1,
    measure: 'px'
  },
  'heat': {
    min: 1,
    max: 3,
    name: 'brightness',
    step: 0.1,
    measure: ''
  }
};

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
});
sliderElement.setAttribute('hidden', true);

function setEffect(effect, flag) {
  const image = imgUploadPreview.querySelector('img');
  if (effect === 'original') {
    sliderElement.setAttribute('hidden', true);
    image.className = '';
    image.style.filter = '';
    return;
  }
  const minValue = filters[effect].min;
  const maxValue = filters[effect].max;
  const stepValue = filters[effect].step;
  const measureValue = filters[effect].measure;
  const nameValue = filters[effect].name;
  if (!flag) {
    image.style.setProperty('filter', `${nameValue}(${maxValue}${measureValue})`);
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: minValue,
        max: maxValue,
      },
      start: maxValue,
      step: stepValue
    });
    sliderElement.removeAttribute('hidden', true);
    image.className = '';
    image.classList.add(`effects__preview--${effect}`);
    currentEffect = effect;
  }
  else {
    image.style.filter = `${nameValue}(${sliderValue}${measureValue})`;
  }
}

sliderElement.noUiSlider.on('slide', () => {
  sliderElementValue.value = sliderElement.noUiSlider.get();
  sliderValue = sliderElement.noUiSlider.get();
  setEffect(currentEffect, true);
});

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
  setEffect('original');
});

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

