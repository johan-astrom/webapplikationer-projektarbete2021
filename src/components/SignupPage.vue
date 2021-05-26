<template>
<Body>
  <section>
    <div class="signup_container">
    <h2>Registrera användare</h2>
      <br>

    <form id="signup-form" method="POST" @submit.prevent="checkUsername()">
      <label for="username">Ange ett användarnamn:</label>
      <br>

      <input class="signup_username_container"
        id="username"
        name="username"
        v-model="username"
        minlength="4"
        maxlength="20"
        required
      />
      <br>
      <label for="password">Ange ett lösenord:</label>
      <br>

      <input class="signup_password_container"
        type="password"
        id="password"
        name="password"
        v-model="password"
        minlength="6"
        maxlength="15"
        required
      />
      <br>
      <label for="password-check">Bekräfta ditt lösenord:</label>
      <br>
      <input
        type="password"
        id="password-check"
        name="password-check"
        v-model="passwordCheck"
        minlength="6"
        maxlength="15"
        required
      />
      <p v-if="passwordCheck!==password && passwordCheck">Lösenorden stämmer inte överens!</p>
      <br>
      <br>
      <input type="submit" v-show="passwordCheck===password" value="Skicka" />
    </form>
      <br>
      <p>Har du redan ett konto? Tryck <router-link to="/components/LoginPage"> här</router-link> för att logga in</p>
    </div>
  </section>
</Body>
</template>

<script>
export default {
  name: "SignupPage",
  props:{
    isLoggedIn:{type:String}
  },
  data() {
    return {
      username: "",
      password: "",
      passwordCheck: "",
      postUrl: "http://localhost:3000/users/"
    };
  },
  methods: {
    checkUsername() {
      if (
        this.username.toLowerCase().includes("fuck") ||
        this.username.toLowerCase().includes("snopp") ||
        this.username.toLowerCase().includes("fan")
      ) {
        alert("Användarnamnet innehåller fula ord!");
      } else {
        this.postData(this.postUrl);
      }
    },
    postData: async function(url = "") {
      const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({
          username: this.username,
          password: this.password
        })
      }).then((response) => {
        if (response.status === 400) {
          console.log(response)
          console.log(response.status)
          alert("Användarnamnet är upptaget.");
        } else {
          return response.json();
        }
      });
    }
  }
};
</script>

<style scoped>
.redButton {
  background: red;
}

.signup_container{
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2.0fr;
  grid-template-areas:
    "header header "
    "signup_username_container signup_username_container"
    "signup_password_container signup_password_container"
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

body{
  width: auto;
  height: 600px;
}
</style>
