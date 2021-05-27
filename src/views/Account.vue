<template>
  <body>
  <section>

    <LoginPage v-if="!isLoggedIn" @user-login="login" />
      <ProfileInfo v-if="isLoggedIn"></ProfileInfo>
  </section>
  </body>
</template>

<script>

import LoginPage from "@/components/LoginPage";
import ProfileInfo from "@/components/ProfileInfo";

export default {
  name: "Account",
  props: {
    isLoggedIn:{type: String}
  },

  components: { LoginPage, ProfileInfo  },
  methods: {

    login(user){
this.$emit("user-login-step2",user);
    }

  }


};
</script>

<style scoped>

</style>