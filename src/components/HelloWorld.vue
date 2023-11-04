<template>
  <div>
    <h2>hello</h2>
    <h2 v-if="userRole == 'User'">Hello regular users</h2>
    <h2 v-if="userRole == 'Admin'">Hello admin</h2>
  </div>
</template>

<script>


export default {
  data() {
    return {
      userRole: '',
    };
  },

  mounted() {
    this.userRole = this.$store.state.useraccount;
    console.log(this.userRole + " hello user type")
  },
  // computed: {
  //   userAccountType() {
  //     return this.$store.state.useraccount;
  //   },
  // },
};
</script>
