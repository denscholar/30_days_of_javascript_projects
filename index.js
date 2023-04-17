// Checkedbox PROJECT

const checkBox = document.getElementById('check-box')
const response = document.getElementById('response')
const submit = document.getElementById('submit-button')

console.log(response);


submit.addEventListener('click', ()=>{
    if (checkBox.checked) {
        response.innerHTML = 'Congratulations! You have subscribed'
        response.style.color = 'blue'
        response.style.fontSize = '2.5rem'
    }else{
        response.innerHTML = 'Sorry, you have not subscribed'
        response.style.color = 'red'
        response.style.fontSize = '1.5rem'
    }
})

