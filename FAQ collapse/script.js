const buttons = document.querySelectorAll('.faq-toggle')
const faqs = document.querySelectorAll('.faq')

buttons.forEach((button,idx) => {
  button.addEventListener('click', Collapse)
  function Collapse() {
    faqs[idx].classList.toggle('active')
  }
});