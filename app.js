// 1) pull your element into jS via querySelector
let generate = document.querySelector('#generate');
// 2) add an event listener for the click on the generate button
generate.addEventListener('click', event => {
    console.log('clicked!');
})
