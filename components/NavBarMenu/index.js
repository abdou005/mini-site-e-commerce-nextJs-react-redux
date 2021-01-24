import React from 'react'
import Link from 'next/link'
import NavBar from './NavBar'
import { connect } from 'react-redux'

const NavBarMenu = ({ homePage }) => {
    const categories = homePage.categories
    return (

        <div className="mainmenu-area">
            <div className="container">
                <div className="row">
                    <div className="navbar">
                        <ul className="nav navbar-nav navbar-expand">
                            {categories.length > 0 && <li><Link href="/">Home</Link></li>}
                            <NavBar categories={categories} />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default connect((state) => state)(NavBarMenu)