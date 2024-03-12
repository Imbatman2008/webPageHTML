// const Language = document.querySelectorAll('p')
// const textIndex0 = Language[0].innerHTML
// const textIndex1 = Language[1].innerHTML
// const textIndex2 = Language[2].innerHTML

// =====================================================

const ctn = document.getElementById('ctn')
const btn = document.querySelector('.btn')
const menu_select = document.getElementById('--menu--select')

function checkValue() {
    var selectElement = document.getElementById("--menu--select").value
    if (selectElement == 1) {
        open('./Components/index1.html')
    } else if (selectElement == 2) {
        open('./Components/index2.html')
    } else if (selectElement == 3) {
        open('./Components/index3.html')
    } else if (selectElement == 4) {
        open('./Components/index4.html')
    }
}

// if (menu_select == 1) {
//     console.log('value ' + menu_select)
// } else {
//     console.log('Erros ' + menu_select)
// }

// function AddClass() {
//     ctn.classList.add('Dark')
//     Chick()
// }

// function reSet() {
//     ctn.classList.remove('Dark')
//     Chick()
// }

// function Witch() {
//     ctn.classList.toggle('Dark')
//     Chick()
// }

// function Chick() {
//     const s = ctn.classList.contains('Dark')
//     console.log(s)

//     if (s) {
//         ctn.style.color = 'red'
//     } else {
//         ctn.style.color = 'blue'
//     }
// } 

// function a() {
//     alert('You Access Token, thank you for token')
// }
