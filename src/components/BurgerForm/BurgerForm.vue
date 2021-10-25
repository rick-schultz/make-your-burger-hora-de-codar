<template>
  <div>
    <Message :msg="msg" v-show="msg" />
    <div>
      <form id="burger-form" @submit="createBurger">
        <div class="input-container">
          <label for="name">Client Name</label>
          <input type="text" id="name" name="name" v-model="name" placeholder="Type your name">
        </div>
        <div class="input-container">
          <label for="bread">Choose your bread:</label>
          <select name="bread" id="bread" v-model="bread">
            <option value="">Select your bread</option>
            <option v-for="bread in breads" :key="bread.id" :value="bread.type">
              {{bread.type}}
            </option>
          </select>
        </div>
        <div class="input-container">
          <label for="meat">Choose your meat:</label>
          <select name="meat" id="meat" v-model="meat">
            <option value="">Select your meat</option>
            <option v-for="meat in meats" :key="meat.id" :value="meat.type">
              {{meat.type}}
            </option>
          </select>
        </div>
        <div id="optionals-container" class="input-container">
          <label id="optionals-title" for="optionals">Choose your optionals:</label>
          <div class="checkbox-container" v-for="optional in optionalsdata" :key="optional.id">
            <input type="checkbox" name="optionals" v-model="optionals" :value="optional.type">
            <span>{{optional.type}}</span>
          </div>
        </div>
        <div class="input-container">
          <input type="submit" class="submit-btn" value="Make my Burger!">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Message from '../Message/Message.vue';
export default {
  name: "BurgerForm",
  components: {
    Message
  },
  data() {
    return {
      breads: null,
      meats: null,
      optionalsdata: null,
      bread: null,
      meat: null,
      optionals: [],
      msg: null
    }
  },
  methods: {
    async getIngredients() {
      const req = await fetch("http://localhost:3000/ingredients");
      const data = await req.json();

      this.breads = data.breads;
      this.meats = data.meats;
      this.optionalsdata = data.optionals;
    },
    async createBurger(e) {
      e.preventDefault();

      const data = {
        name: this.name,
        bread: this.bread,
        meat: this.meat,
        optionals: Array.from(this.optionals),
        status: "Requested",
      }

      const dataJson = JSON.stringify(data);

      const req = await fetch("http://localhost:3000/burgers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: dataJson
      });

      const res = await req.json();

      this.msg = `Order number ${res.id} placed successfully!`;

      setTimeout(() => {
        this.msg = "";
      }, 3000);

      this.name = "";
      this.bread = "";
      this.meat = "";
      this.optionals = [];
    }
  },
  mounted() {
    this.getIngredients();
  }
}
</script>

<style scoped src="./burgerForm.styled.css"></style>