function fortune(){
    fortunes = [
        'you will worship classic typefaces.',
        'you will learn 3D modeling :).',
        'you will not use Zapf Dingbats.',
        'you will not stretch type.',
        'you will not use perfectionism as an excuse for procrastinating on your personal project.',
        'you will not automatically use the default margins in your layout program.',
        'you check that all images have an effective 300ppi resolution.'
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
    randomFontSizes = ['80px', '48px', '100px', '60px']
    randomColors = ['red', 'yellow', 'pink', 'coral']
    randombackgroundC = ['blue', 'green', 'cyan', 'magenta']

    randomStyleNum = Math.floor(Math.random()*randomColors.length)

    outputDiv.style.fontSize = randomFontSizes[randomStyleNum];
    outputDiv.style.color = randomColors[randomStyleNum];
    outputDiv.style.backgroundColor = randombackgroundC[randomStyleNum];
}

document.getElementById('fortune-button').addEventListener('click', restyle);
document.getElementById('fortune-button').addEventListener('click', fortune);

