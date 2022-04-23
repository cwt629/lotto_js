const resultbox = document.querySelector('.result');
const pickButton = document.getElementById('pick');
const retryButton = document.getElementById('retry');

let picked = [];
let chosen;

const colors = ['orange', 'skyblue', 'red', 'purple', 'green']

function pickRandomly(){
    let i;
    if (picked.length == 0){
        for (i=0; i<6; i++){
            do{
                chosen = Math.floor(Math.random() * 45) + 1;
            } while (picked.indexOf(chosen)>=0);
            picked[i] = chosen;
            let resultDiv = document.createElement('div');
            resultDiv.className = 'each'; 
            resultDiv.textContent = chosen;
            resultDiv.style.backgroundColor = colors[Math.floor(chosen / 10)];
            resultDiv.style.color = 'white';
            resultDiv.style.display = 'block';
            resultbox.appendChild(resultDiv);
        }
    }
}

function clearPicked(){
    picked.splice(0, 6);
    // 처음 보는 구문...만들었던 div를 비워주는 역할인듯?
    resultbox.innerHTML = ""
}

pickButton.addEventListener('click', pickRandomly);
retryButton.addEventListener('click', clearPicked);
