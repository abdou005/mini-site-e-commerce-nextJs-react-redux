import React from 'react';
import Link from 'next/link'

const NavBarItem = ({ productListId, name }) => {
    return (
        <li>
            <Link href="/productList/[productListId]" as={`/productList/${productListId}`} >{name}</Link>
        </li>
    );
}

export default NavBarItem;