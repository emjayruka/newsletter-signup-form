const emailInput = document.getElementById('emailInput')
const btn = document.getElementById('button')
const emailOutput = document.getElementById('emailOutput')
const SubBox = document.getElementById('SubBox')
const ThanksBox = document.getElementById('ThanksBox')
const dismissBtn = document.getElementById('dismissBtn')

btn.addEventListener('click', (event) => {
      event.preventDefault();

    if (emailInput.value === '') {
        alert('Please enter an email address.');
    } else {
        emailOutput.innerText = emailInput.value;
        SubBox.classList.add('hidden');
        ThanksBox.classList.remove('hidden');
    }
});

dismissBtn.addEventListener('click', ()=> {
    ThanksBox.classList.add('hidden');
    SubBox.classList.remove('hidden');
    emailInput.value = "";
});