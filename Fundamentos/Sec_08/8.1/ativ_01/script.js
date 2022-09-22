const wakeUp = () => console.log('Acordando!!')
const breakFast = () => console.log('Bora tomar café!!')
const gonnaSleep = () => console.log('Partiu dormir!!')

const doingThings = (nameFunc) => nameFunc()
const arrFun = [wakeUp, breakFast, gonnaSleep]

doingThings(arrFun[Math.floor(Math.random() * 3)]);