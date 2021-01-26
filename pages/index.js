import { wrapper } from '../redux/store'
import { connect } from 'react-redux'
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
  async ({ store }) => {
    await store.dispatch(allCategories())
    const topSellersListProducts = await store.dispatch(topSellersProducts())
    await store.dispatch(topNewProducts())

    return {
      props: {
        topSellersListProducts,
      },
    }
  }
)

const mapStateToProps = ({ homePage }) => {
  return {
    topNewListProducts: homePage.topNewProducts
  };
};

export default connect(mapStateToProps, null)(Home);


