<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col>
          <b-navbar style="z-index: 2" toggleable="lg" type="light" variant="light">
            <b-navbar-brand href="#">Logo</b-navbar-brand>
            <b-navbar-toggle target="navbar-nav"></b-navbar-toggle>

            <b-collapse id="navbar-nav" is-nav>
              <b-navbar-nav class="ml-auto">
                <b-nav-item href="inicio">Inicio</b-nav-item>
                <b-nav-item href="#">Acerca de</b-nav-item>
                <b-nav-item :to="{ name: 'showPerfil' }">Perfil</b-nav-item>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </b-col>
      </b-row>

      <b-row>
        <b-col sm="3" md="4" lg="3">
          <b-sidebar z-index="1" id="sidebar" shadow visible no-close-on-route-change no-header-close>
            <b-nav vertical class="pt-5">
              <b-nav-item :to="{ name: 'catalogoEspacios' }"> Catalogo de lugares
              </b-nav-item>

              <b-nav-item :to="{ name: 'registroEspacio' }">Registro de espacios</b-nav-item>

              <b-nav-item :to="{ name: 'showPerfil' }">Perfil
              </b-nav-item>
              <b-nav-item :to="{ name: 'registroUsuario' }">Registro de personas</b-nav-item>

            </b-nav>
          </b-sidebar>
        </b-col>
        <b-col class="content">
          <router-view />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Inicio",
          href: "#",
        },
      ],
    };
  },
  methods: {
  },
};
</script>

<style>
.content {
  margin-left: 10px;
}
</style>