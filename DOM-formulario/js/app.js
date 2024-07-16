const formulario = document.getElementById('formulario');
const datosLista = document.getElementById('datos-lista');

const datosListaArray = [];

formulario.addEventListener('submit', function(event){
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const edad = document.getElementById('edad').value;
    const genero = document.querySelector('input[name="genero"]:checked').value;
    const pais = document.getElementById('pais').value;
    const terminos = document.getElementById('terminos').checked ? 'SI' : 'NO';

    const dato = { nombre, correo, edad, genero, pais, terminos };

    datosListaArray.push(dato);

    mostrarDatosLista();
    formulario.reset();
});

function mostrarDatosLista() {
    datosLista.innerHTML = '';
    datosListaArray.forEach(function (dato) {
        const li = document.createElement('li');
        li.textContent = `Nombre: ${dato.nombre},
                        Correo: ${dato.correo},
                        Edad: ${dato.edad},
                        Género: ${dato.genero},
                        País: ${dato.pais},
                        Términos: ${dato.terminos}`;
        datosLista.appendChild(li);
    });
}
