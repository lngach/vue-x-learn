import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products/products'
import formProduct from './modules/products/formProduct'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    products,
    formProduct,
  },
})
