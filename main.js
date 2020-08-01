const button = document.querySelector('.click-me');
const background = document.querySelector('.background');

const hexGen = () => {
    let call = '#' + Math.floor(Math.random() * 16777215).toString(16);
    background.style.backgroundColor = call;
    button.innerHTML = call;
}

button.addEventListener('click', hexGen);


