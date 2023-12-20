function updateTime() {
    const componenteH3 = document.getElementById("time");
    let dataAtual = new Date();
    let horas = dataAtual.getHours().toString().padStart(2, '0');
    let minutos = dataAtual.getMinutes().toString().padStart(2, '0');
    let segundos = dataAtual.getSeconds().toString().padStart(2, '0');
    const formatacao = `${horas}:${minutos}:${segundos}`;
    componenteH3.textContent = formatacao;
}

let intervaloId = [];

function startClock(){
    intervaloId.push(setInterval(updateTime, 1000));
    updateTime();
}

function stopClock(){
    for (let id of intervaloId){
        clearInterval(id);
    }    
}

function resetClock(){
    document.getElementById("time").textContent = "00:00:00";
}