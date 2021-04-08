function fortune(){
    fortunes = [
        'u will worship classic typefaces.',
        'u will learn 3D modeling even though its a pain :).',
        'u will not use Zapf Dingbats.',
        'u will not stretch type.',
        'u will not automatically use the default margins in your layout program.',
        'u might check that all images have an effective 300ppi resolution.'
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
    randomColors = ['red', 'yellow', 'pink', 'coral']
    randombackgroundC = ['blue', 'green', 'cyan', 'magenta']

    randomStyleNum = Math.floor(Math.random()*randomColors.length)

    outputDiv.style.fontSize = randomFontSizes[randomStyleNum];
    outputDiv.style.color = randomColors[randomStyleNum];
    outputDiv.style.backgroundColor = randombackgroundC[randomStyleNum];
}

document.getElementById('fortune-button').addEventListener('click', restyle);
document.getElementById('fortune-button').addEventListener('click', fortune);

