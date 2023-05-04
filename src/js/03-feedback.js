import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('[name="email"]');
const messageInput = form.querySelector('[name="message"]');

const saveFeedbackState = () => {
  const feedbackState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(feedbackState));
};

emailInput.addEventListener('input', throttle(saveFeedbackState, 500));
messageInput.addEventListener('input', throttle(saveFeedbackState, 500));

const savedFeedbackState = JSON.parse(
  localStorage.getItem('feedback-form-state')
);

if (savedFeedbackState) {
  emailInput.value = savedFeedbackState.email;
  messageInput.value = savedFeedbackState.message;
}

form.addEventListener('submit', event => {
  event.preventDefault();

  localStorage.removeItem('feedback-form-state');

  emailInput.value = '';
  messageInput.value = '';
});
