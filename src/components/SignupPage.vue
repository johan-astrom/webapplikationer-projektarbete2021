<template>
  <section>
    <h2>Registrera användare</h2>
    <form id="signup-form" method="POST">
      <label for="username">Ange ett användarnamn:</label>
      <input id="username" name="username" v-model="username" required/>
      <p v-if="shortUsername">Användarnamnet måste vara minst 4 tecken!</p>
      <label for="password">Ange ett lösenord:</label>
      <input id="password" name="password" v-model="password" required/>
      <input type="submit" value="Skicka" />
    </form>
  </section>
</template>

<script>
export default {
  name: "SignupPage",
  data(){
    return{
      username: "",
      password: "",
      shortUsername: false
    }
  }
};
</script>

<style scoped>

</style>