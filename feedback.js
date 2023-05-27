(() => {
  const refs = {
    openFeedbackBtn: document.querySelector("[data-feedback-open]"),
    closeFeedbackBtn: document.querySelector("[data-feedback-close]"),
    feedback: document.querySelector("[data-feedback]"),
  };

  refs.openFeedbackBtn.addEventListener("click", toggleFeedback);
  refs.closeFeedbackBtn.addEventListener("click", toggleFeedback);

  function toggleFeedback() {
    refs.feedback.classList.toggle("is-hidden");
    document.body.classList.toggle('no-scrol')
  }
})();