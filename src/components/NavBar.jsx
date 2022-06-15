import React from 'react'
import { Container, Menu,MenuItem, Wrapper } from './NavBarComponents'
import CartWidget from './CartWidget/CartWidget'
import { Link } from 'react-router-dom'

// Chicos muy importante para esta entrega, 
// es definir un state en el container y luego usando 
// el set desde el contador pasar ese valor al container



const NavBar = () => {
  return (
    <Container>
      
        <Wrapper>
            <Link to = "/Cart">
             
                <CartWidget>
                </CartWidget>
              
            </Link>
           <Menu>
                <MenuItem>
                <Link to="/">INICIO</Link>
                </MenuItem>
                <MenuItem>
                <Link to="/sobrelaempresa">
                SOBRE LA EMPRESA
                </Link>
                </MenuItem>
                <MenuItem>
                <Link to ="/productos">
                PRODUCTOS      
                </Link>
                </MenuItem>
                <MenuItem>
                <Link to ="/category/almacen">
                 ALMACEN   
                </Link>
                </MenuItem>
                <MenuItem>
                <Link to ="/category/lacteos">
                 LACTEOS   
                </Link>
                </MenuItem>
                <MenuItem>
                <Link to ="Contacto">
                CONTACTO
                </Link>
                </MenuItem>
            </Menu>
        </Wrapper>
    </Container>
  )
}

export default NavBar