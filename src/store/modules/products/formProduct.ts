import axios from 'axios'

const state = {
  product: {
    id: undefined,
    name: undefined,
    price: undefined,
    warranty: undefined,
    category_id: undefined,
    product_type_id: undefined,
    provider_id: undefined,
    content: undefined,
    status: true,
    is_active: true,
    image: undefined,
  },
  categories: [],
  product_types: [],
  providers: [],
}
const getters = {
  product: (state: any) => state.product,
  categories: (state: any) => state.categories,
  product_types: (state: any) => state.product_types,
  providers: (state: any) => state.providers,
}

const actions = {
  async fetchCategories({ commit }: any) {
    const res = await axios.get('http://localhost:3000/api/categories')
    commit('setCategories', res.data.categories)
  },
  async fetchProductTypes({ commit }: any) {
    const res = await axios.get('http://localhost:3000/api/product-types')
    commit('setProductTypes', res.data.product_types)
  },
  async fetchProviders({ commit }: any) {
    const res = await axios.get('http://localhost:3000/api/providers')
    commit('setProviders', res.data.providers)
  },
  async loadEditForm({ commit }: any, id: string) {
    const res = await axios.get(`http://localhost:3000/api/products/${id}`)
    commit('setEditForm', res.data.product)
  },
}
const mutations = {
  setCategories: (state: any, categories: object[]) =>
    (state.categories = categories),
  setProductTypes: (state: any, productTypes: object[]) =>
    (state.product_types = productTypes),
  setProviders: (state: any, providers: object[]) =>
    (state.providers = providers),
  setEditForm: (state: any, product: any) => {
    ;(state.product.id = product.id),
      (state.product.name = product.name),
      (state.product.price = product.price),
      (state.product.warranty = product.warranty),
      (state.product.category_id = product.category_id),
      (state.product.product_type_id = product.product_type_id),
      (state.product.provider_id = product.provider_id),
      (state.product.content = product.content),
      (state.product.status = product.status),
      (state.product.is_active = product.is_active),
      (state.product.image = product.image.replace(
        'public',
        'http://localhost:3000',
      ))
  },
  setProduct: (state: any, product: object) =>
    (state.product = Object.assign({}, state.product, product)),
  setName: (state: any, name: string) => (state.product.name = name),
  setPrice: (state: any, price: string) => (state.product.price = price),
  setWarranty: (state: any, warranty: string) =>
    (state.product.warranty = warranty),
  setCategory: (state: any, category: string) =>
    (state.product.category_id = category),
  setProductType: (state: any, productType: string) =>
    (state.product_type_id = productType),
  setProvider: (state: any, provider: string) =>
    (state.product.provider = provider),
  setContent: (state: any, content: string) =>
    (state.product.content = content),
  setStatus: (state: any, status: boolean) => (state.product.status = status),
  setIsActive: (state: any, isActive: boolean) =>
    (state.product.is_active = isActive),
}

export default {
  state,
  getters,
  actions,
  mutations,
}
