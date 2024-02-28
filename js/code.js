
const lunes = document.querySelectorAll('.lunes')
const martes = document.querySelectorAll('.martes')
const miercoles = document.querySelectorAll('.miercoles')
const jueves = document.querySelectorAll('.jueves')
const viernes = document.querySelectorAll('.viernes')
const sabado = document.querySelectorAll('.sabado')

const _1lunes = document.querySelector('.current_activity1lunes')
const _1martes = document.querySelector('.current_activity1martes')
const _1miercoles = document.querySelector('.current_activity1miercoles')
const _1jueves = document.querySelector('.current_activity1jueves')
const _1viernes = document.querySelector('.current_activity1viernes')
const _1sabado = document.querySelector('.current_activity1sabado')

const _2lunes = document.querySelector('.current_activity2lunes')
const _2martes = document.querySelector('.current_activity2martes')
const _2miercoles = document.querySelector('.current_activity2miercoles')
const _2jueves = document.querySelector('.current_activity2jueves')
const _2viernes = document.querySelector('.current_activity2viernes')
const _2sabado = document.querySelector('.current_activity2sabado')

const _3lunes = document.querySelector('.current_activity3lunes')
const _3martes = document.querySelector('.current_activity3martes')
const _3miercoles = document.querySelector('.current_activity3miercoles')
const _3jueves = document.querySelector('.current_activity3jueves')
const _3viernes = document.querySelector('.current_activity3viernes')
const _3sabado = document.querySelector('.current_activity3sabado')

const _4lunes = document.querySelector('.current_activity4lunes')
const _4martes = document.querySelector('.current_activity4martes')
const _4miercoles = document.querySelector('.current_activity4miercoles')
const _4jueves = document.querySelector('.current_activity4jueves')
const _4viernes = document.querySelector('.current_activity4viernes')
const _4sabado = document.querySelector('.current_activity4sabado')

const _5lunes = document.querySelector('.current_activity5lunes')
const _5martes = document.querySelector('.current_activity5martes')
const _5miercoles = document.querySelector('.current_activity5miercoles')
const _5jueves = document.querySelector('.current_activity5jueves')
const _5viernes = document.querySelector('.current_activity5viernes')
const _5sabado = document.querySelector('.current_activity5sabado')

const _6lunes = document.querySelector('.current_activity6lunes')
const _6martes = document.querySelector('.current_activity6martes')
const _6miercoles = document.querySelector('.current_activity6miercoles')
const _6jueves = document.querySelector('.current_activity6jueves')
const _6viernes = document.querySelector('.current_activity6viernes')
const _6sabado = document.querySelector('.current_activity6sabado')

const _7lunes = document.querySelector('.current_activity7lunes')
const _7martes = document.querySelector('.current_activity7martes')
const _7miercoles = document.querySelector('.current_activity7miercoles')
const _7jueves = document.querySelector('.current_activity7jueves')
const _7viernes = document.querySelector('.current_activity7viernes')
const _7sabado = document.querySelector('.current_activity7sabado')

const date_current = document.getElementById('date_current')


function MarkTable(one, two, three, four, five, six, seven) {
    const hour = new Date();
    const currentHour = hour.getHours();
    const currentMinute = hour.getMinutes();

    if (currentHour === 6 && currentMinute >= 0 && currentMinute <= 59) {
        one.style = 'background-color: #35b34a'
    } else if (currentHour === 7 && currentMinute >= 0 && currentMinute <= 59){
        two.style = 'background-color: #35b34a'
    } else if (currentHour === 8 && currentMinute >= 30 && currentMinute <= 59){
        three.style = 'background-color: #35b34a'
    } else if (currentHour === 17 && currentMinute >= 0 && currentMinute <= 30){
        four.style = 'background-color: #35b34a'
    } else if (currentHour === 19 && currentMinute >= 0 && currentMinute <= 59){
        five.style = 'background-color: #35b34a'
    } else if (currentHour === 20 && currentMinute >= 0 && currentMinute <= 59){
        six.style = 'background-color: #35b34a'
    } else if (currentHour === 21 && currentMinute >= 0 && currentMinute <= 59){
        seven.style = 'background-color: #35b34a'
    }
}

function CallFunctions(){
    let days = ['', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
    const day_current = new Date()

    if (days[day_current.getDay()] === 'Lunes'){
        MarkTable(_1lunes, _2lunes, _3lunes, _4lunes, _5lunes, _6lunes, _7lunes)
    } else if (days[day_current.getDay()] === 'Martes'){
        MarkTable(_1martes, _2martes, _3martes, _4martes, _5martes, _6martes, _7martes)
    } else if (days[day_current.getDay()] === 'Miercoles'){
        MarkTable(_1miercoles, _2miercoles, _3miercoles, _4miercoles, _5miercoles, _6miercoles, _7miercoles)
    } else if (days[day_current.getDay()] === 'Jueves'){
        MarkTable(_1jueves, _2jueves, _3jueves, _4jueves, _5jueves, _6jueves, _7jueves)
    } else if (days[day_current.getDay()] === 'Viernes'){
        MarkTable(_1viernes, _2viernes, _3viernes, _4viernes, _5viernes, _6viernes, _7viernes)
    } else if (days[day_current.getDay()] === 'Sabado'){
        MarkTable(_1sabado, _2sabado, _3sabado, _4sabado, _5sabado, _6sabado, _7sabado)
    }
}

function ShowDayCurrent() {
    let days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    let months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const date = new Date();

    date_current.innerText = `Hoy es ${days[date.getDay()]}, ${date.getDate()} de ${months[date.getMonth()]} de ${date.getFullYear()}`;

    if (days[date.getDay()] == 'Lunes') {
        lunes.forEach(lunes => {
            lunes.style.backgroundColor = '#8b8b8b';
        });
    } else if (days[date.getDay()] == 'Martes') {
        martes.forEach(martes => {
            martes.style.backgroundColor = '#8b8b8b';
        });
    } else if (days[date.getDay()] == 'Miércoles') {
        miercoles.forEach(miercoles => {
            miercoles.style.backgroundColor = '#8b8b8b';
        });
    } else if (days[date.getDay()] == 'Jueves') {
        jueves.forEach(jueves => {
            jueves.style.backgroundColor = '#8b8b8b';
        });
    } else if (days[date.getDay()] == 'Viernes') {
        viernes.forEach(viernes => {
            viernes.style.backgroundColor = '#8b8b8b';
        });
    } else if (days[date.getDay()] == 'Sábado') {
        sabado.forEach(sabado => {
            sabado.style.backgroundColor = '#8b8b8b';
        });
    } else if (days[date.getDay()] == 'Domingo') {
        const main = document.querySelector('.main')
        const body = document.querySelector('.body')

        main.style = 'display: none'
        body.classList.add('flex')

        let date_text = document.createElement('p')
        let title_info = document.createElement('h2')

        body.appendChild(date_text)
        body.appendChild(title_info)
 
        date_text.classList.add('date_text')
        title_info.classList.add('title_info')

        date_text.innerText = `Hoy es ${days[date.getDay()]}, ${date.getDate()} de ${months[date.getMonth()]} de ${date.getFullYear()}`;
        title_info.innerText = 'Descanso.'
    }
}


ShowDayCurrent()
CallFunctions()


