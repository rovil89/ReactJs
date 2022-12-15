import React from 'react';
import { useNavigate } from 'react-router-dom';
const Checkout = () => {

    const datosFormulario = React.useRef()
    let navigate= useNavigate(); // es una variable porque la vamos a modificar es como un gps

    const consultarFormulario= (e)=>{
        e.preventDefault()
        console.log(datosFormulario);
        const datForm= new FormData(datosFormulario.current);
        console.log(datForm);
        const cliente = Object.fromEntries(datForm);
        console.log(cliente)
        e.target.reset();
        navigate("/") //cuando finalizo compra redirecciona a donde quiero.

    }
//ref es una forma de marcar un objeto dentro de un componente, es como poner id
// con esto cada vez que hago clic en el submit me crea la referencia lo consulto con el console.log()
// crea un objeto formulario y se genera una key es un formulario con input
// para que se pueda diferenciar cada uno de los atributos tengo que tener el atriburo Name=""
// con esto diferencio cada uno de los imput es para darle la key sin el atributo name no puedo saber cual es cual dentro del objeto.
    return (
        <div className="container">
            <form onSubmit={consultarFormulario} ref={datosFormulario}> 
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                    <input type="text" className="form-control" name="nombre" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="dni" className="form-label">DNI</label>
                    <input type="number" className="form-control" name="dni" />
                </div>
                <div className="mb-3">
                    <label htmlFor="celular" className="form-label">Numero telefonico</label>
                    <input type="number" className="form-control" name="celular" />
                </div>
                <div className="mb-3">
                    <label htmlFor="direccion" className="form-label">Dirección</label>
                    <input type="text" className="form-control" name="direccion" />
                </div>
                <button type="submit" className="btn btn-primary">Finalizar Compra</button>
            </form>

        </div>
    );
}

export default Checkout;