const scale = document.querySelector('.scale__control--value');
let scaleValueNumber = Number(scale.value.replace('%', ''));
const increaseButton = document.querySelector('.scale__control--bigger');
const decreaseButton = document.querySelector('.scale__control--smaller');
const imgUploadPreview = document.querySelector('.img-upload__preview');
imgUploadPreview.style.setProperty('transform','scale(1.0)');
let styleValueNumber = imgUploadPreview.style.getPropertyValue('transform').replace(/\D/g,'');

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

