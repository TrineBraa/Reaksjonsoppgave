// Lag en updateView()-funksjon som lager 25 sirkler ved hjelp av 25 DIV-er med en bakrunnsfarge du velger selv, og en sirkulær ramme 
//(border-radius: 50%). Sett bredde og høyde til noe passende. Vis dem i 5 rader a 5 sirkler. Lag en egen css class for dette, kall den for eksempel 
//"lamp". 

// Lag en css class "lightOn" med gul farge. Lag en kontroller-funksjon som endrer en variabel selectedLampIndex 
//i modellen til et tilfeldig tall under 25 og så kaller updateView(). Endre den slik at riktig lampe lyser opp. Sørg for å kalle 
//kontroller-funksjonen når siden laster. 

// Legg til en onclick kun på den knappen som lyser - og koble den til en kontroller-funksjonen du lagde i forrige punkt. 

// Forsøk å måle og vise tiden det tok fra en lampe lyste opp til brukeren trykket på den. Her er noen hint, men finn ut 
//selv hvor i koden du legger dette:
// var startTime = new Date().getTime();
// var finishTime = new Date().getTime();
// var spentMilliseconds = Math.floor(finishTime - startTime);
// var spentSeconds = spentMilliseconds / 1000;

//Model

let maxLights = 25;
let startTime;
let stopTime;
let times = []
let registeredClicks = 0;

//View
updateView()
function updateView(){
    document.getElementById("app").innerHTML = /*HTML*/`
    <div id="lightContainer">
        ${drawLamps()}
    </div>
    <div id="statContainer">
        <div id="timeContainer">
            ${drawTimes()}
        </div>
        <div id="clicks">
            Du har trykket <br><span>${registeredClicks}</span><br> ganger
        </div>
    </div>
    `;
}

//Controller
function drawLamps(){
    let randomNum = Math.floor(Math.random() * maxLights)
    startTime = new Date().getTime();
    
    let html = ''

    for (let i = 0 ; i < maxLights; i++){
        if (i == randomNum){
            html += `<div id="${i}" class="lights lightOn" onclick="registerClick()"></div>`
        } else {
            html += `<div id="${i}" class="lights"></div>`
        }
    }
    return html
}

function drawTimes(){
    let html = ''
    for(let i = times.length -1; i >=0 ; i--){
       html += `<div>Du brukte ${times[i]} Sekunder</div>`;
    }
    return html;
}

function registerClick(){
    stopTime = new Date().getTime();
    times.push((stopTime - startTime) / 1000)
    registeredClicks ++
    updateView()
}

