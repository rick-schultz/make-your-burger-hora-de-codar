<template>
  <div id="burger-table">
    <Message :msg="msg" v-show="msg" />
    <div>
      <div id="burger-table-heading">
        <div class="order-id">#:</div>
        <div>Client:</div>
        <div>Bread:</div>
        <div>Meat:</div>
        <div>Optionals:</div>
        <div>Actions:</div>
      </div>
    </div>
    <div id="burger-table-rows">
      <div class="burger-table-row" v-for="burger in burgers" :key="burger.id">
        <div class="order-number">{{ burger.id }}</div>
        <div>{{ burger.name }}</div>
        <div>{{ burger.bread }}</div>
        <div>{{ burger.meat }}</div>
        <div>
          <ul>
            <li v-for="(optional, index) in burger.optionals" :key="index">{{optional}}</li>
          </ul>
        </div>
        <div>
          <select name="status" id="status" @change="updateBurger($event, burger.id)">
            <option value="">Select</option>
            <option v-for="s in status" :key="s.id" :value="s.type" :selected="burger.status == s.type">
              {{ s.type }}
            </option>
          </select>
          <button class="delete-btn" @click="deleteBurger(burger.id)">Cancel</button>
      </div>
     </div>
    </div>
  </div>
</template>

<script>
import Message from '../Message/Message.vue';
export default {
  name: "Dashboard",
    components: {
    Message
  },
  data() {
    return {
      burgers: null,
      burger_id: null,
      status: [],
      msg: null
    }
  },
  methods: {
    async getRequests() {
      
      const req = await fetch("http://localhost:3000/burgers")
      
      const data = await req.json();
      
      this.burgers = data;

      this.getStatus();
    },
    async getStatus() {
      const req = await fetch("http://localhost:3000/status")
      
      const data = await req.json();
      
      this.status = data;
    },
    async deleteBurger(id) {
      const req = await fetch(`http://localhost:3000/burgers/${id}`, {
        method: "DELETE",
      })
      
      const res = await req.json();

      console.log(res);

      this.msg = "Order successfully removed!";

      setTimeout(() => {
        this.msg = "";
      }, 3000);
      
      this.getRequests();
    },
    async updateBurger(event, id) {

      const option= event.target.value;

      const dataJson = JSON.stringify({status: option });

      const req = await fetch(`http://localhost:3000/burgers/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json" },
        body: dataJson
      });

      const res = await req.json();

      this.msg = `Order number ${res.id} successfully updated to ${res.status}!`;

      setTimeout(() => {
        this.msg = "";
      }, 3000);
    }
  },
  mounted() {
    this.getRequests();
  }
}
</script>

<style scoped src="./dashboard.styled.css"></style>