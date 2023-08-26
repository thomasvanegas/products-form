let pristine_obj, frm;

window.onload = () => {

    frm = document.getElementById("frm_crear_producto");

    pristine_obj = new Pristine(frm);

    frm.addEventListener('submit', validar_formulario);

    function validar_formulario (evento) {

        evento.preventDefault();

        console.log("Prueba de Validación mediante PristineJS Iniciada");

    }

}