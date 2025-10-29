<template>
  <div class="card p-3 mb-4 shadow-sm">
    <h5 class="mb-3">Agregar Producto</h5>
    <div class="mb-2">
      <input
        v-model="producto.nombre"
        class="form-control"
        placeholder="Nombre del producto"
      />
    </div>
    <div class="mb-2">
      <input
        v-model="producto.precio"
        type="number"
        class="form-control"
        placeholder="Precio"
      />
    </div>
    <button class="btn btn-success w-100" @click="enviarProducto">Guardar</button>
  </div>
</template>

<script>
export default {
  name: "ProductoForm",
  data() {
    return {
      producto: { nombre: "", precio: "" },
    };
  },
  emits: ["agregar"], // comunica con el componente padre
  methods: {
    enviarProducto() {
      if (this.producto.nombre && this.producto.precio) {
        this.$emit("agregar", { ...this.producto });
        this.producto = { nombre: "", precio: "" };
      } else {
        alert("Por favor completa todos los campos.");
      }
    },
  },
};
</script>

<style scoped>
.card {
  max-width: 400px;
  margin: auto;
}
</style>
