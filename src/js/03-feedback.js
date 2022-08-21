import '../css/common.css';
import '../css/03-feedback.css';
import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', onTextareaInput);


function onFormSubmit(evt) { }


function onTextareaInput(evt) {
  const value = evt.currentTarget.value;

  console.log(value);

  localStorage.setItem('feedback-form-state', massage)
}

function pupolateMassageOutput() { }