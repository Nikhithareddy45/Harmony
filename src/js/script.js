const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const navUl = document.querySelector('.nav-ul');

openBtn.addEventListener('click', function() {
  navUl.classList.toggle('open'); // Toggle the 'open' class on the nav-ul
});

closeBtn.addEventListener('click', function() {
  navUl.classList.remove('open'); // Remove the 'open' class from the nav-ul
});



const faqItems = document.querySelectorAll('.faq-flex');

faqItems.forEach(faqItem => {
  const question = faqItem.querySelector('.plus-flex');
  const answer = faqItem.querySelector('.desp');
  const plusIcon = faqItem.querySelector('.fa-plus'); 

  faqItem.addEventListener('click', () => {
    answer.classList.toggle('show');
    plusIcon.classList.toggle('fa-minus'); 
  });
});


const button = document.getElementById('service-book');

button.addEventListener('click', function() {
  window.location.href = 'contact.html'; // Replace with the target website URL
});
