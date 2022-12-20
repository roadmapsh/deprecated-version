function showAd() {
  window.setTimeout(() => {
    const ad = document.querySelector('.sponsor-ad');
    if (!ad) {
      return;
    }

    ad.classList.remove('hidden');
  }, 500);
}

function validateCaptchaBeforeSubmit(e) {
  const target = e.target;
  const captchaField = target.querySelector('.recaptcha-field');

  if (captchaField) {
    const captchaId = captchaField.dataset.recaptchaId;
    const captchaResponse = grecaptcha.getResponse(captchaId);

    // If valid captcha is not present, prevent form submission
    if (!captchaResponse) {
      e.preventDefault();
      alert('Please verify that you are human first');
      return false;
    }

    target.querySelector('.recaptcha-response').value = captchaResponse;
  }

  this.closest('.modal').classList.add('hidden');
  return true;
}

function bindCaptchaValidation() {
  const forms = document.querySelectorAll('.validate-captcha-form');

  forms.forEach((form) => {
    form.addEventListener('submit', validateCaptchaBeforeSubmit);
  });
}

// Render the captcha fields on the forms where required
window.onCaptchaLoad = function () {
  if (!grecaptcha) {
    console.warn('grecaptcha is not defined');
    return;
  }

  const recaptchaFields = document.querySelectorAll('.recaptcha-field');

  // render recaptcha on fields
  recaptchaFields.forEach((field) => {
    const renderedId = grecaptcha.render(field, {
      sitekey: '6Ldn2YsjAAAAABlUxNxukAuDAUIuZIhO0hRVxzJW',
    });

    field.setAttribute('data-recaptcha-id', renderedId);
  });
};

window.addEventListener('DOMContentLoaded', () => {
  showAd();
  bindCaptchaValidation();
});
