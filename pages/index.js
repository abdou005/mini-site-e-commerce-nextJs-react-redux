import { wrapper } from '../redux/store'
import { connect } from 'react-redux'
import SliderCarousel from '../components/Home/SliderCarousel'
import PromoArea from '../components/Home/PromoArea'
import Brands from '../components/Home/Brands'
import ProductWidgetArea from '../components/Home/ProductWidgetArea'
import { topSellersProducts, topNewProducts } from '../redux/actions/productAction'
import { allCategories } from '../redux/actions/menuAction'
import { useEffect } from 'react';
import { prepareCart } from '../redux/actions/cartAction'


const Home = ({ prepareCart, topSellersListProducts, topNewListProducts }) => {
  useEffect(() => {
    prepareCart()
  }, [])


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
  async ({ store }) => {
    await store.dispatch(allCategories())
    await store.dispatch(topSellersProducts())
    await store.dispatch(topNewProducts())
  }
)

const mapStateToProps = ({ homePage }) => {
  return {
    topSellersListProducts: homePage.topSellersProducts,
    topNewListProducts: homePage.topNewProducts
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    prepareCart: () => dispatch(prepareCart()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);


