import {  CarritoContext } from "../contexts/CartContext";
import { useContext } from "react";
import CarritoItem from "./CartItem";

const Carrito = () => {
  const { carrito , VaciarCarrito, PrecioTotal, IconCarrito } = useContext( CarritoContext);


  return (
    <>
    <div >
    {carrito.length < 1 ? (
        <p>Carrito vacio</p>
    ) : (
        carrito.map((producto) => 
        <CarritoItem key={producto.item.id} producto={producto.item} />)
        )}
    </div>
    <button onClick={VaciarCarrito}> Borrar carrito</button>
    <p>El precio total de los productos es {PrecioTotal()} </p>
    {IconCarrito() < 1 ? 
    <p> </p>
    :<p>La cantidad total del carrito es {IconCarrito()}</p>
    }
    </>
  );
};

export default Carrito;
