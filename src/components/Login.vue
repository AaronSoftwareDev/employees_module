<template>
  <div class="d-flex align-center flex-column">
    <v-card width="450" :variant="elevated">
      <v-card-title class="text-center">EMPLOYEE MANAGEMENT SYSTEM</v-card-title>
      <v-sheet width="400" class="mx-auto">
        <v-form ref="form">
          <v-text-field
            v-model="login.username"
            :counter="10"
            :rules="nameRules"
            label="Username"
            required
          ></v-text-field>

          <v-text-field
            v-model="login.password"
            :counter="10"
            :rules="nameRules"
            label="Password"
            required
          ></v-text-field>

          <v-row justify="center">
            <v-col cols="4">
              <v-btn color="success" class="mt-4 ma-2" block @click="validate">
                Validate
              </v-btn>
            </v-col>
            <v-col cols="4">
              <v-btn color="error" class="mt-4 ma-2" block @click="reset">
                Reset Form
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-sheet>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    login: {
      username: "",
      password: "",
    },
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
  }),

  methods: {
    async validate() {
      const { valid } = await this.$refs.form.validate();

      if (valid) {
        // Create a FormData object to send the data
        const formData = new FormData();
        formData.append("username", this.login.username);
        formData.append("password", this.login.password);

        fetch(
          "http://localhost/employee%20management/employee_management/src/services/login.php",
          {
            method: "POST",
            body: formData,
          }
        )
          .then((response) => response.json())
          .then((data) => {
            if (data.message === "authenticated") {
            this.$store.commit("setUserAccount", data.account_type);
              this.$router.push({
                path: "/home",
               
              });
            } else if (data.message === "User authentication failed") {
              alert("wrong credentials");
            }
            console.log(data.account_type);
            // Handle the response from the server as needed
          })
          .catch((error) => {
  console.error("Error sending data:", error);
});
      }
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>
