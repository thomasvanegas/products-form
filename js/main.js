
// Declaración de Variables
let txt_nombre_producto, txt_precio_producto, txt_email_provedor, btn_crear_producto, btn_validar_existencia_prodcuto;

window.onload = () => {

    txt_nombre_producto = document.getElementById('nombre_producto');
    txt_precio_producto = document.getElementById('precio_producto');
    txt_email_provedor = document.getElementById('email_proveedor');

    // BOTÓN CREAR PRODUCTO
    btn_crear_producto = document.getElementById('btn_crear_producto');
    btn_crear_producto.addEventListener('click', crear_producto)

    // BOTÓN VALIDAR EXISTENCIA PRODUCTO
    btn_validar_existencia_prodcuto = document.getElementById('btn_validar_existencia_producto');
    btn_validar_existencia_prodcuto.addEventListener('click', validar_existencia_producto)

    function crear_producto(event) {
        localStorage.setItem("nombre_producto", txt_nombre_producto.value)
        localStorage.setItem("precio_producto", txt_precio_producto.value)
        localStorage.setItem("email_proveedor", txt_email_provedor.value)

        alert("Producto Creado Correctamente, Revisalo en tu Local Storage")

        event.preventDefault();
    }


    function validar_existencia_producto(event) {

        

        // Extrayendo datos del local storage
        let ls_nom_producto = localStorage.getItem("nombre_producto")
        let ls_precio = localStorage.getItem("precio_producto")
        let ls_email = localStorage.getItem("email_proveedor")

        if (txt_nombre_producto.value == ls_nom_producto && txt_precio_producto.value == ls_precio && txt_email_provedor.value == ls_email) {
            alert("Producto ya existente en la BD")
        } else {
            // Invocando a la funcion crear producto
            crear_producto();
            alert("Producto no existente en la BD, por tanto, se ha creado")
        }

        event.preventDefault();
    }

}