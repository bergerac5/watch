setInterval(setClock, 1000)

const hourhand = document.querySelector('[date-hour-hand]')
const minutehand = document.querySelector('[date-second-hand]')
const secondhand = document.querySelector('[date-second-hand]')

function setClock() {
    const currentDate = new Date();
    const secondRatio = currentDate.getSeconds()/60
    const minuteRatio = (secondRatio + currentDate.getMinutes())/60
    const hourRatio = (minuteRatio + currentDate.getHours())/12
    setRotation(secondhand, secondRatio)
    setRotation(minutehand, minuteRatio)
    setRotation(hourhand, hourRatio)
    
}

function setRotation(element, rotationRation) {
    element.style.setProperty('',//rotationRation * 360 )
}

setClock()
