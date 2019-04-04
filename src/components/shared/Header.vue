<template>
  <div
    class="header-navbar navbar-expand-sm navbar navbar-horizontal navbar-fixed navbar-light navbar-without-dd-arrow navbar-shadow menu-border"
    role="navigation"
    data-menu="menu-wrapper"
  >
    <!-- Horizontal menu content-->
    <div class="navbar-container main-menu-content" data-menu="menu-container">
      <!-- include ../../../includes/mixins-->
      <ul class="nav navbar-nav" id="main-menu-navigation" data-menu="menu-navigation">
        <li class="dropdown nav-item" data-menu="dropdown">
          <router-link to="/" class="dropdown-toggle nav-link">
            <i class="ft-grid"></i>
            <span>Dashboard</span>
          </router-link>
        </li>
        <li class="dropdown nav-item" data-menu="dropdown">
          <router-link to="/about" class="dropdown-toggle nav-link">
            <i class="ft-grid"></i>
            <span>About</span>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- /horizontal menu content-->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Header extends Vue {}
</script>
