<template>
  <html>
  <body>
  <div id="app">

    <header>
      <div class="header_container">
        <h1>{{ title }}</h1>

      </div>
      <div class="logInButton">
        <div class="buttonLogIn">
          <button id="btnIn" v-if="loggedIn==true" v-on:click="loggedInButtonFalse">Logga ut</button>
        </div>
        <div class="buttonLogOut">
          <button id="btnOut" v-if="loggedIn==false" v-on:click="loggedInButtonTrue">Logga in</button>
        </div>
      </div>
    </header>

    <div id="nav">
      <router-link to="/" class="grid-item1">Home</router-link>
      <router-link to="/quizsettings"
                   class="grid-item"
                   @click.native="clearStorage"
                   :difficulty-selected="difficultySelected">Starta Quiz</router-link>
      <router-link to="/konto" class="grid-item3">Mitt konto</router-link>
    </div>
    <router-view @user-login-step2="login"/>
  </div>

  <footer>
    <div class="footer_list">
      <ul>
        <li><b>E-Mail: </b> info@info.se</li>
        <li><b>Tel: </b> 08-000 000</li>
        <li><b>Adress: </b> Stockholm, Sweden</li>
      </ul>
    </div>
  </footer>
  </body>
  </html>
</template>
<script>
export default {
  data() {
    return {
      title: 'Kunskapsquizet',
      loggedIn: false,
      loggInText: '',
      name: '',
      difficultySelected: false
    }
  },
  methods: {
    loggedInButtonFalse() {
      this.loggedIn = false;
    },
    loggedInButtonTrue() {
      this.loggedIn = true;
    },
    login() {
      this.loggedIn = true;
    },
    clearStorage() {
      if (this.$route.name != "QuizSettings") {
        console.log("I clearStorage")
        localStorage.setItem("operator", ""),
            localStorage.setItem("sign", ""),
            localStorage.setItem("difficulty", "")
      }
    }
  }
}
</script>

<style>
#app body {
  background-color: lightblue;
  padding: 30px;

}

.header_container {
  border-color: black;
  border-style: solid;
  border-radius: 25px;
  width: 50%;
  margin: auto;
  background-color: #9f9ffa;
}

header {
  background-color: lightblue;
  padding-top: 20px;
}

.logInButton {
  text-align: right;
  padding-right: 15%;

}

#btnIn {
  background-color: red;
  border-color: black;
  border-style: solid;
  border-radius: 25px;
}

#btnOut {
  background-color: forestgreen;
  border-color: black;
  border-style: solid;
  border-radius: 25px;
}

h1 {
  grid-area: header;
  font-family: "Comic Sans MS";
  font-size: 34px;
  color: black;
  text-align: center;

}

#app {
  font-family: "Comic Sans MS";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}

#nav {
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: lightblue;
  padding: 10px;
  color: black;

}

.grid-item1 {
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  background-color: #9f9ffa;
  padding: 20px;
  font-size: 20px;
  text-align: center;
  border-color: black;
  border-style: solid;
  color: #2c3e50;
}

.grid-item3 {
  border-bottom-right-radius: 25px;
  border-top-right-radius: 25px;
  background-color: #9f9ffa;
  padding: 20px;
  font-size: 20px;
  text-align: center;
  border-color: black;
  border-style: solid;
  color: #2c3e50;
}

.grid-item {
  background-color: #9f9ffa;

  padding: 20px;
  font-size: 20px;
  text-align: center;
  border-color: black;
  border-style: solid;
  color: #2c3e50;
}

#nav a:hover {
  background-color: yellow;
  transition: all 0.3s ease 0s;
  color: black;
}

#nav a:active {
  background-color: lightgreen;
  transition: all 0.3s ease 0s;
  color: black;
}

footer {
  background-color: lightblue;
}

.footer_list {
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
