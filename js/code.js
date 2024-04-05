
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

const laborar = document.querySelector('.laborar')

const _5lunes = document.querySelector('.current_activity5lunes')
const _5martes = document.querySelector('.current_activity5martes')
const _5miercoles = document.querySelector('.current_activity5miercoles')
const _5jueves = document.querySelector('.current_activity5jueves')
const _5viernes = document.querySelector('.current_activity5viernes')
const _5sabado = document.querySelector('.current_activity5sabado')

const date_current = document.getElementById('date_current')


function MarkTable(one, two, three, four, five) {
    const hour = new Date();
    const currentHour = hour.getHours();
    const currentMinute = hour.getMinutes();

    if (currentHour === 5 && currentMinute >= 30 && currentMinute <= 59) {
        one.style.backgroundColor = '#35b34a';
    } else if (currentHour === 6 && currentMinute >= 0 && currentMinute <= 59) {
        one.style.backgroundColor = '#35b34a';
    }  else if (currentHour === 7 && currentMinute >= 0 && currentMinute <= 59) {
        two.style.backgroundColor = '#35b34a';
    } else if (currentHour === 8 && currentMinute >= 0 && currentMinute <= 30) {
        two.style.backgroundColor = '#35b34a';
    } else if (currentHour === 8 && currentMinute >= 30 && currentMinute >= 59) {
        four.style.backgroundColor = '#35b34a';
    } else if (currentHour === 9 && currentMinute >= 0 && currentMinute <= 59) {
        four.style.backgroundColor = '#35b34a';
    } else if (currentHour === 10 && currentMinute >= 0 && currentMinute <= 59) {
        four.style.backgroundColor = '#35b34a';
    } else if (currentHour === 11 && currentMinute >= 0 && currentMinute <= 59) {
        four.style.backgroundColor = '#35b34a';
    } else if (currentHour === 12 && currentMinute >= 0 && currentMinute <= 59) {
        four.style.backgroundColor = '#35b34a';
    } else if (currentHour === 13 && currentMinute >= 0 && currentMinute <= 59) {
        four.style.backgroundColor = '#35b34a';
    } else if (currentHour === 14 && currentMinute >= 0 && currentMinute <= 59) {
        four.style.backgroundColor = '#35b34a';
    } else if (currentHour === 19 && currentMinute >= 0 && currentMinute <= 59) {
        three.style.backgroundColor = '#35b34a';
    } else if (currentHour === 20 && currentMinute >= 0 && currentMinute <= 30) {
        three.style.backgroundColor = '#35b34a';
    } else if (currentHour === 20 && currentMinute >= 30 && currentMinute <= 59) {
        five.style.backgroundColor = '#35b34a';
    } else if (currentHour === 21 && currentMinute >= 0 && currentMinute <= 59) {
        five.style.backgroundColor = '#35b34a';
    }
}

function CallFunctions(){
    let days = ['', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
    const day_current = new Date()

    if (days[day_current.getDay()] === 'Lunes'){
        MarkTable(_1lunes, _2lunes, _3lunes, laborar, _5lunes)
    } else if (days[day_current.getDay()] === 'Martes'){
        MarkTable(_1martes, _2martes, _3martes, laborar, _5martes)
    } else if (days[day_current.getDay()] === 'Miercoles'){
        MarkTable(_1miercoles, _2miercoles, _3miercoles, laborar, _5miercoles)
    } else if (days[day_current.getDay()] === 'Jueves'){
        MarkTable(_1jueves, _2jueves, _3jueves, laborar, _5jueves)
    } else if (days[day_current.getDay()] === 'Viernes'){
        MarkTable(_1viernes, _2viernes, _3viernes, laborar, _5viernes)
    } else if (days[day_current.getDay()] === 'Sabado'){
        MarkTable(_1sabado, _2sabado, _3sabado, laborar, _5sabado)
        laborar.style = 'background-color: none'
    }
}

function ShowDayCurrent() {
    let days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    let months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const date = new Date();

    date_current.innerText = `Hoy es ${days[date.getDay()]}, ${date.getDate()} de ${months[date.getMonth()]} de ${date.getFullYear()}`;

    if (days[date.getDay()] == 'Lunes') {
        lunes.forEach(lunes => {
            lunes.style.backgroundColor = '#166da0';
        });
    } else if (days[date.getDay()] == 'Martes') {
        martes.forEach(martes => {
            martes.style.backgroundColor = '#166da0';
        });
    } else if (days[date.getDay()] == 'Miércoles') {
        miercoles.forEach(miercoles => {
            miercoles.style.backgroundColor = '#166da0';
        });
    } else if (days[date.getDay()] == 'Jueves') {
        jueves.forEach(jueves => {
            jueves.style.backgroundColor = '#166da0';
        });
    } else if (days[date.getDay()] == 'Viernes') {
        viernes.forEach(viernes => {
            viernes.style.backgroundColor = '#166da0';
        });
    } else if (days[date.getDay()] == 'Sábado') {
        sabado.forEach(sabado => {
            sabado.style.backgroundColor = '#166da0';
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


let i = 0

function rule_days(){
    const rule = document.querySelector('.rule');
    const date = new Date();

    const day = date.getDay();
    
    if(day === 1){
        i++;
    } else if(day === 2){
        i++;
    } else if(day === 3){
        i++;
    } else if(day === 4){
        i++;
    } else if(day === 5){
        i++;
    } else if(day === 6){
        i++;
    } else if(day === 7){
        i++;
    } else if (i > 90) {
        i = 0;
    }

    if(i === 1){
        rule.innerText = `+${i} día`; 
    } else if (i >= 2){
        rule.innerText = `+${i} días`; 
    }
}

// window.addEventListener('scroll', function() {
//     var nav = document.querySelector('.nav');
//     if (window.scrollY > 0) {
//         nav.classList.add('scrolled');
//     } else {
//         nav.classList.remove('scrolled');
//     }
// });


ShowDayCurrent()
CallFunctions()
rule_days()



