const radiologia = [
    {hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA'},
    {hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE'},
    {hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE'},
    {hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA'},
    {hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA'},
];
/* ------------------------------------------ EJERCICIO 2 ---------------------------------------------- */
//Se elimina el primer elemento del arreglo
radiologia.shift()
//Se elimina el último elemento del arreglo
radiologia.pop()
console.table(radiologia);
/* ----------------------------------------------------------------------------------------------------- */

const traumatologia = [
    {hora: '8:00',  especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ',     rut: '15554774-5', prevision: 'FONASA'},
    {hora: '10:00', especialista: 'RAUL ARAYA',          paciente: 'ANGÉLICA NAVAS',    rut: '15444147-9', prevision: 'ISAPRE'},
    {hora: '10:30', especialista: 'MARIA ARRIAGADA',     paciente: 'ANA KLAPP',         rut: '17879423-9', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'ALEJANDRO BADILLA',   paciente: 'FELIPE MARDONES',   rut: '1547423-6', prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'CECILIA BUDNIK',      paciente: 'DIEGO MARRE',       rut: '16554741-K', prevision: 'FONASA'},
    {hora: '12:00', especialista: 'ARTURO CAVAGNARO',    paciente: 'CECILIA MENDEZ',    rut: '9747535-8', prevision: 'ISAPRE'},
    {hora: '12:30', especialista: 'ANDRES KANACRI',      paciente: 'MARCIAL SUAZO',     rut: '11254785-5', prevision: 'ISAPRE'},
];
/*------------------------------------------ EJERCICIO 1 --------------------------------------------- */
traumatologia.push (
    {hora: '09:00', especialista: 'RENE POBLETE',           paciente: 'ANA GELLONA',    rut: '13123329-7', prevision: 'ISAPRE'},
    {hora: '09:30', especialista: 'MARIA SOLAR',            paciente: 'RAMIRO ANDRADE', rut: '12221451-k', prevision: 'FONASA'},
    {hora: '10:00', especialista: 'RAUL LOYOLA',            paciente: 'CARMEN ISLA',    rut: '10112348-3', prevision: 'ISAPRE'},
    {hora: '10:30', especialista: 'ANTONIO LARENAS',        paciente: 'PABLO LOAYZA',   rut: '13453234-1', prevision: 'ISAPRE'},
    {hora: '12:00', especialista: 'MATIAS ARAVENA',         paciente: 'SUSANA POBLETE', rut: '14345656-6', prevision: 'FONASA'}
);
console.table(traumatologia);
/*---------------------------------------------------------------------------------------------------- */

const dental = [
    {hora: '08:30', especialista: 'ANDREA ZUÑIGA',          paciente: 'MARCELA RETAMAL',rut: '11123425-6', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'MARIA PIA ZAÑARTU',      paciente: 'ANGEL MUÑOZ',    rut: '9878789-2',  prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'SCARLETT WITTING',       paciente: 'MARIO KAST',     rut: '7998789-5',  prevision: 'FONASA'},
    {hora: '13:00', especialista: 'FRANCISCO VON TEUBER',   paciente: 'KARIN FERNANDEZ',rut: '18887662-K', prevision: 'FONASA'},
    {hora: '13:30', especialista: 'EDUARDO VIÑUELA',        paciente: 'HUGO SANCHEZ',   rut: '17665461-4', prevision: 'FONASA'},
    {hora: '14:00', especialista: 'RAQUEL VILLASECA',       paciente: 'ANA SEPULVEDA',  rut: '14441281-0', prevision: 'ISAPRE'},
];

/*------------------------------------------ EJERCICIO 3 --------------------------------------------- */
const informacionPacientesDentales = document.querySelector("#pacientesDentales"); // Se selecciona el elemento
//Con forEach se recorre todos los pacientes del arreglo
dental.forEach((informacionPacientes) => {
    informacionPacientesDentales.innerHTML += `${informacionPacientes.hora} - ${informacionPacientes.especialista} - ${informacionPacientes.paciente} - ${informacionPacientes.rut} - ${informacionPacientes.prevision} <br>`; // Se concatena por interpolación la información del paciente que se mostrará en el html
});
/*---------------------------------------------------------------------------------------------------- */

/*------------------------------------------ EJERCICIO 4 --------------------------------------------- */
// Arreglo que almacenar a todos los pacientes
const losPacientes = [];
// Se recorre cada arreglo y se agrega los nombres de los pacientes mediante un push
radiologia.forEach(paciente => losPacientes.push(paciente.paciente));
traumatologia.forEach(paciente => losPacientes.push(paciente.paciente));
dental.forEach(paciente => losPacientes.push(paciente.paciente));
// Se selecciona el elemento
const listaPacientes = document.querySelector("#listaPacientes");
// Se muestran los nombres de los pacientes en un párrafo y se separa con por medio de join con <br> en el html
listaPacientes.innerHTML = losPacientes.join("<br>");
/**--------------------------------------------------------------------------------------------------------------------------- */

/*------------------------------------------ EJERCICIO 4 --------------------------------------------- */
// Se filtran los paciente con previsión ISAPRE
const pacientesIsapre = dental.filter(paciente => paciente.prevision === "ISAPRE");
// Se realiza un arreglo con el nombre del paciente y se concatena con su previsión de salud
const nombresConIsapre = pacientesIsapre.map(paciente => `${paciente.paciente} - ${paciente.prevision}`);
// Se selecciona el elemento 
const isapreDental = document.querySelector("#isapreDental");
// Se muestran los pacientes con previsión ISAPRE en un párrafo y se separa con por medio de join con <br> en el html
isapreDental.innerHTML = nombresConIsapre.join("<br>");
/**------------------------------------------------------------------------------------------------------------------------------ */

/*------------------------------------------ EJERCICIO 6 --------------------------------------------- */
// Se filtran los pacientes con previsión FONASA
const pacientesFonasa = traumatologia.filter(paciente => paciente.prevision === "FONASA");
// Se realiza un arreglo con el nombre del paciente concatenado con su previsión
const nombresConFonasa = pacientesFonasa.map(paciente => `${paciente.paciente} - ${paciente.prevision}`);
// Captamos el elemento donde se mostrarán los pacientes con previsión FONASA
const fonasaTraumatologia = document.querySelector("#fonasaTraumatologia");
// Mostramos los nombres de los pacientes con la previsión FONASA en un párrafo y se separa con por medio de join con <br> en el html
fonasaTraumatologia.innerHTML = nombresConFonasa.join("<br>");