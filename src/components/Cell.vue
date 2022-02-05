<template>
  <v-col class="field-cell" style="position: relative">
    <v-card
      class="d-flex align-center justify-center field-cell"
      :class="{ 'filled-cell': value, 'empty-cell': !value }"
      ma="0"
      outlined
      tile
    >
      <span v-if="value">{{ value }}</span>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    value: Number,
    move: String,
  },
};
</script>

<style>
.field-cell {
  width: 60px;
  height: 60px;
}
.filled-cell {
  border-color: #333 !important;
  background-color: rgb(192, 157, 93) !important;
  font-weight: 600;
  transition: all 500ms ease !important;
  position: absolute;
}
.empty-cell {
  border-color: #fff !important;
  position: absolute;
}
.toUp {
  bottom: 30px;
}
</style>
