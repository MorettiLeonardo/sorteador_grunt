console.log('teste')
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('form-sorteador').addEventListener('submit', (ev) => {
        ev.preventDefault()
        
        let maxNum = document.getElementById('maxNumber').value
        maxNum = parseInt(maxNum)

        let randomNumber = Math.random() * maxNum
        randomNumber = Math.floor(randomNumber + 1)

        document.getElementById('result').innerHTML = randomNumber
        document.querySelector('.result').style.display = 'block'
    })
})