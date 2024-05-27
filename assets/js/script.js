// FORM VALIDATION 

const formName = document.getElementById('form-name')
const formEmail = document.getElementById('form-email')
const formBesked = document.getElementById('form-besked')
const formSubmit = document.getElementById('form-submit')

let formNameBoo = false
let formMailBoo = false



formName.addEventListener('keyup', (event) => {
    if (formName.value.length >= 2) {
        formName.classList.add('formValid')
        formName.classList.remove('formInvalid')
        formNameBoo = true
    } else {
        formName.classList.add('formInvalid')
        formName.classList.remove('formValid')
        formNameBoo = false
    }
})
const mailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
formEmail.addEventListener('keyup', (event) => {
    let formEmailValue = formEmail.value.toLowerCase()+event.key;
    const emailRegex = 
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(formEmailValue.toLowerCase().match(mailRegex)) {
        formEmail.classList.add('formValid')
        formEmail.classList.remove('formInvalid')
        formMailBoo = true
    } else {
        formEmail.classList.add('formInvalid')
        formEmail.classList.remove('formValid')
        formMailBoo = false
    }
})

formSubmit.addEventListener('click', (event) => {
    event.preventDefault()
    if(formNameBoo === true && formMailBoo === true && formBesked.value) {
        alert('Besked sendt!')
        formName.value = ''
        formEmail.value = ''
        formBesked.value = ''
        formEmail.classList.remove('formValid')
        formName.classList.remove('formValid')
    } else if (formNameBoo === false) {
        alert('Indtast dit navn!')
    } else if (formMailBoo === false) {
        alert('Indtast din email!')
    } else if (!formBesked.value) {
        alert('Indtast din besked!')
    }
})


// IMAGE SLIDER 

const imageArray = ['assets/images/Instagram_01.jpg', 'assets/images/Instagram_02.jpg', 'assets/images/Instagram_03.jpg', 'assets/images/Instagram3.jpg', 'assets/images/Instagram5.jpg', 'assets/images/Instagram7.jpg']

const imageOne = document.getElementById('imageOne')
const imageTwo = document.getElementById('imageTwo')
const imageThree = document.getElementById('imageThree')
const arrowBackwards = document.getElementById('arrowBackwards')
const arrowForwards = document.getElementById('arrowForwards')

let imageIndex = 0

arrowBackwards.addEventListener('click',() => {
    if(imageIndex + 3 > 5) {
        imageIndex -= 6
    } 
    imageOne.src = imageTwo.src
    imageTwo.src = imageThree.src
    imageThree.src = imageArray[imageIndex+3]
    console.log(imageIndex+3);
    imageIndex++
} )

arrowForwards.addEventListener('click',() => {
    if(imageIndex - 1 < 0) {
        imageIndex += 6
    } 
    imageThree.src = imageTwo.src
    imageTwo.src = imageOne.src
    imageOne.src = imageArray[imageIndex-1]
    console.log(imageIndex-1);
    imageIndex--
} )