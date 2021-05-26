<template>
  <div class="home">
    <html>

    <body>
    <main class="grid_container">
      <article class="left">
        <div>

          <router-link to="/quizSettings"><h2>Starta Quiz</h2></router-link>
          <img src="../assets/math.jpg" alt="">
        </div>

      </article>

      <article class="right">
        <div>
          <router-link v-if="loggedIn" to="/ProfileInfo" > <h2>Välkommen</h2></router-link>

          <router-link v-if="!loggedIn" to="/konto"><h2>Logga in/ Registrera</h2></router-link>

          <img src="../assets/kugghjul.jpg" alt="">
        </div>
      </article>
    </main>

    </body>
    </html>

  </div>
</template>

<script>
// @ is an alias to /src
//import {loggedIn} from "../router/index"


export default {
  name: "Home",
  data() {
    return {
      loggedIn:localStorage.getItem('loggedIn')
    }
  },
  components: {

  },
  methods: {

  }
};
</script>
<style scoped>

/*Tänk på att alla globala färger, fonter och styles ska ligga i app.vue
 */
.grid_container{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2.0fr 2.0fr 2.0fr;
  grid-template-areas:
    "header header "
    "left right"
    "footer footer";
  grid-gap: 20px;
  height: 55vh;
  text-align: center;
  font-family: "Comic Sans MS";
}


.left {
  grid-area: left;

  padding: 10px;
  text-align: center;
  float: left;
  align-items: center;
  background-color: white;
  justify-content: center;
  max-width: 400px;
  border-color: black;
  border-style: solid;
  border-radius: 25px;

  margin: auto;
}
.right {
  grid-area: right;

  padding: 10px;
  text-align: center;
  float: right;
  align-items: center;
  background-color: white;
  justify-content: center;
  max-width: 400px;

  border-color: black;
  border-style: solid;
  border-radius: 25px;
  margin:auto;
}


</style>

