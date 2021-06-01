<template>
  <div class="home">
    <html>

    <body>
    <main class="grid_container">
      <article class="left">
        <div>

          <router-link to="/quizSettings"><h2>Starta Quiz</h2></router-link>
          <router-link to="/quizSettings"><img src="../assets/math.jpg" alt=""></router-link>
        </div>

      </article>

      <article class="right">
        <div>

          <router-link v-if="isLoggedIn" to="/konto"> <h2>Välkommen, {{activeUser.username}}!</h2></router-link>
          <router-link v-if="!isLoggedIn" to="/konto"><h2>Logga in/ Registrera</h2></router-link>

          <router-link v-if="isLoggedIn" to="/konto"><img src="../assets/kugghjul.jpg" alt=""></router-link>
          <router-link v-if="!isLoggedIn" to="/konto"><img src="../assets/kugghjul.jpg" alt=""></router-link>
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

 props: {
    isLoggedIn: {
      type: String
    },
   activeUser: {
      type: Object
   }
 },

  components: {

  },
  methods: {

  }
};
</script>
<style scoped>
/*Mobile*/
.grid_container{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2.0fr 2.0fr 2.0fr;
  grid-template-areas:
    "header header "
    "left right"
    "footer footer";
  grid-gap: 20px;
  height: 35vh;
  text-align: center;
  font-family: "Comic Sans MS";
}
img{
  height: 85%;
  width: 85%;
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
/*Tablet*/
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .grid_container{
    height: 55vh;
  }
  img{
    height: 90%;
    width: 90%;
  }
}
/*Desktop*/
@media screen and (min-width: 1025px) {
  .grid_container{
    height: 55vh;
  }
  img{
    height: 100%;
    width: 100%;
  }
}


</style>

