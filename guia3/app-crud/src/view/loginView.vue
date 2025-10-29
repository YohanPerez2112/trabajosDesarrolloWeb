<template>
  <div class="container mt-5 col-md-4">
    <h3 class="text-center mb-4">Iniciar Sesión</h3>

    <input
      v-model="usuario"
      class="form-control mb-2"
      placeholder="Usuario"
    />

    <input
      v-model="clave"
      type="password"
      class="form-control mb-3"
      placeholder="Contraseña"
    />

    <button class="btn btn-primary w-100" @click="login">
      Entrar
    </button>

    <p v-if="error" class="text-danger mt-3 text-center">
      {{ error }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      usuario: '',
      clave: '',
      error: ''
    }
  },
  methods: {
    login() {
      const users = [
        { user: 'admin', pass: '1234' },
        { user: 'jerson', pass: '5678' }
      ]

      const valido = users.find(
        (u) => u.user === this.usuario && u.pass === this.clave
      )

      if (valido) {
        // Guardar estado de sesión
        localStorage.setItem('logueado', 'true')

        // Redirigir al dashboard
        this.$router.push('/dashboard')
      } else {
        this.error = 'Credenciales incorrectas'
      }
    }
  }
}
</script>

<style scoped>
.container {
  margin-top: 80px;
  padding: 25px;
  max-width: 400px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

h3 {
  text-align: center;
  margin-bottom: 25px;
  color: #2c3e50;
  font-weight: 600;
}

input.form-control {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  transition: border-color 0.3s;
}

input.form-control:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0,123,255,0.3);
}

button.btn {
  border-radius: 8px;
  padding: 10px;
  font-weight: 600;
  transition: background-color 0.3s, transform 0.2s;
}

button.btn:hover {
  transform: translateY(-1px);
}

.text-danger {
  text-align: center;
  color: #e74c3c;
  font-weight: 500;
  margin-top: 10px;
}
</style>

