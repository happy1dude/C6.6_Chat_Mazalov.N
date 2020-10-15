const btnRequest = document.querySelector('.js-btn-request');
const btnLocation = document.querySelector('.js-btn-location');
const textChat = document.querySelector('.js-text-chat');

function inputText(value) {
    let textValue = `
        <div class='from-me'>
            <p class='from-me-txt'>${value}</p>
        </div>
    `
    console.log(textValue);
    return textChat.innerHTML = textValue;

}

function link() {
    return fetch('https://wss://echo.websocket.org/')
        .then((response) => {
            console.log(response)
        })
}

btnRequest.addEventListener('click', async() => {
    const inpt = document.querySelector('.js-inpt').value;
    inputText(inpt);
    const res = await link();
})