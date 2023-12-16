const subscribeForm = document.querySelector('#subscribe form');

subscribeForm.addEventListener('submit', e => {

  e.preventDefault();
  
  const email = document.querySelector('#subscribe input').value;  

  saveEmail(email);
  
  alert('You have successfully subscribed!');

})

function saveEmail(email) {

  // Save email
}