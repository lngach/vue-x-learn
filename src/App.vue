<template>
  <div id="app">
    <Navbar/>
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Header from '@/components/shared/Header.vue'
import Navbar from '@/components/shared/Navbar.vue'
import Footer from '@/components/shared/Footer.vue'

@Component({
  components: {
    Header,
    Navbar,
    Footer,
  },
})
export default class App extends Vue {}
</script>

