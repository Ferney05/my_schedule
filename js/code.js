
const lunes = document.querySelectorAll('.lunes')
const martes = document.querySelectorAll('.martes')
const miercoles = document.querySelectorAll('.miercoles')
const jueves = document.querySelectorAll('.jueves')
const viernes = document.querySelectorAll('.viernes')
const sabado = document.querySelectorAll('.sabado')

// --------------------------------------------------------------

const current_activity1lunes = document.querySelector('current_activity1lunes')
const current_activity1martes = document.querySelector('current_activity1martes')
const current_activity1miercoles = document.querySelector('current_activity1miercoles')
const current_activity1jueves = document.querySelector('current_activity1jueves')
const current_activity1viernes = document.querySelector('current_activity1viernes')
const current_activity1sabado = document.querySelector('current_activity1sabado')

const current_activity2lunes = document.querySelector('current_activity2lunes')
const current_activity2martes = document.querySelector('current_activity2martes')
const current_activity2miercoles = document.querySelector('current_activity2miercoles')
const current_activity2jueves = document.querySelector('current_activity2jueves')
const current_activity2viernes = document.querySelector('current_activity2viernes')
const current_activity2sabado = document.querySelector('current_activity2sabado')

const current_activity3lunes = document.querySelector('current_activity3lunes')
const current_activity3martes = document.querySelector('current_activity3martes')
const current_activity3miercoles = document.querySelector('current_activity3miercoles')
const current_activity3jueves = document.querySelector('current_activity3jueves')
const current_activity3viernes = document.querySelector('current_activity3viernes')
const current_activity3sabado = document.querySelector('current_activity3sabado')

const current_activity4lunes = document.querySelector('current_activity4lunes')
const current_activity4martes = document.querySelector('current_activity4martes')
const current_activity4miercoles = document.querySelector('current_activity4miercoles')
const current_activity4jueves = document.querySelector('current_activity4jueves')
const current_activity4viernes = document.querySelector('current_activity4viernes')
const current_activity4sabado = document.querySelector('current_activity4sabado')

const current_activity5lunes = document.querySelector('current_activity5lunes')
const current_activity5martes = document.querySelector('current_activity5martes')
const current_activity5miercoles = document.querySelector('current_activity5miercoles')
const current_activity5jueves = document.querySelector('current_activity5jueves')
const current_activity5viernes = document.querySelector('current_activity5viernes')
const current_activity5sabado = document.querySelector('current_activity5sabado')

const current_activity6lunes = document.querySelector('current_activity6lunes')
const current_activity6martes = document.querySelector('current_activity6martes')
const current_activity6miercoles = document.querySelector('current_activity6miercoles')
const current_activity6jueves = document.querySelector('current_activity6jueves')
const current_activity6viernes = document.querySelector('current_activity6viernes')
const current_activity6sabado = document.querySelector('current_activity6sabado')

const current_activity7lunes = document.querySelector('current_activity7lunes')
const current_activity7martes = document.querySelector('current_activity7martes')
const current_activity7miercoles = document.querySelector('current_activity7miercoles')
const current_activity7jueves = document.querySelector('current_activity7jueves')
const current_activity7viernes = document.querySelector('current_activity7viernes')
const current_activity7sabado = document.querySelector('current_activity7sabado')


// --------------------------------------------------------------

const date_current = document.getElementById('date_current')


function MarkActivityCurrent() {
    const hour = new Date();
    const currentHour = hour.getHours();
    const currentMinute = hour.getMinutes();

    if (currentHour === 16 && currentMinute >= 0 && currentMinute <= 50) {
        current_activity5martes.style.backgroundColor = 'red';
        console.log(current_activity5martes)
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
MarkActivityCurrent()


