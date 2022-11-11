setInterval(setClock, 1000)

const hourhand = document.querySelector('[date-hour-hand]')
const minutehand = document.querySelector('[date-second-hand]')
const secondhand = document.querySelector('[date-second-hand]')

function setClock() {
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds()/60
    const minutesRatio = (secondsRatio + currentDate.getMinutes())/60
    const hoursRatio = (minutesRatio + currentDate.getHours())/12
    setRotation(secondhand, secondsRatio)
    setRotation(minutehand, minutesRatio)
    setRotation(hourhand, hoursRatio)
    
}

function setRotation(element, rotationRation) {
    element.style.setProperty('--rotation',rotationRation * 360 )
}

setClock()
