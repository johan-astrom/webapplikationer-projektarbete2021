<template>
  <html>
  <body>
  <div id="app">

    <header>
      <div class="header_container">
        <router-link to="/" class="header_link"> <h1>{{ title }}</h1></router-link>
      </div>
      <div class="logInButton">
        <div class="buttonLogIn">
          <button id="btnIn" v-if="loggedIn" v-on:click="loggedInButtonFalse">Logga ut</button>
        </div>
        <div class="buttonLogOut">
          <button id="btnOut" v-if="!loggedIn" v-on:click="goToAccount()">Logga in</button>
        </div>
      </div>
    </header>

    <div id="nav">
      <router-link to="/" class="grid-item1">Hem</router-link>
      <router-link to="/quizsettings" class="grid-item">Starta Quiz</router-link>
      <router-link  to="/konto" class="grid-item3">Mitt konto</router-link>

<!--      <router-link v-if="loggedIn" to="/ProfileInfo" class="grid-item3">Mitt konto</router-link>-->
    </div>
    <router-view @logout-from-account="loggedInButtonFalse" :isLoggedIn="loggedIn"  @user-login-step3="login2"  @user-login-step2="login" :activeUser="activeUser"/>
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
      title: "Mattequizet",
      name: "",
      activeUser: {
        username: localStorage.getItem("username"),
        userId: localStorage.getItem("userId")
      },
      loggedIn:localStorage.getItem('loggedIn')
    };
  },
  methods: {
    loggedInButtonFalse() {
      this.loggedIn =localStorage.removeItem("loggedIn");
      this.activeUser={};
      localStorage.removeItem("username");
      localStorage.removeItem("userId");
    },

    login(user) {
      localStorage.setItem("loggedIn","true");
      this.loggedIn="true";
      this.activeUser.userId = user.userId
      this.activeUser.username = user.username
      localStorage.setItem("username", user.username);
      localStorage.setItem("userId", user.userId);
      console.log(this.activeUser)
    },
    goToAccount() {
      this.$router.push({name: 'Account'});
    },
    login2(user) {
      localStorage.setItem("loggedIn","false");
      this.loggedIn="false";
      this.activeUser.userId = user.userId
      this.activeUser.username = user.username

    }
  }
}
</script>

<style>
/*Mobile*/
#app body {
  background-color: lightblue;
  padding: 30px;
}

.header_container {
  border-color: black;
  border-style: solid;
  border-radius: 25px;
  width: 90%;
  height: 75px;
  margin: auto;
  background-color: #9f9ffa;
  text-align: center;
}
header {
  background-color: lightblue;
  padding-top: 20px;
}
.header_link{
  text-decoration: none;
  font-size: 100px;
}
.logInButton {
  margin-top: 10px;
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
  display: flex;
  font-size: 20px;
  flex-direction: column;
  grid-template-columns: auto auto auto;
  background-color: lightblue;
  padding: 10px;
  color: black;
  margin: auto;

}

.grid-item1 {
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  background-color: #9f9ffa;

  text-align: center;
  border-color: black;
  border-style: solid;
  color: #2c3e50;
  margin: auto;
  width: 75%;
  padding: 10px;
}
.grid-item {
  background-color: #9f9ffa;

  text-align: center;
  border-color: black;
  border-style: solid;
  color: #2c3e50;
  margin: auto;
  width: 75%;
  padding: 10px;
}

.grid-item3 {
  background-color: #9f9ffa;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;

  text-align: center;
  border-color: black;
  border-style: solid;
  color: #2c3e50;
  margin: auto;
  width: 75%;
  padding: 10px;

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
  border-color: black;
  border-style: solid;
  border-radius: 25px;
  margin: auto;
  width: 80%;
  padding: 10px;
}

footer ul {
  grid-area: footer;
  font-size: 20px;
  flex-direction: column;
  text-align: center;
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  font-family: "Comic Sans MS";
}

/*Tablet*/
@media screen and (min-width: 768px) and (max-width: 1024px) {

  #nav {
    display: grid;
  }
  .grid-item1 {
    border-top-right-radius: 0px;
    border-bottom-left-radius: 25px;
    margin: auto;
    width: 100%;
    padding: 20px;
    background-image: url("assets/120px-Noto_Emoji_Oreo_1f3e1.svg.png");
    background-size: auto;
    background-repeat: no-repeat;
  }
  .grid-item{
    text-align: center;
    border-color: black;
    border-style: solid;
    color: #2c3e50;
    margin: auto;
    width: 100%;
    padding: 20px;
    background-image: url("assets/1024px-Gnome-joystick.svg.png");
    background-size: auto;
    background-repeat: no-repeat;

  }
  .grid-item3 {
    border-bottom-left-radius: 0px;
    border-top-right-radius: 25px;
    margin: auto;
    width: 100%;
    padding: 20px;
    background-image: url("assets/TT_-_Booker_300.gif");
    background-size: auto;
    background-repeat: no-repeat;
  }
  .footer_list {
    width: auto;
    padding: 20px;

  }

}
/*Desktop*/
@media screen and (min-width: 1025px) {
  .header_container {
    width: 50%;
  }
  #nav {
    display: grid;
  }
  .grid-item1 {
    border-top-right-radius: 0px;
    border-bottom-left-radius: 25px;
    margin: auto;
    width: 100%;
    padding: 20px;
    background-image: url("assets/120px-Noto_Emoji_Oreo_1f3e1.svg.png");
    background-size: auto;
    background-repeat: no-repeat;
  }
  .grid-item{
    text-align: center;
    border-color: black;
    border-style: solid;
    color: #2c3e50;
    margin: auto;
    width: 100%;
    padding: 20px;
    background-image: url("assets/1024px-Gnome-joystick.svg.png");
    background-size: auto;
    background-repeat: no-repeat;
  }

  .grid-item3 {
    border-bottom-left-radius: 0px;
    border-top-right-radius: 25px;
    margin: auto;
    width: 100%;
    padding: 20px;
    background-image: url("assets/TT_-_Booker_300.gif");
    background-size: auto;
    background-repeat: no-repeat;
  }

  .logInButton {
    text-align: right;
    padding-right: 15%;
  }
  footer ul {
    flex-direction: row;
  }
  .footer_list {
    width: auto;
    padding: 20px;
  }
}

</style>