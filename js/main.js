// ====== Mobile Menu Toggle ======
function toggleMenu() {
  const nav = document.querySelector('.main-nav');
  nav.classList.toggle('open');
}

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    const nav = document.querySelector('.main-nav');
    nav.classList.remove('open');
  });
});

// ====== Enhanced Form Submission Handler ======



// ====== Google Apps Script Submission ======


  document.body.appendChild(emergencyDiv);

  // Copy data to clipboard
  const textToCopy = `Form Data:\n${JSON.stringify(payload, null, 2)}\n\nPlease include this in your email.`;
  navigator.clipboard.writeText(textToCopy).catch(() => {});


// ====== Form Initialization ======
document.addEventListener('DOMContentLoaded', function () {
  const forms = [
    { selector: 'form[onsubmit*="contact"]', type: 'contact' },
    { selector: 'form[onsubmit*="demo"]', type: 'demo' }
  ];

  forms.forEach(({ selector, type }) => {
    const form = document.querySelector(selector);
    if (form) {
      form.addEventListener('submit', (e) => handleFormSubmit(e, type));
      form.setAttribute('novalidate', '');

      // Hidden JS check field
      const jsCheck = document.createElement('input');
      jsCheck.type = 'hidden';
      jsCheck.name = 'javascriptEnabled';
      jsCheck.value = 'true';
      form.appendChild(jsCheck);
    }
  });
});

// ====== Dropdown Toggle (if used) ======
function toggleDropdown() {
  const dropdown = document.getElementById('servicesDropdown');
  if (dropdown) {
    dropdown.classList.toggle('dropdown-hidden');
  }
}
