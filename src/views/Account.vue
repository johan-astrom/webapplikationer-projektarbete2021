<template>
  <body>
<section>
  <LoginPage @user-login="login" />
</section>
  </body>
</template>

<script>

import LoginPage from "@/components/LoginPage";
export default {
  name: "Account",
  components: { LoginPage  },
  methods: {
    login(){
      this.$emit("user-login-step2");
    }
  }
};
</script>

<style scoped>

</style>