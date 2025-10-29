<template>
  <div class="container mt-4">
    <h3 class="mb-4 text-center">Gestión de Productos</h3>

    <!-- Formulario de nuevo producto -->
    <div class="card p-3 mb-4 shadow-sm">
      <input
        v-model.trim="nuevo.nombre"
        class="form-control mb-2"
        placeholder="Nombre del producto"
      />
      <input
        v-model.number="nuevo.precio"
        class="form-control mb-2"
        placeholder="Precio"
        type="number"
        min="0"
      />
      <button class="btn btn-success w-100" @click="agregar">
        Agregar producto
      </button>

      <p v-if="error" class="text-danger mt-2 text-center">
        {{ error }}
      </p>
    </div>

    <!-- Tabla de productos -->
    <table class="table table-striped table-hover align-middle">
      <thead class="table-primary">
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(p, i) in productos" :key="i">
          <td>{{ p.nombre }}</td>
          <td>${{ p.precio.toLocaleString() }}</td>
          <td>
            <button
              @click="eliminar(i)"
              class="btn btn-danger btn-sm"
            >
              Eliminar
            </button>
          </td>
        </tr>

        <tr v-if="productos.length === 0">
          <td colspan="3" class="text-center text-muted">
            No hay productos registrados.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ProductoView',
  data() {
    return {
      productos: [],
      nuevo: { nombre: '', precio: '' },
      error: ''
    }
  },
  created() {
    const data = localStorage.getItem('productos')
    this.productos = data ? JSON.parse(data) : []
  },
  methods: {
    agregar() {
      this.error = ''
      if (!this.nuevo.nombre || !this.nuevo.precio) {
        this.error = 'Debes ingresar nombre y precio válidos.'
        return
      }

      this.productos.push({ ...this.nuevo })
      localStorage.setItem('productos', JSON.stringify(this.productos))
      this.nuevo = { nombre: '', precio: '' }
    },
    eliminar(index) {
      if (confirm('¿Seguro que deseas eliminar este producto?')) {
        this.productos.splice(index, 1)
        localStorage.setItem('productos', JSON.stringify(this.productos))
      }
    }
  }
}
</script>

<style scoped>
.container {
  margin-top: 40px;
  background: #fff;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

h3 {
  color: #2c3e50;
  font-weight: 600;
  margin-bottom: 20px;
}

input.form-control {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
  transition: border-color 0.3s;
}

input.form-control:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0,123,255,0.3);
}

button.btn {
  border-radius: 8px;
  padding: 8px 14px;
  font-weight: 600;
  transition: background-color 0.3s, transform 0.2s;
}

button.btn:hover {
  transform: translateY(-1px);
}

.table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.table th {
  background-color: #007bff;
  color: white;
  padding: 10px;
  text-align: left;
}

.table td {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.table tr:hover {
  background-color: #eef5ff;
}

.btn-success {
  background-color: #28a745;
  border: none;
}

.btn-success:hover {
  background-color: #218838;
}

.btn-danger {
  background-color: #dc3545;
  border: none;
}

.btn-danger:hover {
  background-color: #c82333;
}
</style>

