<template>
  <section>
    <div class="login_container">
    <h2>Logga in</h2>
      <br>

    <form id="login-form" method="POST" @submit.prevent="getUser()">
      <label for="login-username">Ange ditt användarnamn:</label>
      <br>
      <input class="username_container"
        id="login-username"
        name="username"
        v-model="username"
        minlength="4"
        maxlength="20"
        required
      />
      <br>
      <label for="login-password">Ange ditt lösenord:</label>
      <br>
      <input class="password_container"
        type="password"
        id="login-password"
        name="password"
        v-model="password"
        minlength="6"
        maxlength="15"
        required
      />
      <br>
      <br>
      <input type="submit" value="Logga in" />
      <router-link tag="button" to="/components/SignupPage">Registrera</router-link>
    </form>
    </div>
  </section>
</template>

<script>


export default {
  name: "LoginPage",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  components: {

  },
  methods: {
    getUser() {
      fetch(`http://localhost:3000/users/username/${this.username}`)
      .then((res) => res.json())
      .then(data => {
        let user = data.users[0];
        if (user.username === this.username){
          if (user.password === this.password){
            this.$emit("user-login");
          }else {
            alert("Felaktigt lösenord!");
          }
        }
      }).catch(() => {
        alert("Felaktigt användarnamn!")
      })
    }
  }
};

</script>

<style scoped>
.login_container{
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2.0fr;
  grid-template-areas:
    "header header "
    "login_container login_container"
    "password_containe password_containerr"
    "footer footer";
  grid-gap: 20px;
  height: auto;
  width: 35%;
  text-align: center;
  font-family: "Comic Sans MS";
  border-color: black;
  border-style: solid;
  border-radius: 25px;
  margin: auto;
  alignment: center;
  background-color: #d6eef5;

}
</style>