//import '../styles/globals.css'
import { wrapper } from '../redux/store'
import '../styles/css/bootstrap.min.css'
import '../styles/css/responsive.css'
import '../styles/css/font-awesome.min.css'
import '../styles/css/style.css'
import '../styles/css/Carousel.css'
import Header from "../components/Header"
import NavBarMenu from "../components/NavBarMenu"
import Footer from "../components/Footer"

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Header />
      <NavBarMenu />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default wrapper.withRedux(MyApp)
