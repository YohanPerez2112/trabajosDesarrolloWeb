<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3">
    <a class="navbar-brand" href="#">Mi App</a>

    <div class="collapse navbar-collapse">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/productos" class="nav-link">Productos</router-link>
        </li>
      </ul>
      <button class="btn btn-outline-light btn-sm" @click="logout">Cerrar sesión</button>
    </div>
  </nav>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const logout = () => {
  localStorage.removeItem('logueado')
  router.push('/')  // 🔥 redirige a la raíz (login o home)
}
</script>

<style scoped>
nav {
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
}
</style>
