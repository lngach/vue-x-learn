import axios from 'axios'

const state = {
  products: [],
  fields: [
    { field: 'id', headerName: 'ID', type: 'numericColumn', width: 50 },
    { field: 'name', headerName: 'Name', width: 250 },
    {
      field: 'image',
      width: 200,
      headerName: 'Avatar',
      cellRenderer: (item: any) => {
        return `<img src='http://localhost:3000${item.value.replace(
          'public',
          '',
        )}' 'width='100' height='100'>`
      },
    },
    { field: 'category.name', width: 150, headerName: 'Category' },
    { field: 'product_type.name', width: 150, headerName: 'Product Type' },
    { field: 'provider.name', width: 150, headerName: 'Provider' },
    {
      field: 'price',
      type: 'numericColumn',
      width: 150,
      headerName: 'Price',
    },
    {
      field: 'warranty',
      type: 'numericColumn',
      width: 100,
      headerName: 'Warranty',
    },
    { field: 'createdAt', headerName: 'Created At', width: 250 },
    { field: 'updatedAt', headerName: 'Updated At', width: 250 },
    { field: 'isActive', headerName: 'Is Active', width: 100 },
    {
      field: 'id',
      headerName: 'Show',
      width: 100,
      cellRendererFramework: 'ViewButton',
      cellRendererParams: { name: 'showProduct' },
    },
    {
      field: 'id',
      headerName: 'Edit',
      width: 100,
      cellRendererFramework: 'EditButton',
      cellRendererParams: { name: 'editProduct' },
    },
    {
      field: 'id',
      headerName: 'Delete',
      width: 100,
      cellRendererFramework: 'DeleteButton',
      cellRendererParams: { name: 'deleteProduct' },
    },
  ],
}
const getters = {
  products: (state: any) => state.products,
  fields: (state: any) => state.fields,
}
const actions = {
  async fetchProducts({ commit }: any) {
    const res = await axios.get(
      'http://localhost:3000/api/products/filter?price%5B%5D=0.00&price%5B%5D=100000000.00&sort=price-asc',
    )
    commit('setProducts', res.data.products)
  },
}
const mutations = {
  setProducts: (state: any, products: object[]) => (state.products = products),
}

export default {
  state,
  getters,
  actions,
  mutations,
}
