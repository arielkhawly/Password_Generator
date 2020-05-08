// 1) pull your element into jS via querySelector
let generate = document.querySelector('#generate');
// 2) add an event listener for the click on the generate button
generate.addEventListener('click', event => {
    alert("Let's begin generating your secure password.");
   let passLength = prompt('Please choose a password length between 8 and 128 characters.')
    if (8 < passLength && passLength < 128 ) {
        console.log(`password is ${passLength} chars `);
    }
    else if (passLength != Number)  {
        console.log('please enter a number')
    }
    else {
        console.log('password out of range')
    }   




   createPassword();
})

function createPassword() {

}