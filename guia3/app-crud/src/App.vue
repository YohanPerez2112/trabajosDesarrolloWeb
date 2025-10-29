<template>
  <div id="app">
    <NavbarMenu /> <!-- ✅ router funciona -->
    <router-view />
  </div>
</template>

<script>
import NavbarMenu from './components/NavbarMenu.vue'

export default {
  name: 'App',
  components: { NavbarMenu }
}
</script>
