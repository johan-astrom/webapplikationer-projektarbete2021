<template>
  <section>
    <h2>Registrera användare</h2>
    <form id="signup-form" method="POST">
      <label for="username">Ange ett användarnamn:</label>
      <input id="username" name="username" />
      <label for="password">Ange ett lösenord:</label>
      <input id="password" name="password" />
      <input type="submit" value="Skicka" />
    </form>
  </section>
</template>

<script>
export default {
  name: "SignupPage"
};
</script>

<style scoped>

</style>