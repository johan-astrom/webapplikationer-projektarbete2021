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
      <input v-if="isHidden" type="submit" v-show="passwordCheck===password" value="Skicka" >
      <p v-if="!isHidden">Användare {{username1}} registrerad!</p>
      <router-link to="/"> <button v-if="!isHidden" >Till startsida </button></router-link>
    </form>
      <br>
      <p>Har du redan ett konto? Tryck <router-link to="/konto"> här</router-link> för att logga in</p>
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
      isHidden: true,
      username: "",
      username1: "",
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
          this.isHidden=false
          this.username1=this.username;
          this.username="";
          this.password="";
          this.passwordCheck="";
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

.panel {
  font: 16px "Open Sans", Helvetica, Arial, sans-serif;
  border: 1px solid #22d;
  padding: 12px;
  width: 500px;
  text-align: center;
}

.button {
  font: 22px "Open Sans", Helvetica, Arial, sans-serif;
  padding: 5px 36px;
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
  width: 70%;
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
  height: 65vh;
}

/*Tablet*/
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .signup_container{
    width: 60%;
  }
}

/*Desktop*/
@media screen and (min-width: 1025px) {
  .signup_container{
    width: 40%;
  }
}

</style>
