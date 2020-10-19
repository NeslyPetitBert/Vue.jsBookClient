<template>
  <div id="app">
    <!-- NAV -->
    <Nav />

    <!-- BODY -->
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
  import Nav from './components/Nav.vue'
  import axios from 'axios'

  export default {
    name: 'App',
    components: {
      Nav
    },
    async created() {
        const response = await axios.get('api/user');

        // console.log(response);

        // this.user = response.data;
        this.$store.dispatch('user', response.data);
    }
}
</script>

<style>

</style>
