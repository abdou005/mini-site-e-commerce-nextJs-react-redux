import React from 'react';
import NavbarItem from './NavBarItem';

const NavBar = (props) =>  {
    return (
        props.categories.map( (category, index) => {
            return <NavbarItem name={category.name} key={category.id} productListId={category.productListId}/>
        })
    );
}

export default NavBar;