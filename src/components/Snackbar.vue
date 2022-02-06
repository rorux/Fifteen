<template>
  <div class="text-center ma-2">
    <v-snackbar v-model="isOpen" color="green">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="green darken-4"
          text
          v-bind="attrs"
          @click="isOpen = false"
        >
          Закрыть
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: "Snackbar",
  props: {
    win: Boolean,
  },
  data: () => ({
    isOpen: false,
    text: `Поздравляем, Вы победили!`,
  }),
  watch: {
    win: function (win) {
      this.isOpen = win;
    },
  },
};
</script>
