function typeEffect(element, text, speed, callback) {
    let i = 0;
    function type() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else if (callback) {
        callback();
      }
    }
    type();
  }
  
  function startTypingAll() {
    const elements = document.querySelectorAll('[data-typed]');
    let index = 0;
  
    function next() {
      if (index >= elements.length) return;
      const el = elements[index];
      const text = el.getAttribute('data-typed');
      el.textContent = '';
  
      typeEffect(el, text, 15, () => {
        // Reveal sibling colon or dash-line if exists
        const siblingColon = el.parentElement.querySelector('.colon');
        const siblingDash = el.parentElement.querySelector('.dash-line');
        if (siblingColon) siblingColon.classList.remove('hidden');
        if (siblingDash) siblingDash.classList.remove('hidden');
  
        index++;
        next();
      });
    }
  
    next();
  }
  
  document.addEventListener('DOMContentLoaded', startTypingAll);
  