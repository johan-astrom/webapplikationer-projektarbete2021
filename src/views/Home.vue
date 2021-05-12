<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <h1>{{title}}</h1>
    <main class="grid_container">
      <article class="left">
          <!--Lägger in länken till quiz nedan när man trycker på "Starta quiz"-->
          <h2>Starta quiz</h2>
          <img src="" alt="">
      </article>

      <article class="right">
        <div>
          <!--Lägger in länkar till sign up/log in nedan när man trycker på respektive knapp-->
          <!--Är man redan inloggad står det: Välkommen "Namnet på personen"-->

          <h2 v-if="loggedIn=true">Välkommen + {{name}}</h2>
          <h2 v-else-if="loggedIn=false">Logga in/ Registrera</h2>
          <img src="" alt="">
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

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

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
    HelloWorld,
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
