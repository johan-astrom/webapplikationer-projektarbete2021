<template>
  <div class="home">
    <html>

    <body>
    <!--navigation_links ska hamna brevid varandra-->
    <div class=" navigation_links">

    </div>

    <main class="grid_container">
      <article class="left">
        <div>
          <!--Lägger in länken till quiz nedan när man trycker på "Starta quiz"-->
          <router-link to="/quizSettings"><h2>Starta Quiz</h2></router-link>
          <img src="../assets/math.jpg" alt="">
        </div>

      </article>

      <article class="right">
        <div>
          <!--Lägger in länkar till sign up/log in nedan när man trycker på respektive knapp-->
          <!--Är man redan inloggad står det: Välkommen "Namnet på personen"-->
          <router-link to.name="ProfileInfo" v-if="loggedIn==true"> <h2>Välkommen</h2></router-link>
          <router-link to="/konto" v-else><h2>Logga in/ Registrera</h2></router-link>

          <img src="../assets/kugghjul.jpg" alt="">
        </div>
      </article>
    </main>


    <!--listan i footer ska hamna brevid varandra-->
    </body>
    </html>

  </div>
</template>

<script>
// @ is an alias to /src
//import {loggedIn} from "../router/index"

export default {
  name: "Home",
  props: {
  loggedIn: Boolean
},
  data() {
    return {

    }
  },
  components: {

  },
  methods: {
    // loggedInText: function () {
    //   if (this.loggedIn == true) {
    //     this.loggInText = 'Välkommen ' + this.name;
    //   } else if (this.loggedIn == false) {
    //     this.loggInText = 'Logga in/ Registrera'
    //   }
    // }
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
  height: 100vh;
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

