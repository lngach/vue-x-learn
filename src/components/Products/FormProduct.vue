<template>
  <div class="app-content content">
    <div class="content-wrapper">
      <div class="content-header row">
        <div class="content-header-left col-md-6 col-12 mb-2">
          <h3 class="content-header-title mb-0">Form Actions</h3>
          <div class="row breadcrumbs-top">
            <div class="breadcrumb-wrapper col-12">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li class="breadcrumb-item">
                  <a href="#">Form Layouts</a>
                </li>
                <li class="breadcrumb-item active">
                  <a href="#">Form Actions</a>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div class="content-header-right col-md-6 col-12">
          <div class="media width-250 float-right">
            <div class="media-left media-middle">
              <div id="sp-bar-total-sales"></div>
            </div>
            <div class="media-body media-right text-right">
              <h3 class="m-0">$5,668</h3>
              <span class="text-muted">Sales</span>
            </div>
          </div>
        </div>
      </div>
      <div class="content-body">
        <!-- Form actions layout section start -->
        <section id="form-action-layouts">
          <div class="row justify-content-md-center">
            <div class="col-md-6">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title" id="from-actions-top-left">Project Info</h4>
                  <a class="heading-elements-toggle">
                    <i class="fa fa-ellipsis-v font-medium-3"></i>
                  </a>
                  <div class="heading-elements">
                    <ul class="list-inline mb-0">
                      <li>
                        <a data-action="collapse">
                          <i class="ft-minus"></i>
                        </a>
                      </li>
                      <li>
                        <a data-action="reload">
                          <i class="ft-rotate-cw"></i>
                        </a>
                      </li>
                      <li>
                        <a data-action="expand">
                          <i class="ft-maximize"></i>
                        </a>
                      </li>
                      <li>
                        <a data-action="close">
                          <i class="ft-x"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="card-content collpase show">
                  <div class="card-body">
                    <div class="card-text"></div>
                    <form class="form" id="formTemplate" enctype="multipart/form-data">
                      <input type="text" name="id" id="id" value hidden>
                      <div class="form-body">
                        <h4 class="form-section">
                          <i class="ft-user"></i>Thông Cơ Bản
                        </h4>
                        <div class="row">
                          <div class="form-group col-md-6 mb-2">
                            <label for="projectinput1">Tên sản phẩm</label>
                            <input
                              v-model="name"
                              type="text"
                              class="form-control"
                              placeholder="R7 2700x"
                            >
                          </div>
                          <div class="form-group col-md-6 mb-2">
                            <label for="projectinput2">Giá</label>
                            <input
                              v-model="price"
                              type="text"
                              id="price"
                              class="form-control"
                              placeholder="6900000"
                              name="price"
                            >
                          </div>
                        </div>
                        <div class="row">
                          <div class="form-group col-12 mb-2">
                            <label for="projectinput5">Bảo Hành(T)</label>
                            <input
                              v-model="warranty"
                              type="text"
                              id="warranty"
                              class="form-control"
                              placeholder="36"
                              name="warranty"
                            >
                          </div>
                        </div>
                        <h4 class="form-section">
                          <i class="ft-clipboard"></i> Bắt Buộc
                        </h4>

                        <div class="row">
                          <div class="form-group col-md-6 mb-2">
                            <label for="category_id">Danh Mục Linh Kiện</label>
                            <select
                              id="category_id"
                              name="category_id"
                              v-model="category_id"
                              class="form-control"
                            >
                              <option
                                v-for="item in categories"
                                :key="item.id"
                                :value="item.id"
                              >{{item.name}}</option>
                            </select>
                          </div>
                          <div class="form-group col-md-6 mb-2">
                            <label for="product_type_id">Loại Linh Kiện</label>
                            <select
                              v-model="product_type_id"
                              id="product_type_id"
                              name="product_type_id"
                              class="form-control"
                            >
                              <option
                                v-for="item in product_types"
                                :key="item.id"
                                :value="item.id"
                              >{{item.name}}</option>
                            </select>
                          </div>
                        </div>
                        <div class="row">
                          <div class="form-group col-md-6 mb-2">
                            <label for="provider_id">Hãng Sãn Xuất</label>
                            <select
                              id="provider_id"
                              name="provider_id"
                              v-model="provider_id"
                              class="form-control"
                            >
                              <option
                                v-for="item in providers"
                                :key="item.id"
                                :value="item.id"
                              >{{item.name}}</option>
                            </select>
                          </div>
                          <div class="form-group col-md-6 mt-2">
                            <label>Hình Đại Diện</label>
                            <label id="imageLabel" class="file center-block">
                              <input type="file" id="image" name="image">
                              <span class="file-custom"></span>
                            </label>
                            <img
                              v-show="id !== undefined"
                              id="previewImage"
                              :src="image"
                              width="100"
                              height="100"
                            >
                          </div>
                        </div>
                        <div class="row">
                          <div class="form-group col-12 mb-2">
                            <label for="content">Chi Tiết Sản Phẩm</label>
                            <textarea
                              v-model="content"
                              id="content"
                              rows="5"
                              class="form-control"
                              name="content"
                              placeholder="Phiên bản AMD Ryzen 7 2700x có 8 nhân (16 luồng) cho hiệu năng đa nhiệm cao hơn nhiều thế hệ trước. Ngoài ra dòng CPU này có khả năng OC cao cấp càng tăng cường thêm hiệu suất cho hệ thống với hỗ trợ tính năng XFR (eXtended Frequency Range). "
                            ></textarea>
                          </div>
                        </div>
                        <div class="row">
                          <div class="form-group col-6 mb-2">
                            <label>Tình Trạng</label>
                            <div class="input-group">
                              <div class="d-inline-block custom-control custom-radio mr-1">
                                <input
                                  v-model="status"
                                  type="radio"
                                  name="status"
                                  class="custom-control-input"
                                  id="status-yes"
                                >
                                <label class="custom-control-label" for="status-yes">Còn Hàng</label>
                              </div>
                              <div class="d-inline-block custom-control custom-radio">
                                <input
                                  v-model="status"
                                  type="radio"
                                  name="status"
                                  class="custom-control-input"
                                  id="status-no"
                                >
                                <label class="custom-control-label" for="status-no">Hết Hàng</label>
                              </div>
                            </div>
                          </div>
                          <div class="form-group col-6 mb-2">
                            <label>Hiện \ Ẩn</label>
                            <div class="input-group">
                              <div class="d-inline-block custom-control custom-radio mr-1">
                                <input
                                  v-model="is_active"
                                  type="radio"
                                  name="is_active"
                                  class="custom-control-input"
                                  id="is-active-yes"
                                >
                                <label class="custom-control-label" for="is-active-yes">Hiện</label>
                              </div>
                              <div class="d-inline-block custom-control custom-radio">
                                <input
                                  v-model="is_active"
                                  type="radio"
                                  name="is_active"
                                  class="custom-control-input"
                                  id="is-active-no"
                                >
                                <label class="custom-control-label" for="is-active-no">Ẩn</label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="form-actions right">
                          <router-link to="/products" class="btn btn-warning mr-1">
                            <i class="ft-x"></i> Hủy
                          </router-link>
                          <router-link
                            v-if="id !== undefined"
                            :to="{name: 'products', params: {id}}"
                            class="btn btn-warning mr-1"
                          >
                            <i class="ft-info"></i> Xem
                          </router-link>
                          <button class="btn btn-info mr-1">
                            <i class="fa fa-check-square-o"></i> Lưu
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- // Form actions layout section end -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { mapGetters, mapActions } from 'vuex'
import { Route } from 'vue-router'

@Component({
  methods: {
    ...mapActions([
      'fetchCategories',
      'fetchProductTypes',
      'fetchProviders',
      'loadEditForm',
    ]),
  },
  computed: {
    ...mapGetters(['product', 'categories', 'providers', 'product_types']),
    id: {
      set(id: string): void {
        this.$store.commit('setProductForm', { id })
      },
      get(): string {
        return (this as any).product.id
      },
    },
    name: {
      set(name: string): void {
        this.$store.commit('setProductForm', { name })
      },
      get(): string {
        return (this as any).product.name
      },
    },
    price: {
      set(price: string): void {
        this.$store.commit('setProductForm', { price })
      },
      get(): string {
        return (this as any).product.price
      },
    },
    warranty: {
      set(warranty: string): void {
        this.$store.commit('setProductForm', { warranty })
      },
      get(): string {
        return (this as any).product.warranty
      },
    },
    category_id: {
      set(category_id: string): void {
        this.$store.commit('setProductForm', { category_id })
      },
      get(): string {
        return (this as any).product.category_id
      },
    },
    product_type_id: {
      set(product_type_id: string): void {
        this.$store.commit('setProductForm', { product_type_id })
      },
      get(): string {
        return (this as any).product.product_type_id
      },
    },
    provider_id: {
      set(provider_id: string): void {
        this.$store.commit('setProductForm', { provider_id })
      },
      get(): string {
        return (this as any).product.provider_id
      },
    },
    content: {
      set(content: string): void {
        this.$store.commit('setProductForm', { content })
      },
      get(): string {
        return (this as any).product.content
      },
    },
    status: {
      set(status: string): void {
        this.$store.commit('setProductForm', { status })
      },
      get(): string {
        return (this as any).product.status
      },
    },
    is_active: {
      set(is_active: string): void {
        this.$store.commit('setProductForm', { is_active })
      },
      get(): string {
        return (this as any).product.is_active
      },
    },
    image: {
      set(image: string): void {
        this.$store.commit('setProductForm', { image })
      },
      get(): string {
        return (this as any).product.image
      },
    },
  },
})
export default class AddProduct extends Vue {
  public beforeMount() {
    ;(this as any).fetchCategories()
    ;(this as any).fetchProductTypes()
    ;(this as any).fetchProviders()
    if ((this as any).$route.params.id !== undefined) {
      ;(this as any).loadEditForm((this as any).$route.params.id)
    }
  }
  public updated() {
    if (!(this as any).$route.params.id) this.$store.commit('setProduct', {})
  }
}
</script>

<style>
</style>
