<template>
  <b-container class="mt-5">
    <b-input placeholder="Buscador..." v-model="filtro" class="mb-2 mt-2" id="filtro"></b-input>
    <b-table id="my-table" :items="personas" :per-page="perPage" :current-page="currentPage" :fields="fields"
      :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" label-sort-asc="" label-sort-desc="" small :filter="filtro"
      @filtered="filtrar">
    </b-table>
    <div class="overflow-auto">
      <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table"></b-pagination>

      <p class="mt-3">Current Page: {{ currentPage }}</p>
    </div>
  </b-container>
</template>

<script>
import personaService from "../services/Persona"; // Ajusta la ruta según tu estructura de archivos

export default {
  data() {
    return {
      filtro: null,
      sortBy: "name",
      sortDesc: false,
      perPage: 10,
      rows: 0,
      currentPage: 1,
      personas: [],
      fields: [
        { key: "name", label: "Nombre", sortable: true },
        { key: "firstname", label: "Apellido Paterno", sortable: true },
        { key: "lastname", label: "Apellido Materno", sortable: true },
        { key: "address", label: "Direccion", sortable: true },
        { key: "birthday", label: "Fech. Nac.", sortable: true },
        { key: "email", label: "Email", sortable: true },
        { key: "email", label: "Email", sortable: true },
      ],
    };
  },
  mounted() {
    this.obtenerPersonas();
  },
  methods: {
    async obtenerPersonas() {
      try {
        const data = await personaService.obtenerPersonasPaginadas(
          parseInt(this.currentPage),
          parseInt(this.perPage),
          this.sortBy
        );
        this.personas = data.content;
        this.rows = this.personas.length;
      } catch (error) {
        console.error(error);
      }
    },
    filtrar(items) {
      this.currentPage = 1;
      this.rows = items.length;
    }
  },
};
</script>
<style>
#filtro {

  margin: auto;

  display: block;
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>