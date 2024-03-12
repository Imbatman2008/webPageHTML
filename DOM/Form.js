const output = document.getElementById('output')
const inputNumber = document.getElementById('Input-Number')
const btn = document.querySelector('.btn')

function Add() {
    btn.addEventListener('click', () => {
        const number = Number(inputNumber.value)
        const outputHTML = ''

        for (let q = 1; q < 12; q++) {
            outputHTML += '<p>'
            outputHTML += number + ' x ' + q + ' = ' + (number * q)
            outputHTML += '</p>'
        }

        output.innerHTML = outputHTML
    })

}