import { wrapper } from '../redux/store'
import { connect } from 'react-redux'
import NavBarMenu from '../components/NavBarMenu'
import SliderCarousel from '../components/Home/SliderCarousel'
import PromoArea from '../components/Home/PromoArea'
import Brands from '../components/Home/Brands'
import ProductWidgetArea from '../components/Home/ProductWidgetArea'
import { topSellersProducts, topNewProducts } from '../redux/actions/productAction'
import { allCategories } from '../redux/actions/menuAction'

const Home = ({ topSellersListProducts, topNewListProducts }) => {
  return (
    <>
      <SliderCarousel />
      <PromoArea />
      <Brands />
      <ProductWidgetArea topSellersListProducts={topSellersListProducts}
        topNewListProducts={topNewListProducts} />
    </>
  )
}
export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    await context.store.dispatch(allCategories())
    await context.store.dispatch(topSellersProducts())
    await context.store.dispatch(topNewProducts())
  }
)

const mapStateToProps = (state) => {
  return {
    topSellersListProducts: state.homePage.topSellersProducts,
    topNewListProducts: state.homePage.topNewProducts
  };
};

export default connect(mapStateToProps, null)(Home);


