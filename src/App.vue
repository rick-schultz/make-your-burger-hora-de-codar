<template>
  <Navbar
  :logo="logo_src"
  :alt="app_name"
  />
  <router-view/>
  <Footer/>
</template>

<script>
import Navbar from './components/Navbar/Navbar.vue';
import Footer from './components/Footer/Footer.vue';

export default {
  components:{
    Navbar,
    Footer
  },
  data() {
    return {
      logo_src: '/img/logo.png',
      app_name: 'Make Your Burger'
    }
  }
}
</script>

<style src="./styles/global.css"></style>
