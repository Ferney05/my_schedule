
const lunes = document.querySelectorAll('.lunes')
const martes = document.querySelectorAll('.martes')
const miercoles = document.querySelectorAll('.miercoles')
const jueves = document.querySelectorAll('.jueves')
const viernes = document.querySelectorAll('.viernes')
const sabado = document.querySelectorAll('.sabado')

const main = document.querySelector('.main')

const date_current = document.getElementById('date_current')

function ShowDateCurrent(){
    let days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
    let months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    const date = new Date()

    date_current.innerText = `Hoy es ${days[date.getDay() - 1]}, ${date.getDate()} de ${months[date.getMonth()]} de ${date.getFullYear()}`
}

function MarkDay(){
    let days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
    const date = new Date()

    if (days[date.getDay() - 1] == 'Lunes'){
        lunes.forEach(lunes => {
            lunes.style.backgroundColor = '#35b34a'
        })
    } else if (days[date.getDay() - 1] == 'Martes'){
        martes.forEach(martes => {
            martes.style.backgroundColor = '#35b34a'
        })
    } else if (days[date.getDay() - 1] == 'Miércoles'){
        miercoles.forEach(miercoles => {
            miercoles.style.backgroundColor = '#35b34a'
        })
    } else if (days[date.getDay() - 1] == 'Jueves'){
        jueves.forEach(jueves => {
            jueves.style.backgroundColor = '#35b34a'
        })
    } else if (days[date.getDay() - 1] == 'Viernes'){
        viernes.forEach(viernes => {
            viernes.style.backgroundColor = '#35b34a'
        })
    } else if (days[date.getDay() - 1] == 'Sábado'){
        sabado.forEach(sabado => {
            sabado.style.backgroundColor = '#35b34a'
        })
    }
}

function HiddenMain(){
    let days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
    let months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

    const date = new Date()
    
    if (days[date.getDay() - 1] == 'Domingo'){
        main.style.display = 'none'
        
        const body = document.querySelector('.body')
        body.classList.add('flex')
        
        let fecha = document.createElement('p')
        let info = document.createElement('h2')

        body.appendChild(fecha)
        body.appendChild(info)

        fecha.style = 'color: #eee; font-size: .9rem'
        fecha.innerText = `Hoy ${days[date.getDay() - 1]}, ${date.getDate()} de ${months[date.getMonth()]} 2024`

        info.style = 'color: #087ec4; font-size: 2rem'
        info.innerText = 'Descanso.'
    }
}


HiddenMain()
MarkDay()
ShowDateCurrent()

