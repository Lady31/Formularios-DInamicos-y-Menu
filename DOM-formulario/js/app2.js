const formulario = document.getElementById('formulario');
const datosTabla = document.getElementById('datos-tabla');

const datos = [];

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const edad = document.getElementById('edad').value;
    const genero = document.querySelector('input[name="genero"]:checked').value;
    const pais = document.getElementById('pais').value;
    const terminos = document.getElementById('terminos').checked ? 'SI' : 'NO';

    const dato = { nombre, correo, edad, genero, pais, terminos };

    datos.push(dato);

    mostrarDatos();
    formulario.reset();
});

function mostrarDatos() {
    datosTabla.innerHTML = '';
    datos.forEach(function (dato) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${dato.nombre}</td>
        <td>${dato.correo}</td>
        <td>${dato.edad}</td>
        <td>${dato.genero}</td>
        <td>${dato.pais}</td>
        <td>${dato.terminos}</td>
        `;
        datosTabla.appendChild(tr);
    });
}
