<template>
  <Banner/>
  <div class="main-container">
    <h1>Mount Your Burger:</h1>
    <BurgerForm/>
  </div>
</template>

<script>
import Banner from'../components/Banner/index.vue'
import BurgerForm from'../components/BurgerForm/index.vue'

export default {
  name: "Home",
  components: {
    Banner,
    BurgerForm
  }
}
</script>
