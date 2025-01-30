const formData = { email: '', message: '' };

const form = document.querySelector('.feedback-form');
form.addEventListener('input', event => {
  const emailValue = event.currentTarget.elements.email.value.trim();
  const messageValue = event.currentTarget.elements.message.value.trim();
  formData.email = emailValue;
  formData.message = messageValue;
  saveToLS('feedback-form-state', formData);
});

function saveToLS(key, value) {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(key, jsonData);
}
function loadFromLS(key) {
  const body = localStorage.getItem(key);
  try {
    const data = JSON.parse(body);
    return data;
  } catch {
    return body;
  }
}
function initPage() {
  const valueFormData = loadFromLS('feedback-form-state');
  form.elements.email.value = valueFormData?.email || '';
  form.elements.message.value = valueFormData?.message || '';
}
initPage();

form.addEventListener('submit', event => {
  event.preventDefault();
  const emailValue = event.currentTarget.elements.email.value.trim();
  const messageValue = event.currentTarget.elements.message.value.trim();
  formData.email = emailValue;
  formData.message = messageValue;
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  event.target.reset();
  localStorage.removeItem('feedback-form-state');
});
