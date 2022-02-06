<template>
  <v-col class="field-cell" style="position: relative">
    <v-card
      class="d-flex align-center justify-center field-cell"
      :class="{
        'filled-cell': value,
        'empty-cell': !value,
        'to-up': isMoved && move === 'up',
        'to-down': isMoved && move === 'down',
        'to-left': isMoved && move === 'left',
        'to-right': isMoved && move === 'right',
      }"
      ma="0"
      outlined
      tile
      @click="moveHandler"
    >
      <span v-if="value">{{ value }}</span>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "Cell",
  data() {
    return {
      isMoved: false,
    };
  },
  props: {
    value: Number,
    move: String,
    id: String,
  },
  methods: {
    moveHandler() {
      if (this.move) {
        this.isMoved = true;
        setTimeout(() => {
          this.isMoved = false;
        }, 500);
        console.log(this.id);
      }
    },
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
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  transition: all 500ms ease !important;
  position: absolute;
}
.empty-cell {
  border-color: #fff !important;
  position: absolute;
}
.to-up {
  bottom: 60px;
  top: -60px;
}
.to-down {
  top: 60px;
  z-index: 1;
}
.to-right {
  left: 60px;
  z-index: 1;
}
.to-left {
  right: 60px;
  left: -60px;
  z-index: 1;
}
</style>
