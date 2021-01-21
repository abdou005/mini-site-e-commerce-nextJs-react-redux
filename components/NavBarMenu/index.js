import React, { Component } from 'react'
import Link from 'next/link'
import NavBar from './NavBar'
import { connect } from 'react-redux'

const NavBarMenu = ({ categories }) => {
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
const mapStateToProps = (state) => {
    return {
        categories: state.homePage.categories
    };
};

export default connect(mapStateToProps, null)(NavBarMenu);
/*
class NavBarMenu extends Component {

    render() {
        console.log('propd dd=>', this.props)
        return (
            <div className="mainmenu-area">
                <div className="container">
                    <div className="row">
                        <div className="navbar">
                            <ul className="nav navbar-nav navbar-expand">
                                <li><Link href="/">Home</Link></li>
                                <NavBar categories={this.props.categories} />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        categories: state.homePage.categories
    };
};

export default connect(mapStateToProps, null)(NavBarMenu);
*/