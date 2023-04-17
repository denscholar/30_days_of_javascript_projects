// COUNNTER PROJECT

const dec = document.getElementById('decrease')
const reset = document.getElementById('reset')
const inc = document.getElementById('increase')
const zeroLabel = document.getElementById('label')

// console.log(zeroLabel);
// console.log(dec);

let count = 0; // the current value of the result

dec.addEventListener('click', ()=>{
    count -= 1;
    zeroLabel.innerHTML = count;
})

reset.addEventListener('click', ()=>{
    count = 0;
    zeroLabel.innerHTML = count;
})

inc.addEventListener('click', ()=>{
    count += 1;
    zeroLabel.innerHTML = count;
})