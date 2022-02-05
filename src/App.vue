<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Пятнашки</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <game-field />
    </v-main>
  </v-app>
</template>

<script>
import GameField from "./components/GameField";

export default {
  name: "App",

  components: {
    GameField,
  },

  data: () => ({
    //
  }),
};
</script>
