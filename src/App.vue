<template>
  <Navbar
  :logo="logo_src"
  :alt="app_name"
  />
  <router-view/>
  <Footer/>
</template>

<script>
import Navbar from './components/Navbar/index.vue';
import Footer from './components/Footer/index.vue';

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

<style>
  * {
    font-family: Helvetica,sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .main-container {
    margin: 50px;
    min-height: 350px;
  }

  h1 {
    text-align: center;
    font-size: 42px;
    margin-bottom: 30px;
    color: #222;
  }
</style>
