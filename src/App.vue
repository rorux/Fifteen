<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Пятнашки</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <transition name="fade">
        <Field v-if="show" />
      </transition>
    </v-main>
  </v-app>
</template>

<script>
import Field from "@/components/Field";

export default {
  name: "App",

  components: {
    Field,
  },

  data: () => ({
    show: false,
  }),

  mounted() {
    this.show = true;
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
