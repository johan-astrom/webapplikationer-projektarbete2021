<template>
<section>
  <SignupPage/>
  <LoginPage @user-login="login" />
</section>
</template>

<script>
import SignupPage from "@/components/SignupPage";
import LoginPage from "@/components/LoginPage";
export default {
  name: "Account",
  components: { LoginPage, SignupPage },
  methods: {
    login(){
      this.$emit("user-login-step2");
    }
  }
};
</script>

<style scoped>

</style>