<template>
  <div class="app-content content">
    <div class="content-wrapper">
      <div class="content-header row">
        <div class="content-header-left col-md-6 col-12 mb-2">
          <h3 class="content-header-title mb-0">Detached Left Sticky Sidebar</h3>
          <div class="row breadcrumbs-top">
            <div class="breadcrumb-wrapper col-12">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li class="breadcrumb-item">
                  <a href="#">Page Layouts</a>
                </li>
                <li class="breadcrumb-item active">Content detached left sticky sidebar</li>
              </ol>
            </div>
          </div>
        </div>
        <div class="content-header-right col-md-6 col-12">
          <div class="media width-250 float-right">
            <div class="media-left media-middle">
              <div></div>
            </div>
            <div class="media-body media-right text-right">
              <h3 class="m-0">$5,668</h3>
              <span class="text-muted">Sales</span>
            </div>
          </div>
        </div>
      </div>
      <div class="content-detached content-right">
        <div class="content-body">
          <!-- Description -->
          <section class="card">
            <div class="card-header">
              <h4 class="card-title">Chi Tiết Về Sản Phẩm</h4>
            </div>
            <div class="card-content">
              <div class="card-body">
                <div class="card-text">{{product.content}}</div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div class="sidebar-detached sidebar-left sidebar-sticky">
        <div class="sidebar">
          <div class="sidebar-content card d-none d-lg-block">
            <div class="card-body">
              <!-- Card sample -->
              <div class="text-center">
                <img
                  class="card-img-top mb-1 img-fluid"
                  data-src="holder.js/100px180/"
                  :src="product.image && product.image.replace('public', 'http://localhost:3000')"
                  alt="Card image cap"
                >
              </div>
              <h4 class="card-title">{{product.name}}</h4>
              <hr>
              <code>Mã SP:</code>
              <code>{{product.id}}</code>
              <br>
              <br>
              <code>Lượt Xem:</code>
              <code>{{product.views}}</code>
              <code>Đã Bán:</code>
              <code>{{product.sales}}</code>
              <br>
              <br>
              <code>Tình Trạng:</code>
              <code>{{product.status}}</code>
              <br>
              <br>
              <code>Hiện \ Ẩn:</code>
              <code>{{product.isActive}}</code>
              <br>
              <br>
              <code>Ngày Nhập Kho:</code>
              <code>{{product.createdAt}}</code>
              <br>
              <br>
              <code>Ngày Chỉnh Sửa Cuối Cùng:</code>
              <code>{{product.updatedAt}}</code>
              <br>
              <br>
              <hr>
              <div>
                <code>Giá:</code>
                <code>{{product.price}}</code>
                <div class="progress progress-lg mt-1 mb-0">
                  <div
                    class="progress-bar bg-success"
                    role="progressbar"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100000000"
                  ></div>
                </div>
                <br>
                <code>Bảo Hành:</code>
                <code>{{product.warranty}}</code>
                <code>Tháng</code>
                <div class="progress progress-lg mt-1 mb-0">
                  <div
                    class="progress-bar bg-info"
                    role="progressbar"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="50"
                  ></div>
                </div>
              </div>
              <hr>

              <div class="row">
                <div class="col-6">
                  <router-link :to="{name: 'products'}" class="btn btn-warning btn-block">Quay về</router-link>
                </div>
                <div class="col-6">
                  <router-link
                    :to="{name: 'editProduct', params: {id: id}}"
                    class="btn btn-info btn-block"
                  >Sửa</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Route } from 'vue-router'
import { mapActions, mapGetters } from 'vuex'

@Component({
  methods: { ...mapActions(['fetchProduct']) },
  computed: {
    ...mapGetters(['product']),
  },
  beforeRouteUpdate(to: Route, from: Route, next: Function) {
    ;(this as any).id = to.params.id
    next()
  },
})
export default class ProductItem extends Vue {
  public data() {
    return {
      id: undefined,
    }
  }

  public created() {
    ;(this as any).id = (this as any).$route.params.id
    ;(this as any).fetchProduct((this as any).id)
  }
}
</script>