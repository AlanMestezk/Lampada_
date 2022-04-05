

const turnOn = document.getElementById('turnOn')
const turnOff = document.getElementById('turnOff')
const lamp = document.getElementById('lamp')

/*
se dentro do src estiver a palavra quebrada 
a função vai retornar maior que -1
*/
function isLampBroken () {

    return lamp.src.indexOf ( 'quebrada' ) > -1

}

function lampOn () {

    /*
    quando a lampada não estiver quebrada 
    eu troco de imagem 
    */
    if ( !isLampBroken () ) {
        lamp.src = './img/ligada.jpg';
    }
}

function lampOff () {

     /*
    quando a lampada não estiver quebrada 
    eu troco de imagem 
    */
    if ( !isLampBroken () ) {
        lamp.src = './img/desligada.jpg';
    }
}

function lampBroken () {
    lamp.src = './img/quebrada.jpg';
}
function lampbroken(){

    lamp.src = './img/quebrada.jpg'

}



turnOn.addEventListener ( 'click', lampOn )
turnOff.addEventListener( 'click', lampOff )


lamp.addEventListener ('mouseover', lampOn )
lamp.addEventListener ('mouseleave', lampOff)
lamp.addEventListener ('dblclick', lampbroken)
