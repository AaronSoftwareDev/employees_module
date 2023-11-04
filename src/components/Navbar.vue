<template>
  <v-app>
    <v-navigation-drawer expand-on-hover>
      <v-list>
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
          title="Sandra Adams"
          subtitle="sandra_a88@gmailcom"
        ></v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item
          prepend-icon="mdi-folder"
          title="All Employees"
          to="/employees"
          value="myfiles"
        ></v-list-item>

        <v-list-item
          prepend-icon="mdi-account-multiple"
          to="/holiday"
          title="Holidays"
        ></v-list-item>

        <v-list-item
          prepend-icon="mdi-star"
          to="/adminattendance"
          title="Attendance(Admin)"
          value="starred"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-star"
          to="/attendanceEmployee"
          title="Attendance(employees)"
          value="starred"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-star"
          to="/employeeleave"
          title="Leave Days(employees)"
          value="starred"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-star"
          to="/adminleave"
          title="Leave Days (Admin)"
          value="adminleave"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-star"
          to="/departments"
          title="Departments"
          value="starred"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-star"
          to="/schedule"
          title="Schedule"
          value="starred"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      color="teal-darken-4"
      image="https://picsum.photos/1920/1080?random"
    >
      <template v-slot:image>
        <v-img
          gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>Title</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-layout>
        <router-view></router-view>
      </v-layout>
    </v-main>
  </v-app>
</template>
<style></style>
