import throttle from 'lodash.throttle';
import { getValue } from './localstorage-values';


const STORAGE_KEY = 'feedback-form-state';

const formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('textarea'),
  input: document.querySelector('input'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput, 500));

pupolateMassageOutput();

function onFormSubmit(evt) { 
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}


function onTextareaInput(evt) {
  formData[evt.target.name] = evt.target.value;
  const message = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, message)
}

function pupolateMassageOutput() { 
  const savedMessage = getValue(STORAGE_KEY, "");
console.log(savedMessage);
 
  if (savedMessage) { 
    refs.input.value = savedMessage.email;
    refs.textarea.value = savedMessage.message;
  }

}