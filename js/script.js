
const not_info = document.getElementById('not-info')

// Cursos

const icon_courses = document.getElementById('courses')
const svgc = document.getElementById('svg-courses')
const path_courses = document.getElementById('path-courses')
const show_courses = document.getElementById('show-courses')

icon_courses.addEventListener('click', () => {
    not_info.style.display = 'none'
    show_routes.style.display = 'none'
    show_horary.style.display = 'none'
    show_feeding.style.display = 'none'
    show_courses.style.display = 'block' // Se muestra

    icon_courses.classList.add('apply-courses', 'str-courses')
    icon_routes.classList.remove('apply-routes', 'strfill-routes')
    icon_feeding.classList.remove('apply-feeding', 'strfill-feeding')
    icon_horary.classList.remove('apply-horary', 'strfill-horary')
})

// Rutas

const icon_routes = document.getElementById('routes')
const svg_routes = document.getElementById('svg-routes')
const show_routes = document.getElementById('show-routes')

icon_routes.addEventListener('click', () => {
    not_info.style.display = 'none'
    show_courses.style.display = 'none'
    show_horary.style.display = 'none'
    show_feeding.style.display = 'none'
    show_routes.style.display = 'block' // Se muestra

    icon_routes.classList.add('apply-routes', 'strfill-routes')
    icon_courses.classList.remove('apply-courses', 'str-courses')
    icon_feeding.classList.remove('apply-feeding', 'strfill-feeding')
    icon_horary.classList.remove('apply-horary', 'strfill-horary')
})

// Horario

const icon_horary = document.getElementById('horary')
const svg_horary = document.getElementById('svg-horary')
const show_horary = document.getElementById('show-horary')

icon_horary.addEventListener('click', () => {
    not_info.style.display = 'none'
    show_courses.style.display = 'none'
    show_routes.style.display = 'none'
    show_feeding.style.display = 'none'
    show_horary.style.display = 'block' // Se muestra

    icon_routes.classList.remove('apply-routes', 'strfill-routes')
    icon_courses.classList.remove('apply-courses', 'str-courses')
    icon_feeding.classList.remove('apply-feeding', 'strfill-feeding')
    icon_horary.classList.add('apply-horary', 'strfill-horary')
})

// Alimentación

const icon_feeding = document.getElementById('feeding')
const svg_feeding = document.getElementById('svg-feeding')
const show_feeding = document.getElementById('show-feeding')


icon_feeding.addEventListener('click', () => {
    not_info.style.display = 'none'
    show_courses.style.display = 'none'
    show_routes.style.display = 'none'
    show_horary.style.display = 'none'
    show_feeding.style.display = 'block' // Se muestra

    icon_routes.classList.remove('apply-routes', 'strfill-routes')
    icon_courses.classList.remove('apply-courses', 'str-courses')
    icon_horary.classList.remove('apply-horary', 'strfill-horary')
    icon_feeding.classList.add('apply-feeding', 'strfill-feeding')
})



// FUNCIONALIDAD - HORARIO


const lunes = document.querySelectorAll('.lunes')
const martes = document.querySelectorAll('.martes')
const miercoles = document.querySelectorAll('.miercoles')
const jueves = document.querySelectorAll('.jueves')
const viernes = document.querySelectorAll('.viernes')
const sabado = document.querySelectorAll('.sabado')

const lunes1 = document.querySelector('.current_activity1lunes')
const martes1 = document.querySelector('.current_activity1martes')
const miercoles1 = document.querySelector('.current_activity1miercoles')
const jueves1 = document.querySelector('.current_activity1jueves')
const viernes1 = document.querySelector('.current_activity1viernes')
const sabado1 = document.querySelector('.current_activity1sabado')

const lunes2 = document.querySelector('.current_activity2lunes')
const martes2 = document.querySelector('.current_activity2martes')
const miercoles2 = document.querySelector('.current_activity2miercoles')
const jueves2 = document.querySelector('.current_activity2jueves')
const viernes2 = document.querySelector('.current_activity2viernes')
const sabado2 = document.querySelector('.current_activity2sabado')

const lunes3 = document.querySelector('.current_activity3lunes')
const martes3 = document.querySelector('.current_activity3martes')
const miercoles3 = document.querySelector('.current_activity3miercoles')
const jueves3 = document.querySelector('.current_activity3jueves')
const viernes3 = document.querySelector('.current_activity3viernes')
const sabado3 = document.querySelector('.current_activity3sabado')

const laborar = document.querySelector('.laborar')

const lunes4 = document.querySelector('.current_activity5lunes')
const martes4 = document.querySelector('.current_activity5martes')
const miercoles4 = document.querySelector('.current_activity5miercoles')
const jueves4 = document.querySelector('.current_activity5jueves')
const viernes4 = document.querySelector('.current_activity5viernes')
const sabado4 = document.querySelector('.current_activity5sabado')

const date_current = document.getElementById('date_current')


function MarkTable(one, two, three, four, five) {
    const hour = new Date();
    const currentHour = hour.getHours();
    const currentMinute = hour.getMinutes();

    if (currentHour === 6 && currentMinute >= 0 && currentMinute <= 59) {
        one.style.backgroundColor = '#35b34a';
    }  else if (currentHour === 7 && currentMinute >= 0 && currentMinute <= 59) {
        two.style.backgroundColor = '#35b34a';
    } else if (currentHour === 8 && currentMinute >= 0 && currentMinute <= 59) {
        three.style.backgroundColor = '#35b34a';
    } else if (currentHour === 9 && currentMinute >= 0 && currentMinute <= 59) {
        three.style.backgroundColor = '#35b34a';
    } else if (currentHour === 10 && currentMinute >= 0 && currentMinute <= 59) {
        three.style.backgroundColor = '#35b34a';
    } else if (currentHour === 11 && currentMinute >= 0 && currentMinute <= 59) {
        three.style.backgroundColor = '#35b34a';
    } else if (currentHour === 12 && currentMinute >= 0 && currentMinute <= 59) {
        three.style.backgroundColor = '#35b34a';
    } else if (currentHour === 13 && currentMinute >= 0 && currentMinute <= 59) {
        three.style.backgroundColor = '#35b34a';
    } else if (currentHour === 14 && currentMinute >= 0 && currentMinute <= 59) {
        three.style.backgroundColor = '#35b34a';
    } else if (currentHour === 15 && currentMinute >= 0 && currentMinute <= 59) {
        three.style.backgroundColor = '#35b34a';
    } else if (currentHour === 16 && currentMinute >= 0 && currentMinute <= 59) {
        three.style.backgroundColor = '#35b34a';
    } else if (currentHour === 19 && currentMinute >= 0 && currentMinute <= 59) {
        four.style.backgroundColor = '#35b34a';
    } else if (currentHour === 20 && currentMinute >= 0 && currentMinute <= 59) {
        five.style.backgroundColor = '#35b34a';
    }
}

function CallFunctions(){
    let days = ['', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
    const day_current = new Date()

    if (days[day_current.getDay()] === 'Lunes'){
        MarkTable(lunes1, lunes2, laborar, lunes3, lunes4)
    } else if (days[day_current.getDay()] === 'Martes'){
        MarkTable(martes1, martes2, laborar, martes3, martes4)
    } else if (days[day_current.getDay()] === 'Miercoles'){
        MarkTable(miercoles1, miercoles2, laborar, miercoles3, miercoles4)
    } else if (days[day_current.getDay()] === 'Jueves'){
        MarkTable(jueves1, jueves2, laborar, jueves3, jueves4)
    } else if (days[day_current.getDay()] === 'Viernes'){
        MarkTable(viernes1, viernes2, laborar, viernes3, viernes4)
    } else if (days[day_current.getDay()] === 'Sabado'){
        MarkTable(sabado1, sabado2, laborar, sabado3, sabado4)
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
    } // else if (days[date.getDay()] == 'Domingo') {}
}

ShowDayCurrent()
CallFunctions()

// Validar código

const code_input = document.getElementById('code')
const btn = document.getElementById('btn-validar')
const show_code = document.querySelector('.show-code')
const info = document.querySelector('.info')

let CODE_BLOCK = 'suntfer22'

btn.addEventListener('click', () => {
    const usercode = code_input.value.trim()

    if(usercode === CODE_BLOCK){
        show_code.style.display = 'none'
    } else {
        info.style = 'color: #b93737'
        info.innerText = 'Oops, el código es inválido'
    }
})

code_input.addEventListener('keyup', () => {

    if(code_input.value.length == 0){
        info.style = 'color: #b93737'
        info.innerText = 'No has ingresado nada'
    } 

    if(code_input.value.length >= 1){
        info.style = 'color: #0c0c0c'
        info.innerText = 'Ingresando el código...'
    } 
    
    if (code_input.value.length >= 5) {
        info.style = 'color: #0c0c0c'
        info.innerText = 'Estamos verificando el código...'  
    }
})