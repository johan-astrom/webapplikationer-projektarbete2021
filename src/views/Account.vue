<template>
<section>
  <SignupPage/>
  <LoginPage/>
</section>
</template>

<script>
import SignupPage from "@/components/SignupPage";
import LoginPage from "@/components/LoginPage";
export default {
  name: "Account",
  components: { LoginPage, SignupPage }
};
</script>

<style scoped>

</style>