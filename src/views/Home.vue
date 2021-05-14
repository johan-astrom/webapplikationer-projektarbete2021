<template>
  <div class="home">
    <html>
    <header>
      <div class="header_container">
      <h1>{{ title }}</h1>
      </div>
    </header>
    <body>
    <!--navigation_links ska hamna brevid varandra-->
    <div class=" navigation_links">

    </div>

    <main class="grid_container">
      <article class="left">
        <div>
          <!--Lägger in länken till quiz nedan när man trycker på "Starta quiz"-->
          <router-link to="/quiz"><h2>Starta Quiz</h2></router-link>
          <img src="../assets/math.jpg" alt="">
        </div>

      </article>

      <article class="right">
        <div>
          <!--Lägger in länkar till sign up/log in nedan när man trycker på respektive knapp-->
          <!--Är man redan inloggad står det: Välkommen "Namnet på personen"-->
          <router-link to="/konto" v-if="loggedIn==true"> <h2>Välkommen</h2></router-link>
          <router-link to="/konto" v-else><h2>Logga in/ Registrera</h2></router-link>

          <img src="../assets/kugghjul.jpg" alt="">
        </div>
      </article>
    </main>


    <!--listan i footer ska hamna brevid varandra-->
    <footer class="footer_list">
      <ul>
        <li><b>E-Mail: </b> info@info.se</li>
        <li><b>Tel: </b> 08-000 000</li>
        <li><b>Adress: </b> Stockholm, Sweden</li>
      </ul>
    </footer>
    </body>
    </html>

  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: "Home",
  data() {
    return {
      title: 'Välkommen',
      loggInText: '',
      name: '',
      loggedIn: false
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
header{
  background-color: lightblue;
}
.header_container{
  border-color: black;
  border-style: solid;
  border-radius: 25px;
  width: 50%;
  margin: auto;
  background-color: #9f9ffa;
}
body{
  background-color: lightblue;
  padding: 30px;

}
h1 {
  grid-area: header;
  font-family: "Comic Sans MS";
  font-size: 34px;
  color: black;
  text-align: center;

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
nav {
  background-color: #c3bebe;
  border-radius: 10px;
  height: 40px;
}
nav ul {
  grid-area: nav;
  flex-direction: row;
  display: flex;
  justify-content: space-around;
  list-style-type: none;
}
nav a {
  flex: auto;
  flex: 1; /* Betyder att varje flex i detta fallet a i nav kommer att anpassas efter fösnterets storlek och bli lika stora */
  padding: 10px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  color: #999;
}
footer{
  grid-area: footer;
  background-color: #9f9ffa;
  width: auto;
  padding: 20px;
  border-color: black;
  border-style: solid;
  border-radius: 25px;
}
footer ul {
  grid-area: footer;
  flex-direction: row;
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  font-family: "Comic Sans MS";
}
</style>

