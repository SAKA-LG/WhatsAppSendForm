const body = document.body
document.title = 'forChat'
const inputMassage = document.getElementById('inputMassage')
const inputNumber = document.getElementById('inputNumber')

function SendWhatsApp() {
    if(inputMassage.value == '' && inputNumber.value == ''){
        alert('Sory Something Went Wrong /:')
    }else{
        let number = inputNumber.value
        const FetchUrl = `https://wa.me/${number}?text=${inputMassage.value}&send=true`;
        window.open(FetchUrl, '_blank')
    }
}
