let teaCozyImg = document.getElementById('tea-cozy-pic');
let teaCozyProj = document.getElementById('tea-cozy-proj');
let numberGuesserImg = document.getElementById('number-guesser-pic');
let numberGuesserProj = document.getElementById('number-guesser-proj');

teaCozyProj.onclick = function() {
    if (teaCozyImg.style.display === 'block') {
        teaCozyImg.style.display = 'none';
    } else {
        teaCozyImg.style.display = 'block';
    }
}

numberGuesserProj.onclick = function() {
    if (numberGuesserImg.style.display === 'block') {
        numberGuesserImg.style.display = 'none';
    } else {
        numberGuesserImg.style.display = 'block';
    }
}