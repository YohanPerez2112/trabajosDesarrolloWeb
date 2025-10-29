<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="navbar-brand ps-3">Panel</div>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/productos" class="nav-link">Productos</router-link>
        </li>
        <li class="nav-item">
          <a @click="logout" class="nav-link" style="cursor: pointer;">Cerrar sesión</a>
        </li>
      </ul>
    </nav>

    <!-- Aquí se renderizarán las vistas hijas (por ejemplo, ProductoView) -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'DashboardView',
  methods: {
    logout() {
      // Elimina el valor que indica que el usuario está logueado
      localStorage.removeItem('logueado')

      // Redirige a la pantalla de inicio de sesión
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.dashboard {
  padding: 40px;
  background: #f5f7fa;
  min-height: 100vh;
}

.navbar {
  background-color: #007bff;
  color: #fff;
  border-radius: 8px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.navbar .navbar-brand {
  font-weight: 700;
  font-size: 1.2rem;
}

.navbar-nav {
  display: flex;
  gap: 15px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  display: flex;
  align-items: center;
}

.nav-link {
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s, transform 0.2s;
}

.nav-link:hover {
  color: #dbeafe;
  transform: translateY(-2px);
}

.nav-link.router-link-exact-active {
  color: #ffe082;
  font-weight: 600;
}

.content {
  background: #ffffff;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

h2 {
  color: #2c3e50;
  margin-bottom: 20px;
  font-weight: 600;
}

.dashboard-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.card {
  background: #ffffff;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0,0,0,0.08);
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 14px rgba(0,0,0,0.12);
}

.card h4 {
  color: #007bff;
  margin-bottom: 10px;
}

.card p {
  color: #555;
  font-size: 0.95rem;
}
</style>

