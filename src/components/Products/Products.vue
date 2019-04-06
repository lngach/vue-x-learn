<template>
  <div class="app-content content">
    <div class="content-wrapper">
      <div class="content-header row">
        <div class="content-header-left col-md-6 col-12 mb-2">
          <h3 class="content-header-title mb-0">jsGrid</h3>
          <div class="row breadcrumbs-top">
            <div class="breadcrumb-wrapper col-12">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li class="breadcrumb-item">
                  <a href="#">jsGrid</a>
                </li>
                <li class="breadcrumb-item active">jsGrid</li>
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
        <!-- Basic scenario start -->
        <section id="basic">
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">Basic Scenario</h4>
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
                <div class="card-content collapse show">
                  <div class="card-body card-dashboard">
                    <ag-grid-vue
                      class="ag-theme-material"
                      style="width: 100%; height: 500px;"
                      :columnDefs="fields"
                      :defaultColDef="{ resizable: true }"
                      :rowData="products"
                    ></ag-grid-vue>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Basic scenario end -->
      </div>
    </div>
  </div>
</template>


<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator'
import ProductItem from '@/components/Products/ProductItem.vue'
import ViewButton from '@/components/Common/ViewButton.vue'
import EditButton from '@/components/Common/EditButton.vue'
import DeleteButton from '@/components/Common/DeleteButton.vue'
import { AgGridVue } from 'ag-grid-vue'
import { mapActions, mapGetters } from 'vuex'
@Component({
  components: {
    ProductItem,
    AgGridVue,
    ViewButton,
    EditButton,
    DeleteButton,
  },
  methods: { ...mapActions(['fetchProducts']) },
  computed: { ...mapGetters(['products', 'fields']) },
})
export default class Products extends Vue {
  public async beforeMount() {
    ;(this as any).gridOptions = {}
    ;(this as any).fetchProducts()
  }
}
</script>

<style lang='scss'>
@import '../../../node_modules/ag-grid-community/dist/styles/ag-grid.css';
@import '../../../node_modules/ag-grid-community/dist/styles/ag-theme-material.css';
</style>
