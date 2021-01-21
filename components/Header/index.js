import Logo from './Logo'
import SearchProducts from './SearchProducts'
import MiniCart from './MiniCart'
const Header = () => {


    return (
        <div className="site-branding-area">
            <div className="container">
                <div className="row">
                    <Logo />
                    <SearchProducts keyword="" />
                    <MiniCart cartQty={0} cartTotal={0} />
                </div>
            </div>
        </div>
    )
}
export default Header