const body = document.body
document.title = 'formChatWhatsApp'
const inputMassage = document.getElementById('inputMassage')

function SendWhatsApp() {
    const FetchUrl = `https://wa.me/6285921471773?text=Halo,${inputMassage.value}&send=true`;
    window.open(FetchUrl, '_blank')

}