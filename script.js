function fortune(){
    fortunes = [
        'You will receive a gift.',
        'You will drink a lot of water.',
        'You will sanitise your hands.',
        'You will not get any homework for the rest of the week.'
    ]

    visitorName = document.getElementById('fortune-input').value
    if(visitorName.length == 0){
        randomFortune = "You have no hope"
    }
    else{
        randomFortuneNum = Math.floor(Math.random()*fortunes.length)
        randomFortune = visitorName+", "+fortunes[randomFortuneNum]
    }
    outputDiv = document.getElementById('fortune-output')
    outputDiv.innerHTML = randomFortune
}

function restyle(){
    outputDiv = document.getElementById('fortune-output')
    randomFontSizes = ['80px', '18px', '20px', '60px']
    randomColors = ['red', 'blue', 'pink', 'coral']
    randombackgroundC = ['yellow', 'black', 'cyan', 'magenta']

    randomStyleNum = Math.floor(Math.random()*randomColors.length)

    outputDiv.style.fontSize = randomFontSizes[randomStyleNum];
    outputDiv.style.color = randomColors[randomStyleNum];
    outputDiv.style.backgroundColor = randombackgroundC[randomStyleNum];
}

document.getElementById('fortune-button').addEventListener('click', restyle);
document.getElementById('fortune-button').addEventListener('click', fortune);

