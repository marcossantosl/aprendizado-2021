let btn = document.querySelectorAll("button");
let tempo = document.querySelector("#cronometro");
let millis = 31;
let date = new Date();
let timer;

function cronometro() {
    millis += 31;
    date.setHours(0, 0, 0, millis);
    let horas = ('00' + date.getHours()).substr(-2);
    let minutos = ('00' + date.getMinutes()).substr(-2);
    let segundos = ('00' + date.getSeconds()).substr(-2);
    let ms = ('000' + date.getMilliseconds()).substr(-3)
    tempo.innerHTML = `${horas}:${minutos}:${segundos}<span>${ms}</span>`;
};

date.setHours(0, 0, 0, 0);
// START
btn[0].addEventListener("click", () => {
    (btn[0].innerText == "Start") ? timer = setInterval(cronometro, 31) : clearInterval(timer);
    (btn[0].innerText == "Start") ? (btn[0].innerText = "Pause", btn[0].setAttribute('class', 'pause')) : (btn[0].innerText = "Start", btn[0].removeAttribute('class'));
});

// ZERAR
btn[1].addEventListener("click", () => {
    clearInterval(timer);
    tempo.innerHTML = `00:00:00<span>000</span>`;
    btn[0].innerText = "Start";
    btn[0].removeAttribute('class');
    millis = 31;
});
